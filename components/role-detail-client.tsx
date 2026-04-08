'use client'

import { useLocale } from '@/components/locale-provider'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { RoleSessions } from '@/components/role-sessions'
import { Download, Info, Copy, Check, Tag, BookOpen } from 'lucide-react'
import type { Role } from '@/lib/roles'
import { getDepartmentInfo, DEPARTMENT_COLORS } from '@/lib/department-mapping'
import Link from 'next/link'
import { useState } from 'react'

interface RoleDetailClientProps {
  role: Role
}

export function RoleDetailClient({ role }: RoleDetailClientProps) {
  const { locale, t } = useLocale()
  const [copiedVersion, setCopiedVersion] = useState<string | null>(null)
  const deptInfo = getDepartmentInfo(role.slug)
  const deptColor = deptInfo ? DEPARTMENT_COLORS[deptInfo.department as keyof typeof DEPARTMENT_COLORS] : null

  const handleDownload = (version: '0.9.0' | '0.9.3') => {
    const path = version === '0.9.0' ? role.v090Path : role.v093Path
    const link = document.createElement('a')
    link.href = path
    link.download = `${role.slug}_v${version}.orml.txt`
    link.click()
  }

  const handleCopy = async (version: '0.9.0' | '0.9.3') => {
    try {
      const path = version === '0.9.0' ? role.v090Path : role.v093Path
      const response = await fetch(path)
      const content = await response.text()
      await navigator.clipboard.writeText(content)
      setCopiedVersion(version)
      setTimeout(() => setCopiedVersion(null), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const description = locale === 'uk' && role.descriptionUa ? role.descriptionUa : role.description
  const mainGoal = locale === 'uk' && role.mainGoalUa ? role.mainGoalUa : role.mainGoal
  const shouldDo = locale === 'uk' && role.shouldDoUa ? role.shouldDoUa : role.shouldDo
  const shouldNotDo = locale === 'uk' && role.shouldNotDoUa ? role.shouldNotDoUa : role.shouldNotDo
  const expertiseAreas = locale === 'uk' && role.expertiseAreasUa ? role.expertiseAreasUa : role.expertiseAreas
  const disclaimer = locale === 'uk' && role.disclaimerUa ? role.disclaimerUa : role.disclaimer

  const breadcrumbItems = [
    { label: locale === 'uk' ? 'Головна' : 'Home', href: `/${locale}` },
    ...(deptInfo ? [{ 
      label: `${deptInfo.departmentEmoji} ${locale === 'uk' ? deptInfo.departmentNameUa : deptInfo.departmentName}`, 
      href: `/${locale}?department=${deptInfo.department}` 
    }] : []),
    { label: locale === 'uk' && role.titleUa ? role.titleUa : role.title, href: `/${locale}/roles/${role.slug}` },
  ]

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* Breadcrumbs */}
      <div className="pt-6">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Department Badge */}
      {deptInfo && deptColor && (
        <div className="mt-6 mb-8">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-mono font-semibold"
            style={{
              backgroundColor: deptColor.bg,
              border: `1px solid ${deptColor.border}`,
              color: deptColor.text
            }}
          >
            <span className="text-xl">{deptInfo.departmentEmoji}</span>
            <span>
              {locale === 'uk' ? 'Відділення' : 'Section'} {deptInfo.department}: {locale === 'uk' ? deptInfo.departmentNameUa : deptInfo.departmentName}
            </span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            💡 {locale === 'uk' ? deptInfo.stateDescriptionUa : deptInfo.stateDescription}
          </p>
        </div>
      )}

      {/* Header */}
      <div className="mb-8 border-b border-border pb-8">
        <div className="flex items-center gap-3 mb-4">
          <Badge variant="outline" className="font-mono">
            {role.category}
          </Badge>
          <Badge variant="outline" className="font-mono">
            {role.archetype}
          </Badge>
          <Badge variant="outline" className="font-mono">
            OpenRML {role.version}
          </Badge>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">{role.title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{description}</p>
        
        {/* Download Section */}
        <div className="bg-muted/30 border border-border p-6 rounded-lg mb-6">
          <div className="flex items-start gap-2 mb-4">
            <Info className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
            <div className="text-sm text-muted-foreground">
              {locale === 'uk' ? (
                <p>
                  <strong>Виберіть версію для завантаження:</strong><br />
                  Обидві версії відповідають українською мовою, але різняться способом "мислення" моделі під час формування відповіді.
                </p>
              ) : (
                <p>
                  <strong>Choose version to download:</strong><br />
                  Both versions respond in Ukrainian, but differ in how the model "thinks" when generating responses.
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* v0.9.0 Button */}
            <div className="border border-border rounded-lg p-4 hover:border-foreground/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-sm font-semibold">v0.9.0</span>
                <Badge variant="secondary" className="text-xs">
                  {locale === 'uk' ? 'Рекомендовано' : 'Recommended'}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                {locale === 'uk' 
                  ? 'Англійське мислення → Українська відповідь. Більша база знань моделі для точніших результатів.'
                  : 'English thinking → Ukrainian response. Larger model knowledge base for more accurate results.'
                }
              </p>
              <div className="flex gap-2">
                <Button 
                  onClick={() => handleDownload('0.9.0')}
                  className="flex-1"
                  variant="default"
                >
                  <Download className="h-4 w-4 mr-2" />
                  {locale === 'uk' ? 'Завантажити' : 'Download'}
                </Button>
                <Button
                  onClick={() => handleCopy('0.9.0')}
                  variant="outline"
                  size="icon"
                  disabled={copiedVersion === '0.9.0'}
                >
                  {copiedVersion === '0.9.0' ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* v0.9.3 Button */}
            <div className="border border-border rounded-lg p-4 hover:border-foreground/50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-sm font-semibold">v0.9.3</span>
                <Badge variant="outline" className="text-xs">
                  {locale === 'uk' ? 'Експериментальна' : 'Experimental'}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                {locale === 'uk' 
                  ? 'Українське мислення → Українська відповідь. Повністю україномовна обробка, але менша база знань.'
                  : 'Ukrainian thinking → Ukrainian response. Fully Ukrainian processing, but smaller knowledge base.'
                }
              </p>
              <div className="flex gap-2">
                <Button 
                  onClick={() => handleDownload('0.9.3')}
                  className="flex-1"
                  variant="outline"
                >
                  <Download className="h-4 w-4 mr-2" />
                  {locale === 'uk' ? 'Завантажити' : 'Download'}
                </Button>
                <Button
                  onClick={() => handleCopy('0.9.3')}
                  variant="outline"
                  size="icon"
                  disabled={copiedVersion === '0.9.3'}
                >
                  {copiedVersion === '0.9.3' ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
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

      {/* Main Goal */}
      {mainGoal && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {locale === 'uk' ? 'Головна мета' : 'Main Goal'}
          </h2>
          <p className="text-lg leading-relaxed">{mainGoal}</p>
        </div>
      )}

      {/* Should Do / Should Not Do */}
      {(shouldDo || shouldNotDo) && (
        <div className="mb-8 grid md:grid-cols-2 gap-6">
          {shouldDo && shouldDo.length > 0 && (
            <div>
              <h3 className="text-lg font-mono uppercase tracking-wider mb-3 text-green-600">
                ✓ {locale === 'uk' ? 'Що робить' : 'Should Do'}
              </h3>
              <ul className="space-y-2">
                {shouldDo.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-green-500">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {shouldNotDo && shouldNotDo.length > 0 && (
            <div>
              <h3 className="text-lg font-mono uppercase tracking-wider mb-3 text-red-600">
                ✗ {locale === 'uk' ? 'Чого не робить' : 'Should Not Do'}
              </h3>
              <ul className="space-y-2">
                {shouldNotDo.map((item, i) => (
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
      {expertiseAreas && expertiseAreas.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {locale === 'uk' ? 'Експертиза та інструменти' : 'Expertise & Tools'}
          </h2>
          <ul className="space-y-2">
            {expertiseAreas.map((area, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="text-muted-foreground">•</span>
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Sessions */}
      {role.sessions && role.sessions.length > 0 && (
        <div className="mb-8">
          <RoleSessions sessions={role.sessions} />
        </div>
      )}

      {/* Disclaimer */}
      {disclaimer && (
        <div className="mb-8 p-6 border border-border bg-muted/30 rounded-lg">
          <h3 className="text-sm font-mono uppercase tracking-wider mb-2 text-muted-foreground">
            {locale === 'uk' ? 'Застереження' : 'Disclaimer'}
          </h3>
          <p className="text-sm">{disclaimer}</p>
        </div>
      )}

      {/* Research Base */}
      {(role.researchEN || role.researchUA) && (
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">
                {locale === 'uk' ? 'Наукова база' : 'Scientific Evidence'}
              </h2>
              <h3 className="text-xl font-semibold text-foreground">
                {locale === 'uk' ? 'Дослідження для цієї ролі' : 'Research for this role'}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {locale === 'uk' 
                  ? 'Дослідження, моделі та наукові основи'
                  : 'Research, models, and scientific foundations'
                }
              </p>
            </div>
            <div className="flex gap-2">
              {role.researchUA && (
                <Link
                  href={role.researchUA}
                  target="_blank"
                  className="flex items-center gap-2 border border-foreground px-6 py-3 text-sm font-mono uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background whitespace-nowrap"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>UA</span>
                </Link>
              )}
              {role.researchEN && (
                <Link
                  href={role.researchEN}
                  target="_blank"
                  className="flex items-center gap-2 border border-foreground px-6 py-3 text-sm font-mono uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background whitespace-nowrap"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>EN</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  )
}
