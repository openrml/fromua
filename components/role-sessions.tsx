'use client'

import { useState } from 'react'
import { useLocale } from '@/components/locale-provider'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, ChevronDown, ChevronUp } from 'lucide-react'
import type { Session } from '@/lib/roles'

interface RoleSessionsProps {
  sessions: Session[]
}

export function RoleSessions({ sessions }: RoleSessionsProps) {
  const { locale } = useLocale()
  const [expandedSession, setExpandedSession] = useState<number | null>(null)

  if (!sessions || sessions.length === 0) return null

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold font-mono uppercase tracking-wider border-b border-border pb-2">
        {locale === 'uk' ? 'Сесії' : 'Journey Sessions'}
      </h2>
      
      <div className="space-y-4">
        {sessions.map((session, index) => {
          const isExpanded = expandedSession === index
          const title = locale === 'uk' && session.titleUa ? session.titleUa : session.title
          const tasks = locale === 'uk' && session.tasksUa ? session.tasksUa : session.tasks
          const outcomes = locale === 'uk' && session.outcomesUa ? session.outcomesUa : session.outcomes
          
          return (
            <Card 
              key={index}
              className="border border-border hover:border-foreground transition-colors cursor-pointer"
              onClick={() => setExpandedSession(isExpanded ? null : index)}
            >
              <CardHeader className="p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <Badge variant="outline" className="font-mono shrink-0">
                      {locale === 'uk' ? 'Сесія' : 'Session'} {index + 1}
                    </Badge>
                    <CardTitle className="text-lg">{title}</CardTitle>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    {session.duration && (
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{session.duration}</span>
                      </div>
                    )}
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </CardHeader>
              
              {isExpanded && (
                <CardContent className="p-5 pt-0 space-y-4">
                  {tasks && tasks.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
                        {locale === 'uk' ? 'Завдання' : 'Tasks'}
                      </h3>
                      <ul className="space-y-2">
                        {tasks.map((task, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-green-500">✓</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {outcomes && outcomes.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
                        {locale === 'uk' ? 'Очікувані результати' : 'Expected Outcomes'}
                      </h3>
                      <ul className="space-y-2">
                        {outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-blue-500">→</span>
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