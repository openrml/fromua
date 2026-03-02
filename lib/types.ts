export interface Role {
  slug: string
  title: string
  titleUa: string
  category: string
  categoryUa?: string
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
  whatItDoes: string
  whatItDoesUa: string
  whoItsFor: string[]
  whoItsForUa: string[]
  howItWorks: string[]
  howItWorksUa: string[]
}

export interface Category {
  slug: string
  label: string
  labelUa: string
  count: number
  icon: string
}

export type License = 'CC-BY-4.0' | 'CC-BY-SA-4.0' | 'CC-BY-NC-4.0' | 'CUSTOM'

export interface LicenseInfo {
  id: License
  label: string
  description: string
  permissions: string[]
}
