// app/why/components/WhyNotCard.tsx
import type { WhyNotItem } from '../data/whyNotOthers'

interface WhyNotCardProps {
  item: WhyNotItem
}

export function WhyNotCard({ item }: WhyNotCardProps) {
  return (
    <div className="p-6 border-l-4 border-[var(--color-highlight)] bg-accent/20 space-y-3">
      <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
      {item.items && (
        <ul className="space-y-2 text-sm text-muted-foreground">
          {item.items.map((point, pidx) => (
            <li key={pidx}>• {point}</li>
          ))}
        </ul>
      )}
      {item.content && <p className="text-muted-foreground">{item.content}</p>}
      {item.conclusion && (
        <p className="text-foreground font-medium pt-2">{item.conclusion}</p>
      )}
    </div>
  )
}