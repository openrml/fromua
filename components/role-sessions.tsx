'use client'

import { useState } from 'react'
import { useLanguage } from '@/components/language-context'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock } from 'lucide-react'
import { Role } from '@/lib/types'

interface RoleSessionsProps {
  sessions: NonNullable<Role['sessions']>
}

export function RoleSessions({ sessions }: RoleSessionsProps) {
  const { locale, t } = useLanguage()
  const [expandedSession, setExpandedSession] = useState<string | null>(null)

  if (!sessions || sessions.length === 0) return null

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold font-mono uppercase tracking-wider border-b border-border pb-2">
        {t.role?.sessions || 'Journey Sessions'}
      </h2>
      
      <div className="space-y-4">
        {sessions.map((session, index) => {
          const isExpanded = expandedSession === session.id
          const title = locale === 'uk' && session.titleUa ? session.titleUa : session.title
          const tasks = locale === 'uk' && session.tasksUa ? session.tasksUa : session.tasks
          const outcomes = locale === 'uk' && session.outcomesUa ? session.outcomesUa : session.outcomes
          
          return (
            <Card 
              key={session.id}
              className="border border-border hover:border-foreground transition-colors cursor-pointer"
              onClick={() => setExpandedSession(isExpanded ? null : session.id)}
            >
              <CardHeader className="p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="font-mono">
                      Session {index + 1}
                    </Badge>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </div>
                  {session.estimatedDuration && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{session.estimatedDuration} min</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              
              {isExpanded && (
                <CardContent className="p-5 pt-0 space-y-4">
                  {tasks && tasks.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
                        Tasks
                      </h3>
                      <ul className="space-y-2">
                        {tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-highlight">✓</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {outcomes && outcomes.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
                        Expected Outcomes
                      </h3>
                      <ul className="space-y-2">
                        {outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-accent">•</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              )}
            </Card>
          )
        })}
      </div>
    </div>
  )
}