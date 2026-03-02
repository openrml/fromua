'use client'

import { useLanguage } from '@/components/language-context'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, ChevronRight } from 'lucide-react'
import type { Role } from '@/lib/types'
import Link from 'next/link'

interface RoleCardProps {
  role: Role
  variant?: 'default' | 'compact'
}

export function RoleCard({ role, variant = 'default' }: RoleCardProps) {
  const { locale, t } = useLanguage()

  const title = locale === 'uk' ? role.titleUa : role.title
  const description = locale === 'uk' ? role.shortDescriptionUa : role.shortDescription

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault()
    window.location.href = `/api/roles/${role.slug}/download?lang=${locale}`
  }

  if (variant === 'compact') {
    return (
      <Link href={`/roles/${role.slug}`}>
        <Card className="border border-border hover:border-foreground transition-colors h-full">
          <CardHeader className="p-4">
            <div className="flex items-start justify-between">
              <h3 className="font-bold line-clamp-2">{title}</h3>
              <Badge variant="outline" className="ml-2 font-mono text-xs">
                v{role.version}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between items-center">
            <Badge variant="secondary" className="text-xs">
              {role.category}
            </Badge>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </CardFooter>
        </Card>
      </Link>
    )
  }

  return (
    <Card className="border border-border hover:border-foreground transition-colors">
      <CardHeader className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex gap-2">
            {role.responseLength && (
              <Badge variant="outline" className="font-mono text-xs">
                {role.responseLength}/7
              </Badge>
            )}
            <Badge variant="outline" className="font-mono text-xs">
              v{role.version}
            </Badge>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardHeader>
      
      <CardContent className="px-6 pb-4">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="text-xs">
            {role.category}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {role.archetype}
          </Badge>
          {role.tags.slice(0, 3).map(tag => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        {role.sessions && (
          <p className="text-xs text-muted-foreground">
            {role.sessions.length} sessions
            {role.journeyPacing?.maxSessionsPerWeek && 
              ` • max ${role.journeyPacing.maxSessionsPerWeek}/week`
            }
          </p>
        )}
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button asChild variant="outline" className="flex-1">
          <Link href={`/roles/${role.slug}`}>
            View Details
          </Link>
        </Button>
        <Button variant="outline" size="icon" onClick={handleDownload}>
          <Download className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}