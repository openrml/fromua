'use client'

import { useLocale } from '@/components/locale-provider'
import { ForContentEn } from './ForContentEn'
import { ForContentUk } from './ForContentUk'

export function ForPageClient() {
  const { locale } = useLocale()

  return locale === 'en'
    ? <ForContentEn locale={locale} />
    : <ForContentUk locale={locale} />
}
