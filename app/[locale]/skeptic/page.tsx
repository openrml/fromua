import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const title = locale === 'uk' ? '🧐 Для скептиків' : '🧐 For Skeptics'
  const description = locale === 'uk'
    ? 'Тут немає магії. Тільки чесна розмова про те, що ШІ може, а що — ні.'
    : 'There is no magic here. Just an honest conversation about what AI can and cannot do.'
  return {
    title, description,
    alternates: {
      canonical: `https://fromua.life/${locale}/skeptic`,
      languages: { en: 'https://fromua.life/en/skeptic', uk: 'https://fromua.life/uk/skeptic', 'x-default': 'https://fromua.life/uk/skeptic' },
    },
  }
}

export default async function SkepticPage({ params }: Props) {
  const { locale } = await params
  const uk = locale === 'uk'

  const breadcrumbItems = [
    { label: uk ? '🏠 Головна' : '🏠 Home', href: `/${locale}` },
    { label: uk ? '🧐 Для скептиків' : '🧐 For Skeptics', href: `/${locale}/skeptic` },
  ]

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': uk ? '🤔 Чи це взагалі працює?' : '🤔 Does this actually work?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': uk
            ? '✅ Так, але не завжди і не для всіх. Працює як перша підтримка серед ночі 🌙, для структурування думок 🧠 і коли хочеться поговорити 💬, але ні з ким. Не замінює професійну психотерапію 🫂.'
            : '✅ Yes, but not always and not for everyone. Works as initial support in the middle of the night 🌙, for structuring thoughts 🧠, and when you want to talk 💬 but there\'s no one. Does not replace professional psychotherapy 🫂.',
        },
      },
      {
        '@type': 'Question',
        'name': uk ? '🫂 Чи може ШІ замінити живого психолога?' : '🫂 Can AI replace a live psychologist?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': uk
            ? '❌ Ні. Ніколи. ШІ не відчуває 💔, не пам\'ятає вас між сесіями 🔄 і не несе відповідальності ⚠️. Це інструмент першої підтримки — як бинт 🩹 вдома, а не хірург 🏥 у лікарні.'
            : '❌ No. Never. AI does not feel 💔, does not remember you between sessions 🔄, and bears no responsibility ⚠️. It is a first-aid tool — like a bandage 🩹 at home, not a surgeon 🏥 in a hospital.',
        },
      },
      {
        '@type': 'Question',
        'name': uk ? '💰 Чому це безкоштовно? Що за підвох?' : '💰 Why is this free? What\'s the catch?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': uk
            ? '🩵 Ми не заробляємо на вашому болю. Всі ролі — це текст 📄 який можна скопіювати будь-куди. Ми не збираємо дані 🔒 і не вимагаємо реєстрації. Підвох один: це не замінює живого фахівця 🫂.'
            : '🩵 We don\'t profit from your pain. All roles are text 📄 you can copy anywhere. We don\'t collect data 🔒 and don\'t require registration. The only catch: this does not replace a live professional 🫂.',
        },
      },
      {
        '@type': 'Question',
        'name': uk ? '🤷 Що якщо мене не влаштує відповідь?' : '🤷 What if I\'m not satisfied with the answer?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': uk
            ? '👍 Це нормально! Уточніть запит ✍️, додайте контекст 📖, попросіть інший варіант 🔄 або почніть нову розмову 🆕. ШІ — це інструмент, який треба налаштовувати ⚙️.'
            : '👍 That\'s normal! Clarify the request ✍️, add context 📖, ask for another option 🔄, or start a new conversation 🆕. AI is a tool that needs to be adjusted ⚙️.',
        },
      },
      {
        '@type': 'Question',
        'name': uk ? '🧠 Чи пам\'ятає ШІ те, що я йому розказав?' : '🧠 Does AI remember what I told it?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': uk
            ? '💬 В межах однієї розмови — так. 🔄 Між різними розмовами — ні. Кожна нова розмова починається з нуля. Для довгострокової підтримки краще вести щоденник 📓 самостійно.'
            : '💬 Within a single conversation — yes. 🔄 Between different conversations — no. Each new conversation starts from scratch. For long-term support, it\'s better to keep a journal 📓 yourself.',
        },
      },
    ],
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Breadcrumbs items={breadcrumbItems} />

      <h1 className="text-4xl font-bold mb-4">
        {uk ? '🧐 СКЕПТИК? ЗАЙДИ СЮДИ 👋' : '🧐 SKEPTIC? COME HERE 👋'}
      </h1>
      <p className="text-muted-foreground mb-12 text-lg">{uk
        ? '✨ Тут немає магії. Тут немає "чарівних таблеток" 💊. Тільки чесна розмова 🎙️ про те, що ШІ може, а що — ні.'
        : '✨ There is no magic here. There are no "magic pills" 💊 here. Just an honest conversation 🎙️ about what AI can and cannot do.'}</p>

      <div className="space-y-16">

        {/* Does it work */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? '🤨 ЧИ ЦЕ ВЗАГАЛІ ПРАЦЮЄ? 🤔' : '🤨 DOES THIS ACTUALLY WORK? 🤔'}
          </h2>
          <p className="font-medium mb-6 text-lg">{uk
            ? '📌 Коротка відповідь: так, але не завжди і не для всіх.'
            : '📌 Short answer: yes, but not always and not for everyone.'}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-green-500/30 rounded-lg p-6 bg-green-500/5">
              <h3 className="font-bold text-green-600 dark:text-green-400 mb-4">✅ {uk ? 'ПРАЦЮЄ, КОЛИ:' : 'IT WORKS WHEN:'}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {(uk ? ['🌙 Тобі потрібна перша підтримка серед ночі','🌀 Треба структурувати думки, коли в голові хаос','💬 Хочеться поговорити, але ні з ким','⚡ Потрібна швидка відповідь на просте запитання','🔄 Треба повторити техніку заземлення вдесяте'] : ['🌙 You need initial support in the middle of the night','🌀 You need to structure your thoughts when your head is chaotic','💬 You want to talk, but there\'s no one to talk to','⚡ You need a quick answer to a simple question','🔄 You need to repeat a grounding technique for the tenth time']).map((i, k) => <li key={k} className="flex items-start gap-2"><span>✅</span>{i}</li>)}
              </ul>
            </div>
            <div className="border border-red-500/30 rounded-lg p-6 bg-red-500/5">
              <h3 className="font-bold text-red-600 dark:text-red-400 mb-4">❌ {uk ? 'НЕ ПРАЦЮЄ, КОЛИ:' : 'IT DOES NOT WORK WHEN:'}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {(uk ? ['✨ Ти чекаєш дива або магії','🫂 Тобі потрібна професійна психотерапія','🎲 Ти хочеш, щоб хтось ухвалив рішення за тебе','🚨 У тебе гострий психічний стан (паніка, суїцид)'] : ['✨ You are expecting a miracle or magic','🫂 You need professional psychotherapy','🎲 You want someone to make a decision for you','🚨 You are in an acute mental state (panic, suicidal thoughts)']).map((i, k) => <li key={k} className="flex items-start gap-2"><span>❌</span>{i}</li>)}
              </ul>
            </div>
          </div>
          <div className="mt-6 border border-border rounded-lg p-5 bg-secondary/30 text-sm text-muted-foreground">
            🧪 {uk
              ? 'Дослідження 📊 показують, що навіть короткі розмови з ШІ можуть знижувати рівень тривоги 😌 та допомагати структурувати думки 🧩. Але це не замінює живого психолога 👥, особливо при глибоких травмах 💔.'
              : 'Research 📊 shows that even short conversations with AI can reduce anxiety levels 😌 and help structure thoughts 🧩. But it does not replace a live psychologist 👥, especially for deep trauma 💔.'}
          </div>
        </section>

        {/* Replace psychologist */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? '🤖 ЧИ МОЖЕ ШІ ЗАМІНИТИ ЖИВОГО ПСИХОЛОГА? 🫂' : '🤖 CAN AI REPLACE A LIVE PSYCHOLOGIST? 🫂'}
          </h2>
          <p className="text-xl font-bold text-red-500 mb-6">❌ {uk ? 'Ні. Ніколи. Ні за яких умов.' : 'No. Never. Under no circumstances.'}</p>
          <div className="space-y-3 mb-8">
            {(uk ? [
              ['💔 ШІ не відчуває.', 'Він не має емпатії 🤖❌. Він просто дуже добре підбирає слова, які схожі на емпатію.'],
              ['🔄 ШІ не пам\'ятає вас.', 'Кожна розмова — це нова зустріч. Живий психолог 🫂 пам\'ятає історію, паузи, погляди 👀.'],
              ['⚠️ ШІ може помилятися.', 'Іноді дуже впевнено і правдоподібно 🎭. Психолог має супервізію і освіту 📚.'],
              ['⚖️ ШІ не несе відповідальність.', 'Він не понесе покарання за погану пораду.'],
            ] : [
              ['💔 AI does not feel.', 'It has no empathy 🤖❌. It just picks words that resemble empathy very well.'],
              ['🔄 AI does not remember you.', 'Each conversation is a new meeting. A live psychologist 🫂 remembers your history, pauses, and glances 👀.'],
              ['⚠️ AI can make mistakes.', 'Sometimes very confidently and convincingly 🎭. A psychologist has supervision and education 📚.'],
              ['⚖️ AI does not bear responsibility.', 'It won\'t be penalized for giving bad advice.'],
            ]).map(([bold, rest], i) => (
              <div key={i} className="flex items-start gap-3 p-4 border border-border rounded-lg">
                <span className="text-muted-foreground text-sm mt-0.5">{i + 1}️⃣</span>
                <p className="text-sm text-muted-foreground"><strong className="text-foreground">{bold}</strong> {rest}</p>
              </div>
            ))}
          </div>
          <div className="border border-border rounded-lg p-6 bg-secondary/20">
            <h3 className="font-bold mb-3">🎯 {uk ? 'Точніше порівняння:' : 'A more accurate comparison:'}</h3>
            <p className="text-muted-foreground text-sm">
              🩹 {uk
                ? 'ШІ — це як бинт і зеленка вдома 🏠. Психолог — це як хірург 🏥 в лікарні. Бинтом можна заклеїти подряпину 🩹. Але не варто лікувати ним глибоку рану 💔.'
                : 'AI is like a bandage and antiseptic at home 🏠. A psychologist is like a surgeon 🏥 in a hospital. You can cover a scratch with a bandage 🩹. But you shouldn\'t treat a deep wound with it 💔.'}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              ❓ {uk ? 'Тоді навіщо він потрібен?' : 'So what is it for?'} 
              {' '}— 🚑 {uk ? 'Як "швидка допомога" до зустрічі з фахівцем' : 'As "first aid" before seeing a specialist'}. 
              {' '}📓 {uk ? 'Як "щоденник" для рефлексії' : 'As a "diary" for reflection'}. 
              {' '}🏋️ {uk ? 'Як "тренажер" для соціальних навичок' : 'As a "training tool" for social skills'}.
            </p>
          </div>
        </section>

        {/* What if not satisfied */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? '📉 А ЩО, ЯКЩО МЕНЕ НЕ ВЛАШТУЄ ВІДПОВІДЬ? 🤷' : '📉 WHAT IF I\'M NOT SATISFIED WITH THE ANSWER? 🤷'}
          </h2>
          <p className="font-medium mb-6 text-green-600 dark:text-green-400">🟢 {uk ? 'Чудово! Це нормально! ШІ — це не оракул. Це інструмент.' : 'Great! That\'s normal! AI is not an oracle. It\'s a tool.'}</p>
          <div className="space-y-4">
            {(uk ? [
              { title: '✍️ Уточнити', items: ['"Я мав на увазі дещо інше..." 🔄', '"Можна простіше?" 🎯', '"Це не зовсім те, давай інакше" 🔁'] },
              { title: '📖 Додати контекст', items: ['"Я забув сказати, що я зараз у підвалі..." 🏚️', '"Важливо: мені 14 років" 👧', '"Я вже пробував дихати, не допомагає" 😮‍💨'] },
              { title: '🔄 Попросити інший варіант', items: ['"Запропонуй ще 3 варіанти" 1️⃣2️⃣3️⃣', '"А як би це сказав психолог?" 🫂', '"А якби ти був моїм другом?" 👫'] },
              { title: '🆕 Почати нову розмову', items: ['Іноді ШІ "зациклюється" 🔄. Нова розмова — новий старт 🚀.'] },
            ] : [
              { title: '✍️ Clarify', items: ['"I meant something else..." 🔄', '"Can you put it more simply?" 🎯', '"That\'s not quite it, let\'s try differently" 🔁'] },
              { title: '📖 Add context', items: ['"I forgot to mention that I\'m in a basement right now..." 🏚️', '"Important: I\'m 14 years old" 👧', '"I\'ve already tried breathing, it doesn\'t help" 😮‍💨'] },
              { title: '🔄 Ask for another option', items: ['"Suggest 3 more options" 1️⃣2️⃣3️⃣', '"How would a psychologist say this?" 🫂', '"What if you were my friend?" 👫'] },
              { title: '🆕 Start a new conversation', items: ['Sometimes AI gets "stuck in a loop." 🔄 A new conversation is a fresh start. 🚀'] },
            ]).map((item, i) => (
              <div key={i} className="border border-border rounded-lg p-5">
                <h3 className="font-bold mb-2">{i + 1}️⃣ {item.title}</h3>
                <ul className="space-y-1">
                  {item.items.map((li, j) => <li key={j} className="text-sm text-muted-foreground">💡 {li}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Why free */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? '💰 ЧОМУ ЦЕ БЕЗКОШТОВНО? ЩО ЗА ЛОВУШКА? 🧐' : '💰 WHY IS THIS FREE? WHAT\'S THE CATCH? 🧐'}
          </h2>
          <p className="text-xl font-bold mb-6">🟢 {uk ? 'Ми не заробляємо на вашому болю.' : 'We don\'t profit from your pain.'}</p>
          <div className="space-y-3 mb-6">
            {(uk ? [
              ['📄 Всі ролі — це текст.', 'Ми не створюємо закриту платформу 🔓. Ми просто даємо текст, який ви можете скопіювати будь-куди 📋.'],
              ['🤖 Використання ШІ — безкоштовне.', 'ChatGPT має безкоштовну версію 🆓. Ми не змушуємо платити за підписку 💳❌.'],
              ['🔒 Ми не збираємо дані.', 'На сайті немає реєстрації 📝❌, немає відстеження 👀❌, немає "особистих кабінетів" 🚫. Ви анонімні 🕵️.'],
              ['🤝 Ми — волонтерський проєкт.', 'Люди, які створюють ролі, роблять це, бо хочуть допомогти 💙. Багато з них самі пройшли через важкі часи 💪.'],
            ] : [
              ['📄 All the roles are text.', 'We are not creating a closed platform 🔓. We simply provide text that you can copy anywhere 📋.'],
              ['🤖 Using AI is free.', 'ChatGPT has a free version 🆓. We don\'t force you to pay for a subscription 💳❌.'],
              ['🔒 We don\'t collect data.', 'The site has no registration 📝❌, no tracking 👀❌, no "personal accounts" 🚫. You are anonymous 🕵️.'],
              ['🤝 We are a volunteer project.', 'The people creating the roles do it because they want to help 💙. Many of them have been through difficult times themselves 💪.'],
            ]).map(([bold, rest], i) => (
              <div key={i} className="flex items-start gap-3 p-4 border border-border rounded-lg">
                <span className="text-muted-foreground text-sm mt-0.5">{i + 1}️⃣</span>
                <p className="text-sm text-muted-foreground"><strong className="text-foreground">{bold}</strong> {rest}</p>
              </div>
            ))}
          </div>
          <div className="border border-border rounded-lg p-5 bg-secondary/30 text-sm text-muted-foreground">
            🎁 {uk
              ? 'Підвох тільки один: це не замінює живого фахівця 🫂. Але якщо вам треба "пережити ніч" 🌙 або "зібрати думки докупи" 🧩 — це безкоштовно 🆓 і завжди поруч 📱.'
              : 'There\'s only one catch: this does not replace a live professional 🫂. But if you need to "get through the night" 🌙 or "pull your thoughts together" 🧩 — this is free 🆓 and always nearby 📱.'}
          </div>
        </section>

        {/* Memory */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? '🔄 ЧИ ПАМ\'ЯТАЄ ШІ ТЕ, ЩО Я ЙОМУ РОЗКАЗАВ? 🧠' : '🔄 DOES AI REMEMBER WHAT I TOLD IT? 🧠'}
          </h2>
          <p className="font-medium mb-6">{uk ? '📌 Коротка відповідь: і так, і ні.' : '📌 Short answer: yes and no.'}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-green-500/30 rounded-lg p-6 bg-green-500/5">
              <h3 className="font-bold mb-3">💬 {uk ? 'В МЕЖАХ ОДНІЄЇ РОЗМОВИ:' : 'WITHIN A SINGLE CONVERSATION:'}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {(uk ? ['🧠 ШІ пам\'ятає все, що ви написали в цьому чаті','🔗 Можна посилатися на те, про що говорили 10 хвилин тому','🗣️ Можна сказати: "як ти казав раніше..."'] : ['🧠 AI remembers everything you\'ve written in that chat','🔗 You can refer to what you talked about 10 minutes ago','🗣️ You can say: "as you said earlier..."']).map((i, k) => <li key={k} className="flex items-start gap-2"><span>✅</span>{i}</li>)}
              </ul>
            </div>
            <div className="border border-red-500/30 rounded-lg p-6 bg-red-500/5">
              <h3 className="font-bold mb-3">🔄 {uk ? 'МІЖ РІЗНИМИ РОЗМОВАМИ:' : 'BETWEEN DIFFERENT CONVERSATIONS:'}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {(uk ? ['🚫 ШІ НЕ ПАМ\'ЯТАЄ вас','🆕 Кожна нова розмова — це новий початок','💡 Якщо хочеш, щоб він пам\'ятав — коротко нагадай: "минулого разу ми говорили про..."'] : ['🚫 AI DOES NOT REMEMBER you','🆕 Each new conversation is a new beginning','💡 If you want it to remember, briefly remind it: "last time we talked about..."']).map((i, k) => <li key={k} className="flex items-start gap-2"><span>❌</span>{i}</li>)}
              </ul>
            </div>
          </div>
          <div className="mt-4 border border-border rounded-lg p-4 text-sm text-muted-foreground bg-secondary/20">
            ⚠️ {uk
              ? 'Для довгострокової підтримки 📅 краще вести щоденник 📓 самостійно. ✍️'
              : 'For long-term support 📅, it\'s better to keep a journal 📓 yourself. ✍️'}
          </div>
        </section>

        {/* Final note */}
        <section className="border border-foreground/30 rounded-lg p-8 text-center bg-secondary/20">
          <div className="text-6xl mb-4">🧐💙</div>
          <p className="text-lg font-medium mb-2">
            {uk ? 'Все ще скептик?' : 'Still a skeptic?'}
          </p>
          <p className="text-muted-foreground">
            {uk 
              ? '✅ Чудово! Здоровий скептицизм — це добре. Спробуй сам(а) — і зроби власні висновки.' 
              : '✅ Great! Healthy skepticism is good. Try it yourself — and draw your own conclusions.'}
          </p>
        </section>

      </div>
    </div>
  )
}