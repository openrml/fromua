// scripts/import-openrml-roles.ts
// Імпорт OpenRML ролей v0.9.0 та v0.9.3

import * as fs from 'fs';
import * as path from 'path';

interface RoleData {
  slug: string;
  title: string;
  titleUa?: string;
  version: string;
  category: string;
  archetype: string;
  description: string;
  descriptionUa?: string;
  mainGoal?: string;
  mainGoalUa?: string;
  tags: string[];
  shouldDo?: string[];
  shouldDoUa?: string[];
  shouldNotDo?: string[];
  shouldNotDoUa?: string[];
  expertiseAreas?: string[];
  expertiseAreasUa?: string[];
  disclaimer?: string;
  disclaimerUa?: string;
  sessions?: Array<{
    title: string;
    titleUa?: string;
    duration?: string;
    tasks: string[];
    tasksUa?: string[];
    outcomes?: string[];
    outcomesUa?: string[];
  }>;
  v090Path: string;
  v093Path: string;
  researchEN?: string;
  researchUA?: string;
}

function extractField(content: string, fieldName: string): string {
  const regex = new RegExp(`${fieldName}:\\s*(.+)`, 'i');
  const match = content.match(regex);
  return match ? match[1].trim() : '';
}

function extractTags(content: string): string[] {
  const match = content.match(/Tags:\s*(.+)/i);
  if (!match) return [];
  return match[1].split(',').map(t => t.trim()).filter(Boolean);
}

function extractMultilineField(content: string, fieldName: string): string {
  const regex = new RegExp(`${fieldName}:\\s*(.+?)(?=\\n[A-Z][a-z]+:|\\n\\n|$)`, 'is');
  const match = content.match(regex);
  return match ? match[1].trim() : '';
}

function cleanDescription(desc: string): string {
  if (!desc) return '';
  
  return desc
    // Видаляємо "Main Goal: ..." до кінця (може бути багато тексту)
    .replace(/\s*Main Goal:[\s\S]*$/i, '')
    // Видаляємо "Response Length: X/Y" будь-де в тексті
    .replace(/\s*Response Length:\s*\d+\/\d+/gi, '')
    // Прибираємо зайві пробіли
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanMainGoal(mainGoal: string): string {
  if (!mainGoal) return '';
  
  return mainGoal
    // Видаляємо "Response Length: X/Y"
    .replace(/\s*Response Length:\s*\d+\/\d+/gi, '')
    // Прибираємо зайві пробіли
    .replace(/\s+/g, ' ')
    .trim();
}

function extractList(content: string, sectionName: string): string[] {
  const sectionRegex = new RegExp(`${sectionName}[:\\s]*([\\s\\S]*?)(?=\\n[A-Z][^:]+:|\\n\\n💬|\\n\\n🎯|\\n\\n🗺️|$)`, 'i');
  const match = content.match(sectionRegex);
  if (!match) return [];
  
  const items: string[] = [];
  const lines = match[1].split('\n');
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('✓') || trimmed.startsWith('✗') || trimmed.startsWith('-') || trimmed.startsWith('•')) {
      items.push(trimmed.replace(/^[✓✗\-•]\s*/, '').trim());
    }
  }
  
  return items.filter(Boolean);
}

function extractSessions(content: string): Array<{
  title: string;
  duration?: string;
  tasks: string[];
  outcomes?: string[];
}> {
  const sessionsSection = content.match(/🗺️ STEP 5:[\s\S]*?(?=👥 STEP 6:|🧠 STEP 7:|⏱️ JOURNEY|═════════════|$)/i);
  if (!sessionsSection) return [];
  
  const sessions: Array<any> = [];
  const sessionBlocks = sessionsSection[0].split(/\n(?=Session \d+:)/);
  
  for (const block of sessionBlocks) {
    if (!block.trim() || !block.includes('Session')) continue;
    
    const titleMatch = block.match(/Session \d+:\s*(.+?)(?:\n|$)/);
    if (!titleMatch) continue;
    
    const durationMatch = block.match(/Duration:\s*(\d+\s*min)/i);
    
    // Розділяємо блок на частини до та після "Expected Outcomes"
    const parts = block.split(/Expected Outcomes?:/i);
    const tasksSection = parts[0];
    const outcomesSection = parts[1] || '';
    
    // Парсинг завдань (лінії з ✓)
    const tasks: string[] = [];
    const taskLines = tasksSection.split('\n');
    for (const line of taskLines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('✓')) {
        tasks.push(trimmed.substring(1).trim());
      }
    }
    
    // Парсинг очікуваних результатів (лінії з •)
    const outcomes: string[] = [];
    const outcomeLines = outcomesSection.split('\n');
    for (const line of outcomeLines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('•')) {
        outcomes.push(trimmed.substring(1).trim());
      }
    }
    
    sessions.push({
      title: titleMatch[1].trim(),
      duration: durationMatch ? durationMatch[1] : undefined,
      tasks: tasks,
      outcomes: outcomes.length > 0 ? outcomes : undefined
    });
  }
  
  return sessions;
}

