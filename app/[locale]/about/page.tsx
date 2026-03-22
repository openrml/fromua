import type { Metadata } from 'next'
import { getTranslations } from '@/i18n/get-translations'
import type { Locale } from '@/i18n/config'

type Props = {
  params: Promise<{ locale: string }>
}

const TIMELINE = [
  { year: '2025', event: 'RML protocol designed and v0.9.1 released' },
  { year: '2026 Q1', event: 'Identity System — role DNA standard established' },
  { year: '2026 Q2', event: 'Public Gallery launch — fromua.life' },
  { year: 'Future', event: 'Collaborative submission platform — rolesai.life' },
]

const TIMELINE_UA = [
  { year: '2025', event: 'Протокол RML розроблено, випущено v0.9.1' },
  { year: '2026 Q1', event: 'Система ідентичності — стандарт DNA ролей встановлено' },
  { year: '2026 Q2', event: 'Запуск публічної галереї — fromua.life' },
  { year: 'Майбутнє', event: 'Платформа для колаборативних подачів — rolesai.life' },
]

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  
  const title = t.about?.heading || 'About'
  const description = locale === 'uk'
    ? 'FromUA — відкрита галерея AI-ролей з України. Ми перетворюємо досвід життя в невизначеності на структуровані інструменти підтримки.'
    : 'FromUA — open gallery of AI roles from Ukraine. We turn the experience of living in uncertainty into structured support tools.'

  return {
    title,
    description,
    alternates: {
      canonical: `https://fromua.life/${locale}/about`,
      languages: {
        'en': 'https://fromua.life/en/about',
        'uk': 'https://fromua.life/uk/about',
        'x-default': 'https://fromua.life/uk/about',
      },
    },
    openGraph: {
      title: `${title} — FromUA`,
      description,
      url: `https://fromua.life/${locale}/about`,
      type: 'website',
      locale: locale === 'uk' ? 'uk_UA' : 'en_US',
    },
  }
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  const t = getTranslations(locale as Locale)
  const a = t.about || {}
  const timeline = locale === 'uk' ? TIMELINE_UA : TIMELINE

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Header */}
        <div className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
              {a.breadcrumb}
            </span>
            <h1 className="mt-4 text-5xl font-sans font-black tracking-tight text-foreground md:text-7xl text-balance max-w-4xl">
              {a.heading}
            </h1>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {/* Manifesto */}
            <div className="lg:col-span-2 flex flex-col gap-12">
              {/* Positioning */}
              <section className="flex flex-col gap-6">
                <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground border-b border-border pb-3">
                  {a.civPos}
                </h2>
                <blockquote
                  className="border-l-4 pl-6 text-2xl font-sans font-bold text-foreground leading-snug"
                  style={{ borderColor: 'var(--color-highlight)' }}
                >
                  {a.quote}
                </blockquote>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">{a.p1}</p>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">{a.p2}</p>
              </section>

              {/* Why Ukraine */}
              <section className="flex flex-col gap-6">
                <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground border-b border-border pb-3">
                  {a.whyUkraine}
                </h2>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">{a.wp1}</p>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">{a.wp2}</p>
                <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-3 border border-border">
                  {[
                    { label: a.approach, value: a.approachVal },
                    { label: a.model, value: a.modelVal },
                    { label: a.distribution, value: a.distributionVal },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col gap-2 bg-background p-5">
                      <span className="font-mono text-xs text-muted-foreground">{item.label}</span>
                      <span className="font-sans text-sm font-bold text-foreground">{item.value}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* What this is not */}
              <section className="flex flex-col gap-6">
                <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground border-b border-border pb-3">
                  {a.whatIsNot}
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {a.notItems.map((item) => (
                    <div key={item.no} className="flex flex-col gap-3 border border-border p-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-destructive">✗</span>
                        <span className="font-sans text-sm text-muted-foreground line-through">{item.no}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs" style={{ color: 'var(--color-highlight)' }}>✓</span>
                        <span className="font-sans text-sm font-bold text-foreground">{item.yes}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Timeline sidebar */}
            <div className="flex flex-col gap-8">
              <div className="border border-border p-6 flex flex-col gap-6">
                <h3 className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                  {a.timeline}
                </h3>
                <div className="flex flex-col gap-0">
                  {timeline.map((item, i) => (
                    <div key={item.year} className={`flex gap-4 ${i < timeline.length - 1 ? 'pb-6' : ''}`}>
                      <div className="flex flex-col items-center">
                        <div
                          className="w-2 h-2 shrink-0 mt-1"
                          style={{
                            backgroundColor:
                              i === timeline.length - 1
                                ? 'var(--color-muted-foreground)'
                                : 'var(--color-accent)',
                          }}
                        />
                        {i < timeline.length - 1 && (
                          <div className="flex-1 w-px bg-border mt-2" />
                        )}
                      </div>
                      <div className="flex flex-col gap-1 pb-1">
                        <span className="font-mono text-xs font-bold text-foreground">{item.year}</span>
                        <span className="font-sans text-sm text-muted-foreground leading-relaxed">{item.event}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="border p-6 flex flex-col gap-4"
                style={{ borderColor: 'var(--color-highlight)' }}
              >
                <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--color-highlight)' }}>
                  {a.ecosystem}
                </span>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-xs font-bold text-foreground">{a.fromua}</span>
                    <span className="font-sans text-xs text-muted-foreground">{a.fromuaDesc}</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex flex-col gap-1">
                    <a
                      href="https://rolesai.life"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs font-bold text-foreground hover:underline"
                    >
                      {a.rolesai} ↗
                    </a>
                    <span className="font-sans text-xs text-muted-foreground">{a.rolesaiDesc}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
