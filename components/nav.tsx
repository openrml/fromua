'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useLocale } from '@/components/locale-provider'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Nav() {
  const pathname = usePathname()
  const { locale, t } = useLocale()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Extract path without locale prefix
  const pathWithoutLocale = pathname.replace(/^\/(en|uk)/, '') || '/'
  
  // Toggle locale by switching URL
  const otherLocale = locale === 'en' ? 'uk' : 'en'
  const switchLocaleHref = `/${otherLocale}${pathWithoutLocale}`

  const NAV_LINKS = [
    { href: `/${locale}`,             label: t.nav.home       },
    { href: `/${locale}/what-is-ai`,  label: t.nav.whatIsAi  },
    { href: `/${locale}/for`,         label: t.nav.for        },
    { href: `/${locale}/how-to-use`,  label: t.nav.howToUse  },
    { href: `/${locale}/skeptic`,     label: t.nav.skeptic    },
    { href: `/${locale}/aladdin`,  label: t.nav.philosophy },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href={`/${locale}`} aria-label="FromUA.Life — Для Життя! Попри Все">
          <img
            src="/logo.png"
            alt="FromUA.Life"
            style={{ height: '25px', width: 'auto', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop Nav links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-sans tracking-wide transition-colors whitespace-nowrap',
                pathname === link.href || pathname.startsWith(link.href + '/')
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: mobile menu toggle, language switcher + CTA */}
        <div className="flex items-center gap-3">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-accent rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Language switcher */}
          <Link
            href={switchLocaleHref}
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
          </Link>

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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-6 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'text-base font-sans tracking-wide transition-colors py-2',
                  pathname === link.href || pathname.startsWith(link.href + '/')
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://rolesai.life"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-foreground px-4 py-3 text-sm font-mono tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-colors w-fit mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.createRole}
              <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
