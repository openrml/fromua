// app/why/components/VUCAComponent.tsx
import type { VUCAComponent as VUCAComponentType } from '../data/scientificBasis'

interface VUCAComponentProps {
  component: VUCAComponentType
}

export function VUCAComponent({ component }: VUCAComponentProps) {
  return (
    <div className="p-4 bg-background border border-border rounded">
      <div className="font-bold text-foreground mb-1">{component.name}</div>
      <div className="text-sm text-muted-foreground mb-2">→ {component.response}</div>
      <div className="text-sm text-muted-foreground italic">{component.why}</div>
    </div>
  )
}