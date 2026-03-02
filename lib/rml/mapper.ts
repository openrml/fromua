// lib/rml/mapper.ts
import { ParsedRole } from './types.js';
import { Role } from '../types.js';

// Генерація slug з назви ролі
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Маппінг категорії в slug
function mapCategoryToSlug(category: string): string {
  const categoryMap: Record<string, string> = {
    'health': 'health',
    'psychological': 'psychological',
    'productivity': 'productivity',
    'daily': 'daily',
    'finance': 'finance',
    'relationships': 'relationships',
    'development': 'development',
    'technology': 'technology',
    'entertainment': 'entertainment',
    'Здоров\'я': 'health',
    'Психологічна стабілізація': 'psychological',
    'Продуктивність': 'productivity',
    'Повсякденне життя': 'daily',
    'Фінанси': 'finance',
    'Відносини': 'relationships',
    'Розвиток': 'development',
    'Технології': 'technology',
    'Розваги': 'entertainment'
  };

  const normalized = category.toLowerCase().trim();
  return categoryMap[normalized] || 'other';
}

// Отримання іконки для категорії
function getCategoryIcon(categorySlug: string): string {
  const iconMap: Record<string, string> = {
    'psychological': 'Shield',
    'health': 'Heart',
    'productivity': 'Zap',
    'daily': 'Home',
    'finance': 'DollarSign',
    'relationships': 'Users',
    'development': 'TrendingUp',
    'technology': 'Cpu',
    'entertainment': 'Gamepad2'
  };
  return iconMap[categorySlug] || 'Circle';
}

// Витягування ліцензії
function extractLicense(role: ParsedRole): string {
  // За замовчуванням
  return 'CC-BY-4.0';
}

// Мерж двох мовних версій в одну роль
function mergeEnUaRoles(enRole: ParsedRole, uaRole: ParsedRole): Role {
  // Базові поля з англійської версії
  const slug = generateSlug(enRole.name);
  const categorySlug = mapCategoryToSlug(enRole.category);
  
  return {
    // Basic Info
    slug,
    title: enRole.name,
    titleUa: uaRole.name,
    category: enRole.category,
    categorySlug,
    archetype: enRole.archetype,
    version: enRole.version,
    identity: enRole.rmlIdentity?.fullId || '',
    license: extractLicense(enRole),
    language: ['uk', 'en'],
    shortDescription: enRole.description,
    shortDescriptionUa: uaRole.description,
    tags: enRole.tags,
    related: [],
    author: enRole.author,
    createdAt: enRole.createdAt.split('T')[0],
    updatedAt: enRole.updatedAt.split('T')[0],
    
    status: enRole.status,
    roleType: enRole.roleType,
    mainGoal: enRole.mainGoal,
    responseLength: enRole.responseLength,
    
    greeting: enRole.greeting,
    greetingUa: uaRole.greeting,
    tone: enRole.tone,
    emotionalRange: enRole.emotionalRange,
    personality: enRole.personality,
    shouldDo: enRole.shouldDo,
    shouldDoUa: uaRole.shouldDo,
    shouldNotDo: enRole.shouldNotDo,
    shouldNotDoUa: uaRole.shouldNotDo,
    
    expertiseAreas: enRole.expertiseAreas,
    expertiseAreasUa: uaRole.expertiseAreas,
    tools: enRole.tools,
    toolsUa: uaRole.tools,
    outputFormats: enRole.outputFormats,
    outputFormatsUa: uaRole.outputFormats,
    additionalRules: enRole.additionalRules,
    additionalRulesUa: uaRole.additionalRules,
    
    sessions: enRole.sessions.map((session, index) => ({
      id: session.id,
      title: session.title,
      titleUa: uaRole.sessions[index]?.title || session.title,
      tasks: session.tasks,
      tasksUa: uaRole.sessions[index]?.tasks || session.tasks,
      estimatedDuration: session.estimatedDuration,
      outcomes: session.outcomes,
      outcomesUa: uaRole.sessions[index]?.outcomes || session.outcomes
    })),
    journeyPacing: enRole.journeyPacing,
    
    ethicalRules: enRole.ethicalRules.map((rule, index) => ({
      rule: rule.rule,
      ruleUa: uaRole.ethicalRules[index]?.rule || rule.rule,
      action: rule.action
    })),
    referralProtocol: enRole.referralProtocol ? {
      triggers: enRole.referralProtocol.triggers,
      triggersUa: uaRole.referralProtocol?.triggers || enRole.referralProtocol.triggers,
      message: enRole.referralProtocol.message,
      messageUa: uaRole.referralProtocol?.message || enRole.referralProtocol.message
    } : undefined,
    disclaimer: enRole.disclaimer,
    disclaimerUa: uaRole.disclaimer,
    contacts: enRole.contacts,
    changelog: enRole.changelog,
    
    rmlIdentity: enRole.rmlIdentity,
    
    whatItDoes: enRole.description,
    whatItDoesUa: uaRole.description,
    howItWorks: enRole.sessions.map(s => s.title),
    howItWorksUa: uaRole.sessions.map(s => s.title)
  };
}

// Оновлення статистики категорій
function updateCategoriesStats(roles: Role[]): Array<{
  slug: string;
  label: string;
  labelUa: string;
  count: number;
  icon: string;
}> {
  const categories = [
    { slug: 'psychological', label: 'Psychological Stabilization', labelUa: 'Психологічна стабілізація', icon: 'Shield' },
    { slug: 'health', label: 'Health', labelUa: "Здоров'я", icon: 'Heart' },
    { slug: 'productivity', label: 'Productivity', labelUa: 'Продуктивність', icon: 'Zap' },
    { slug: 'daily', label: 'Daily Life', labelUa: 'Повсякденне життя', icon: 'Home' },
    { slug: 'finance', label: 'Finance', labelUa: 'Фінанси', icon: 'DollarSign' },
    { slug: 'relationships', label: 'Relationships', labelUa: 'Відносини', icon: 'Users' },
    { slug: 'development', label: 'Development', labelUa: 'Розвиток', icon: 'TrendingUp' },
    { slug: 'technology', label: 'Technology', labelUa: 'Технології', icon: 'Cpu' },
    { slug: 'entertainment', label: 'Entertainment', labelUa: 'Розваги', icon: 'Gamepad2' },
  ];

  return categories.map(cat => ({
    ...cat,
    count: roles.filter(r => r.categorySlug === cat.slug).length
  }));
}

// ЄДИНИЙ ЕКСПОРТ В КІНЦІ ФАЙЛУ
export {
  generateSlug,
  mapCategoryToSlug,
  getCategoryIcon,
  extractLicense,
  mergeEnUaRoles,
  updateCategoriesStats
};