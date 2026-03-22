import { HomeClient } from './home-client'
import type { Locale } from '@/i18n/config'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FromUA',
    alternateName: locale === 'uk' ? 'AI-Аптечка для життя' : 'AI First Aid Kit for Life',
    url: 'https://fromua.life',
    logo: 'https://fromua.life/logo.svg',
    description: locale === 'uk'
      ? 'AI-Аптечка для життя. 33 інструменти підтримки на основі OpenRML протоколу.'
      : 'AI First Aid Kit for Life. 33 support tools based on OpenRML protocol.',
    foundingDate: '2024',
    foundingLocation: { '@type': 'Country', name: 'Ukraine' },
    areaServed: 'Worldwide',
    keywords: 'AI roles, OpenRML protocol, mental health AI, crisis support, Ukraine',
    inLanguage: [locale],
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: locale === 'uk' ? 'FromUA - AI-Аптечка для життя' : 'FromUA - AI First Aid Kit for Life',
    url: `https://fromua.life/${locale}`,
    description: locale === 'uk'
      ? 'Це не про відповіді. Це про навичку користуватися ШІ тоді, коли це справді важливо.'
      : "This is not about answers. It's about the skill to use AI when it truly matters.",
    inLanguage: locale,
    publisher: { '@type': 'Organization', name: 'FromUA', url: 'https://fromua.life' },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `https://fromua.life/${locale}/roles?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const collectionPageLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': locale === 'uk' ? '🧰 AI-Аптечка для Життя — Галерея ролей' : '🧰 AI First Aid Kit for Life — Roles Gallery',
    'description': locale === 'uk'
      ? 'Галерея безкоштовних AI-ролей для психологічної підтримки, фінансових рішень, сімейних питань та відновлення в умовах кризи'
      : 'Gallery of free AI roles for psychological support, financial decisions, family matters, and crisis recovery',
    'url': `https://fromua.life/${locale}`,
    'inLanguage': locale,
    'publisher': { '@type': 'Organization', 'name': 'FromUA', 'url': 'https://fromua.life' },
    'about': { '@type': 'Thing', 'name': locale === 'uk' ? 'AI-ролі для кризової підтримки' : 'AI roles for crisis support' },
    'hasPart': [
      { '@type': 'WebPage', 'name': locale === 'uk' ? 'Психологічна підтримка' : 'Psychological Support', 'url': `https://fromua.life/${locale}/roles?category=health` },
      { '@type': 'WebPage', 'name': locale === 'uk' ? 'Фінанси та бізнес' : 'Finance & Business', 'url': `https://fromua.life/${locale}/roles?category=economics` },
      { '@type': 'WebPage', 'name': locale === 'uk' ? 'Сім\'я та стосунки' : 'Family & Relationships', 'url': `https://fromua.life/${locale}/roles?category=family` },
      { '@type': 'WebPage', 'name': locale === 'uk' ? 'Технології та ШІ' : 'Technology & AI', 'url': `https://fromua.life/${locale}/roles?category=technology` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageLd) }}
      />
      <HomeClient />
    </>
  )
}
