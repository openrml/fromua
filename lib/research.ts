/**
 * Mapping between research HTML files and role slugs
 * Used to cross-link research pages with corresponding roles
 */

export interface ResearchTopic {
  slug: string
  titleEn: string
  titleUa: string
  fileEn: string
  fileUa: string
  roleSlug: string
  category: string
}

export const RESEARCH_TOPICS: ResearchTopic[] = [
  {
    slug: 'grief',
    titleEn: 'Grief Support: Evidence Base',
    titleUa: 'Супровід у горі: доказова база',
    fileEn: 'Grief-en.html',
    fileUa: 'Grief-ua.html',
    roleSlug: 'grief-companion-en',
    category: 'mental-health',
  },
  {
    slug: 'grounding',
    titleEn: 'Grounding Techniques: Evidence Base',
    titleUa: 'Техніки заземлення: доказова база',
    fileEn: 'Grounding-en.html',
    fileUa: 'Grounding-uk.html',
    roleSlug: 'grounding-instructor-en',
    category: 'mental-health',
  },
  {
    slug: 'guilt',
    titleEn: 'Guilt & Self-Compassion: Evidence Base',
    titleUa: 'Почуття провини та самоспівчуття: доказова база',
    fileEn: 'Guilt-en.html',
    fileUa: 'Guilt-ua.html',
    roleSlug: 'guilt-self-compassion-guide-en',
    category: 'mental-health',
  },
  {
    slug: 'hypervigilance',
    titleEn: 'Managing Hypervigilance: Evidence Base',
    titleUa: 'Управління гіперпильністю: доказова база',
    fileEn: 'Hypervigilance-en.html',
    fileUa: 'Hypervigilance-ua.html',
    roleSlug: 'hypervigilance-manager-en',
    category: 'mental-health',
  },
  {
    slug: 'triggers',
    titleEn: 'Triggers & Flashbacks: Evidence Base',
    titleUa: 'Тригери та флешбеки: доказова база',
    fileEn: 'Triggers-en.html',
    fileUa: 'Triggers-ua.html',
    roleSlug: 'triggers-flashbacks-navigator-en',
    category: 'mental-health',
  },
  {
    slug: 'moral-injury',
    titleEn: 'Moral Injury: Evidence Base',
    titleUa: 'Моральна травма: доказова база',
    fileEn: 'Moral-en.html',
    fileUa: 'Moral-ua.html',
    roleSlug: 'moral-injury-companion-en',
    category: 'mental-health',
  },
  {
    slug: 'finding-meaning',
    titleEn: 'Finding Meaning After Loss: Evidence Base',
    titleUa: 'Пошук сенсу після втрати: доказова база',
    fileEn: 'Finding-en.html',
    fileUa: 'Finding-ua.html',
    roleSlug: 'meaning-making-guide-after-loss-en',
    category: 'mental-health',
  },
  {
    slug: 'anticipatory-grief',
    titleEn: 'Living with Anticipatory Grief: Evidence Base',
    titleUa: 'Життя з очікуванням втрати: доказова база',
    fileEn: 'Living-en.html',
    fileUa: 'Living-ua.html',
    roleSlug: 'anticipatory-grief-support-en',
    category: 'mental-health',
  },
  {
    slug: 'career',
    titleEn: 'Career Pivot Strategy: Evidence Base',
    titleUa: 'Стратегія зміни кар\'єри: доказова база',
    fileEn: 'Career-en.html',
    fileUa: 'Career-ua.html',
    roleSlug: 'career-pivot-strategist-wartime-edition-en',
    category: 'career',
  },
  {
    slug: 'veteran-reintegration',
    titleEn: 'Veteran Reintegration: Evidence Base',
    titleUa: 'Реінтеграція ветеранів: доказова база',
    fileEn: 'Veteran-en.html',
    fileUa: 'Veteran-ua.html',
    roleSlug: 'veteran-reintegration-coach-en',
    category: 'career',
  },
  {
    slug: 'remote-work',
    titleEn: 'Remote Work Wellness: Evidence Base',
    titleUa: 'Здоров\'я при віддаленій роботі: доказова база',
    fileEn: 'Remote-en.html',
    fileUa: 'Remote-ua.html',
    roleSlug: 'remote-work-wellness-coach-en',
    category: 'career',
  },
  {
    slug: 'caregiver-burnout',
    titleEn: 'Overcoming Caregiver Burnout: Evidence Base',
    titleUa: 'Подолання вигорання доглядальника: доказова база',
    fileEn: 'Caregiver-en.html',
    fileUa: 'Caregiver-ua.html',
    roleSlug: 'caregiver-burnout-preventer-en',
    category: 'health',
  },
  {
    slug: 'chronic-pain',
    titleEn: 'Overcoming Chronic Pain: Evidence Base',
    titleUa: 'Подолання хронічного болю: доказова база',
    fileEn: 'Overcoming-en.html',
    fileUa: 'Overcoming-ua.html',
    roleSlug: 'chronic-pain-companion-en',
    category: 'health',
  },
  {
    slug: 'sleep',
    titleEn: 'Sleep Hygiene: Evidence Base',
    titleUa: 'Гігієна сну: доказова база',
    fileEn: 'Sleep-en.html',
    fileUa: 'Sleep-ua.html',
    roleSlug: 'sleep-hygiene-coach-en',
    category: 'health',
  },
  {
    slug: 'energy-recovery',
    titleEn: 'Restoring Energy: Evidence Base',
    titleUa: 'Відновлення енергії: доказова база',
    fileEn: 'Restoring-en.html',
    fileUa: 'Restoring-ua.html',
    roleSlug: 'energy-recovery-strategist-en',
    category: 'health',
  },
  {
    slug: 'trauma-body',
    titleEn: 'Basic Body After Trauma: Evidence Base',
    titleUa: 'Базові знання про тіло після травми: доказова база',
    fileEn: 'Basic-en.html',
    fileUa: 'Basic-ua.html',
    roleSlug: 'body-after-trauma-guide-en',
    category: 'health',
  },
  {
    slug: 'family-stress',
    titleEn: 'Family Stress Management: Evidence Base',
    titleUa: 'Управління сімейним стресом: доказова база',
    fileEn: 'Family-en.html',
    fileUa: 'Family-ua.html',
    roleSlug: 'family-stress-mediator-en',
    category: 'relationships',
  },
  {
    slug: 'long-distance',
    titleEn: 'Sustaining Long-Distance Relationships: Evidence Base',
    titleUa: 'Підтримка відносин на відстані: доказова база',
    fileEn: 'Sustaining-en.html',
    fileUa: 'Sustaining-ua.html',
    roleSlug: 'long-distance-relationship-sustainer-en',
    category: 'relationships',
  },
  {
    slug: 'parenting',
    titleEn: 'Parenting in Wartime: Evidence Base',
    titleUa: 'Батьківство під час війни: доказова база',
    fileEn: 'Parenting-en.html',
    fileUa: 'Parenting-ua.html',
    roleSlug: 'wartime-parenting-guide-en',
    category: 'family',
  },
  {
    slug: 'financial-crisis',
    titleEn: 'Navigating Financial Crisis: Evidence Base',
    titleUa: 'Навігація фінансової кризи: доказова база',
    fileEn: 'Navigating-en.html',
    fileUa: 'Navigating-ua.html',
    roleSlug: 'financial-crisis-navigator-en',
    category: 'finance',
  },
  {
    slug: 'income-recovery',
    titleEn: 'Income Recovery Planning: Evidence Base',
    titleUa: 'Планування відновлення доходу: доказова база',
    fileEn: 'Income-en.html',
    fileUa: 'Income-ua.html',
    roleSlug: 'income-recovery-planner-en',
    category: 'finance',
  },
  {
    slug: 'micro-business',
    titleEn: 'Launching Micro-Business: Evidence Base',
    titleUa: 'Запуск мікробізнесу: доказова база',
    fileEn: 'Launching-en.html',
    fileUa: 'Launching-ua.html',
    roleSlug: 'micro-business-launch-guide-en',
    category: 'business',
  },
  {
    slug: 'adaptation',
    titleEn: 'Adaptation & Relocation: Evidence Base',
    titleUa: 'Адаптація та релокація: доказова база',
    fileEn: 'Adaptation-en.html',
    fileUa: 'Adaptation-ua.html',
    roleSlug: 'relocation-adaptation-buddy-en',
    category: 'lifestyle',
  },
  {
    slug: 'daily-life',
    titleEn: 'Overcoming Daily Challenges: Evidence Base',
    titleUa: 'Подолання повсякденних викликів: доказова база',
    fileEn: 'Overcoming-Daily-en.html',
    fileUa: 'Overcoming-Daily-ua.html',
    roleSlug: 'daily-life-reset-companion-en',
    category: 'lifestyle',
  },
  {
    slug: 'healthy-escapism',
    titleEn: 'Healthy Escapism: Evidence Base',
    titleUa: 'Здоровий ескапізм: доказова база',
    fileEn: 'Healthy-en.html',
    fileUa: 'Healthy-ua.html',
    roleSlug: 'healthy-escapism-curator-en',
    category: 'lifestyle',
  },
  {
    slug: 'routine',
    titleEn: 'Personal Routine & Structure: Evidence Base',
    titleUa: 'Персональний розпорядок та структура: доказова база',
    fileEn: 'Personal-en.html',
    fileUa: 'Personal-ua.html',
    roleSlug: 'routine-structure-coach-en',
    category: 'lifestyle',
  },
  {
    slug: 'community',
    titleEn: 'Behavioral Community Connection: Evidence Base',
    titleUa: 'Поведінкові зв\'язки зі спільнотою: доказова база',
    fileEn: 'Behavioral-en.html',
    fileUa: 'Behavioral-ua.html',
    roleSlug: 'community-connection-builder-en',
    category: 'social',
  },
  {
    slug: 'digital-safety',
    titleEn: 'Effective Digital Safety: Evidence Base',
    titleUa: 'Ефективна цифрова безпека: доказова база',
    fileEn: 'Effective-en.html',
    fileUa: 'Effective-ua.html',
    roleSlug: 'digital-safety-privacy-guide-en',
    category: 'technology',
  },
]

/**
 * Get research topic by slug
 */
export function getResearchBySlug(slug: string): ResearchTopic | undefined {
  return RESEARCH_TOPICS.find((topic) => topic.slug === slug)
}

/**
 * Get research topic by role slug
 */
export function getResearchByRoleSlug(roleSlug: string): ResearchTopic | undefined {
  return RESEARCH_TOPICS.find((topic) => topic.roleSlug === roleSlug)
}

/**
 * Get all research topics for a category
 */
export function getResearchByCategory(category: string): ResearchTopic[] {
  return RESEARCH_TOPICS.filter((topic) => topic.category === category)
}

/**
 * Get unique categories
 */
export function getResearchCategories(): string[] {
  return Array.from(new Set(RESEARCH_TOPICS.map((topic) => topic.category)))
}
