// app/why/components/WhyPageClient.tsx
'use client'

import { useLocale } from '@/components/locale-provider'
import { WhyContentEn } from './WhyContentEn'
import { WhyContentUk } from './WhyContentUk'

export function WhyPageClient() {
  const { locale } = useLocale()
  
  return locale === 'en' ? <WhyContentEn locale={locale} /> : <WhyContentUk locale={locale} />
}