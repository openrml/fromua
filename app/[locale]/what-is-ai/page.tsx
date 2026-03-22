import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const title = locale === 'uk' ? '🔍 Що таке Штучний Інтелект' : '🔍 What is Artificial Intelligence'
  const description = locale === 'uk'
    ? 'Пояснюємо ШІ простими словами. Навіщо він потрібен, як працює і чому це безпечно.'
    : 'Explaining AI in simple words. Why you need it, how it works, and why it\'s safe.'
  return {
    title, description,
    alternates: {
      canonical: `https://fromua.life/${locale}/what-is-ai`,
      languages: { en: 'https://fromua.life/en/what-is-ai', uk: 'https://fromua.life/uk/what-is-ai', 'x-default': 'https://fromua.life/uk/what-is-ai' },
    },
  }
}

export default async function WhatIsAIPage({ params }: Props) {
  const { locale } = await params
  const uk = locale === 'uk'

  const breadcrumbItems = [
    { label: uk ? '🏠 Головна' : '🏠 Home', href: `/${locale}` },
    { label: uk ? '🔍 Що таке ШІ' : '🔍 What is AI', href: `/${locale}/what-is-ai` },
  ]

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': uk ? 'Що таке штучний інтелект — пояснення простими словами' : 'What is Artificial Intelligence — explained in simple words',
    'description': uk
      ? 'Доступне пояснення що таке ШІ, як він працює і чим може допомогти у повсякденному житті'
      : 'An accessible explanation of what AI is, how it works, and how it can help in everyday life',
    'proficiencyLevel': 'Beginner',
    'author': { '@type': 'Organization', 'name': 'FromUA', 'url': 'https://fromua.life' },
    'publisher': { '@type': 'Organization', 'name': 'FromUA', 'url': 'https://fromua.life' },
    'inLanguage': locale,
    'url': `https://fromua.life/${locale}/what-is-ai`,
    'mainEntityOfPage': { '@type': 'WebPage', '@id': `https://fromua.life/${locale}/what-is-ai` },
    'keywords': uk
      ? 'що таке штучний інтелект, ШІ для початківців, ChatGPT, Claude, AI помічник'
      : 'what is artificial intelligence, AI for beginners, ChatGPT, Claude, AI assistant',
    'articleSection': uk
      ? ['Визначення ШІ', 'Що ШІ вміє', 'Що ШІ не вміє', 'Безпека та обмеження']
      : ['AI Definition', 'What AI Can Do', 'What AI Cannot Do', 'Safety and Limitations'],
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <Breadcrumbs items={breadcrumbItems} />

      <h1 className="text-4xl font-bold mb-8">
        {uk ? '🔍 ЩО ТАКЕ ШТУЧНИЙ ІНТЕЛЕКТ? 🤖' : '🔍 WHAT IS ARTIFICIAL INTELLIGENCE? 🤖'}
      </h1>

      <div className="space-y-16">

        {/* What is AI */}
        <section>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-xl text-foreground font-medium">
              {uk
                ? '🤖 ШІ (штучний інтелект) — це як дуже уважний помічник 👂, який прочитав мільйони книжок 📚, статей 📄 і розмов 💬.'
                : '🤖 AI (artificial intelligence) is like a very attentive assistant 👂 who has read millions of books 📚, articles 📄, and conversations 💬.'}
            </p>
            <p>
              {uk
                ? 'Він не "думає" 🧠 як людина, але вміє знаходити потрібні слова 🎯, структурувати думки 🧩 і давати відповіді 💡.'
                : 'It doesn\'t "think" 🧠 like a human, but it can find the right words 🎯, structure thoughts 🧩, and provide answers 💡.'}
            </p>
            <div className="border border-border rounded-lg p-6 bg-secondary/30">
              <p className="font-medium">💡 {uk ? 'Аналогія:' : 'Analogy:'}</p>
              <p className="mt-2 text-lg">
                {uk
                  ? '🎒 Це як мати в кишені 📱 бібліотеку 📚, психолога 🫂 і друга 👫 одночасно.'
                  : '🎒 It\'s like having a library 📚, a psychologist 🫂, and a friend 👫 in your pocket 📱 all at once.'}
              </p>
            </div>
          </div>
        </section>

        {/* Why you need it */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? '🤔 Чому це потрібно саме тобі? 🎯' : '🤔 Why do you need this? 🎯'}
          </h2>
          <div className="space-y-3">
            {(uk ? [
              '⏰ Він працює 24/7 і ніколи не втомлюється 💪',
              '🤝 Він не засуджує і не критикує 🙅‍♂️',
              '🧠 Він пам\'ятає все, що ти йому написав (в межах однієї розмови) 📝',
              '🔄 Він може бути психологом 🫂, фінансистом 💰, тренером 🏋️ — ким захочеш',
            ] : [
              '⏰ It works 24/7 and never gets tired 💪',
              '🤝 It doesn\'t judge or criticize 🙅‍♂️',
              '🧠 It remembers everything you\'ve told it (within a single conversation) 📝',
              '🔄 It can be a psychologist 🫂, a financial advisor 💰, a coach 🏋️ — whatever you want',
            ]).map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 border border-border rounded-lg hover:bg-secondary/10 transition-colors">
                <span className="text-green-500 mt-0.5 text-lg">✅</span>
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What AI can do */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? '🎯 ЩО ЩЕ ВМІЄ ШІ? 🚀' : '🎯 WHAT ELSE CAN AI DO? 🚀'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {(uk ? [
              { emoji: '📝✍️', title: 'ПИСАТИ', items: ['📧 Листи, 📱 дописи, 🎉 привітання, 📋 скарги, 📄 резюме', '📖 Твори, ✍️ есе, 📰 статті, 🎬 сценарії'] },
              { emoji: '📊🗂️', title: 'СТРУКТУРУВАТИ', items: ['📅 Плани на день, тиждень, рік', '✅ Списки справ, 🛒 покупок, 💡 ідей', '💰 Бюджети, витрати, доходи'] },
              { emoji: '📚🎓', title: 'ВЧИТИ', items: ['🔍 Пояснювати складні речі простими словами', '🌍 Допомагати з іноземними мовами', '📝 Готуватися до іспитів, 🎤 співбесід'] },
              { emoji: '💡✨', title: 'ПРИДУМУВАТИ', items: ['🏢 Ідеї для бізнесу, 🎨 творчості, 🎁 подарунків', '🔧 Варіанти вирішення проблем', '👀 Нові способи подивитись на ситуацію'] },
              { emoji: '🎨🖼️', title: 'СТВОРЮВАТИ', items: ['🖼️ Зображення, 🎨 ідеї для дизайну', '📽️ Сценарії для відео, 🎮 ігор', '🍳 Меню, 📖 рецепти, 🏋️ плани тренувань'] },
            ] : [
              { emoji: '📝✍️', title: 'WRITE', items: ['📧 Letters, 📱 posts, 🎉 greetings, 📋 complaints, 📄 resumes', '📖 Stories, ✍️ essays, 📰 articles, 🎬 scripts'] },
              { emoji: '📊🗂️', title: 'STRUCTURE', items: ['📅 Plans for the day, week, year', '✅ To-do lists, 🛒 shopping lists, 💡 idea lists', '💰 Budgets, expenses, income'] },
              { emoji: '📚🎓', title: 'TEACH', items: ['🔍 Explain complex things in simple words', '🌍 Help with foreign languages', '📝 Prepare for exams, 🎤 interviews'] },
              { emoji: '💡✨', title: 'COME UP WITH IDEAS', items: ['🏢 Ideas for business, 🎨 creativity, 🎁 gifts', '🔧 Options for solving problems', '👀 New ways to look at a situation'] },
              { emoji: '🎨🖼️', title: 'CREATE', items: ['🖼️ Images, 🎨 design ideas', '📽️ Scenarios for videos, 🎮 games', '🍳 Menus, 📖 recipes, 🏋️ workout plans'] },
            ]).map((cat, i) => (
              <div key={i} className="border border-border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h3 className="font-bold mb-3 text-lg">{cat.emoji} {cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="mt-1 text-green-500">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center font-medium text-lg">
            ✨ {uk
              ? 'Це тільки початок. Що б ти не задумав — спробуй запитати. 🤖💬'
              : 'This is just the beginning. Whatever you have in mind — try asking. 🤖💬'}
          </p>
        </section>

        {/* What AI cannot do - added section */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? '🚫 ЧОГО ШІ НЕ ВМІЄ' : '🚫 WHAT AI CANNOT DO'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {(uk ? [
              { emoji: '💔', title: 'ВІДЧУВАТИ', text: 'ШІ може імітувати емпатію 🤖💬, але не відчуває по-справжньому. Він не має серця 💔.' },
              { emoji: '👤', title: 'БУТИ ЛЮДИНОЮ', text: 'Не замінить живого друга 👫, психолога 🫂 або родича 👨‍👩‍👧‍👦.' },
              { emoji: '🎲', title: 'ПЕРЕДБАЧАТИ МАЙБУТНЄ', text: 'Не ворожить 🔮, не передбачає курс валют 💱 або результати виборів 🗳️.' },
              { emoji: '⚖️', title: 'НЕСТИ ВІДПОВІДАЛЬНІСТЬ', text: 'За погану пораду ШІ не понесе покарання. Відповідальність за рішення — на тобі 🧑‍⚖️.' },
            ] : [
              { emoji: '💔', title: 'FEEL', text: 'AI can mimic empathy 🤖💬, but it doesn\'t truly feel. It has no heart 💔.' },
              { emoji: '👤', title: 'BE HUMAN', text: 'It cannot replace a real friend 👫, psychologist 🫂, or family member 👨‍👩‍👧‍👦.' },
              { emoji: '🎲', title: 'PREDICT THE FUTURE', text: 'It doesn\'t tell fortunes 🔮, predict exchange rates 💱, or election results 🗳️.' },
              { emoji: '⚖️', title: 'BEAR RESPONSIBILITY', text: 'AI won\'t be penalized for bad advice. You are responsible for your decisions 🧑‍⚖️.' },
            ]).map((item, i) => (
              <div key={i} className="border border-red-500/30 rounded-lg p-5 bg-red-500/5">
                <h3 className="font-bold mb-2 text-red-600 dark:text-red-400">{item.emoji} {item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Safety */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? '🔐 БЕЗПЕКА ТА КОНФІДЕНЦІЙНІСТЬ 🛡️' : '🔐 SAFETY AND PRIVACY 🛡️'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-green-500/30 rounded-lg p-6 bg-green-500/5">
              <h3 className="font-bold text-green-600 dark:text-green-400 mb-4">✅ {uk ? 'Що МОЖНА писати:' : 'What you CAN write:'}</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {(uk ? [
                  '😊 Свої емоції, почуття, думки 💭',
                  '🏠 Загальні життєві ситуації',
                  '🕵️ Анонімні історії'
                ] : [
                  '😊 Your emotions, feelings, thoughts 💭',
                  '🏠 General life situations',
                  '🕵️ Anonymous stories'
                ]).map((i, k) => <li key={k} className="flex items-start gap-2"><span>✓</span>{i}</li>)}
              </ul>
            </div>
            <div className="border border-red-500/30 rounded-lg p-6 bg-red-500/5">
              <h3 className="font-bold text-red-600 dark:text-red-400 mb-4">❌ {uk ? 'Чого НЕ МОЖНА писати НІКОЛИ:' : 'What you should NEVER write:'}</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {(uk ? [
                  '🔑 Паролі, 💳 номери карток, 🪪 паспортні дані',
                  '📍 Адреси, 🔐 паролі від соцмереж',
                  '🤫 Конфіденційну робочу інформацію'
                ] : [
                  '🔑 Passwords, 💳 card numbers, 🪪 passport details',
                  '📍 Addresses, 🔐 social media passwords',
                  '🤫 Confidential work information'
                ]).map((i, k) => <li key={k} className="flex items-start gap-2"><span>⚠️</span>{i}</li>)}
              </ul>
            </div>
          </div>
          <div className="mt-4 border border-border rounded-lg p-5 bg-secondary/30">
            <p className="text-sm text-muted-foreground">
              ⚠️ {uk
                ? 'Тому що компанії (OpenAI, Google, тощо) можуть використовувати діалоги для покращення ШІ 🔧. Не пиши нічого, що не хотів би опублікувати в газеті 📰.'
                : 'Because companies (OpenAI, Google, etc.) may use dialogues to improve AI 🔧. Don\'t write anything you wouldn\'t want published in a newspaper 📰.'}
            </p>
            <p className="mt-3 font-medium text-green-600 dark:text-green-400">
              🛡️ {uk
                ? 'ДЛЯ ВСЬОГО ІНШОГО — це безпечний простір, де можна говорити відверто 💬'
                : 'FOR EVERYTHING ELSE — this is a safe space where you can speak openly 💬'}
            </p>
          </div>
        </section>

        {/* Final encouragement */}
        <section className="border border-foreground/30 rounded-lg p-8 text-center bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="text-5xl mb-4">🤖💙</div>
          <h2 className="text-xl font-bold font-mono mb-4">
            {uk ? 'ГОТОВИЙ СПРОБУВАТИ?' : 'READY TO TRY?'}
          </h2>
          <p className="text-muted-foreground mb-4">
            {uk 
              ? '🩺 Зайди в Аптечку, обери свою роль і почни розмову з ШІ вже зараз.' 
              : '🩺 Go to the First Aid Kit, choose your role, and start a conversation with AI right now.'}
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
            <span className="px-3 py-1 bg-secondary rounded-full">🎯 1️⃣ Обери стан</span>
            <span className="px-3 py-1 bg-secondary rounded-full">📋 2️⃣ Скопіюй роль</span>
            <span className="px-3 py-1 bg-secondary rounded-full">🤖 3️⃣ Почни розмову</span>
          </div>
        </section>

      </div>
    </div>
  )
}