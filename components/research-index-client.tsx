'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-context'
import type { ResearchTopic } from '@/lib/research'

interface ResearchIndexClientProps {
  researchByCategory: Array<{
    category: string
    topics: ResearchTopic[]
  }>
  totalTopics: number
  totalCategories: number
}

export function ResearchIndexClient({
  researchByCategory,
  totalTopics,
  totalCategories,
}: ResearchIndexClientProps) {
  const { locale, t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {locale === 'uk' ? 'Дослідження та доказова база' : 'Research & Evidence Base'}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {locale === 'uk'
                ? 'Кожна AI роль у нашій галереї побудована на міцних наукових основах. Досліджуйте дослідження, студії та докази, які сформували кожну роль.'
                : 'Every AI role in our gallery is built on solid scientific foundations. Explore the research, studies, and evidence that shaped each role.'}
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="font-mono">
                {totalTopics} {locale === 'uk' ? 'досліджень' : 'research topics'}
              </span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span className="font-mono">
                {totalCategories} {locale === 'uk' ? 'категорій' : 'categories'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Research Topics by Category */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="space-y-16">
          {researchByCategory.map(({ category, topics }) => (
            <div key={category}>
              <h2 className="mb-6 text-sm font-mono uppercase tracking-widest text-muted-foreground">
                {getCategoryLabel(category, locale)}
                <span className="ml-2 text-xs">({topics.length})</span>
              </h2>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {topics.map((topic) => (
                  <Link
                    key={topic.slug}
                    href={`/research/${topic.slug}`}
                    className="group block border border-border bg-background p-6 transition-all hover:border-foreground hover:shadow-md"
                  >
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground/80">
                      {locale === 'uk' ? topic.titleUa : topic.titleEn}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {locale === 'uk'
                        ? 'Наукові основи та доказова база'
                        : 'Scientific foundations and evidence base'}
                    </p>
                    <div className="mt-4 flex items-center text-xs font-mono text-muted-foreground">
                      <span>{locale === 'uk' ? 'Переглянути' : 'View Research'}</span>
                      <span className="ml-1 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {locale === 'uk' ? 'Переглянути AI ролі' : 'Explore AI Roles'}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {locale === 'uk'
                  ? 'Подивіться, як дослідження перетворюються на практичних AI-асистентів'
                  : 'See how research translates into practical AI assistants'}
              </p>
            </div>
            <Link
              href="/roles"
              className="border border-foreground px-6 py-3 text-sm font-mono uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              {locale === 'uk' ? 'Переглянути ролі →' : 'Browse Roles →'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

/**
 * Get localized category label
 */
function getCategoryLabel(category: string, locale: 'en' | 'uk'): string {
  const labels: Record<string, { en: string; uk: string }> = {
    'mental-health': { en: 'Mental Health', uk: 'Ментальне здоров\'я' },
    'career': { en: 'Career', uk: 'Кар\'єра' },
    'health': { en: 'Health', uk: 'Здоров\'я' },
    'relationships': { en: 'Relationships', uk: 'Стосунки' },
    'family': { en: 'Family', uk: 'Сім\'я' },
    'finance': { en: 'Finance', uk: 'Фінанси' },
    'business': { en: 'Business', uk: 'Бізнес' },
    'lifestyle': { en: 'Lifestyle', uk: 'Спосіб життя' },
    'social': { en: 'Social', uk: 'Соціальне' },
    'technology': { en: 'Technology', uk: 'Технології' },
  }

  return labels[category]?.[locale] || category.replace('-', ' ')
}
