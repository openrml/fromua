'use client'

import { useLanguage } from '@/components/language-context'
import Link from 'next/link'
import type { ResearchTopic } from '@/lib/research'
import type { Role } from '@/lib/types'

interface ResearchDetailClientProps {
  research: ResearchTopic
  htmlContentEn: string
  htmlContentUa: string
  relatedRole?: Role
}

export function ResearchDetailClient({
  research,
  htmlContentEn,
  htmlContentUa,
  relatedRole,
}: ResearchDetailClientProps) {
  const { locale, t } = useLanguage()

  const htmlContent = locale === 'uk' ? htmlContentUa : htmlContentEn
  const title = locale === 'uk' ? research.titleUa : research.titleEn

  return (
    <div className="min-h-screen">
      {/* Breadcrumbs */}
      <div className="border-b border-border bg-background/50">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              {t.nav?.roles === 'Roles' ? 'Home' : 'Головна'}
            </Link>
            <span>/</span>
            <Link href="/research" className="hover:text-foreground transition-colors">
              {t.nav?.research || 'Research'}
            </Link>
            <span>/</span>
            <span className="text-foreground">{research.category}</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        {/* Research content with FromUA Tailwind styles */}
        <div
          className="research-content prose prose-slate max-w-none
            [&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:font-bold [&_h1]:tracking-tight [&_h1]:text-foreground [&_h1]:border-b-2 [&_h1]:border-orange-500 [&_h1]:pb-4 [&_h1]:mb-6
            [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4
            [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-muted-foreground [&_p]:mb-4
            [&_a]:text-orange-600 [&_a]:no-underline [&_a]:hover:underline [&_a]:transition-colors
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-muted-foreground
            [&_li]:mb-2
            [&_strong]:text-foreground [&_strong]:font-semibold
            [&_em]:italic [&_em]:text-muted-foreground
            [&_hr]:border-border [&_hr]:my-8
            [&_blockquote]:border-l-4 [&_blockquote]:border-orange-500 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_blockquote]:my-6
            [&_.source]:text-sm [&_.source]:text-muted-foreground [&_.source]:mt-2
          "
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>

      {/* Related Role CTA */}
      {relatedRole && (
        <section className="border-t border-border bg-muted/30">
          <div className="mx-auto max-w-4xl px-6 py-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  {locale === 'uk' ? 'Пов\'язана AI роль' : 'Related AI Role'}
                </h3>
                <h4 className="text-xl font-semibold text-foreground">
                  {locale === 'uk' ? relatedRole.titleUa : relatedRole.title}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
                  {locale === 'uk' ? relatedRole.shortDescriptionUa : relatedRole.shortDescription}
                </p>
              </div>
              <Link
                href={`/roles/${research.roleSlug}`}
                className="border border-foreground px-6 py-3 text-sm font-mono uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background whitespace-nowrap text-center"
              >
                {locale === 'uk' ? 'Переглянути роль →' : 'View Role →'}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Back to Research */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-6">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>←</span>
            <span>{locale === 'uk' ? 'Назад до всіх досліджень' : 'Back to all research'}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
