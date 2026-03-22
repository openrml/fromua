import { MetadataRoute } from 'next'
import { ROLES } from '@/lib/roles'

// Required for static export
export const dynamic = 'force-static'

const locales = ['en', 'uk'] as const
const staticRoutes = [
  { path: '',         changeFrequency: 'weekly'  as const, priority: 1.0 },
  { path: '/roles',   changeFrequency: 'weekly'  as const, priority: 0.9 },
  { path: '/about',   changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/standard',changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/contribute',changeFrequency:'monthly' as const, priority: 0.6 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fromua.life'
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = staticRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          en: `${baseUrl}/en${route.path}`,
          uk: `${baseUrl}/uk${route.path}`,
          'x-default': `${baseUrl}/uk${route.path}`,
        },
      },
    }))
  )

  const rolePages: MetadataRoute.Sitemap = ROLES.flatMap((role) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/roles/${role.slug}`,
      lastModified: role.updatedAt ? new Date(role.updatedAt) : now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/roles/${role.slug}`,
          uk: `${baseUrl}/uk/roles/${role.slug}`,
          'x-default': `${baseUrl}/uk/roles/${role.slug}`,
        },
      },
    }))
  )

  return [...staticPages, ...rolePages]
}
