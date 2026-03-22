'use client'

import Link from 'next/link'
import { useLocale } from '@/components/locale-provider'

export function CtaStrip() {
  const { t, locale } = useLocale()
  const c = t.cta

  return (
    <section className="border-b border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Steps */}
          <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-sm tracking-wide">
            <span className="text-background/60">{c.step1}</span>
            <span className="text-background/40" aria-hidden="true">→</span>
            <span className="text-background/60">{c.step2}</span>
            <span className="text-background/40" aria-hidden="true">→</span>
            <span className="font-bold text-background">{c.step3}</span>
          </div>

          {/* Main */}
          <h2 className="text-4xl font-sans font-black tracking-tight text-balance md:text-6xl">
            {c.heading1}
            <br />
            {c.heading2}
            <br />
            <span style={{ color: 'var(--color-highlight)' }}>{c.heading3}</span>
          </h2>

          <p className="max-w-md font-sans text-sm text-background/70 leading-relaxed">
            {c.sub}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/${locale}/roles`}
              className="border border-background px-8 py-4 text-sm font-mono tracking-widest uppercase text-background hover:bg-background hover:text-foreground transition-colors"
            >
              {c.browseRoles}
            </Link>
            <Link
              href={`/${locale}/standard`}
              className="px-8 py-4 text-sm font-mono tracking-widest uppercase text-background/60 hover:text-background transition-colors"
            >
              {c.readStandard}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
