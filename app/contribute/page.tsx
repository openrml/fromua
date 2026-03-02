'use client'

import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { useLanguage } from '@/components/language-context'

export default function ContributePage() {
  const { t } = useLanguage()
  const c = t.contribute

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Header */}
        <div className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                {c.community}
              </span>
              <h1 className="text-5xl font-sans font-black tracking-tight text-foreground md:text-6xl text-balance max-w-3xl">
                {c.heading}
              </h1>
              <p className="max-w-xl font-sans text-base text-muted-foreground leading-relaxed">
                {c.sub}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {/* Main */}
            <div className="lg:col-span-2 flex flex-col gap-16">

              {/* How to submit */}
              <section className="flex flex-col gap-8">
                <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground border-b border-border pb-3">
                  {c.howToSubmit}
                </h2>
                <div className="flex flex-col gap-px bg-border border border-border">
                  {c.steps.map((step) => (
                    <div key={step.number} className="bg-background p-6 flex gap-6">
                      <span
                        className="font-mono text-2xl font-black shrink-0"
                        style={{ color: 'var(--color-accent)' }}
                      >
                        {step.number}
                      </span>
                      <div className="flex flex-col gap-3">
                        <h3 className="font-sans text-base font-bold text-foreground">{step.title}</h3>
                        <p className="font-sans text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                        {step.action && (
                          step.action.href.startsWith('http') ? (
                            <a
                              href={step.action.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-mono text-xs text-foreground hover:underline w-fit"
                            >
                              {step.action.label}
                            </a>
                          ) : (
                            <Link href={step.action.href} className="font-mono text-xs text-foreground hover:underline w-fit">
                              {step.action.label}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Community vision */}
              <section className="flex flex-col gap-6">
                <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground border-b border-border pb-3">
                  {c.communityVision}
                </h2>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">{c.cvp1}</p>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">{c.cvp2}</p>
                <div
                  className="border-l-4 pl-6 font-sans text-lg font-bold text-foreground"
                  style={{ borderColor: 'var(--color-highlight)' }}
                >
                  {c.cvQuote}
                </div>
              </section>

              {/* Submission requirements */}
              <section className="flex flex-col gap-6">
                <h2 className="font-mono text-xs tracking-widest uppercase text-muted-foreground border-b border-border pb-3">
                  {c.requirements}
                </h2>
                <div className="flex flex-col gap-3">
                  {c.reqItems.map((req) => (
                    <div key={req} className="flex items-start gap-3 border-b border-border pb-3 last:border-0 last:pb-0">
                      <span
                        className="font-mono text-xs mt-0.5 shrink-0"
                        style={{ color: 'var(--color-highlight)' }}
                      >
                        ✓
                      </span>
                      <span className="font-sans text-sm text-foreground leading-relaxed">{req}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              {/* GitHub link */}
              <div className="border border-border p-6 flex flex-col gap-5">
                <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">{c.githubLabel}</span>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{c.githubDesc}</p>
                <a
                  href="https://github.com/fronua"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border border-foreground px-4 py-3 font-mono text-xs tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  <span>github.com/fronua</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              {/* Roadmap */}
              <div className="border border-border p-6 flex flex-col gap-5">
                <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">{c.roadmap}</span>
                <div className="flex flex-col gap-4">
                  {c.roadmapItems.map((item) => (
                    <div key={item.item} className="flex gap-3">
                      <span
                        className="font-mono text-xs shrink-0 mt-0.5"
                        style={{
                          color:
                            item.status === 'active'
                              ? 'var(--color-highlight)'
                              : item.status === 'planned'
                              ? 'var(--color-accent)'
                              : 'var(--color-muted-foreground)',
                        }}
                      >
                        {item.status === 'active' ? '●' : item.status === 'planned' ? '○' : '·'}
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-mono text-xs text-muted-foreground">{item.phase}</span>
                        <span className="font-sans text-xs text-foreground leading-relaxed">{item.item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Builder link */}
              <div
                className="border p-6 flex flex-col gap-4"
                style={{ borderColor: 'var(--color-accent)' }}
              >
                <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--color-accent)' }}>
                  {c.buildRole}
                </span>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{c.buildDesc}</p>
                <a
                  href="https://rolesai.life"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-foreground hover:underline"
                >
                  rolesai.life →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
