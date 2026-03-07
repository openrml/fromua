import type { Metadata } from 'next'
import { RESEARCH_TOPICS, getResearchCategories } from '@/lib/research'
import { ResearchIndexClient } from '@/components/research-index-client'

export const metadata: Metadata = {
  title: 'Research — Evidence-Based AI Roles',
  description: 'Scientific foundations and evidence base for each AI role in the FromUA gallery. Adapted for Ukrainian context.',
  keywords: [
    'AI research',
    'evidence-based',
    'scientific foundation',
    'mental health research',
    'crisis support research',
    'Ukraine',
  ],
}

export default function ResearchPage() {
  const categories = getResearchCategories()

  // Group research by category
  const researchByCategory = categories.map((category) => ({
    category,
    topics: RESEARCH_TOPICS.filter((t) => t.category === category),
  }))

  return (
    <ResearchIndexClient
      researchByCategory={researchByCategory}
      totalTopics={RESEARCH_TOPICS.length}
      totalCategories={categories.length}
    />
  )
}
