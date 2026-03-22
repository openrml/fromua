// app/for/data/role-mapping.ts
// Маппінг старих англійських назв на нові українські slug'и

export const ROLE_MAPPING: Record<string, string> = {
  // Hypervigilance / Гіперпильність
  'hypervigilance-manager-en': 'vymknuty-rezhym-radar',
  
  // Grief / Горе
  'grief-companion-en': 'doroha-kriz-sl-ozy',
  
  // Energy Recovery / Відновлення енергії
  'energy-recovery-strategist-en': 'strateh-vidnovlennya-enerhiyi',
  
  // Wartime Parenting / Батьківство під час війни
  'wartime-parenting-guide-en': 'bat-ky-pid-chas-buri',
  
  // Guilt & Self-Compassion / Провина та самоспівчуття
  'guilt-self-compassion-guide-en': 'toy-khto-ne-sudyt',
  
  // Relocation & Adaptation / Переїзд та адаптація
  'relocation-adaptation-buddy-en': 'obzhyvannya-novoho-svitu',
  
  // Long-Distance Relationship / Стосунки на відстані
  'long-distance-relationship-sustainer-en': 'ty-tam-ya-tut-my-razom',
  
  // Career Pivot / Зміна кар'єри
  'career-pivot-strategist-wartime-edition-en': 'strateh-zminy-kar-yery-we',
  
  // Moral Injury / Моральна травма
  'moral-injury-companion-en': 'mizh-viynoyu-i-myrom',
  
  // Triggers & Flashbacks / Тригери та флешбеки
  'triggers-flashbacks-navigator-en': 'stop-knopka-dlya-spohadiv',
  
  // Veteran Reintegration / Реінтеграція ветеранів
  'veteran-reintegration-coach-en': 'suputnyk-perezavantazhennya-zhyttya',
  
  // Family Stress / Сімейний стрес
  'family-stress-mediator-en': 'koly-kokhannya-pid-tyskom',
  
  // Routine & Structure / Рутина та структура
  'routine-structure-coach-en': 'poryadok-u-khati-poryadok-u-holovi',
  
  // Remote Work / Віддалена робота
  'remote-work-wellness-coach-en': 'pratsyuyu-z-lizhka-ale-zhyvu',
  
  // AI Productivity / AI продуктивність
  'ai-productivity-coach-en': 'ai-kouch-zi-shi',
  
  // Income Recovery / Відновлення доходу
  'income-recovery-planner-en': 'hroshi-pislya-vs-oho',
  
  // Financial Crisis / Фінансова криза
  'financial-crisis-navigator-en': 'hroshi-instruktsiya-z-vyzhyvannya',
  
  // Meaning-Making / Пошук сенсу
  'meaning-making-guide-after-loss-en': 'navishcho-prokydatys-zavtra',
  
  // Daily Life Reset / Скидання повсякдення
  'daily-life-reset-companion-en': 'malen-ki-kroky-do-zhyttya',
  
  // Healthy Escapism / Здоровий ескапізм
  'healthy-escapism-curator-en': 'vidpochynok-yakyy-likuye',
  
  // Grounding / Заземлення
  'grounding-instructor-en': 'stop-kran-dlya-paniky',
}

export function mapOldSlugToNew(oldSlug: string): string {
  return ROLE_MAPPING[oldSlug] || oldSlug
}
