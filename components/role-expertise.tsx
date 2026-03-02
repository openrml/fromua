'use client'

import { useLanguage } from '@/components/language-context'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Role } from '@/lib/types'

interface RoleExpertiseProps {
  expertiseAreas?: string[]
  expertiseAreasUa?: string[]
  tools?: string[]
  toolsUa?: string[]
  outputFormats?: string[]
  outputFormatsUa?: string[]
  additionalRules?: string
  additionalRulesUa?: string
}

export function RoleExpertise({
  expertiseAreas,
  expertiseAreasUa,
  tools,
  toolsUa,
  outputFormats,
  outputFormatsUa,
  additionalRules,
  additionalRulesUa
}: RoleExpertiseProps) {
  const { locale, t } = useLanguage()

  const areas = locale === 'uk' && expertiseAreasUa ? expertiseAreasUa : expertiseAreas
  const toolList = locale === 'uk' && toolsUa ? toolsUa : tools
  const formats = locale === 'uk' && outputFormatsUa ? outputFormatsUa : outputFormats
  const rules = locale === 'uk' && additionalRulesUa ? additionalRulesUa : additionalRules

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold font-mono uppercase tracking-wider border-b border-border pb-2">
        {t.role?.expertise || 'Expertise & Tools'}
      </h2>

      {areas && areas.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-mono uppercase tracking-wider">
            {t.role?.expertiseAreas || 'Expertise Areas'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {areas.map((area, i) => (
              <Badge key={i} variant="outline" className="text-sm">
                {area}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {toolList && toolList.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-mono uppercase tracking-wider">
            {t.role?.tools || 'Tools & Methods'}
          </h3>
          <ul className="space-y-2">
            {toolList.map((tool, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="text-accent">•</span>
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {formats && formats.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-mono uppercase tracking-wider">
            {t.role?.outputFormats || 'Output Formats'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {formats.map((format, i) => (
              <Badge key={i} variant="outline" className="text-sm">
                {format}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {rules && (
        <div className="space-y-3">
          <h3 className="text-lg font-mono uppercase tracking-wider">
            {t.role?.additionalRules || 'Additional Rules'}
          </h3>
          <Card className="border-border bg-muted/50">
            <CardContent className="p-4 text-sm">
              {rules}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}