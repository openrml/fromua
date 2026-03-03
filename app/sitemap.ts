import { MetadataRoute } from 'next'
import { ROLES } from '@/lib/roles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fromua.life'
  const now = new Date()
  
  // Static pages with priorities and update frequencies
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}?lang=en`,
          uk: `${baseUrl}?lang=uk`,
        },
      },
    },
    {
      url: `${baseUrl}/roles`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/roles?lang=en`,
          uk: `${baseUrl}/roles?lang=uk`,
        },
      },
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/about?lang=en`,
          uk: `${baseUrl}/about?lang=uk`,
        },
      },
    },
    {
      url: `${baseUrl}/standard`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          en: `${baseUrl}/standard?lang=en`,
          uk: `${baseUrl}/standard?lang=uk`,
        },
      },
    },
    {
      url: `${baseUrl}/contribute`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
      alternates: {
        languages: {
          en: `${baseUrl}/contribute?lang=en`,
          uk: `${baseUrl}/contribute?lang=uk`,
        },
      },
    },
  ]
  
  // Dynamic role pages - all 29 roles
  const rolePages: MetadataRoute.Sitemap = ROLES.map((role) => ({
    url: `${baseUrl}/roles/${role.slug}`,
    lastModified: role.updatedAt ? new Date(role.updatedAt) : now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    alternates: {
      languages: {
        en: `${baseUrl}/roles/${role.slug}?lang=en`,
        uk: `${baseUrl}/roles/${role.slug}?lang=uk`,
      },
    },
  }))
  
  return [...staticPages, ...rolePages]
}
