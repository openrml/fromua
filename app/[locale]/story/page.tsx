import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { StoryPageClient } from './components/StoryPageClient'
import { getTranslations } from '@/i18n/get-translations'
import type { Locale } from '@/i18n/config'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  
  const title = locale === 'uk' ? 'Історія' : 'Story'
  const description = locale === 'uk'
    ? 'Як FromUA народився з життєвого досвіду в Україні під час VUCA ×10'
    : 'How FromUA was born from lived experience in Ukraine during VUCA ×10'

  return {
    title,
    description,
    alternates: {
      canonical: `https://fromua.life/${locale}/story`,
      languages: {
        'en': 'https://fromua.life/en/story',
        'uk': 'https://fromua.life/uk/story',
        'x-default': 'https://fromua.life/uk/story',
      },
    },
    openGraph: {
      title: `${title} — FromUA`,
      description,
      url: `https://fromua.life/${locale}/story`,
      type: 'article',
      locale: locale === 'uk' ? 'uk_UA' : 'en_US',
    },
  }
}

export default async function StoryPage({ params }: Props) {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  
  const breadcrumbItems = [
    { label: locale === 'uk' ? 'Головна' : 'Home', href: `/${locale}` },
    { label: locale === 'uk' ? 'Історія' : 'Story', href: `/${locale}/story` },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-12 space-y-16">
        <Breadcrumbs items={breadcrumbItems} />
        <StoryPageClient />
      </div>
    </div>
  )
}
