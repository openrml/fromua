'use client'

import { useLocale } from '@/components/locale-provider'
import { Card, CardContent } from '@/components/ui/card'
import type { Personality } from '@/lib/roles'

interface RolePersonalityProps {
  personality: Personality
  tone?: string
  emotionalRange?: string
  greeting?: string
  greetingUa?: string
}

export function RolePersonality({ 
  personality, 
  tone, 
  emotionalRange,
  greeting,
  greetingUa 
}: RolePersonalityProps) {
  const { locale, t } = useLocale()

  const traits = [
    { key: 'creativity', label: 'Creativity' },
    { key: 'formality', label: 'Formality' },
    { key: 'empathy', label: 'Empathy' },
    { key: 'assertiveness', label: 'Assertiveness' },
    { key: 'patience', label: 'Patience' },
  ] as const

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold font-mono uppercase tracking-wider border-b border-border pb-2">
        {t.role?.personality || 'Personality Profile'}
      </h2>

      {greeting && (
        <Card className="border-border bg-muted/50">
          <CardContent className="p-4">
            <p className="text-sm italic">
              "{locale === 'uk' && greetingUa ? greetingUa : greeting}"
            </p>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {traits.map(({ key, label }) => (
          <div key={key} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-mono">{label}</span>
              <span className="text-muted-foreground">{personality[key] ?? 0}/10</span>
            </div>
            <div className="h-2 border border-border bg-background">
              <div 
                className="h-full bg-foreground transition-all"
                style={{ width: `${((personality[key] ?? 0) / 10) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {(tone || emotionalRange) && (
        <div className="grid grid-cols-2 gap-4 mt-4">
          {tone && (
            <Card className="border-border">
              <CardContent className="p-4 text-center">
                <p className="text-xs text-muted-foreground font-mono mb-1">Tone</p>
                <p className="text-sm font-medium">{tone}</p>
              </CardContent>
            </Card>
          )}
          {emotionalRange && (
            <Card className="border-border">
              <CardContent className="p-4 text-center">
                <p className="text-xs text-muted-foreground font-mono mb-1">Emotional Range</p>
                <p className="text-sm font-medium">{emotionalRange}</p>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  )
}