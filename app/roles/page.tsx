import type { Metadata } from 'next'
import { RolesCatalog } from '@/components/roles-catalog'
import { RolesPageHeader } from '@/components/roles-page-header'

export const metadata: Metadata = {
  title: 'Roles Catalog | Каталог ролей',
  description:
    'Browse all 29 structured AI roles built on the RML 0.9.1 open protocol. Filter by category, archetype, or license.',
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