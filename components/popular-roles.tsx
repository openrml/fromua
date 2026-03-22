'use client'

import Link from 'next/link'
import { useLocale } from '@/components/locale-provider'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

// Popular roles slugs - можна налаштувати за статистикою
const POPULAR_ROLES = [
  'grief-companion',
  'hypervigilance-manager',
  'career-pivot-strategist-wartime-edition',
  'financial-crisis-navigator',
  'digital-safety-privacy-guide',
  'ai-productivity-coach',
]

interface PopularRolesProps {
  roles: Array<{
    slug: string
    title: string
    titleUa: string
    shortDescription: string
    shortDescriptionUa: string
    category: string
  }>
}

export function PopularRoles({ roles }: PopularRolesProps) {
  const { locale, t } = useLocale()
  
  const popularRoles = roles.filter(role => POPULAR_ROLES.includes(role.slug))

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <h2 className="text-3xl font-black tracking-tight text-foreground mb-4">
            {locale === 'uk' ? 'Популярні ролі' : 'Popular Roles'}
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            {locale === 'uk' 
              ? 'Найбільш затребувані AI-ролі для повсякденного використання'
              : 'Most in-demand AI roles for everyday use'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularRoles.map((role) => {
            const title = locale === 'uk' ? role.titleUa : role.title
            const description = locale === 'uk' ? role.shortDescriptionUa : role.shortDescription
            
            return (
              <Link
                key={role.slug}
                href={`/${locale}/roles/${role.slug}`}
                className="group block p-6 border border-border hover:border-foreground transition-colors"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {title}
                    </h3>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground shrink-0 transition-all group-hover:translate-x-1" />
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {description}
                  </p>
                  
                  <Badge variant="outline" className="font-mono text-xs w-fit">
                    {role.category}
                  </Badge>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/roles`}
            className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-sm font-mono tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            {locale === 'uk' ? 'Всі 29 ролей' : 'All 29 Roles'}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
