// app/story/components/StoryPageClient.tsx
'use client'

import { useLanguage } from '@/components/language-context'
import { StoryContentEn } from './StoryContentEn'
import { StoryContentUk } from './StoryContentUk'

export function StoryPageClient() {
  const { locale } = useLanguage()
  
  return locale === 'en' ? <StoryContentEn /> : <StoryContentUk />
}