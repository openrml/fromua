// app/for/components/ForContentEn.tsx
import Link from 'next/link'
import { AudienceCard } from './AudienceCard'
import { AUDIENCES_EN } from '../data/audiences'

export function ForContentEn({ locale }: { locale: string }) {
  return (
    <section lang="en" className="space-y-12 border-b border-border pb-16">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Who It's For
        </h1>
        <div className="h-1 w-20 bg-[var(--color-highlight)]" />
        <p className="text-xl text-muted-foreground max-w-3xl">
          FromUA.life is for everyone living with chronic stress, uncertainty, and crisis. 
          But different people need it for different reasons. Here's how our roles can help you specifically.
        </p>
      </div>

      <div className="grid gap-8">
        {AUDIENCES_EN.map((audience, idx) => (
          <AudienceCard key={idx} audience={audience} lang="en" locale={locale} />
        ))}
      </div>

      <div className="space-y-6 bg-accent/30 p-8 rounded-lg border border-border">
        <h2 className="text-2xl font-bold text-foreground">Don't Know Where to Start?</h2>
        
        <p className="text-muted-foreground">
          Start with three questions:
        </p>

        <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
          <li><strong className="text-foreground">What hurts right now?</strong> (anxiety, fatigue, loss, conflict, money)</li>
          <li><strong className="text-foreground">When did it start?</strong> (today, last week, a year ago, it's chronic)</li>
          <li><strong className="text-foreground">What have you already tried?</strong> (therapy, friends, alcohol, ignoring it)</li>
        </ol>

        <p className="text-muted-foreground">
          The answers will point you to a category. Then, simply choose a role whose name resonates with you.
        </p>

        <p className="text-muted-foreground">
          If you choose wrong—no problem. Download another one. They're free.
        </p>
      </div>

      <div className="space-y-4 p-8 border-2 border-[var(--color-highlight)] bg-accent/20 rounded-lg">
        <h3 className="text-xl font-bold text-foreground">Remember</h3>
        
        <p className="text-muted-foreground">
          FromUA.life is not a replacement for therapy, friends, family, or God.
        </p>

        <p className="text-foreground font-medium">
          It's a tool. Like a hammer. A hammer doesn't build a house by itself—but it makes building easier.
        </p>

        <p className="text-muted-foreground">
          Take it. Use it. Share it.
        </p>

        <p className="text-muted-foreground italic">
          Because surviving chaos alone is the hardest job in the world. And we've been doing it together for 10 years.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href={`/${locale}/roles`}
            className="inline-flex items-center gap-2 border-2 border-foreground px-6 py-3 text-sm font-mono tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Browse All Roles →
          </Link>
        </div>
      </div>
    </section>
  )
}