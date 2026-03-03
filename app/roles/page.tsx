import type { Metadata } from 'next'
import { RolesCatalog } from '@/components/roles-catalog'
import { RolesPageHeader } from '@/components/roles-page-header'

export const metadata: Metadata = {
  title: 'Roles Catalog | Каталог ролей',
  description:
    'Browse all 29 structured AI roles built on the RML 0.9.1 open protocol. Filter by category, archetype, or license.',
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
    canonical: 'https://fromua.life/roles',
    languages: {
      'en': 'https://fromua.life/roles?lang=en',
      'uk': 'https://fromua.life/roles?lang=uk',
      'x-default': 'https://fromua.life/roles',
    },
  },
  openGraph: {
    title: 'AI Roles Catalog — FromUA',
    description: 'Browse 29 structured AI roles for crisis support, mental health, and daily life.',
    url: 'https://fromua.life/roles',
    images: ['/og-image.png'],
    type: 'website',
  },
}

// Додаємо статичну генерацію
export const dynamic = 'force-static'

export default async function RolesPage() {
  // Більше не використовуємо searchParams - все фільтрується на клієнті
  return (
    <>
      <RolesPageHeader />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <RolesCatalog />
      </div>
    </>
  )
}