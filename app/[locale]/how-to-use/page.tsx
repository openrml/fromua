import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const title = locale === 'uk' ? '⚙️ Як користуватись' : '⚙️ How to Use'
  const description = locale === 'uk'
    ? '3 простих кроки від нуля до першої розмови з ШІ. Інструкція для новачка.'
    : '3 simple steps from zero to your first AI conversation. Beginner\'s guide.'
  return {
    title, description,
    alternates: {
      canonical: `https://fromua.life/${locale}/how-to-use`,
      languages: { en: 'https://fromua.life/en/how-to-use', uk: 'https://fromua.life/uk/how-to-use', 'x-default': 'https://fromua.life/uk/how-to-use' },
    },
  }
}

export default async function HowToUsePage({ params }: Props) {
  const { locale } = await params
  const uk = locale === 'uk'

  const breadcrumbItems = [
    { label: uk ? '🏠 Головна' : '🏠 Home', href: `/${locale}` },
    { label: uk ? '⚙️ Як користуватись' : '⚙️ How to Use', href: `/${locale}/how-to-use` },
  ]

  const steps = uk ? [
    { num: '1️⃣', title: '📝 ЗАРЕЄСТРУЙСЯ В CHATGPT', items: ['🌐 Зайди на chat.openai.com', '🔘 Натисни "Sign Up" (Зареєструватися)', '📧 Можна через пошту, Google або Apple 🍎', '🎉 Це безкоштовно ✨'] },
    { num: '2️⃣', title: '🩺 ВІЗЬМИ ІНСТРУМЕНТ З АПТЕЧКИ', items: ['🎯 Обери свій стан (наприклад, "тривога накриває" 😰)', '📋 Натисни "Копіювати" 📄 біля тексту ролі'] },
    { num: '3️⃣', title: '🚀 ВСТАВ І НАТИСНИ ENTER', items: ['💬 Відкрий ChatGPT', '📎 Встав скопійований текст', '⏎ Натисни Enter', '💭 Відповідай на запитання ШІ 🤖'] },
  ] : [
    { num: '1️⃣', title: '📝 SIGN UP FOR CHATGPT', items: ['🌐 Go to chat.openai.com', '🔘 Click "Sign Up"', '📧 You can use email, Google, or Apple 🍎', '🎉 It\'s free ✨'] },
    { num: '2️⃣', title: '🩺 TAKE A TOOL FROM THE FIRST AID KIT', items: ['🎯 Choose your state (for example, "anxiety overwhelms" 😰)', '📋 Click "Copy" 📄 next to the role text'] },
    { num: '3️⃣', title: '🚀 PASTE AND PRESS ENTER', items: ['💬 Open ChatGPT', '📎 Paste the copied text', '⏎ Press Enter', '💭 Answer the AI\'s questions 🤖'] },
  ]

  const tips = uk ? [
    { num: '1️⃣', title: '🎯 БУДЬ КОНКРЕТНИМ', bad: '😞 Мені погано', good: '😰 У мене тривога через повітряну тривогу 🚨, не можу заспокоїтись' },
    { num: '2️⃣', title: '📖 ДОДАВАЙ КОНТЕКСТ', body: '📝 Розкажи трохи про себе, свою ситуацію — ШІ краще зрозуміє 🧠' },
    { num: '3️⃣', title: '💬 НЕ БІЙСЯ УТОЧНЮВАТИ', body: '🔄 Якщо відповідь не підійшла, напиши: "Можна трохи інакше?" 🎯 або "Поясни простіше" 🗣️' },
    { num: '4️⃣', title: '✅ ПЕРЕВІРЯЙ ФАКТИ', body: '⚠️ ШІ може помилятися в датах 📅, іменах 👤, цифрах 🔢. Важливу інформацію перевіряй 🔍.' },
    { num: '5️⃣', title: '🧪 ЕКСПЕРИМЕНТУЙ', body: '🎨 Спробуй різні формулювання. ШІ — це інструмент 🛠️, який краще працює з практикою 💪.' },
  ] : [
    { num: '1️⃣', title: '🎯 BE SPECIFIC', bad: '😞 I feel bad', good: '😰 I have anxiety because of the air raid siren 🚨, I can\'t calm down' },
    { num: '2️⃣', title: '📖 ADD CONTEXT', body: '📝 Tell it a little about yourself and your situation — the AI will understand better 🧠' },
    { num: '3️⃣', title: '💬 DON\'T BE AFRAID TO CLARIFY', body: '🔄 If the answer isn\'t right, write: "Can you do it a bit differently?" 🎯 or "Explain it more simply" 🗣️' },
    { num: '4️⃣', title: '✅ CHECK FACTS', body: '⚠️ AI can make mistakes with dates 📅, names 👤, numbers 🔢. Verify important information 🔍.' },
    { num: '5️⃣', title: '🧪 EXPERIMENT', body: '🎨 Try different phrasings. AI is a tool 🛠️ that works better with practice 💪.' },
  ]

  const howToLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    'name': uk ? 'Як користуватись AI-роллю: від завантаження до першої розмови' : 'How to use an AI role: from download to first conversation',
    'description': uk
      ? '3 прості кроки від нуля до першої розмови з ШІ-помічником'
      : '3 simple steps from zero to your first conversation with an AI assistant',
    'totalTime': 'PT5M',
    'tool': [
      { '@type': 'HowToTool', 'name': 'ChatGPT / Claude / Gemini' },
      { '@type': 'HowToTool', 'name': uk ? 'Смартфон або комп\'ютер' : 'Smartphone or computer' },
    ],
    'step': [
      {
        '@type': 'HowToStep',
        'position': 1,
        'name': uk ? 'Зареєструйтесь у ChatGPT або Claude' : 'Sign up for ChatGPT or Claude',
        'text': uk
          ? 'Перейдіть на chat.openai.com або claude.ai. Реєстрація безкоштовна — потрібна лише електронна пошта.'
          : 'Go to chat.openai.com or claude.ai. Registration is free — only an email is required.',
        'url': `https://fromua.life/${locale}/how-to-use`,
      },
      {
        '@type': 'HowToStep',
        'position': 2,
        'name': uk ? 'Оберіть та скопіюйте роль з Аптечки' : 'Choose and copy a role from the First Aid Kit',
        'text': uk
          ? 'Знайдіть потрібну роль у галереї, натисніть «Завантажити» або «Скопіювати». Збережіть текст ролі.'
          : 'Find the role you need in the gallery, click "Download" or "Copy". Save the role text.',
        'url': `https://fromua.life/${locale}/roles`,
      },
      {
        '@type': 'HowToStep',
        'position': 3,
        'name': uk ? 'Вставте роль на початку нової розмови' : 'Paste the role at the start of a new conversation',
        'text': uk
          ? 'Відкрийте новий чат, вставте скопійований текст ролі першим повідомленням і натисніть Enter. Роль активована.'
          : 'Open a new chat, paste the copied role text as the first message, and press Enter. The role is now active.',
      },
    ],
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />
      <Breadcrumbs items={breadcrumbItems} />

      <h1 className="text-4xl font-bold mb-8">
        {uk ? '⚙️ ІНСТРУКЦІЯ ДЛЯ НОВАЧКА 🧭' : '⚙️ INSTRUCTIONS FOR BEGINNERS 🧭'}
      </h1>

      <div className="space-y-16">

        {/* 3 steps */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? '🚶 3 простих кроки до першої розмови 💬' : '🚶 3 simple steps to your first conversation 💬'}
          </h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold mb-3 text-lg">{step.num} {step.title}</h3>
                <ul className="space-y-2">
                  {step.items.map((item, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="mt-0.5">▹</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center font-medium text-lg">
            ⏱ {uk ? 'Це займає менше хвилини! 🎯' : 'It takes less than a minute! 🎯'}
          </p>
        </section>

        {/* Why ready-made prompts */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? '❓ ЧОМУ ГОТОВІ ПРОМПТИ? 🎁' : '❓ WHY READY-MADE PROMPTS? 🎁'}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="text-base">{uk
              ? '🤔 Можна створювати свої запити самостійно! І це теж працює ✅. Але готові інструменти з аптечки — це як рецепти 📖 від досвідченого кухаря 👨‍🍳.'
              : '🤔 You can create your own prompts! And that works too ✅. But the ready-made tools from the first aid kit are like recipes 📖 from an experienced chef 👨‍🍳.'}</p>
            <div className="border border-border rounded-lg p-5 bg-secondary/30">
              <p className="text-base">🍳 {uk
                ? 'Ти можеш сам експериментувати на кухні 🧪, але з перевіреним рецептом страва виходить швидше ⏱️ і смачніше 😋.'
                : 'You can experiment in the kitchen yourself 🧪, but with a proven recipe, the dish turns out faster ⏱️ and tastier 😋.'}</p>
            </div>
            <div className="space-y-3 mt-4">
              {(uk ? ['✅ Вони перевірені на багатьох людях 👥','🎯 Вони враховують нюанси (тон, структуру, безпеку) 🛡️','⏰ Вони економлять твій час і нерви 💪'] : ['✅ They have been tested on many people 👥','🎯 They take into account nuances (tone, structure, safety) 🛡️','⏰ They save your time and nerves 💪']).map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <span className="text-green-500 text-base">✅</span><span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-base">
              🚀 {uk
                ? 'А коли навчишся — зможеш створювати свої власні "рецепти" 📝 і ділитись з іншими 🤝.'
                : 'And once you learn, you\'ll be able to create your own "recipes" 📝 and share them with others 🤝.'}
            </p>
          </div>
        </section>

        {/* 5 tips */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? '💡 ЯК ОТРИМАТИ КРАЩИЙ РЕЗУЛЬТАТ 🎯' : '💡 HOW TO GET THE BEST RESULT 🎯'}
          </h2>
          <p className="text-muted-foreground mb-6 text-lg">{uk ? '📌 5 простих порад:' : '📌 5 simple tips:'}</p>
          <div className="space-y-4">
            {tips.map((tip, i) => (
              <div key={i} className="border border-border rounded-lg p-5 hover:bg-secondary/10 transition-colors">
                <h3 className="font-bold mb-3 text-base">{tip.num} {tip.title}</h3>
                {'bad' in tip ? (
                  <div className="space-y-2 text-sm">
                    <p className="text-red-500 dark:text-red-400">❌ {uk ? 'Погано:' : 'Bad:'} <span className="text-muted-foreground">"{tip.bad}"</span></p>
                    <p className="text-green-600 dark:text-green-400">✅ {uk ? 'Добре:' : 'Good:'} <span className="text-muted-foreground">"{tip.good}"</span></p>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip.body}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Bonus section */}
        <section className="border border-foreground/30 rounded-lg p-8 text-center bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="text-5xl mb-4">🎓✨</div>
          <h2 className="text-xl font-bold font-mono mb-4">
            {uk ? 'ГОТОВИЙ ПОЧАТИ?' : 'READY TO START?'}
          </h2>
          <p className="text-muted-foreground mb-4">
            {uk 
              ? '🩺 Обери свій стан в Аптечці, скопіюй роль і зроби перший крок до підтримки.' 
              : '🩺 Choose your state in the First Aid Kit, copy the role, and take the first step toward support.'}
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
            <span className="px-3 py-1 bg-secondary rounded-full">📋 1️⃣ Копіюй</span>
            <span className="px-3 py-1 bg-secondary rounded-full">🤖 2️⃣ Вставляй</span>
            <span className="px-3 py-1 bg-secondary rounded-full">💬 3️⃣ Відповідай</span>
          </div>
        </section>

      </div>
    </div>
  )
}