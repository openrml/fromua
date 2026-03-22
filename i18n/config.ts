// i18n/config.ts
export type Locale = 'en' | 'uk'

export const locales: Locale[] = ['en', 'uk']
export const defaultLocale: Locale = 'uk'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  uk: 'Українська',
}

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  uk: 'UA',
}