function parseRoleFile(filePath: string, version: '0.9.0' | '0.9.3'): Partial<RoleData> {
  const content = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.basename(filePath, '.orml.txt');
  
  return {
    slug: fileName.replace(/_role$/, '').replace(/_/g, '-'),
    title: extractField(content, 'Role Name'),
    version: version,
    category: extractField(content, 'Category').replace(/\s*\(.+\)/, '').toLowerCase(),
    archetype: extractField(content, 'Archetype').replace(/\s*\(.+\)/, '').toLowerCase(),
    description: cleanDescription(extractMultilineField(content, 'Description')),
    mainGoal: cleanMainGoal(extractMultilineField(content, 'Main Goal')),
    tags: extractTags(content),
    shouldDo: extractList(content, 'Should Do'),
    shouldNotDo: extractList(content, 'Should Not Do'),
    expertiseAreas: extractList(content, 'Expertise Areas'),
    disclaimer: extractMultilineField(content, 'Disclaimer'),
    sessions: extractSessions(content),
  };
}

function mapResearchToRole(roleTitle: string, researchFiles: string[], lang: 'en' | 'ua'): string | undefined {
  const basePath = lang === 'en' ? 'public/research/en' : 'public/research/ua';
  
  for (const file of researchFiles) {
    const content = fs.readFileSync(path.join(basePath, file), 'utf-8');
    const titleMatch = content.match(/<title>(.+?)<\/title>/);
    
    if (titleMatch) {
      const researchTitle = titleMatch[1];
      // Проста евристика: якщо назва ролі міститься в заголовку research
      if (researchTitle.toLowerCase().includes(roleTitle.toLowerCase()) ||
          roleTitle.toLowerCase().includes(researchTitle.toLowerCase().replace('research for openrml role:', '').trim())) {
        return file;
      }
    }
  }
  
  return undefined;
}

