'use client'

import { createContext, useContext, useMemo, type ReactNode } from 'react'
import type { Locale } from '@/i18n/config'

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

interface LocaleContextValue {
  locale: Locale
  t: Translations
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({
  children,
  locale,
}: {
  children: ReactNode
  locale: Locale
}) {
  const t = useMemo(() => TRANSLATIONS[locale] ?? TRANSLATIONS.uk, [locale])

  return (
    <LocaleContext.Provider value={{ locale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used inside <LocaleProvider>')
  return ctx
}
