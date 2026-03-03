import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getRoleBySlug, getRelatedRoles, ROLES } from '@/lib/roles'
import { RoleDetailClient } from '@/components/role-detail-client'

// Важно для Cloudflare Pages
export const dynamic = 'force-static'
export const dynamicParams = true
export const revalidate = false

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  try {
    return ROLES.map((r) => ({ slug: r.slug }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const { slug } = await params
    const role = getRoleBySlug(slug)
    if (!role) return {}
    
    return {
      title: `${role.title} / ${role.titleUa}`,
      description: role.shortDescription,
      keywords: [
        role.title,
        role.titleUa,
        ...role.tags,
        role.category,
        role.archetype,
        'RML role',
        'AI assistant',
      ],
      authors: [{ name: role.author }],
      alternates: {
        canonical: `https://fromua.life/roles/${slug}`,
        languages: {
          'en': `https://fromua.life/roles/${slug}?lang=en`,
          'uk': `https://fromua.life/roles/${slug}?lang=uk`,
          'x-default': `https://fromua.life/roles/${slug}`,
        },
      },
      openGraph: {
        title: `${role.title} — FromUA`,
        description: role.shortDescription,
        url: `https://fromua.life/roles/${slug}`,
        type: 'article',
        images: [
          {
            url: '/og-image.png',
            width: 1200,
            height: 630,
            alt: role.title,
          },
        ],
        publishedTime: role.createdAt,
        modifiedTime: role.updatedAt,
        authors: [role.author],
        tags: role.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: `${role.title} — FromUA`,
        description: role.shortDescription,
        images: ['/twitter-card.png'],
      },
    }
  } catch {
    return {}
  }
}

export default async function RoleDetailPage({ params }: PageProps) {
  try {
    const { slug } = await params
    const role = getRoleBySlug(slug)
    if (!role) notFound()

    const relatedRoles = getRelatedRoles(role.related)

    const license = {
      type: role.license,
      name: role.license === 'CC-BY-4.0' ? 'Creative Commons Attribution 4.0' : role.license,
      url: role.license === 'CC-BY-4.0' 
        ? 'https://creativecommons.org/licenses/by/4.0/' 
        : '#',
      description: 'Open license'
    }

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareSourceCode',
      name: role.title,
      description: role.shortDescription,
      version: role.version,
      license: license.url,
      author: { '@type': 'Organization', name: role.author },
      identifier: role.identity,
      programmingLanguage: 'RML',
      codeRepository: `https://fromua.life/roles/${role.slug}`,
    }

    return (
      <div className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <RoleDetailClient role={role} />
      </div>
    )
  } catch (error) {
    console.error('Error in RoleDetailPage:', error)
    notFound()
  }
}