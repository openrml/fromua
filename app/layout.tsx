import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/components/language-context'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: {
    default: 'FromUA — Civilizational AI Roles Gallery',
    template: '%s | FromUA',
  },
  description:
    'Ukraine learned to live in uncertainty. We turned it into structured AI roles. Open protocol RML 0.9.1 — free forever.',
  keywords: [
    // English keywords
    'AI roles',
    'RML protocol',
    'AI assistant',
    'mental health AI',
    'crisis support',
    'Ukraine AI',
    'structured prompts',
    'open protocol',
    'LLM roles',
    'AI therapy',
    'psychological support AI',
    'grief companion',
    'trauma support',
    // Ukrainian keywords
    'AI ролі',
    'ролі для AI',
    'AI асистент',
    'психологічна підтримка',
    'підтримка в кризі',
    'ШІ помічник',
    'протокол RML',
    'відкритий протокол',
    'AI психолог',
    'допомога AI',
    'структуровані промпти',
  ],
  authors: [{ name: 'OpenRML', url: 'https://fromua.life' }],
  creator: 'OpenRML',
  publisher: 'FromUA',
  generator: 'v0.app',
  metadataBase: new URL('https://fromua.life'),
  alternates: {
    canonical: 'https://fromua.life',
    languages: {
      'en': 'https://fromua.life?lang=en',
      'uk': 'https://fromua.life?lang=uk',
      'x-default': 'https://fromua.life',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    alternateLocale: 'en_US',
    siteName: 'FromUA',
    title: 'FromUA — Civilizational AI Roles Gallery',
    description: 'Ukraine learned to live in uncertainty. We turned it into structured AI roles. Open protocol RML 0.9.1 — free forever.',
    url: 'https://fromua.life',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FromUA - Civilizational AI Roles Gallery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FromUA — Civilizational AI Roles Gallery',
    description: 'Ukraine learned to live in uncertainty. We turned it into structured AI roles. Open protocol RML 0.9.1 — free forever.',
    images: ['/twitter-card.png'],
    creator: '@fromua_life',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16' },
      { url: '/favicon-32x32.png', sizes: '32x32' },
    ],
    apple: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9f9f9' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f0f' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
