'use client'

import { LocaleProvider } from '@/components/locale-provider'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import type { Locale } from '@/i18n/config'

interface LayoutContentProps {
  locale: Locale
  children: React.ReactNode
}

export function LayoutContent({ locale, children }: LayoutContentProps) {
  return (
    <LocaleProvider locale={locale}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </LocaleProvider>
  )
}
