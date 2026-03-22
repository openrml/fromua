import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { WhyPageClient } from './components/WhyPageClient'
import { getTranslations } from '@/i18n/get-translations'
import type { Locale } from '@/i18n/config'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  
  const title = locale === 'uk' ? 'Чому це працює' : 'Why It Works'
  const description = locale === 'uk'
    ? 'Наукове обґрунтування та дослідження ефективності структурованих AI-ролей'
    : 'Scientific foundation and research on the effectiveness of structured AI roles'

  return {
    title,
    description,
    alternates: {
      canonical: `https://fromua.life/${locale}/why`,
      languages: {
        'en': 'https://fromua.life/en/why',
        'uk': 'https://fromua.life/uk/why',
        'x-default': 'https://fromua.life/uk/why',
      },
    },
    openGraph: {
      title: `${title} — FromUA`,
      description,
      url: `https://fromua.life/${locale}/why`,
      type: 'article',
      locale: locale === 'uk' ? 'uk_UA' : 'en_US',
    },
  }
}

export default async function WhyPage({ params }: Props) {
  const { locale } = await params
  
  const breadcrumbItems = [
    { label: locale === 'uk' ? 'Головна' : 'Home', href: `/${locale}` },
    { label: locale === 'uk' ? 'Чому це працює' : 'Why It Works', href: `/${locale}/why` },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 space-y-16">
        <Breadcrumbs items={breadcrumbItems} />
        <WhyPageClient />
      </div>
    </div>
  )
}
