// app/for/page.tsx
import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { ForPageClient } from './components/ForPageClient'

export const metadata: Metadata = {
  title: 'Who It\'s For | FromUA',
  description: 'Different people need FromUA for different reasons. Find your path.',
}

export default function ForPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 space-y-16">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'For', href: '/for' },
          ]}
        />
        
        <ForPageClient />
      </div>
    </div>
  )
}