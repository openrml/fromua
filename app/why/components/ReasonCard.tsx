// app/why/components/ReasonCard.tsx
import type { Reason } from '../data/reasons'

interface ReasonCardProps {
  reason: Reason
}

export function ReasonCard({ reason }: ReasonCardProps) {
  return (
    <div className="p-6 border border-border rounded-lg space-y-3">
      <div className="flex items-start gap-4">
        <div className="text-3xl">{reason.icon}</div>
        <div className="flex-1 space-y-2">
          <h2 className="text-xl font-bold text-foreground">{reason.title}</h2>
          <p className="text-sm italic text-muted-foreground">{reason.subtitle}</p>
          <p className="text-muted-foreground">{reason.content}</p>
        </div>
      </div>
    </div>
  )
}