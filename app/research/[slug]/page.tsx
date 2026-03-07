import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import fs from 'fs/promises'
import path from 'path'
import { getResearchBySlug, RESEARCH_TOPICS } from '@/lib/research'
import { getRoleBySlug } from '@/lib/roles'
import { ResearchDetailClient } from '@/components/research-detail-client'

export const dynamic = 'force-static'
export const dynamicParams = true

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return RESEARCH_TOPICS.map((topic) => ({
    slug: topic.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const research = getResearchBySlug(slug)
  
  if (!research) return {}

  return {
    title: `${research.titleEn} — Research`,
    description: `Scientific foundations and evidence base for ${research.titleEn}. Adapted for Ukrainian context.`,
    keywords: [research.titleEn, 'research', 'evidence-based', research.category],
  }
}

/**
 * Load HTML file and adapt styles for FromUA
 */
async function loadResearchHTML(filename: string, locale: string): Promise<string> {
  const publicDir = path.join(process.cwd(), 'public', 'research', locale)
  const filePath = path.join(publicDir, filename)
  
  try {
    const htmlContent = await fs.readFile(filePath, 'utf-8')
    
    // Extract body content (remove <!DOCTYPE>, <html>, <head>, etc.)
    const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i)
    const bodyContent = bodyMatch ? bodyMatch[1] : htmlContent
    
    // Extract .container content if exists
    const containerMatch = bodyContent.match(/<div class="container">([\s\S]*)<\/div>\s*<\/body>/i)
    const content = containerMatch ? containerMatch[1] : bodyContent
    
    return content.trim()
  } catch (error) {
    console.error(`Error loading research HTML: ${filename}`, error)
    throw new Error('Research content not found')
  }
}

export default async function ResearchDetailPage({ params }: PageProps) {
  const { slug } = await params
  const research = getResearchBySlug(slug)

  if (!research) {
    notFound()
  }

  // Load BOTH English and Ukrainian versions
  let htmlContentEn: string
  let htmlContentUa: string
  
  try {
    htmlContentEn = await loadResearchHTML(research.fileEn, 'en')
    htmlContentUa = await loadResearchHTML(research.fileUa, 'ua')
  } catch {
    notFound()
  }

  // Get related role
  const relatedRole = getRoleBySlug(research.roleSlug)

  return (
    <ResearchDetailClient
      research={research}
      htmlContentEn={htmlContentEn}
      htmlContentUa={htmlContentUa}
      relatedRole={relatedRole}
    />
  )
}
