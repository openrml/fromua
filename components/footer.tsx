'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-context'

export function Footer() {
  const { t } = useLanguage()
  const f = t.footer

  return (
    <footer className="border-t border-border mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline gap-0.5">
              <span className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">From</span>
              <span className="font-mono text-sm font-bold tracking-widest uppercase" style={{ color: 'var(--color-highlight)' }}>UA</span>
            </div>
            <p className="text-xs font-sans text-muted-foreground leading-relaxed max-w-[200px]">
              {f.tagline}
            </p>
            <p className="font-mono text-xs text-muted-foreground">RML Protocol v0.9.1</p>
          </div>

          {/* Gallery */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs tracking-widest uppercase text-foreground">{f.gallery}</span>
            <nav className="flex flex-col gap-3" aria-label="Gallery links">
              <Link href="/roles" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{f.allRoles}</Link>
              <Link href="/roles?category=psychological" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{f.psychological}</Link>
              <Link href="/roles?category=economics" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{f.economics}</Link>
              <Link href="/roles?category=family" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{f.family}</Link>
              <Link href="/roles?category=specialized" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{f.specialized}</Link>
            </nav>
          </div>

          {/* Protocol */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs tracking-widest uppercase text-foreground">{f.protocol}</span>
            <nav className="flex flex-col gap-3" aria-label="Protocol links">
              <Link href="/standard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{f.rmlStandard}</Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{f.manifesto}</Link>
              <Link href="/contribute" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{f.contribute}</Link>
              <a href="https://rolesai.life" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {f.createOn} ↗
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
              <p className="font-mono text-xs text-muted-foreground">{f.roles21}</p>
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