function generateRolesIndex() {
  const v090Dir = 'public/roles/v090';
  const v093Dir = 'public/roles/v093';
  const researchENDir = 'public/research/en';
  const researchUADir = 'public/research/ua';
  
  const v090Files = fs.readdirSync(v090Dir).filter(f => f.endsWith('.txt'));
  const v093Files = fs.readdirSync(v093Dir).filter(f => f.endsWith('.txt'));
  const researchENFiles = fs.readdirSync(researchENDir);
  const researchUAFiles = fs.readdirSync(researchUADir);
  
  const roles: RoleData[] = [];
  
  v090Files.forEach((file) => {
    const v090Path = path.join(v090Dir, file);
    const v093Path = path.join(v093Dir, file);
    
    if (!fs.existsSync(v093Path)) {
      console.warn(`Відсутня v093 для файлу: ${file}`);
      return;
    }
    
    const role090 = parseRoleFile(v090Path, '0.9.0');
    const role093 = parseRoleFile(v093Path, '0.9.3');
    
    const roleData: RoleData = {
      slug: role090.slug!,
      title: role090.title!,
      titleUa: role093.title,
      version: '0.9.0/0.9.3',
      category: role090.category!,
      archetype: role090.archetype!,
      description: role090.description!,
      descriptionUa: role093.description,
      mainGoal: role090.mainGoal,
      mainGoalUa: role093.mainGoal,
      tags: role090.tags!,
      shouldDo: role090.shouldDo,
      shouldDoUa: role093.shouldDo,
      shouldNotDo: role090.shouldNotDo,
      shouldNotDoUa: role093.shouldNotDo,
      expertiseAreas: role090.expertiseAreas,
      expertiseAreasUa: role093.expertiseAreas,
      disclaimer: role090.disclaimer,
      disclaimerUa: role093.disclaimer,
      sessions: role090.sessions,
      v090Path: `/roles/v090/${file}`,
      v093Path: `/roles/v093/${file}`,
    };
    
    // Додавання UA версії сесій
    if (role093.sessions && role093.sessions.length > 0) {
      roleData.sessions = roleData.sessions?.map((session, idx) => ({
        ...session,
        titleUa: role093.sessions?.[idx]?.title,
        tasksUa: role093.sessions?.[idx]?.tasks,
        outcomesUa: role093.sessions?.[idx]?.outcomes,
      }));
    }
    
    // Спроба знайти відповідний research
    const researchEN = mapResearchToRole(roleData.title, researchENFiles, 'en');
    const researchUA = mapResearchToRole(roleData.title, researchUAFiles, 'ua');
    
    if (researchEN) roleData.researchEN = `/research/en/${researchEN}`;
    if (researchUA) roleData.researchUA = `/research/ua/${researchUA}`;
    
    roles.push(roleData);
  });
  
  // Генерація JSON індексу
  const outputPath = 'public/roles-index.json';
  fs.writeFileSync(
    outputPath,
    JSON.stringify(roles, null, 2),
    'utf-8'
  );
  
  console.log(`✅ Згенеровано ${roles.length} ролей`);
  console.log(`✅ Індекс збережено: ${outputPath}`);
  
  // Генерація TypeScript файлу
  generateTypescriptRoles(roles);
}

function generateTypescriptRoles(roles: RoleData[]) {
  const tsContent = `// Auto-generated from OpenRML files
// Generated: ${new Date().toISOString()}
// Total roles: ${roles.length}

export interface Session {
  title: string;
  titleUa?: string;
  duration?: string;
  tasks: string[];
  tasksUa?: string[];
  outcomes?: string[];
  outcomesUa?: string[];
}

export interface Role {
  slug: string;
  title: string;
  titleUa?: string;
  version: string;
  category: string;
  archetype: string;
  description: string;
  descriptionUa?: string;
  mainGoal?: string;
  mainGoalUa?: string;
  tags: string[];
  shouldDo?: string[];
  shouldDoUa?: string[];
  shouldNotDo?: string[];
  shouldNotDoUa?: string[];
  expertiseAreas?: string[];
  expertiseAreasUa?: string[];
  disclaimer?: string;
  disclaimerUa?: string;
  sessions?: Session[];
  v090Path: string;
  v093Path: string;
  researchEN?: string;
  researchUA?: string;
}

export const ROLES: Role[] = ${JSON.stringify(roles, null, 2)};

export const CATEGORIES = Array.from(
  new Set(ROLES.map(r => r.category))
).sort();

export const ARCHETYPES = Array.from(
  new Set(ROLES.map(r => r.archetype))
).sort();

// Helper functions
export function getRoleBySlug(slug: string): Role | undefined {
  return ROLES.find(r => r.slug === slug);
}

export function getRolesByCategory(category: string): Role[] {
  return ROLES.filter(r => r.category === category);
}

export function getRolesByArchetype(archetype: string): Role[] {
  return ROLES.filter(r => r.archetype === archetype);
}

export function searchRoles(query: string): Role[] {
  const lowerQuery = query.toLowerCase();
  return ROLES.filter(r => 
    r.title.toLowerCase().includes(lowerQuery) ||
    (r.titleUa && r.titleUa.toLowerCase().includes(lowerQuery)) ||
    r.description.toLowerCase().includes(lowerQuery) ||
    (r.descriptionUa && r.descriptionUa.toLowerCase().includes(lowerQuery)) ||
    r.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}
`;
  
  fs.writeFileSync('lib/roles.ts', tsContent, 'utf-8');
  console.log('✅ Згенеровано lib/roles.ts');
}

// Виконання
try {
  generateRolesIndex();
  console.log('\n🎉 Імпорт завершено успішно!');
} catch (error) {
  console.error('❌ Помилка при імпорті:', error);
  process.exit(1);
}
