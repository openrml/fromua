// lib/rml/types.ts
// Типи для RML парсера

export interface Role {
  // Basic Info (STEP 1)
  slug: string
  title: string
  titleUa: string
  category: string
  categorySlug: string
  archetype: string
  version: string
  identity: string
  license: string
  language: string[]
  shortDescription: string
  shortDescriptionUa: string
  tags: string[]
  related: string[]
  author: string
  createdAt: string
  updatedAt: string
  
  // Додаткові поля з RML
  status?: 'draft' | 'published'
  roleType?: string
  mainGoal?: string
  responseLength?: number
  
  // STEP 3: Behavior & Tone
  greeting?: string
  greetingUa?: string
  tone?: string
  emotionalRange?: string
  personality?: {
    creativity: number
    formality: number
    empathy: number
    assertiveness: number
    patience: number
  }
  shouldDo?: string[]
  shouldDoUa?: string[]
  shouldNotDo?: string[]
  shouldNotDoUa?: string[]
  
  // STEP 4: Expertise & Rules
  expertiseAreas?: string[]
  expertiseAreasUa?: string[]
  tools?: string[]
  toolsUa?: string[]
  outputFormats?: string[]
  outputFormatsUa?: string[]
  additionalRules?: string
  additionalRulesUa?: string
  
  // STEP 5: Journey Sessions
  sessions?: Array<{
    id: string
    title: string
    titleUa?: string
    tasks: string[]
    tasksUa?: string[]
    estimatedDuration?: number
    outcomes?: string[]
    outcomesUa?: string[]
  }>
  journeyPacing?: {
    recommendedInterval?: string
    maxSessionsPerWeek?: number
  }
  
  // STEP 8: Ethics & Versions
  ethicalRules?: Array<{
    rule: string
    ruleUa?: string
    action: 'warn' | 'stop' | 'refer'
  }>
  referralProtocol?: {
    triggers: string[]
    triggersUa?: string[]
    message: string
    messageUa?: string
  }
  disclaimer?: string
  disclaimerUa?: string
  contacts?: string
  changelog?: string[]
  
  // RML Identity
  rmlIdentity?: {
    fullId?: string
    reference?: string
  }
  
  // Legacy поля для сумісності
  whatItDoes?: string
  whatItDoesUa?: string
  howItWorks?: string[]
  howItWorksUa?: string[]
}

// Тип для категорії
export interface Category {
  slug: string
  label: string
  labelUa: string
  count: number
  icon: string
}

// Тип для ліцензії
export interface License {
  type: string
  name: string
  url: string
  description: string
}

export interface ImportResult {
  role: ParsedRole
  warnings: string[]
  errors: string[]
  isValid: boolean
}

export interface RoleFileInfo {
  name: string
  path: string
  content: string
  language: 'en' | 'ua'
}

export type { ParsedRole, ImportResult, RoleFileInfo };