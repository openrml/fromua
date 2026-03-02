'use client'

import Link from 'next/link'
import { CATEGORIES } from '@/lib/roles'
import { useLanguage } from '@/components/language-context'

export function CategoriesPreview() {
  const { t, locale } = useLanguage()
  const c = t.categories

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col gap-2">
          <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            {c.heading}
          </span>
          <h2 className="text-3xl font-sans font-black tracking-tight text-foreground md:text-4xl">
            {c.sub}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/roles?category=${cat.slug}`}
              className="group flex flex-col justify-between bg-background p-6 hover:bg-secondary transition-colors min-h-[180px]"
            >
              <div className="flex flex-col gap-3">
                <span
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {c.rolesCount(cat.count)}
                </span>
                <h3 className="font-sans text-base font-bold text-foreground leading-snug">
                  {locale === 'uk' ? cat.labelUa : cat.label}
                </h3>
                <p className="font-sans text-xs text-muted-foreground">
                  {locale === 'uk' ? cat.label : cat.labelUa}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-foreground transition-colors mt-4">
                <span className="font-mono">{c.viewLabel}</span>
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
