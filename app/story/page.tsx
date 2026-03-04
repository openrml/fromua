// app/story/page.tsx
import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { StoryPageClient } from './components/StoryPageClient'

export const metadata: Metadata = {
  title: 'Story | FromUA',
  description: 'How FromUA was born from lived experience in Ukraine during VUCA ×10',
}

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-12 space-y-16">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Story', href: '/story' },
          ]}
        />
        
        <StoryPageClient />
      </div>
    </div>
  )
}