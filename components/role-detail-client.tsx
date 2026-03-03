'use client'

import { useLanguage } from '@/components/language-context'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CopyButton } from '@/components/copy-button'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { RoleSessions } from '@/components/role-sessions'
import { RoleEthics } from '@/components/role-ethics'
import { RolePersonality } from '@/components/role-personality'
import { RoleExpertise } from '@/components/role-expertise'
import { Download, Calendar, User, Tag, FileText } from 'lucide-react'
import type { Role } from '@/lib/types'
import Link from 'next/link'

interface RoleDetailClientProps {
  role: Role
}

export function RoleDetailClient({ role }: RoleDetailClientProps) {
  const { locale, t } = useLanguage()

  const handleDownload = async () => {
    window.location.href = `/api/roles/${role.slug}/download?lang=${locale}`
  }

  const title = locale === 'uk' ? role.titleUa : role.title
  const description = locale === 'uk' ? role.shortDescriptionUa : role.shortDescription
  const whatItDoes = locale === 'uk' && role.whatItDoesUa ? role.whatItDoesUa : role.whatItDoes

  // Breadcrumbs items
  const breadcrumbItems = [
    { label: t.nav?.roles || 'Roles', href: '/roles' },
    { label: title, href: `/roles/${role.slug}` },
  ]

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* Breadcrumbs */}
      <div className="pt-6">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Header */}
      <div className="mb-8 border-b border-border pb-8">
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline" className="font-mono">
            {role.category}
          </Badge>
          <Badge variant="outline" className="font-mono">
            v{role.version}
          </Badge>
          {role.status && (
            <Badge variant="outline" className="font-mono">
              {role.status}
            </Badge>
          )}
        </div>
        
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{description}</p>
        
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{role.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(role.createdAt).toLocaleDateString()}</span>
            </div>
            {role.responseLength && (
              <div className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                <span>Response: {role.responseLength}/7</span>
              </div>
            )}
          </div>
          
          <div className="flex gap-2">
            <CopyButton text={role.identity} />
            <Button onClick={handleDownload}>
              <Download className="h-4 w-4 mr-2" />
              {t.role?.download || 'Download'}
            </Button>
          </div>
        </div>

        {/* Tags */}
        {role.tags && role.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 min-w-0">
            <Tag className="h-4 w-4 text-muted-foreground shrink-0" />
            {role.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs max-w-full break-words">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* RML Identity */}
      {role.rmlIdentity && (
        <div className="mb-8 p-4 border border-border bg-muted/50 font-mono text-xs">
          <div className="text-muted-foreground mb-1">RML Identity</div>
          <div className="break-words overflow-wrap-anywhere">{role.rmlIdentity.fullId}</div>
          {role.rmlIdentity.reference && (
            <div className="text-muted-foreground mt-1 break-words overflow-wrap-anywhere">{role.rmlIdentity.reference}</div>
          )}
        </div>
      )}

      {/* What It Does */}
      {whatItDoes && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold font-mono uppercase tracking-wider border-b border-border pb-2 mb-4">
            {t.role?.whatItDoes || 'What It Does'}
          </h2>
          <p className="text-lg leading-relaxed">{whatItDoes}</p>
        </div>
      )}

      {/* Personality */}
      {role.personality && (
        <div className="mb-8">
          <RolePersonality
            personality={role.personality}
            tone={role.tone}
            emotionalRange={role.emotionalRange}
            greeting={role.greeting}
            greetingUa={role.greetingUa}
          />
        </div>
      )}

      {/* Should Do / Should Not Do */}
      {(role.shouldDo || role.shouldNotDo) && (
        <div className="mb-8 grid md:grid-cols-2 gap-6">
          {role.shouldDo && role.shouldDo.length > 0 && (
            <div>
              <h3 className="text-lg font-mono uppercase tracking-wider mb-3 text-green-600">
                ✓ Should Do
              </h3>
              <ul className="space-y-2">
                {(locale === 'uk' && role.shouldDoUa ? role.shouldDoUa : role.shouldDo).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-green-500">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {role.shouldNotDo && role.shouldNotDo.length > 0 && (
            <div>
              <h3 className="text-lg font-mono uppercase tracking-wider mb-3 text-red-600">
                ✗ Should Not Do
              </h3>
              <ul className="space-y-2">
                {(locale === 'uk' && role.shouldNotDoUa ? role.shouldNotDoUa : role.shouldNotDo).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-red-500">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Expertise */}
      {(role.expertiseAreas || role.tools || role.outputFormats) && (
        <div className="mb-8">
          <RoleExpertise
            expertiseAreas={role.expertiseAreas}
            expertiseAreasUa={role.expertiseAreasUa}
            tools={role.tools}
            toolsUa={role.toolsUa}
            outputFormats={role.outputFormats}
            outputFormatsUa={role.outputFormatsUa}
            additionalRules={role.additionalRules}
            additionalRulesUa={role.additionalRulesUa}
          />
        </div>
      )}

      {/* Sessions */}
      {role.sessions && role.sessions.length > 0 && (
        <div className="mb-8">
          <RoleSessions sessions={role.sessions} />
        </div>
      )}

      {/* Ethics */}
      {role.ethicalRules && role.ethicalRules.length > 0 && (
        <div className="mb-8">
          <RoleEthics
            ethicalRules={role.ethicalRules}
            referralProtocol={role.referralProtocol}
            disclaimer={role.disclaimer}
            disclaimerUa={role.disclaimerUa}
          />
        </div>
      )}

      {/* Related Roles */}
      {role.related && role.related.length > 0 && (
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-2xl font-bold font-mono uppercase tracking-wider mb-6">
            {t.role?.related || 'Related Roles'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {role.related.map(slug => (
              <Link
                key={slug}
                href={`/roles/${slug}`}
                className="block p-4 border border-border hover:border-foreground transition-colors text-center min-w-0"
              >
                <span className="text-sm font-mono break-words">{slug.replace(/-/g, ' ')}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}