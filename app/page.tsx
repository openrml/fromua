import { Hero } from '@/components/home/hero'
import { Philosophy } from '@/components/home/philosophy'
import { CategoriesPreview } from '@/components/home/categories-preview'
import { CtaStrip } from '@/components/home/cta-strip'
import { PopularRoles } from '@/components/popular-roles'
import { ROLES } from '@/lib/roles'

export default function HomePage() {
  // Organization JSON-LD structured data
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FromUA',
    alternateName: 'OpenRML',
    url: 'https://fromua.life',
    logo: 'https://fromua.life/logo.svg',
    description: 'Civilizational AI Roles Gallery. Open protocol RML 0.9.1 — free forever.',
    foundingDate: '2025',
    foundingLocation: {
      '@type': 'Country',
      name: 'Ukraine',
    },
    areaServed: 'Worldwide',
    keywords: 'AI roles, RML protocol, mental health AI, crisis support, open protocol',
  }

  // WebSite JSON-LD structured data
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'FromUA',
    alternateName: 'FromUA - Civilizational AI Roles Gallery',
    url: 'https://fromua.life',
    description: 'Ukraine learned to live in uncertainty. We turned it into structured AI roles. Open protocol RML 0.9.1 — free forever.',
    inLanguage: ['uk', 'en'],
    publisher: {
      '@type': 'Organization',
      name: 'OpenRML',
      url: 'https://fromua.life',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://fromua.life/roles?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      
      <Hero />
      <Philosophy />
      <CategoriesPreview />
      <PopularRoles roles={ROLES} />
      <CtaStrip />
    </>
  )
}
