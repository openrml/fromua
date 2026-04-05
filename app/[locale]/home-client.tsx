'use client'

import { DepartmentsAccordion } from '@/components/home/departments-accordion'
import Link from 'next/link'
import { useLocale } from '@/components/locale-provider'

export function HomeClient() {
  const { locale } = useLocale()

  const content = locale === 'uk' ? {
    title: '🧰 AI-АПТЕЧКА ДЛЯ ЖИТТЯ',
    subtitle: 'Це не просто знання. 📚 Це інтерактивні підручники, які 🧠 думають разом з тобою, 🤝 підтримують у складний момент, 🧭 і ведуть крок за кроком до рішення',
    description: 'Це практичні інструменти, побудовані на відкритому стандарті OpenRML — з них може складатися національна система підтримки. Ми всі маємо аптечку для тіла. Але у часи випробувань кожному потрібна аптечка для життя.',
    heading: '🏥 СІМ ВІДДІЛЕНЬ',
    subheading: 'Оберіть своє відділення, знайдіть потрібний інструмент',
    or: 'або',
    findTool: '🔍 ЗНАЙДИ СВІЙ ІНСТРУМЕНТ',
    infoCards: [
      {
        emoji: '🔍',
        title: 'Що таке ШІ',
        description: 'Пояснюємо простими словами для тих, хто чує вперше',
        link: `/${locale}/what-is-ai`,
        linkText: 'Дізнатись більше →'
      },
      {
        emoji: '⚙️',
        title: 'Як користуватись',
        description: '3 прості кроки від нуля до першої розмови з ШІ',
        link: `/${locale}/how-to-use`,
        linkText: 'Інструкція →'
      },
      {
        emoji: '🧐',
        title: 'Для скептиків',
        description: 'Чесні відповіді на всі "але" і "а що якщо"',
        link: `/${locale}/skeptic`,
        linkText: 'Читати FAQ →'
      }
    ],
    lampTitle: '🪔 Лампа Аладдіна',
    lampDescription: 'Для тих, хто хоче зрозуміти "навіщо" — глибша філософія проєкту',
    lampLinkText: 'Читати філософію →'
  } : {
    title: '🧰 AI FIRST AID KIT FOR LIFE',
    subtitle: 'It\'s not just knowledge. 📚 These are interactive textbooks that 🧠 think with you, 🤝 support you in difficult times, 🧭 and lead you step by step to a solution.',
    description: 'These are practical tools built on the open standard OpenRML — they can form a national support system. We all have a first aid kit for the body. But in times of trial, everyone needs a first aid kit for life.',
    heading: '🏥 SEVEN DEPARTMENTS',
    subheading: 'Choose your section, find the right tool',
    or: 'or',
    findTool: '🔍 FIND YOUR TOOL',
    infoCards: [
      {
        emoji: '🔍',
        title: 'What is AI',
        description: 'Explaining in simple words for those hearing it for the first time',
        link: `/${locale}/what-is-ai`,
        linkText: 'Learn more →'
      },
      {
        emoji: '⚙️',
        title: 'How to use',
        description: '3 simple steps from zero to your first AI conversation',
        link: `/${locale}/how-to-use`,
        linkText: 'Instructions →'
      },
      {
        emoji: '🧐',
        title: 'For skeptics',
        description: 'Honest answers to all the "buts" and "what ifs"',
        link: `/${locale}/skeptic`,
        linkText: 'Read FAQ →'
      }
    ],
    lampTitle: '🪔 Aladdin\'s Lamp',
    lampDescription: 'For those who want to understand "why" — the deeper philosophy of the project',
    lampLinkText: 'Read philosophy →'
  }

  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
              {content.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {content.subtitle}
            </p>
            <p className="text-base text-muted-foreground">
              {content.description}
            </p>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">
              {content.heading}
            </h2>
            <p className="text-muted-foreground">
              {content.subheading}
            </p>
          </div>

          <DepartmentsAccordion />

          {/* Or Search */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">───────── {content.or} ─────────</p>
            <Link 
              href={`/${locale}/roles`}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors font-medium"
            >
              <span>{content.findTool}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid md:grid-cols-3 gap-8">
            {content.infoCards.map((card, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold mb-3">{card.emoji} {card.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {card.description}
                </p>
                <Link href={card.link} className="text-sm font-medium hover:underline">
                  {card.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              {content.lampTitle}
            </h2>
            <p className="text-muted-foreground mb-8">
              {content.lampDescription}
            </p>
            <Link 
              href={`/${locale}/philosophy`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors font-medium"
            >
              {content.lampLinkText}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
