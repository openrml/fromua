'use client'

import Link from 'next/link'
import { useLocale } from '@/components/locale-provider'

export function Footer() {
  const { locale, t } = useLocale()
  const f = t.footer

  return (
    <footer className="border-t border-border mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href={`/${locale}`} aria-label="FromUA.Life — Для Життя! Попри Все">
              <img
                src="/logo.png"
                alt="FromUA.Life"
                style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>
            <p className="text-xs font-sans text-muted-foreground leading-relaxed max-w-[200px]">
              {f.tagline}
            </p>
            <p className="font-mono text-xs text-muted-foreground">ORML Protocol v1.1.0</p>
          </div>

          {/* Gallery */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs tracking-widest uppercase text-foreground">{f.gallery}</span>
            <nav className="flex flex-col gap-3" aria-label="Gallery links">
              <Link href={`/${locale}/roles`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{f.allRoles}</Link>
              <Link href={`/${locale}/roles?category=psychological`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{f.psychological}</Link>
              <Link href={`/${locale}/roles?category=economics`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{f.economics}</Link>
              <Link href={`/${locale}/roles?category=family`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{f.family}</Link>
              <Link href={`/${locale}/roles?category=specialized`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{f.specialized}</Link>
            </nav>
          </div>

          {/* Project */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs tracking-widest uppercase text-foreground">{f.project}</span>
            <nav className="flex flex-col gap-3" aria-label="Project links">
              <Link href={`/${locale}/story`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{f.story}</Link>
              <Link href={`/${locale}/why`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{f.why}</Link>
              <Link href={`/${locale}/standard`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{f.ormlStandard}</Link>
              <Link href={`/${locale}/openrml-philosophy`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{f.philosophy}</Link>
              <Link href={`/${locale}/contribute`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{f.contribute}</Link>
              <a href="https://rolesai.life" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {f.createRole} ↗
              </a>
            </nav>
          </div>

          {/* Context */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs tracking-widest uppercase text-foreground">{f.context}</span>
            <div className="flex flex-col gap-2">
              <p className="font-mono text-xs text-muted-foreground">{f.origin}</p>
              <p className="font-mono text-xs text-muted-foreground">{f.protocolOpen}</p>
              <p className="font-mono text-xs text-muted-foreground">{f.license}</p>
              <p className="font-mono text-xs text-muted-foreground">{f.roles33}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs text-muted-foreground">{f.copyright}</p>
          <p className="font-mono text-xs text-muted-foreground">{f.notProduct}</p>
        </div>
      </div>
    </footer>
  )
}
