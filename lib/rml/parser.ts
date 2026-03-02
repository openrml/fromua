// lib/rml/parser.ts
// Адаптовано з конструктора RolesAi.Life для FronUA проекту

import { ParsedRole, ImportResult } from './types';

// Допоміжна функція для створення пустої ролі
function createEmptyParsedRole(): ParsedRole {
  return {
    name: '',
    version: '0.9.1',
    category: '',
    archetype: '',
    description: '',
    tags: [],
    shouldDo: [],
    shouldNotDo: [],
    expertiseAreas: [],
    tools: [],
    outputFormats: [],
    sessions: [],
    ethicalRules: [],
    author: '',
    changelog: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

// Генерація ID для сесій
function generateId(): string {
  return Date.now() + '-' + Math.random().toString(36).substring(2, 9);
}

// Валідація enum значень
function validateEnum<T extends string>(
  value: string, 
  validValues: readonly T[], 
  defaultValue: T,
  fieldName: string
): { value: T; warning?: string } {
  if (!value || value.trim() === '') {
    return { 
      value: defaultValue,
      warning: `Field "${fieldName}" is empty. Using default "${defaultValue}"`
    };
  }

  const normalized = value.toLowerCase().trim();
  
  // Прямий збіг
  if (validValues.includes(normalized as T)) {
    return { value: normalized as T };
  }

  // Частковий збіг
  for (const validValue of validValues) {
    if (normalized.includes(validValue) || validValue.includes(normalized)) {
      return { 
        value: validValue,
        warning: `Field "${fieldName}": "${value}" converted to "${validValue}"`
      };
    }
  }

  return { 
    value: defaultValue,
    warning: `Field "${fieldName}": Invalid value "${value}". Using default "${defaultValue}"`
  };
}

// Парсинг числових значень (наприклад "4/7" -> 4)
function parseNumberRange(value: string): number | undefined {
  if (!value) return undefined;
  
  const match = value.match(/(\d+)\/(\d+)/);
  if (match) {
    const num = parseInt(match[1], 10);
    return isNaN(num) ? undefined : Math.min(7, Math.max(1, num));
  }
  
  const num = parseInt(value, 10);
  return isNaN(num) ? undefined : Math.min(7, Math.max(1, num));
}

// Регулярні вирази для пошуку секцій
const stepPatterns = [
  /📋 STEP 1:[\s\S]*?(?=🎨 STEP 2:|═════════════|$)/i,
  /🎨 STEP 2:[\s\S]*?(?=💬 STEP 3:|═════════════|$)/i,
  /💬 STEP 3:[\s\S]*?(?=🎯 STEP 4:|═════════════|$)/i,
  /🎯 STEP 4:[\s\S]*?(?=⏱️ JOURNEY PACING|🗺️ STEP 5:|═════════════|$)/i,
  /🗺️ STEP 5:[\s\S]*?(?=👥 STEP 6:|🧠 STEP 7:|═════════════|$)/i,
  /👥 STEP 6:[\s\S]*?(?=🧠 STEP 7:|═════════════|$)/i,
  /🧠 STEP 7:[\s\S]*?(?=⚖️ STEP 8:|═════════════|$)/i,
  /⚖️ STEP 8:[\s\S]*?(?=📜 LICENSE DETAILS|═════════════|$)/i,
];

// Виділення конкретної секції
function extractSection(text: string, stepNumber: number): string {
  if (stepNumber < 1 || stepNumber > stepPatterns.length) return '';
  
  const match = text.match(stepPatterns[stepNumber - 1]);
  if (!match) return '';
  
  const content = match[0];
  const lines = content.split('\n');
  
  // Пропускаємо заголовок (перші 2 рядки)
  const relevantLines = lines.slice(2);
  
  const result: string[] = [];
  for (const line of relevantLines) {
    // Зупиняємось на початку наступної секції
    if (line.match(/[📋🎨💬🎯🗺️👥🧠⚖️📜⏱️] STEP \d:|LICENSE DETAILS|JOURNEY PACING/)) {
      break;
    }
    // Зупиняємось на розділювачі
    if (line.includes('═════════════════════════════════════════════════')) {
      break;
    }
    result.push(line);
  }
  
  return result.join('\n').trim();
}

// Парсинг ключ-значення
function parseKeyValue(section: string, key: string): string {
  if (!section) return '';
  
  const lines = section.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith(`${key}:`)) {
      return trimmed.substring(key.length + 1).trim();
    }
    if (trimmed.toLowerCase().startsWith(`${key.toLowerCase()}:`)) {
      return trimmed.substring(trimmed.indexOf(':') + 1).trim();
    }
  }
  return '';
}

