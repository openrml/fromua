import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { ForPageClient } from './components/ForPageClient'
import { getTranslations } from '@/i18n/get-translations'
import type { Locale } from '@/i18n/config'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  
  const title = locale === 'uk' ? 'Для кого' : 'For Whom'
  const description = locale === 'uk'
    ? 'AI-ролі FromUA для різних життєвих ситуацій і професій'
    : 'FromUA AI roles for different life situations and professions'

  return {
    title,
    description,
    alternates: {
      canonical: `https://fromua.life/${locale}/for`,
      languages: {
        'en': 'https://fromua.life/en/for',
        'uk': 'https://fromua.life/uk/for',
        'x-default': 'https://fromua.life/uk/for',
      },
    },
    openGraph: {
      title: `${title} — FromUA`,
      description,
      url: `https://fromua.life/${locale}/for`,
      type: 'website',
      locale: locale === 'uk' ? 'uk_UA' : 'en_US',
    },
  }
}

export default async function ForPage({ params }: Props) {
  const { locale } = await params
  
  const breadcrumbItems = [
    { label: locale === 'uk' ? 'Головна' : 'Home', href: `/${locale}` },
    { label: locale === 'uk' ? 'Для кого' : 'For Whom', href: `/${locale}/for` },
  ]

  const webPageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': locale === 'uk' ? 'Для кого — AI-Аптечка FromUA' : 'Who It\'s For — FromUA AI First Aid Kit',
    'description': locale === 'uk'
      ? 'AI-ролі FromUA для різних категорій: українці в Україні, за кордоном, ветерани, психологи, IT-спеціалісти, родини та всі хто втомився'
      : 'FromUA AI roles for different categories: Ukrainians in Ukraine, abroad, veterans, psychologists, IT professionals, families, and everyone who is tired',
    'url': `https://fromua.life/${locale}/for`,
    'inLanguage': locale,
    'author': { '@type': 'Organization', 'name': 'FromUA', 'url': 'https://fromua.life' },
    'about': [
      { '@type': 'Thing', 'name': locale === 'uk' ? 'Психологічна підтримка під час війни' : 'Psychological support during war' },
      { '@type': 'Thing', 'name': locale === 'uk' ? 'AI-інструменти для кризових ситуацій' : 'AI tools for crisis situations' },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
      <div className="mx-auto max-w-7xl px-6 py-12 space-y-16">
        <Breadcrumbs items={breadcrumbItems} />
        <ForPageClient />
      </div>
    </div>
  )
}
