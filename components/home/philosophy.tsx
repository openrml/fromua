'use client'

import { useLanguage } from '@/components/language-context'

export function Philosophy() {
  const { t } = useLanguage()
  const p = t.philosophy

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-sans font-black tracking-tight text-foreground md:text-5xl text-balance max-w-xl">
            {p.heading1}<br />{p.heading2}
          </h2>
          <p className="max-w-sm font-sans text-sm text-muted-foreground leading-relaxed">
            {p.sub}
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-3 border border-border">
          {p.pillars.map((pillar, i) => (
            <div
              key={pillar.label}
              className={`flex flex-col gap-4 p-8 ${i < p.pillars.length - 1 ? 'border-b md:border-b-0 md:border-r border-border' : ''}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className="font-mono text-xs"
                  style={{ color: 'var(--color-highlight)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="h-px w-8 bg-border" />
              </div>
              <h3 className="font-sans text-lg font-bold text-foreground">{pillar.label}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Checklist */}
        <div className="mt-12 flex flex-wrap gap-6">
          {p.checklist.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span
                className="font-mono text-sm font-bold"
                style={{ color: 'var(--color-highlight)' }}
              >
                ✓
              </span>
              <span className="font-sans text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
