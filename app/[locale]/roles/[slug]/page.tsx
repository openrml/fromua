import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getRoleBySlug, ROLES } from '@/lib/roles'
import { RoleDetailClient } from '@/components/role-detail-client'
import type { Locale } from '@/i18n/config'

export const dynamic = 'force-static'
export const dynamicParams = false
export const revalidate = false

interface PageProps {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  try {
    const locales = ['en', 'uk']
    const params = []
    for (const locale of locales) {
      for (const role of ROLES) {
        params.push({ locale, slug: role.slug })
      }
    }
    return params
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const { locale, slug } = await params
    const role = getRoleBySlug(slug)
    if (!role) return {}

    return {
      title: role.title,
      description: role.description,
      keywords: [role.title, ...role.tags, role.category, role.archetype, 'OpenRML', 'AI assistant'],
      authors: [{ name: 'OpenRML' }],
      alternates: {
        canonical: `https://fromua.life/${locale}/roles/${slug}`,
        languages: {
          'en': `https://fromua.life/en/roles/${slug}`,
          'uk': `https://fromua.life/uk/roles/${slug}`,
          'x-default': `https://fromua.life/uk/roles/${slug}`,
        },
      },
      openGraph: {
        title: `${role.title} — FromUA`,
        description: role.description,
        url: `https://fromua.life/${locale}/roles/${slug}`,
        type: 'article',
        locale: locale === 'uk' ? 'uk_UA' : 'en_US',
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: role.title }],
        tags: role.tags,
      },
      twitter: {
        card: 'summary_large_image',
        title: `${role.title} — FromUA`,
        description: role.description,
        images: ['/twitter-card.png'],
      },
    }
  } catch {
    return {}
  }
}

export default async function RoleDetailPage({ params }: PageProps) {
  try {
    const { locale, slug } = await params
    const role = getRoleBySlug(slug)
    if (!role) notFound()
    const r = role!

    const baseUrl = 'https://fromua.life'
    const roleUrl = `${baseUrl}/${locale}/roles/${r.slug}`

    // ── 1. SoftwareApplication + Product ──────────────────────────────────
    const softwareAppLd = {
      '@context': {
        '@vocab': 'https://schema.org/',
        'orml': 'https://openrml.org/schema#',
      },
      '@type': ['SoftwareApplication', 'Product'],
      'name': locale === 'uk' ? (r.titleUa ?? r.title) : r.title,
      'applicationCategory': 'AIApplication',
      'operatingSystem': 'Web, iOS, Android',
      'description': locale === 'uk' ? (r.descriptionUa ?? r.description) : r.description,
      'url': roleUrl,
      'inLanguage': locale,
      'keywords': r.tags.join(', '),
      'license': 'https://creativecommons.org/licenses/by/4.0/',
      'creator': { '@type': 'Organization', 'name': 'FromUA', 'url': baseUrl },
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD',
        'availability': 'https://schema.org/InStock',
      },
      'isBasedOn': roleUrl,
      'potentialAction': {
        '@type': 'CreateAction',
        'target': 'https://rolesai.life/builder',
        'name': locale === 'uk' ? 'Створити власну роль' : 'Create your own role',
      },
      // ── OpenRML meta ──
      'orml:roleType': r.category,
      'orml:archetype': r.archetype,
      'orml:version': r.version,
      'orml:steps': ['base_information', 'behavior', 'expertise', 'journey', 'memory', 'ethics'],
      'orml:contentUrl': r.v093Path
        ? `${baseUrl}${r.v093Path}`
        : `${baseUrl}${r.v090Path}`,
    }

    // ── 2. HowTo — Journey Sessions ────────────────────────────────────────
    const howToLd = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': locale === 'uk'
        ? `Як використовувати роль: ${r.titleUa ?? r.title}`
        : `How to use: ${r.title}`,
      'description': locale === 'uk'
        ? 'Завантажте роль і вставте в будь-який AI-чат для миттєвої активації'
        : 'Download the role and paste into any AI chat for instant activation',
      'tool': [{ '@type': 'HowToTool', 'name': 'ChatGPT / Claude / Gemini' }],
      'step': [
        {
          '@type': 'HowToStep',
          'position': 1,
          'name': locale === 'uk' ? 'Завантажте .orml.txt файл' : 'Download the .orml.txt file',
          'url': roleUrl,
        },
        {
          '@type': 'HowToStep',
          'position': 2,
          'name': locale === 'uk' ? 'Відкрийте ChatGPT, Claude або Gemini' : 'Open ChatGPT, Claude or Gemini',
        },
        {
          '@type': 'HowToStep',
          'position': 3,
          'name': locale === 'uk'
            ? 'Вставте вміст ролі на початку нової розмови'
            : 'Paste the role content at the start of a new conversation',
        },
        {
          '@type': 'HowToStep',
          'position': 4,
          'name': locale === 'uk' ? 'Починайте сесію — роль активована' : 'Begin your session — the role is now active',
        },
        // Add sessions as extra steps if present
        ...(r.sessions ?? []).slice(0, 6).map((s, i) => ({
          '@type': 'HowToStep',
          'position': i + 5,
          'name': s.title,
          'timeRequired': s.duration ? `PT${s.duration.replace(' min', 'M')}` : undefined,
        })),
      ],
    }

    // ── 3. FAQPage ─────────────────────────────────────────────────────────
    const faqLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': locale === 'uk' ? 'Чи безкоштовна ця роль?' : 'Is this role free?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': locale === 'uk'
              ? 'Так. Роль поширюється за ліцензією CC-BY-4.0 — безкоштовно для будь-якого використання з атрибуцією.'
              : 'Yes. The role is distributed under CC-BY-4.0 — free for any use with attribution.',
          },
        },
        {
          '@type': 'Question',
          'name': locale === 'uk' ? 'Як використовувати роль?' : 'How do I use this role?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': locale === 'uk'
              ? 'Завантажте .orml.txt файл, відкрийте ChatGPT або Claude, вставте вміст файлу на початку нової розмови. Роль активується миттєво.'
              : 'Download the .orml.txt file, open ChatGPT or Claude, paste the file content at the start of a new conversation. The role activates instantly.',
          },
        },
        {
          '@type': 'Question',
          'name': locale === 'uk' ? 'Чи може ШІ замінити психолога?' : 'Can AI replace a psychologist?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': locale === 'uk'
              ? 'Ні. Роль — інструмент першої підтримки, не заміна терапії. При гострому стані зверніться до фахівця.'
              : 'No. The role is a first-aid support tool, not a replacement for therapy. In acute situations, consult a professional.',
          },
        },
        {
          '@type': 'Question',
          'name': locale === 'uk' ? 'З якими AI сумісна роль?' : 'Which AI platforms is this role compatible with?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': locale === 'uk'
              ? 'Роль сумісна з будь-яким LLM: ChatGPT, Claude, Gemini, Mistral та іншими. Формат .orml.txt — LLM-агностичний.'
              : 'The role is compatible with any LLM: ChatGPT, Claude, Gemini, Mistral and others. The .orml.txt format is LLM-agnostic.',
          },
        },
      ],
    }

    return (
      <div className="flex min-h-screen flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        <RoleDetailClient role={r} />
      </div>
    )
  } catch (error) {
    console.error('Error in RoleDetailPage:', error)
    notFound()
  }
}
