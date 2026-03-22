// app/[locale]/story/components/StoryPageClient.tsx
'use client'

import { useLocale } from '@/components/locale-provider'
import { StoryContentEn } from './StoryContentEn'
import { StoryContentUk } from './StoryContentUk'

export function StoryPageClient() {
  const { locale } = useLocale()
  
  return locale === 'en' ? <StoryContentEn locale={locale} /> : <StoryContentUk locale={locale} />
}