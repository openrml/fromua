// app/why/components/WhyContentEn.tsx
import Link from 'next/link'
import { ReasonCard } from './ReasonCard'
import { VUCAComponent } from './VUCAComponent'
import { WhyNotCard } from './WhyNotCard'
import { REASONS_EN } from '../data/reasons'
import { SCIENTIFIC_BASIS_EN } from '../data/scientificBasis'
import { WHY_NOT_OTHERS_EN } from '../data/whyNotOthers'

export function WhyContentEn() {
  return (
    <section lang="en" className="space-y-12 border-b border-border pb-16">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Why It Works
        </h1>
        <div className="h-1 w-20 bg-[var(--color-highlight)]" />
        <p className="text-xl text-muted-foreground">
          FromUA.life is not &quot;another mental health app.&quot; It's a different philosophy.
        </p>
      </div>

      {/* Main Reasons */}
      <div className="space-y-8">
        {REASONS_EN.map((reason, idx) => (
          <ReasonCard key={idx} reason={reason} />
        ))}
      </div>

      {/* Scientific Basis */}
      <div className="space-y-8 bg-accent/30 p-8 rounded-lg border border-border">
        <h2 className="text-2xl font-bold text-foreground">{SCIENTIFIC_BASIS_EN.title}</h2>
        
        {/* VUCA Framework */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground">{SCIENTIFIC_BASIS_EN.vuca.title}</h3>
          <p className="text-muted-foreground">{SCIENTIFIC_BASIS_EN.vuca.subtitle}</p>
          
          <div className="grid gap-4">
            {SCIENTIFIC_BASIS_EN.vuca.components.map((comp, idx) => (
              <VUCAComponent key={idx} component={comp} />
            ))}
          </div>
        </div>

        {/* Neuropsychology */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-foreground">{SCIENTIFIC_BASIS_EN.neuropsychology.title}</h3>
          <p className="text-muted-foreground">{SCIENTIFIC_BASIS_EN.neuropsychology.content}</p>
        </div>
      </div>

      {/* Why Not Others */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Why It Works Where Others Fail</h2>
        
        <div className="grid gap-6">
          {WHY_NOT_OTHERS_EN.map((item, idx) => (
            <WhyNotCard key={idx} item={item} />
          ))}
        </div>
      </div>

      {/* Main Reason */}
      <div className="space-y-6 p-8 bg-gradient-to-r from-accent/20 to-accent/40 border-2 border-[var(--color-highlight)] rounded-lg">
        <h2 className="text-2xl font-bold text-foreground">The Main Reason It Works</h2>
        
        <p className="text-lg text-foreground font-medium">
          Because it was created by people who survived.
        </p>

        <p className="text-muted-foreground">
          Not consultants from London.<br />
          Not researchers from Stanford.<br />
          Not corporations with million-dollar budgets.
        </p>

        <p className="text-muted-foreground">
          But people who have:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Listened to sirens and counted the seconds until impact</li>
          <li>Buried children, friends, and parents</li>
          <li>Lost their homes and built new ones</li>
          <li>Lived for 10 years in a state the world is only beginning to understand</li>
        </ul>

        <p className="text-foreground font-medium text-lg pt-4">
          This isn't theory. This is distilled experience of survival.
        </p>

        <p className="text-foreground font-medium text-lg">
          And that's why it works.
        </p>
      </div>

      {/* Summary */}
      <div className="space-y-4 p-8 border-2 border-foreground bg-accent/20 rounded-lg">
        <h3 className="text-xl font-bold text-foreground">Summary: 5 Reasons Why It Works</h3>
        
        <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
          <li><strong className="text-foreground">Based on real experience</strong>, not theory</li>
          <li><strong className="text-foreground">Structure instead of empty words</strong>—concrete steps, not motivation</li>
          <li><strong className="text-foreground">Safety built into the protocol</strong>—ethical rules, redirections, prohibitions</li>
          <li><strong className="text-foreground">Openness and accessibility</strong>—.txt files, no registration, free</li>
          <li><strong className="text-foreground">Scalability</strong>—one role can help millions</li>
        </ol>

        <div className="flex flex-wrap gap-4 pt-6">
          <Link
            href="/roles"
            className="inline-flex items-center gap-2 border-2 border-foreground px-6 py-3 text-sm font-mono tracking-widest uppercase text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Try a Role →
          </Link>
          <Link
            href="/story"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 text-sm font-mono tracking-widest uppercase text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}