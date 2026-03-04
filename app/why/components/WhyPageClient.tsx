// app/why/components/WhyPageClient.tsx
'use client'

import { useLanguage } from '@/components/language-context'
import { WhyContentEn } from './WhyContentEn'
import { WhyContentUk } from './WhyContentUk'

export function WhyPageClient() {
  const { locale } = useLanguage()
  
  return locale === 'en' ? <WhyContentEn /> : <WhyContentUk />
}