// Парсинг bullet list (• або -)
function parseBulletList(section: string, startKey?: string): string[] {
  const items: string[] = [];
  if (!section) return items;
  
  const lines = section.split('\n');
  let collecting = false;
  
  for (const line of lines) {
    const trimmed = line.trim();
    
    if (startKey && trimmed.startsWith(`${startKey}:`)) {
      collecting = true;
      continue;
    }
    
    if (!startKey || collecting) {
      if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
        items.push(trimmed.substring(1).trim());
      } else if (trimmed && !trimmed.includes(':') && !trimmed.startsWith('Session')) {
        if (items.length > 0) {
          items[items.length - 1] += ' ' + trimmed;
        }
      } else if (trimmed.includes(':') || trimmed.startsWith('Session')) {
        if (startKey) break;
      }
    }
  }
  
  return items;
}

// Парсинг чек-листів (✓ або ✗)
function parseCheckedList(section: string, symbol: '✓' | '✗'): string[] {
  const items: string[] = [];
  if (!section) return items;
  
  const lines = section.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith(symbol)) {
      items.push(trimmed.substring(1).trim());
    }
  }
  
  return items;
}

// Парсинг рис особистості
function parsePersonalityTraits(section: string): ParsedRole['personality'] {
  const defaultTraits = {
    creativity: 5,
    formality: 5,
    empathy: 5,
    assertiveness: 5,
    patience: 5,
  };

  if (!section) return defaultTraits;

  const lines = section.split('\n');
  for (const line of lines) {
    const match = line.match(/(\w+):\s*(\d+)\/(\d+)/i);
    if (match) {
      const [, trait, value] = match;
      const traitKey = trait.toLowerCase() as keyof typeof defaultTraits;
      if (traitKey in defaultTraits) {
        const numValue = parseInt(value, 10);
        if (!isNaN(numValue)) {
          defaultTraits[traitKey] = Math.min(10, Math.max(0, numValue));
        }
      }
    }
  }
  
  return defaultTraits;
}

// Парсинг сесій
function parseSessions(section: string): ParsedRole['sessions'] {
  const sessions: ParsedRole['sessions'] = [];
  if (!section) return sessions;
  
  const lines = section.split('\n');
  let currentSession: { title: string; tasks: string[] } | null = null;
  
  for (const line of lines) {
    const trimmed = line.trim();
    
    // Початок нової сесії
    const sessionMatch = trimmed.match(/Session\s+\d+:\s+(.+)/i);
    if (sessionMatch) {
      // Зберігаємо попередню сесію
      if (currentSession) {
        sessions.push({
          id: generateId(),
          title: currentSession.title,
          tasks: currentSession.tasks
        });
      }
      
      currentSession = {
        title: sessionMatch[1].trim(),
        tasks: []
      };
      continue;
    }
    
    // Додаємо задачу до поточної сесії
    if (currentSession && trimmed.startsWith('✓')) {
      currentSession.tasks.push(trimmed.substring(1).trim());
    }
    
    // Зупиняємось на границях
    if (trimmed.includes('JOURNEY PACING') || 
        trimmed.includes('STEP 6:') ||
        trimmed.includes('═══════════')) {
      break;
    }
  }
  
  // Зберігаємо останню сесію
  if (currentSession) {
    sessions.push({
      id: generateId(),
      title: currentSession.title,
      tasks: currentSession.tasks
    });
  }
  
  return sessions;
}

