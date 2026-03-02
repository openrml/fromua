'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-context'

export function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className="relative border-b border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
        {/* Protocol tag */}
        <div className="mb-8 flex items-center gap-3">
          <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            RML 0.9.1
          </span>
          <span className="h-px w-12 bg-border" />
          <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            Open Protocol
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-5xl text-balance">
          <span className="block text-4xl font-sans font-black leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
  {h.line1}
</span>
<span className="block text-4xl font-sans font-black leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
  {h.line2}
</span>
<span
  className="block text-4xl font-sans font-black leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
  style={{ color: 'var(--color-highlight)' }}
>
  {h.line3}
</span>
        </h1>

        {/* Sub */}
        <p className="mt-8 max-w-2xl text-lg font-sans text-muted-foreground leading-relaxed">
          {h.sub}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/roles"
            className="bg-foreground text-background px-8 py-4 text-sm font-mono tracking-widest uppercase hover:opacity-90 transition-opacity"
          >
            {h.exploreRoles}
          </Link>
          <Link
            href="/about"
            className="border border-foreground text-foreground px-8 py-4 text-sm font-mono tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            {h.readManifesto}
          </Link>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex flex-wrap gap-10 border-t border-border pt-10">
          {[
            { value: '29', label: h.stats.roles },
            { value: 'RML 0.9.1', label: h.stats.protocol },
            { value: 'CC-BY', label: h.stats.license },
            { value: '0', label: h.stats.registration },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-mono text-2xl font-bold text-foreground">{stat.value}</span>
              <span className="font-sans text-xs text-muted-foreground tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
