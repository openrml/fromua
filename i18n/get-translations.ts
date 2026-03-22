import type { Locale } from './config'

import enCommon from '@/locales/en/common.json'
import enHome   from '@/locales/en/home.json'
import enRoles  from '@/locales/en/roles.json'
import enPages  from '@/locales/en/pages.json'

import ukCommon from '@/locales/uk/common.json'
import ukHome   from '@/locales/uk/home.json'
import ukRoles  from '@/locales/uk/roles.json'
import ukPages  from '@/locales/uk/pages.json'

const TRANSLATIONS = {
  en: { ...enCommon, ...enHome, ...enRoles, ...enPages },
  uk: { ...ukCommon, ...ukHome, ...ukRoles, ...ukPages },
} as const

export type Translations = typeof TRANSLATIONS.en

export function getTranslations(locale: Locale): Translations {
  return TRANSLATIONS[locale] ?? TRANSLATIONS.uk
}
