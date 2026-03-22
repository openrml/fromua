import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const title = locale === 'uk' ? '🪔 Лампа Аладдіна' : "🪔 Aladdin's Lamp"
  const description = locale === 'uk'
    ? 'Або чому "запитати в ChatGPT" — це не те саме, що "створити собі помічника"'
    : 'Or why "asking ChatGPT" is not the same as "creating an assistant for yourself"'
  return {
    title,
    description,
    alternates: {
      canonical: `https://fromua.life/${locale}/aladdin`,
      languages: {
        en: 'https://fromua.life/en/aladdin',
        uk: 'https://fromua.life/uk/aladdin',
        'x-default': 'https://fromua.life/uk/aladdin',
      },
    },
  }
}

export default async function AladdinPage({ params }: Props) {
  const { locale } = await params
  const uk = locale === 'uk'

  const breadcrumbs = [
    { label: uk ? 'Головна' : 'Home', href: `/${locale}` },
    { label: uk ? 'Лампа Аладдіна' : "Aladdin's Lamp", href: `/${locale}/aladdin` },
  ]

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': uk ? '🪔 Лампа Аладдіна: Або чому "запитати в ChatGPT" — це не те саме' : "🪔 Aladdin's Lamp: Or why asking ChatGPT is not the same as creating an assistant",
    'description': uk
      ? 'Метафора лампи Аладдіна як пояснення різниці між Просителем і Архітектором смислів у роботі з ШІ'
      : 'The Aladdin\'s Lamp metaphor explaining the difference between an Asker and an Architect of Meaning when working with AI',
    'author': { '@type': 'Organization', 'name': 'FromUA', 'url': 'https://fromua.life' },
    'publisher': { '@type': 'Organization', 'name': 'FromUA', 'url': 'https://fromua.life' },
    'inLanguage': locale,
    'url': `https://fromua.life/${locale}/aladdin`,
    'mainEntityOfPage': { '@type': 'WebPage', '@id': `https://fromua.life/${locale}/aladdin` },
    'about': [
      { '@type': 'Thing', 'name': uk ? 'Штучний інтелект' : 'Artificial Intelligence' },
      { '@type': 'Thing', 'name': uk ? 'Промпт-інжиніринг' : 'Prompt Engineering' },
      { '@type': 'Thing', 'name': uk ? 'Архітектор смислів' : 'Architect of Meaning' },
    ],
    'keywords': uk
      ? 'лампа аладдіна, ШІ метафора, архітектор смислів, промпт, ChatGPT, як правильно використовувати ШІ'
      : "aladdin's lamp, AI metaphor, architect of meaning, prompt, ChatGPT, how to use AI correctly",
    'articleSection': uk
      ? ['Метафора лампи', 'Нескінченні бажання', 'Як правильно просити', 'Архітектор смислів', 'Формат .orml.txt', 'Запрошення']
      : ['The Lamp Metaphor', 'Infinite Wishes', 'How to Ask Correctly', 'Architect of Meaning', '.orml.txt Format', 'The Invitation'],
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <Breadcrumbs items={breadcrumbs} />

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-3">
          {uk ? '🪔 ЛАМПА АЛАДДІНА' : "🪔 ALADDIN'S LAMP"}
        </h1>
        <p className="text-muted-foreground italic text-lg">
          {uk
            ? '🤔 Або чому "запитати в ChatGPT" — це не те саме, що "створити собі помічника"'
            : '🤔 Or why "asking ChatGPT" is not the same as "creating an assistant for yourself"'}
        </p>
      </div>

      <div className="space-y-16">

        {/* Part 1 */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk
              ? '📖 ЧАСТИНА 1: 🪔 ЛАМПА Є У ВСІХ. АЛЕ НЕ ВСІ ВМІЮТЬ ТЕРТИ ✨'
              : '📖 PART 1: 🪔 EVERYONE HAS A LAMP. BUT NOT EVERYONE KNOWS HOW TO RUB IT ✨'}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {uk ? <>
              <p>🔮 Уявіть, що кожен із нас знайшов Лампу Аладдіна. Справжню. З джином усередині. 🧞 Джин обіцяє виконати будь-яке бажання. Скільки завгодно бажань. Без обмежень. ♾️</p>
              <p className="font-medium text-foreground">🤔 Звучить знайомо?</p>
              <p>🎯 Це не фантастика. Це реальність 2026 року. ChatGPT, Claude, Gemini — це наші Лампи. Вони чекають. Вони готові служити. 🧞‍♂️</p>
              <p>⚠️ Але є одна проблема.</p>
              <p>🎲 Більшість людей труть лампу <strong className="text-foreground">навмання</strong>. Вони кажуть: "Зроби мені добре", "Напиши щось", "Допоможи". І отримують... 💨 пил. Іноді ✨ блискітки. Іноді красиві, але порожні слова. 📝</p>
              <p className="font-medium text-foreground">❓ Чому? Тому що джин сліпий. 🧏‍♂️</p>
              <p>👁️ Він не бачить твого світу. Він знає тільки те, що ти йому скажеш. І якщо ти не вмієш просити — він не вміє давати. 🎁</p>
            </> : <>
              <p>🔮 Imagine that each of us has found Aladdin's Lamp. A real one. With a genie inside. 🧞 The genie promises to grant any wish. As many wishes as you want. No limits. ♾️</p>
              <p className="font-medium text-foreground">🤔 Sounds familiar?</p>
              <p>🎯 This isn't science fiction. This is the reality of 2026. ChatGPT, Claude, Gemini — these are our Lamps. They are waiting. They are ready to serve. 🧞‍♂️</p>
              <p>⚠️ But there is one problem.</p>
              <p>🎲 Most people rub the lamp <strong className="text-foreground">at random</strong>. They say: "Make me feel good," "Write something," "Help me." And they get... 💨 dust. Sometimes ✨ glitter. Sometimes beautiful, but empty words. 📝</p>
              <p className="font-medium text-foreground">❓ Why? Because the genie is blind. 🧏‍♂️</p>
              <p>👁️ It cannot see your world. It only knows what you tell it. And if you don't know how to ask — it doesn't know how to give. 🎁</p>
            </>}
          </div>
        </section>

        {/* Part 2 */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk
              ? '📖 ЧАСТИНА 2: 3️⃣ ТРИ БАЖАННЯ — ЦЕ ДЛЯ ТИХ, ХТО НЕ ВМІЄ РАХУВАТИ ♾️'
              : "📖 PART 2: 3️⃣ THREE WISHES ARE FOR THOSE WHO CAN'T COUNT ♾️"}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {uk ? <>
              <p>📖 У старій казці Аладдін мав тільки три бажання. Він мусив обирати: 🕌 палац, 💰 багатство, ❤️ кохання. Одне невдале бажання — і все пропало. 💔</p>
              <p className="font-medium text-foreground">✨ У нашій реальності бажань — нескінченність. ♾️</p>
              <p>🧞 Джин ніколи не втомлюється. Він не ображається, якщо ти передумав. Він не звинувачує, якщо ти помилився. Але це створює нову проблему. 🤯</p>
              <p><strong className="text-foreground">🤔 Якщо бажань безліч — навіщо взагалі думати?</strong> 💭 Можна просити, просити, просити... і ніколи не навчитись жити. 🎠</p>
              <p>🇺🇦 Ми в Україні не маємо цієї розкоші. 💙💛 Війна змушує думати. 🎯 Кожне бажання має ціну. Кожне прохання — це питання виживання. 🛡️</p>
              <p className="font-medium text-foreground">💪 Тому ми навчились терти лампу правильно.</p>
            </> : <>
              <p>📖 In the old fairy tale, Aladdin only had three wishes. He had to choose: 🕌 a palace, 💰 wealth, ❤️ love. One bad wish — and everything was lost. 💔</p>
              <p className="font-medium text-foreground">✨ In our reality, there are infinite wishes. ♾️</p>
              <p>🧞 The genie never gets tired. It doesn't get offended if you change your mind. It doesn't blame you if you make a mistake. But this creates a new problem. 🤯</p>
              <p><strong className="text-foreground">🤔 If there are countless wishes — why think at all?</strong> 💭 You can ask, ask, ask... and never learn to live. 🎠</p>
              <p>🇺🇦 We in Ukraine do not have this luxury. 💙💛 War forces you to think. 🎯 Every wish has a price. Every request is a matter of survival. 🛡️</p>
              <p className="font-medium text-foreground">💪 That's why we learned to rub the lamp correctly.</p>
            </>}
          </div>
        </section>

        {/* Part 3 */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk
              ? '📖 ЧАСТИНА 3: ✨ ЯК ПРАВИЛЬНО ТЕРТИ ЛАМПУ 🧞'
              : '📖 PART 3: ✨ HOW TO RUB THE LAMP CORRECTLY 🧞'}
          </h2>
          <div className="space-y-8">
            {[
              {
                title: uk ? '🔍 Секрет 1: Знай, з якого боку терти' : '🔍 Secret 1: Know which side to rub',
                body: uk
                  ? ['🪔 Лампа — не однорідна. У неї є різні грані. 💎', '🫂 Якщо треба заспокоєння — три там, де заховані психологи. 💰 Якщо треба фінансова порада — три там, де економісти. 👶 Якщо треба поговорити з дитиною — три там, де педагоги.', '🗺️ Наша Аптечка — це карта лампи. Ми вже знайшли потрібні грані й позначили їх кольорами: 🟥 тіло, 🟧 стосунки, 🟨 гроші, 🟩 енергія, 🟦 сенси, 🟪 технології, 🟫 дім.']
                  : ['🪔 The lamp is not uniform. It has different facets. 💎', '🫂 If you need comfort — rub where the psychologists are. 💰 If you need financial advice — rub where the economists are. 👶 If you need to talk to a child — rub where the educators are.', '🗺️ Our First Aid Kit is a map of the lamp. We have already found the necessary facets and marked them with colors: 🟥 body, 🟧 relationships, 🟨 money, 🟩 energy, 🟦 meaning, 🟪 technology, 🟫 home.'],
              },
              {
                title: uk ? '🏗️ Секрет 2: Не чекай готового палацу — будуй сам' : "🏗️ Secret 2: Don't wait for a ready-made palace — build it yourself",
                body: uk
                  ? ['🧞 Джин не будує палаци. Джин дає цеглу 🧱 і креслення 📐.', '😟 Коли ти кажеш: "Зроби мені добре" — джин розгублений. 😥 Коли ти кажеш: "У мене тривога, руки тремтять, не можу дихати, допоможи заспокоїтись" — джин знає, що робити. 🎯', '🎯 Чим точніший запит — тим точніша допомога. ✅']
                  : ["🧞 The genie doesn't build palaces. The genie gives bricks 🧱 and blueprints 📐.", '😟 When you say: "Make me feel good" — the genie is confused. 😥 When you say: "I have anxiety, my hands are shaking, I can\'t breathe, help me calm down" — the genie knows what to do. 🎯', '🎯 The more precise the request, the more precise the help. ✅'],
              },
              {
                title: uk ? '👁️ Секрет 3: Джин сліпий — стань його очима' : '👁️ Secret 3: The genie is blind — become its eyes',
                body: uk
                  ? ["🧞 Джин сидить у лампі. Він ніколи не бачив твого світу. Він не знає, як пахне твій дім. 🏠 Не чув сирени повітряної тривоги. 🚨 Не відчував холоду в квартирі без світла. ❄️", '🎤 Твоє завдання — розповісти. 📍 Де ти зараз. 😌 Що відчуваєш. ⏳ Що сталося перед тим, як стало погано. 🧪 Що пробував вже, а що — ні.', '🏛️ І тоді він зможе допомогти. Не як маг, а як архітектор, який має всі знання світу, але бачить тільки твоїми очима. 👁️']
                  : ["🧞 The genie sits inside the lamp. It has never seen your world. It doesn't know what your home smells like. 🏠 It hasn't heard the air raid siren. 🚨 It hasn't felt the cold in an apartment without power. ❄️", "🎤 Your task is to tell it. 📍 Where you are now. 😌 What you feel. ⏳ What happened right before things got bad. 🧪 What you have already tried, and what you haven't.", '🏛️ And then it can help you. Not like a magician, but like an architect who has all the world\'s knowledge, but sees only through your eyes. 👁️'],
              },
            ].map((item, i) => (
              <div key={i} className="pl-6 border-l-2 border-border">
                <h3 className="font-bold mb-3">{item.title}</h3>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  {item.body.map((p, j) => <p key={j}>{p}</p>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Part 4 */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk
              ? '📖 ЧАСТИНА 4: 🏛️ АРХІТЕКТОР СМИСЛІВ — ХТО ЦЕ ТАКИЙ? 🤔'
              : '📖 PART 4: 🏛️ THE ARCHITECT OF MEANING — WHO IS THAT? 🤔'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">
                {uk ? '❓ Тип А: Просителі' : '❓ Type A: The Askers'}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {uk
                  ? '🎲 Вони труть лампу навмання. Просять: "Зроби мене щасливим", "Дай грошей", "Виконай бажання". Вони завжди чекають дива. 🎭 І завжди розчаровані. 😞'
                  : '🎲 They rub the lamp at random. They ask: "Make me happy," "Give me money," "Grant my wish." They are always waiting for a miracle. 🎭 And they are always disappointed. 😞'}
              </p>
            </div>
            <div className="border border-foreground rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-3">
                {uk ? '✅ Тип Б: Архітектори' : '✅ Type B: The Architects'}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {uk
                  ? '🔧 Вони знають: дива не буде. Буде інструмент. Вони кажуть: "Ось мій стан. Ось мої обмеження. Ось що я пробував. Допоможи знайти вихід". 🧭'
                  : '🔧 They know: there will be no miracle. There will be a tool. They say: "Here is my state. Here are my limitations. Here\'s what I\'ve tried. Help me find a way out." 🧭'}
              </p>
            </div>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              {uk
                ? '🏛️ Архітектор смислів — це людина, яка не чекає готових відповідей, а створює простір для їх народження. 🌱 Розуміє, що джин — це не чарівник, а кресляр. 📐 Бере відповідальність за свій запит. 🤝 Ділиться знайденим з іншими. 📢'
                : '🏛️ An Architect of Meaning is a person who does not wait for ready-made answers, but creates a space for them to be born. 🌱 Understands that the genie is not a wizard, but a draftsperson. 📐 Takes responsibility for their request. 🤝 Shares what they find with others. 📢'}
            </p>
            <p className="font-medium text-foreground">
              {uk
                ? '🩺 Наша Аптечка — це школа архітекторів. 🏫 Кожен інструмент — це не просто "дай відповідь". Це рамка, всередині якої ти сам знаходиш своє рішення. 💡'
                : '🩺 Our First Aid Kit is a school for architects. 🏫 Each tool is not just a "give me the answer." It is a frame, within which you find your own solution. 💡'}
            </p>
          </div>
        </section>

        {/* Part 5 */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk
              ? '📖 ЧАСТИНА 5: 📄 ЩО ТАКЕ *.orml.txt І ЧОМУ ЦЕ ВАЖЛИВО? 🔑'
              : '📖 PART 5: 📄 WHAT IS *.orml.txt AND WHY IS IT IMPORTANT? 🔑'}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p className="font-medium text-foreground">
              {uk
                ? '🎭 Усі ролі в Аптечці — це файли формату .orml.txt. Це не просто текст. Це креслення душі. 💎'
                : '🎭 All the roles in the First Aid Kit are .orml.txt files. This is not just text. This is a blueprint for the soul. 💎'}
            </p>
            <p>{uk ? '📦 Всередині кожного файлу:' : '📦 Inside each file:'}</p>
            <ul className="space-y-1 pl-4">
              {(uk
                ? ['🧑‍⚕️ Хто ця роль (психолог, фінансист, друг)', '🗣️ Як вона говорить (тон, стиль, цінності)', '📚 Що вона знає і вміє', '🚶 Якими кроками вона веде', '🚫 Чого вона НІКОЛИ не робитиме']
                : ['🧑‍⚕️ Who this role is (psychologist, financial advisor, friend)', '🗣️ How it speaks (tone, style, values)', '📚 What it knows and can do', '🚶 What steps it guides you through', '🚫 What it will NEVER do']
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="mt-1 text-xs">—</span>{item}</li>
              ))}
            </ul>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
              {(['📱', '📋', '📨', '📁', '🤖'] as const).map((emoji, i) => (
                <div key={i} className="flex items-center gap-2 text-sm border border-border rounded p-3">
                  <span>{emoji}</span>
                  <span>{uk
                    ? ['Скачати на телефон', 'Скопіювати в блокнот', 'Переслати в Telegram', 'Зберегти в теку', 'Використати з будь-яким ШІ'][i]
                    : ['Download to phone', 'Copy into notepad', 'Send on Telegram', 'Save in a folder', 'Use with any AI'][i]
                  }</span>
                </div>
              ))}
            </div>
            <p className="font-medium text-foreground">
              {uk
                ? "🌍 Це відкритий стандарт. Ми не будуємо в'язницю. Ми будуємо бібліотеку. 📚"
                : '🌍 This is an open standard. We are not building a prison. We are building a library. 📚'}
            </p>
          </div>
        </section>

        {/* Part 6 */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk
              ? '📖 ЧАСТИНА 6: 📖 ІСТОРІЯ, ЯКУ МИ ПИШЕМО РАЗОМ ✍️'
              : '📖 PART 6: 📖 THE STORY WE ARE WRITING TOGETHER ✍️'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm leading-relaxed">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                {uk ? '🌍 Решта світу питає:' : '🌍 The rest of the world asks:'}
              </p>
              {(uk
                ? ['"Як збільшити прибуток?" 📈', '"Напиши план маркетингу" 📊', '"Зроби мій бізнес ефективнішим" ⚙️']
                : ['"How to increase profit?" 📈', '"Write a marketing plan" 📊', '"Make my business more efficient" ⚙️']
              ).map((q, i) => (
                <p key={i} className="py-2 border-b border-border/50 text-muted-foreground">{q}</p>
              ))}
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-foreground mb-4">
                {uk ? '🇺🇦 Ми питаємо інакше:' : '🇺🇦 We ask differently:'}
              </p>
              {(uk
                ? ['"Як заспокоїти дитину під час обстрілу?" 👶🚨', '"Що робити, коли руки тремтять?" 🖐️😨', '"Як не збожеволіти, чекаючи звістку з фронту?" 📱💔', '"Як пробачити себе за те, що вижив?" 🙏😢']
                : ['"How to calm a child during shelling?" 👶🚨', '"What to do when my hands are shaking?" 🖐️😨', '"How not to go crazy while waiting for news from the front?" 📱💔', '"How to forgive myself for surviving?" 🙏😢']
              ).map((q, i) => (
                <p key={i} className="py-2 border-b border-border/50 font-medium text-foreground">{q}</p>
              ))}
            </div>
          </div>
          <p className="mt-8 text-muted-foreground leading-relaxed">
            {uk
              ? '🤖 І ШІ відповідає. Не ідеально. Не завжди точно. Але він поруч. 24/7. Безкоштовно. Без засудження. 🎭 Поки світ використовував Лампу для розваг, ми навчились використовувати її для життя. 💪'
              : "🤖 And AI answers. Not perfectly. Not always accurately. But it's there. 24/7. Free. Without judgment. 🎭 While the world used the Lamp for entertainment, we learned to use it for life. 💪"}
          </p>
        </section>

        {/* Part 7 — CTA */}
        <section className="border border-foreground p-8">
          <h2 className="text-xl font-bold font-mono mb-6">
            {uk ? '📖 ЧАСТИНА 7: 🤝 ЗАПРОШЕННЯ' : '📖 PART 7: 🤝 THE INVITATION'}
          </h2>
          <p className="text-muted-foreground mb-6">
            {uk
              ? '🧘 Ти можеш залишитись просто користувачем Аптечки. Це теж добре. Інструменти працюють. Але якщо відчуваєш, що хочеш більше — 🚀'
              : "🧘 You can remain just a user of the First Aid Kit. That's good too. The tools work. But if you feel you want more — 🚀"}
          </p>
          <p className="text-2xl font-bold mb-6">
            {uk ? '🏛️ Стань архітектором.' : '🏛️ Become an architect.'}
          </p>
          <ul className="space-y-2 text-muted-foreground mb-8">
            {(uk
              ? ['📖 Вивчай, як влаштовані ролі', '✏️ Редагуй їх під себе', '✨ Створюй свої', '🤝 Ділись з іншими', '🧞 Вчи їх правильно "терти лампу"']
              : ['📖 Study how the roles are structured', '✏️ Edit them to fit your needs', '✨ Create your own', '🤝 Share them with others', '🧞 Teach them how to "rub the lamp" correctly']
            ).map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-foreground">→</span><span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-medium">
            {uk
              ? '🪔 Бо лампа є в кожного. ❓ Питання тільки — хто ти сьогодні: 🎲 Проситель, який чекає дива, чи 🏛️ Архітектор, який будує смисли?'
              : '🪔 Because everyone has a lamp. ❓ The only question is — who are you today: 🎲 an Asker waiting for a miracle, or 🏛️ an Architect building meaning?'}
          </p>
        </section>

      </div>
    </div>
  )
}