// Парсинг RML Identity з заголовку
function parseRMLIdentity(raw: string): { fullId?: string; reference?: string } {
  const lines = raw.split('\n');
  const identity: { fullId?: string; reference?: string } = {};
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('IDENTITY:')) {
      identity.fullId = trimmed.replace('IDENTITY:', '').trim();
    }
    if (trimmed.startsWith('REFERENCE:')) {
      identity.reference = trimmed.replace('REFERENCE:', '').trim();
    }
    // Зупиняємось після заголовку
    if (trimmed.startsWith('═══════════════════════════════════════════════════') && identity.fullId) {
      break;
    }
  }
  
  return identity;
}

// Парсинг Author з різних секцій
function parseAuthor(raw: string): string {
  // Спочатку шукаємо в STEP 8
  const step8 = extractSection(raw, 8);
  let author = parseKeyValue(step8, 'Author');
  if (author) return author;
  
  // Потім в заголовку
  const lines = raw.split('\n');
  for (const line of lines) {
    if (line.includes('AUTHOR:')) {
      return line.replace('AUTHOR:', '').trim();
    }
  }
  
  return 'anonymous';
}

// Основна функція парсингу
export function parseRMLRole(raw: string): ImportResult {
  const warnings: string[] = [];
  const errors: string[] = [];
  
  try {
    // Перевірка чи це RML файл
    if (!raw.includes('RML') && !raw.includes('STEP 1:')) {
      errors.push('File is not a valid RML format. Missing RML header or STEP markers.');
      return {
        role: createEmptyParsedRole(),
        warnings,
        errors,
        isValid: false
      };
    }

    const role = createEmptyParsedRole();
    const now = new Date().toISOString();

    // Парсинг RML Identity
    const identity = parseRMLIdentity(raw);
    if (identity.fullId || identity.reference) {
      role.rmlIdentity = {};
      if (identity.fullId) role.rmlIdentity.fullId = identity.fullId;
      if (identity.reference) role.rmlIdentity.reference = identity.reference;
    }

    // === STEP 1: Base Information ===
    const step1 = extractSection(raw, 1);
    
    role.name = parseKeyValue(step1, 'Role Name') || 'Unnamed Role';
    
    const statusResult = validateEnum<'draft' | 'published'>(
      parseKeyValue(step1, 'Status'),
      ['draft', 'published'] as const,
      'draft',
      'Status'
    );
    role.status = statusResult.value;
    if (statusResult.warning) warnings.push(statusResult.warning);
    
    role.version = parseKeyValue(step1, 'Version') || '0.9.1';
    role.category = parseKeyValue(step1, 'Category') || 'other';
    
    const archetypeResult = validateEnum(
      parseKeyValue(step1, 'Archetype'),
      ['mentor', 'creator', 'analyst', 'healer', 'scientist', 'leader', 'explorer', 'guardian'] as const,
      'mentor',
      'Archetype'
    );
    role.archetype = archetypeResult.value;
    if (archetypeResult.warning) warnings.push(archetypeResult.warning);
    
    role.roleType = parseKeyValue(step1, 'Role Type');
    role.description = parseKeyValue(step1, 'Description') || '';
    role.mainGoal = parseKeyValue(step1, 'Main Goal');
    
    const responseLength = parseKeyValue(step1, 'Response Length');
    if (responseLength) {
      role.responseLength = parseNumberRange(responseLength);
    }
    
    const tagsLine = parseKeyValue(step1, 'Tags');
    role.tags = tagsLine ? tagsLine.split(',').map(t => t.trim()).filter(t => t) : [];

    // === STEP 2: Visual Portrait ===
    // Пропускаємо - не використовуємо

    // === STEP 3: Behavior & Tone ===
    const step3 = extractSection(raw, 3);
    
    role.greeting = parseKeyValue(step3, 'Greeting');
    role.tone = parseKeyValue(step3, 'Base Tone') || parseKeyValue(step3, 'Tone');
    role.emotionalRange = parseKeyValue(step3, 'Emotional Range');
    role.personality = parsePersonalityTraits(step3);
    role.shouldDo = parseCheckedList(step3, '✓');
    role.shouldNotDo = parseCheckedList(step3, '✗');

    // === STEP 4: Expertise & Rules ===
    const step4 = extractSection(raw, 4);
    
    const explicitExpertise = parseBulletList(step4, 'Expertise Areas');
    role.expertiseAreas = explicitExpertise.length > 0 ? explicitExpertise : parseBulletList(step4).slice(0, 10);
    
    const explicitTools = parseBulletList(step4, 'Tools & Methods');
    role.tools = explicitTools.length > 0 ? explicitTools : [];
    
    const explicitOutput = parseBulletList(step4, 'Output Formats');
    role.outputFormats = explicitOutput.length > 0 ? explicitOutput : [];
    
    role.additionalRules = parseKeyValue(step4, 'Additional Rules');

    // === STEP 5: Journey Sessions ===
    const step5 = extractSection(raw, 5);
    role.sessions = parseSessions(step5);
    
    // Journey Pacing
    const journeyPacingMatch = raw.match(/⏱️ JOURNEY PACING[\s\S]*?(?=👥 STEP 6:|🧠 STEP 7:|═════════════|$)/i);
    if (journeyPacingMatch) {
      const pacingSection = journeyPacingMatch[0];
      const recommendedInterval = parseKeyValue(pacingSection, 'Recommended Interval');
      const maxSessionsMatch = pacingSection.match(/Max Sessions\/Week:\s*(\d+)/i);
      
      if (recommendedInterval || maxSessionsMatch) {
        role.journeyPacing = {
          recommendedInterval: recommendedInterval || undefined,
          maxSessionsPerWeek: maxSessionsMatch ? parseInt(maxSessionsMatch[1], 10) : undefined
        };
      }
    }

    // === STEP 6: Team Collaboration ===
    // Пропускаємо - не використовуємо

    // === STEP 7: Memory System ===
    // Пропускаємо - не використовуємо

    // === STEP 8: Ethics & Versions ===
    const step8Raw = extractSection(raw, 8);
    
    // Парсинг ethical rules
    const ethicalRules: Array<{ rule: string; action: 'warn' | 'stop' | 'refer' }> = [];
    const linesStep8 = step8Raw.split('\n');
    
    for (const line of linesStep8) {
      const trimmed = line.trim();
      if (trimmed.startsWith('✓ [')) {
        const match = trimmed.match(/✓\s*\[(\w+)\]\s*(.+)/);
        if (match) {
          const [, action, rule] = match;
          const normalizedAction = action.toLowerCase() as 'warn' | 'stop' | 'refer';
          if (['warn', 'stop', 'refer'].includes(normalizedAction)) {
            ethicalRules.push({ rule: rule.trim(), action: normalizedAction });
          }
        }
      }
    }
    role.ethicalRules = ethicalRules;
    
    // Referral Protocol
    let inReferralProtocol = false;
    let referralTriggers: string[] = [];
    let referralMessage = '';
    
    for (const line of linesStep8) {
      const trimmed = line.trim();
      
      if (trimmed.includes('REFERRAL PROTOCOL')) {
        inReferralProtocol = true;
        continue;
      }
      
      if (inReferralProtocol) {
        if (trimmed.startsWith('•')) {
          referralTriggers.push(trimmed.substring(1).trim());
        } else if (trimmed.startsWith('Message:')) {
          referralMessage = trimmed.substring('Message:'.length).trim();
          inReferralProtocol = false;
        }
      }
    }
    
    if (referralTriggers.length > 0 || referralMessage) {
      role.referralProtocol = {
        triggers: referralTriggers,
        message: referralMessage
      };
    }
    
    role.disclaimer = parseKeyValue(step8Raw, 'Disclaimer');
    role.author = parseAuthor(raw);
    role.contacts = parseKeyValue(step8Raw, 'Contacts');
    
    // Changelog
    role.changelog = linesStep8
      .filter(l => (l.trim().startsWith('v') || l.trim().startsWith('V')) && 
                   (l.includes('—') || l.includes('-') || l.includes(':')))
      .map(l => l.trim());

    role.createdAt = now;
    role.updatedAt = now;

    return {
      role,
      warnings,
      errors,
      isValid: errors.length === 0
    };

  } catch (error) {
    console.error('Error parsing RML file:', error);
    return {
      role: createEmptyParsedRole(),
      warnings: [],
      errors: [`Failed to parse RML file: ${error instanceof Error ? error.message : 'Unknown error'}`],
      isValid: false
    };
  }
}

// Додаємо експорти в кінці файлу
export type { ImportResult };