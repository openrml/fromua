'use client'

import { useLanguage } from '@/components/language-context'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'  // ← Додати цей імпорт
import { AlertCircle, AlertTriangle, Ban } from 'lucide-react'
import { Role } from '@/lib/types'

interface RoleEthicsProps {
  ethicalRules: NonNullable<Role['ethicalRules']>
  referralProtocol?: Role['referralProtocol']
  disclaimer?: string
  disclaimerUa?: string
}

export function RoleEthics({ 
  ethicalRules, 
  referralProtocol, 
  disclaimer,
  disclaimerUa 
}: RoleEthicsProps) {
  const { locale, t } = useLanguage()

  if (!ethicalRules || ethicalRules.length === 0) return null

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'stop':
        return <Ban className="h-4 w-4 text-red-500" />
      case 'refer':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />
      default:
        return <AlertTriangle className="h-4 w-4 text-blue-500" />
    }
  }

  const getActionColor = (action: string) => {
    switch (action) {
      case 'stop':
        return 'border-red-500/20 bg-red-500/5'
      case 'refer':
        return 'border-yellow-500/20 bg-yellow-500/5'
      default:
        return 'border-blue-500/20 bg-blue-500/5'
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold font-mono uppercase tracking-wider border-b border-border pb-2">
        {t.role?.ethics || 'Ethical Framework'}
      </h2>

      <div className="space-y-4">
        {ethicalRules.map((rule, index) => {
          const ruleText = locale === 'uk' && rule.ruleUa ? rule.ruleUa : rule.rule
          
          return (
            <Card 
              key={index}
              className={`border ${getActionColor(rule.action)}`}
            >
              <CardContent className="p-4 flex items-start gap-3">
                {getActionIcon(rule.action)}
                <span className="text-sm flex-1">{ruleText}</span>
                <Badge variant="outline" className="font-mono text-xs uppercase">
                  {rule.action}
                </Badge>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {referralProtocol && (
        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-mono uppercase tracking-wider">
            {t.role?.referralProtocol || 'Referral Protocol'}
          </h3>
          
          {referralProtocol.triggers && referralProtocol.triggers.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Triggers:</p>
              <ul className="space-y-2">
                {(locale === 'uk' && referralProtocol.triggersUa 
                  ? referralProtocol.triggersUa 
                  : referralProtocol.triggers
                ).map((trigger, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-highlight">•</span>
                    <span>{trigger}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {referralProtocol.message && (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Message:</p>
              <Card className="border border-border bg-muted/50">
                <CardContent className="p-4 text-sm italic">
                  {locale === 'uk' && referralProtocol.messageUa 
                    ? referralProtocol.messageUa 
                    : referralProtocol.message}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      )}

      {(disclaimer || disclaimerUa) && (
        <div className="mt-6">
          <h3 className="text-lg font-mono uppercase tracking-wider mb-2">
            {t.role?.disclaimer || 'Disclaimer'}
          </h3>
          <Card className="border-border bg-muted/50">
            <CardContent className="p-4 text-sm">
              {locale === 'uk' && disclaimerUa ? disclaimerUa : disclaimer}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}