import type { Metadata } from 'next'
import { RolesCatalog } from '@/components/roles-catalog'
import { RolesPageHeader } from '@/components/roles-page-header'
import { getTranslations } from '@/i18n/get-translations'
import type { Locale } from '@/i18n/config'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  
  const title = locale === 'uk' ? 'Каталог ролей' : 'Roles Catalog'
  const description = locale === 'uk'
    ? 'Переглянути всі 29 структурованих AI-ролей на основі відкритого протоколу RML 0.9.1. Фільтрувати за категорією, архетипом або ліцензією.'
    : 'Browse all 29 structured AI roles built on the RML 0.9.1 open protocol. Filter by category, archetype, or license.'
  
  return {
    title,
    description,
    keywords: [
      'AI roles catalog',
      'RML roles',
      'AI assistants',
      'mental health roles',
      'crisis support roles',
      'каталог AI ролей',
      'ролі для AI',
      'асистенти AI',
    ],
    alternates: {
      canonical: `https://fromua.life/${locale}/roles`,
      languages: {
        'en': 'https://fromua.life/en/roles',
        'uk': 'https://fromua.life/uk/roles',
        'x-default': 'https://fromua.life/uk/roles',
      },
    },
    openGraph: {
      title: `${title} — FromUA`,
      description,
      url: `https://fromua.life/${locale}/roles`,
      images: ['/og-image.png'],
      type: 'website',
      locale: locale === 'uk' ? 'uk_UA' : 'en_US',
    },
  }
}

export const dynamic = 'force-static'

export default async function RolesPage({ params }: Props) {
  return (
    <>
      <RolesPageHeader />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <RolesCatalog />
      </div>
    </>
  )
}
