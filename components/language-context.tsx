'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react'
import { TRANSLATIONS, type Locale, type Translations } from '@/lib/i18n'

const STORAGE_KEY = 'fronua-locale'

interface LanguageContextValue {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'uk'
  // Check saved preference first
  const saved = localStorage.getItem(STORAGE_KEY) as Locale | null
  if (saved === 'en' || saved === 'uk') return saved
  // Detect from browser
  const lang = navigator.language || ''
  if (lang.startsWith('uk') || lang.startsWith('ru')) return 'uk'
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('uk')

  useEffect(() => {
    const detected = detectLocale()
    setLocaleState(detected)
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next
  }, [])

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'en' ? 'uk' : 'en')
  }, [locale, setLocale])

  const t = TRANSLATIONS[locale]

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
