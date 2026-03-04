// app/why/page.tsx
import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { WhyPageClient } from './components/WhyPageClient'

export const metadata: Metadata = {
  title: 'Why It Works | FromUA',
  description: 'FromUA is not "another mental health app." It\'s a different philosophy.',
}

export default function WhyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-12 space-y-16">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Why', href: '/why' },
          ]}
        />
        
        <WhyPageClient />
      </div>
    </div>
  )
}