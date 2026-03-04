// app/for/components/AudienceCard.tsx
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Audience } from '../data/audiences'

interface AudienceCardProps {
  audience: Audience
  lang: 'en' | 'uk'
}

export function AudienceCard({ audience, lang }: AudienceCardProps) {
  return (
    <div className="space-y-6 p-8 border border-border rounded-lg hover:border-[var(--color-highlight)] transition-colors">
      <div className="space-y-3">
        <div className="text-4xl">{audience.icon}</div>
        <h2 className="text-2xl font-bold text-foreground">{audience.title}</h2>
        <p className="text-lg text-foreground/80 italic">{audience.subtitle}</p>
        <p className="text-muted-foreground">{audience.description}</p>
      </div>

      {audience.roles && audience.roles.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
            {lang === 'en' ? 'Recommended Roles:' : 'Рекомендовані ролі:'}
          </p>
          <div className="flex flex-wrap gap-2">
            {audience.roles.map((role) => (
              <Link
                key={role.slug}
                href={`/roles/${role.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm border border-border hover:border-foreground bg-accent/30 hover:bg-accent transition-colors rounded"
              >
                {role.name}
                <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      )}

      {audience.quote && (
        <blockquote className="border-l-4 border-[var(--color-highlight)] pl-4 italic text-muted-foreground">
          {audience.quote}
        </blockquote>
      )}
    </div>
  )
}