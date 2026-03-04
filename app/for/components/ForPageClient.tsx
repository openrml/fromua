// app/for/components/ForPageClient.tsx
'use client'

import { useLanguage } from '@/components/language-context'
import { ForContentEn } from './ForContentEn'
import { ForContentUk } from './ForContentUk'

export function ForPageClient() {
  const { locale } = useLanguage()
  
  return locale === 'en' ? <ForContentEn /> : <ForContentUk />
}