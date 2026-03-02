'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/components/language-context'

export function Nav() {
  const pathname = usePathname()
  const { locale, t, toggleLocale } = useLanguage()

  const NAV_LINKS = [
    { href: '/roles', label: t.nav.roles },
    { href: '/about', label: t.nav.about },
    { href: '/standard', label: t.nav.standard },
    { href: '/contribute', label: t.nav.contribute },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-0.5 group" aria-label="FromUA home">
          <span className="text-sm font-mono font-bold tracking-widest text-foreground uppercase">
            From
          </span>
          <span
            className="text-sm font-mono font-bold tracking-widest uppercase"
            style={{ color: 'var(--color-highlight)' }}
          >
            UA
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-sans tracking-wide transition-colors',
                pathname === link.href || pathname.startsWith(link.href + '/')
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: language switcher + CTA */}
        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <button
            onClick={toggleLocale}
            aria-label={locale === 'en' ? 'Switch to Ukrainian' : 'Switch to English'}
            className="flex items-center border border-border px-3 py-2 font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground hover:border-foreground transition-colors select-none"
          >
            <span
              className={cn(
                'transition-colors',
                locale === 'en' ? 'text-foreground font-bold' : 'text-muted-foreground'
              )}
            >
              EN
            </span>
            <span className="mx-1.5 text-border">/</span>
            <span
              className={cn(
                'transition-colors',
                locale === 'uk' ? 'text-foreground font-bold' : 'text-muted-foreground'
              )}
            >
              UA
            </span>
          </button>

          {/* CTA */}
          <a
            href="https://rolesai.life"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 border border-foreground px-4 py-2 text-xs font-mono tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            {t.nav.createRole}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  )
}
