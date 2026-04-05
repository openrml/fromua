import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import { locales, defaultLocale, type Locale } from '@/i18n/config'
import { LayoutContent } from './layout-content'



type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  
  if (!locales.includes(locale as any)) {
    notFound()
  }

  const title = locale === 'uk' 
    ? 'FromUA — Прототип системи AI-підтримки населення України'
    : 'FromUA — Prototype of an AI-support system for the population of Ukraine'
    
  const description = locale === 'uk'
    ? 'Україна вже має прототип AI-системи підтримки населення. Структуровані ролі, відкритий стандарт OpenRML — рішення, яке може бути використане та масштабоване на рівні держави'
    : 'Ukraine already has a prototype of an AI-based population support system. Structured roles, open standard OpenRML — a solution that can be used and scaled at the state level'

  return {
    title: {
      default: title,
      template: `%s | FromUA`,
    },
    description,
    keywords: [
      'AI roles',
      'ORML protocol',
      'AI assistant',
      'mental health AI',
      'crisis support',
      'Ukraine AI',
      'structured prompts',
      'open protocol',
      'LLM roles',
      'AI therapy',
      'AI ролі',
      'ролі для AI',
      'протокол RML',
    ],
    authors: [{ name: 'OpenRML', url: 'https://fromua.life' }],
    creator: 'OpenRML',
    publisher: 'FromUA',
    metadataBase: new URL('https://fromua.life'),
    alternates: {
      canonical: `https://fromua.life/${locale}`,
      languages: {
        'en': 'https://fromua.life/en',
        'uk': 'https://fromua.life/uk',
        'x-default': 'https://fromua.life/uk',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'uk' ? 'uk_UA' : 'en_US',
      alternateLocale: locale === 'uk' ? 'en_US' : 'uk_UA',
      siteName: 'FromUA',
      title,
      description,
      url: `https://fromua.life/${locale}`,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'FromUA — Prototype of an AI-support system for the population of Ukraine',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/twitter-card.png'],
      creator: '@fromua_life',
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-16x16.png', sizes: '16x16' },
        { url: '/favicon-32x32.png', sizes: '32x32' },
      ],
      apple: ['/apple-touch-icon.png'],
    },
    manifest: '/site.webmanifest',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9f9f9' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f0f' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  
  if (!locales.includes(locale as any)) {
    notFound()
  }

  return (
    <LayoutContent locale={locale as Locale}>
      {children}
    </LayoutContent>
  )
}
