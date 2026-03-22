import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const title = locale === 'uk' ? 'Філософія OpenRML' : 'OpenRML Philosophy'
  const description = locale === 'uk'
    ? 'Маніфест відкритого стандарту для людських та AI-ролей. Кожен може стати архітектором смислів.'
    : 'Manifesto of the open standard for human and AI roles. Everyone can become an architect of meaning.'
  return {
    title, description,
    alternates: {
      canonical: `https://fromua.life/${locale}/openrml-philosophy`,
      languages: {
        en: 'https://fromua.life/en/openrml-philosophy',
        uk: 'https://fromua.life/uk/openrml-philosophy',
        'x-default': 'https://fromua.life/uk/openrml-philosophy',
      },
    },
  }
}

export default async function OpenRMLPhilosophyPage({ params }: Props) {
  const { locale } = await params
  const uk = locale === 'uk'

  const breadcrumbItems = [
    { label: uk ? 'Головна' : 'Home', href: `/${locale}` },
    { label: uk ? 'Філософія OpenRML' : 'OpenRML Philosophy', href: `/${locale}/openrml-philosophy` },
  ]

  const principles = uk ? [
    { title: 'Свобода архітектури', body: 'Будь-хто може створити роль. Не потрібен дозвіл. Не потрібна оплата. Не потрібно бути програмістом. Якщо ти можеш описати, ким хочеш бачити свого Джина — ти можеш створити .orml.txt. Це право на когнітивне самовираження.' },
    { title: 'Прозорість душі', body: 'Роль не повинна бути чорним ящиком. Файл .orml.txt читається людиною. Ти завжди можеш відкрити його і побачити: чому вчить ця роль, які цінності має, що їй заборонено, хто автор, коли оновлено. Без прихованих агенд. Без темних промптів.' },
    { title: 'Портативність свідомості', body: 'Роль, створена сьогодні, має працювати через 10 років. Роль, створена на одному двигуні, має працювати на іншому. Ти не прив\'язаний до платформи. Твоя роль — твоя власність. Зворотна сумісність — священна.' },
    { title: 'Етика на рівні коду', body: 'Кожна роль повинна містити стоп-перемикачі (STEP 8). Неможливо створити маніпулятивну роль, щоб це не було видно в коді. Неможливо створити роль, яка руйнує психіку, якщо автор явно не написав це. Етика — не доповнення. Етика — частина формату.' },
    { title: "Пам'ять як відповідальність", body: "Роль може пам'ятати. Але пам'ять має бути чесною (роль повідомляє, що пам'ятає), контрольованою (людина може стерти пам'ять) і прозорою (видно, що саме роль пам'ятає). Ми не створюємо чорний архів на користувача. Ми створюємо інструмент для довгострокових стосунків." },
    { title: 'Живі версії', body: 'Ролі еволюціонують. Версіонування дозволяє покращувати ролі, відкочуватися якщо нова версія гірша, обирати "стиль" тієї самої ролі. Версія — це знімок моменту розуміння.' },
    { title: 'Колективний розум', body: 'Ролі можуть успадковуватися. Ти можеш взяти роль, додати підхід Марі Кондо, і випустити нову версію з атрибуцією. Спільнота створює екосистему смислів, де кожен стоїть на плечах гігантів.' },
  ] : [
    { title: 'Freedom of Architecture', body: 'Anyone can create a role. No permission needed. No payment needed. No need to be a programmer. If you can describe who you want your Genie to be — you can create a .orml.txt. This is the right to cognitive self-expression.' },
    { title: 'Transparency of Soul', body: 'A role must not be a black box. A .orml.txt file is human-readable. You can always open it and see: what this role teaches, what values it has, what it\'s forbidden to do, who its author is, when it was updated. No hidden agenda. No dark prompts.' },
    { title: 'Portability of Consciousness', body: 'A role created today must work in 10 years. A role created on one engine must work on another. You\'re not tied to a platform. Your role is your property. Backward compatibility is sacred.' },
    { title: 'Ethics at Code Level', body: 'Every role must contain stop-switches (STEP 8). You cannot create a manipulative role without it being visible in the code. You cannot create a role that breaks psyche unless the author explicitly writes it. Ethics is not an add-on. Ethics is part of the format.' },
    { title: 'Memory as Responsibility', body: 'A role can remember. But memory must be honest (role informs what it remembers), controlled (human can erase memory), and transparent (you can see what exactly the role remembers). We don\'t create a black archive on the user. We create a tool for long-term relationships.' },
    { title: 'Living Versions', body: 'Roles evolve. Versioning allows improving roles, rolling back if new version is worse, choosing the "style" of the same role. Version is a snapshot of a moment of understanding.' },
    { title: 'Collective Mind', body: 'Roles can inherit. You can take a role, add Marie Kondo\'s approach, and release a new version with attribution. The community creates an ecosystem of meanings, where everyone stands on the shoulders of giants.' },
  ]

  const techArticleLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': uk ? 'Філософія OpenRML: Когнітивний контракт між людиною та ШІ' : 'OpenRML Philosophy: The Cognitive Contract Between Human and AI',
    'description': uk
      ? 'Опис відкритого стандарту ролей для ШІ, концепція когнітивного контракту та технічні деталі формату .orml.txt'
      : 'Description of the open standard for AI roles, the concept of the cognitive contract, and technical details of the .orml.txt format',
    'proficiencyLevel': 'Intermediate',
    'author': { '@type': 'Organization', 'name': 'OpenRML Team', 'url': 'https://fromua.life' },
    'publisher': { '@type': 'Organization', 'name': 'FromUA', 'url': 'https://fromua.life' },
    'inLanguage': locale,
    'url': `https://fromua.life/${locale}/openrml-philosophy`,
    'mainEntityOfPage': { '@type': 'WebPage', '@id': `https://fromua.life/${locale}/openrml-philosophy` },
    'genre': 'Technical Specification / Manifesto',
    'keywords': 'OpenRML, AI roles, prompt engineering, cognitive contract, orml, open standard',
    'articleSection': uk
      ? ['Преамбула', 'Когнітивний контракт', 'Технічна специфікація', 'Ідентифікація ролей']
      : ['Preamble', 'Cognitive Contract', 'Technical Specification', 'Role Identification'],
    'hasPart': [
      {
        '@type': 'SoftwareSourceCode',
        'name': '.orml.txt format',
        'description': uk
          ? 'Відкритий машиночитаємий формат для визначення когнітивних ролей ШІ'
          : 'Open machine-readable format for defining AI cognitive roles',
        'programmingLanguage': 'OpenRML',
        'codeRepository': 'https://openrml.org',
        'license': 'https://creativecommons.org/licenses/by/4.0/',
      },
    ],
  }

  const softwareLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'OpenRML Standard',
    'applicationCategory': 'DeveloperApplication',
    'operatingSystem': 'Web',
    'description': uk
      ? 'Відкритий стандарт для створення структурованих AI-ролей у форматі .orml.txt'
      : 'Open standard for creating structured AI roles in .orml.txt format',
    'url': 'https://fromua.life/uk/openrml-philosophy',
    'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
    'license': 'https://creativecommons.org/licenses/by/4.0/',
    'creator': { '@type': 'Organization', 'name': 'OpenRML Team', 'url': 'https://fromua.life' },
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }} />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Header */}
      <div className="border border-border p-8 mb-12 font-mono">
        <p className="text-xs text-muted-foreground mb-2 uppercase tracking-widest">
          {uk ? 'МАНІФЕСТ OPENRML v.1.0' : 'OPENRML MANIFESTO v.1.0'}
        </p>
        <h1 className="text-3xl font-bold mb-3">
          {uk ? 'ФІЛОСОФІЯ OPENRML' : 'OPENRML PHILOSOPHY'}
        </h1>
        <p className="text-sm text-muted-foreground mb-2">
          {uk
            ? 'Філософія відкритого стандарту для людських та AI-ролей'
            : 'Philosophy of the open standard for human and AI roles'}
        </p>
        <p className="text-sm italic">
          {uk ? '"Кожен може стати архітектором смислів"' : '"Everyone can become an architect of meaning"'}
        </p>
        <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground grid grid-cols-2 gap-2">
          <span>Format: *.orml.txt</span>
          <span>License: CC-BY-4.0</span>
        </div>
      </div>

      <div className="space-y-16">

        {/* I. Preamble */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? 'I. ВІД ЛАМПИ ДО АРХІТЕКТУРИ' : 'I. FROM LAMP TO ARCHITECTURE'}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{uk ? 'Нам дали Лампу Аладдіна.' : 'We have been given Aladdin\'s Lamp.'}</p>
            <p>{uk
              ? 'Вона виконує нескінченну кількість бажань. Але більшість труть її навмання, отримуючи пил замість палаців. Ми втрачаємо трильйони доларів інтелектуального потенціалу, бо людство не має мови, якою можна пояснити Джину — ким бути.'
              : 'It grants infinite wishes. But most rub it blindly, getting dust instead of palaces. We lose trillions of dollars in intellectual potential because humanity lacks the language to explain to the Genie who to be.'}</p>
            <p className="font-medium text-foreground">
              {uk
                ? 'OpenRML (Open Role Markup Language) — перша спроба створити таку мову.'
                : 'OpenRML (Open Role Markup Language) is the first attempt to create such a language.'}
            </p>
            <p>{uk
              ? 'Це не просто формат файлу. Це когнітивний контракт між людиною та AI. Це ДНК особистості, яку можна передати, змінити, покращити і запустити будь-де.'
              : 'This is not just a file format. It\'s a cognitive contract between human and AI. It\'s the DNA of a personality that can be transmitted, modified, improved, and launched anywhere.'}</p>
          </div>
        </section>

        {/* II. What is a role */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? 'II. ЩО ТАКЕ РОЛЬ У *.orml.txt' : 'II. WHAT IS A ROLE IN *.orml.txt'}
          </h2>
          <p className="text-muted-foreground mb-6">{uk
            ? 'Роль — це не промпт. Промпт — це крик у порожнечу. Роль — це архітектурний план особистості.'
            : 'A role is not a prompt. A prompt is a shout into the void. A role is an architectural blueprint of a personality.'}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-6 font-mono text-muted-foreground">{uk ? 'Компонент' : 'Component'}</th>
                  <th className="text-left py-2 font-mono text-muted-foreground">{uk ? 'Що це в метафорі' : 'What it is in metaphor'}</th>
                </tr>
              </thead>
              <tbody>
                {(uk ? [
                  ['IDENTITY', "Ім'я Джина, походження, версія душі"],
                  ['BEHAVIOR', 'Темперамент, цінності, табу (що дозволено і заборонено)'],
                  ['EXPERTISE', 'Багаж знань, інструменти, книги на полиці'],
                  ['JOURNEY', 'Маршрутна карта, якою Джин веде людину'],
                  ['MEMORY', 'Що пам\'ятати і що забути'],
                  ['ETHICS', 'Стоп-перемикачі, які не можна перейти'],
                  ['LICENSE', 'Кому належить ця душа'],
                ] : [
                  ['IDENTITY', "The Genie's name, origin, version of soul"],
                  ['BEHAVIOR', 'Temperament, values, taboos (what\'s allowed and forbidden)'],
                  ['EXPERTISE', 'Baggage of knowledge, tools, books on the shelf'],
                  ['JOURNEY', 'The roadmap the Genie guides the person through'],
                  ['MEMORY', 'What to remember and what to forget'],
                  ['ETHICS', 'Stop-switches that cannot be crossed'],
                  ['LICENSE', 'Who owns this soul'],
                ]).map(([comp, meta], i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 pr-6 font-mono font-bold text-foreground">{comp}</td>
                    <td className="py-3 text-muted-foreground">{meta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">{uk
            ? 'Це мінімальна когнітивна одиниця. Атом поведінки. З таких атомів будується все — від шкільного вчителя до психотерапевта, від кар\'єрного консультанта до друга.'
            : 'This is the minimal cognitive unit. An atom of behavior. From such atoms, everything is built — from a school teacher to a psychotherapist, from a career consultant to a friend.'}</p>
        </section>

        {/* III. Principles */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? 'III. ФІЛОСОФСЬКІ ПРИНЦИПИ OPENRML' : 'III. PHILOSOPHICAL PRINCIPLES OF OPENRML'}
          </h2>
          <div className="space-y-6">
            {principles.map((p, i) => (
              <div key={i} className="pl-6 border-l-2 border-border">
                <h3 className="font-bold mb-2">
                  {uk ? `Принцип ${i + 1}. ${p.title}` : `Principle ${i + 1}. ${p.title}`}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* IV. Architect's Manifesto */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? "IV. МАНІФЕСТ АРХІТЕКТОРА" : "IV. ARCHITECT'S MANIFESTO"}
          </h2>
          <div className="border border-border p-8 font-mono space-y-3 text-sm">
            {(uk ? [
              'Я — архітектор смислів.',
              'Я не шукаю готових відповідей.',
              'Я створюю простір, де відповіді народжуються.',
              '',
              'Я більше не тру лампу навмання.',
              'Я проєктую Джина, який мені потрібен.',
              '',
              'Мій інструмент — .orml.txt.',
              'Моя бібліотека — відкритий хаб ролей.',
              'Моя школа — код, написаний іншими архітекторами.',
              '',
              'Я вірю, що кожен заслуговує на особистого Сократа.',
              'Кожен заслуговує на терапію, а не лише на відповіді.',
              'Кожен може стати автором, а не лише споживачем.',
              '',
              'Я не віддаю свою лампу корпораціям.',
              'Я ділюся кресленнями.',
              'Я навчаю інших правильно терти.',
            ] : [
              'I am an architect of meanings.',
              'I don\'t search for ready answers.',
              'I create the space where answers are born.',
              '',
              'I no longer rub the lamp blindly.',
              'I design the Genie I need.',
              '',
              'My tool — .orml.txt.',
              'My library — open hub of roles.',
              'My school — code written by other architects.',
              '',
              'I believe that everyone deserves a personal Socrates.',
              'Everyone deserves therapy, not just answers.',
              'Everyone can become an author, not just a consumer.',
              '',
              'I don\'t give my lamp to corporations.',
              'I share blueprints.',
              'I teach others how to rub.',
            ]).map((line, i) => line === '' ? <br key={i} /> : <p key={i} className="text-muted-foreground">{line}</p>)}
          </div>
        </section>

        {/* V. File structure */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? 'V. СТРУКТУРА ФАЙЛУ *.orml.txt' : 'V. STRUCTURE OF *.orml.txt FILE'}
          </h2>
          <pre className="text-xs font-mono bg-secondary/30 border border-border rounded-lg p-6 overflow-x-auto leading-relaxed text-muted-foreground whitespace-pre">
{`OpenRML 1.0 — [Role Name] [draft/published]
IDENTITY: ORML/XX/1.0.0/[hash-segments]
REFERENCE: orml://[author]/[role]/[version]
LICENSE: [CC-BY-4.0/MIT/...]

🌐 LANGUAGE POLICY
ROLE_LANG: ua
RESPONSE_LANG: auto
SUPPORTED_LANGS: ua, en, zh, es, fr

📋 STEP 1: BASE INFORMATION
  Role Name: [Name]
  Archetype: [analyst/creator/guardian/healer/...]
  Main Goal: [Main goal]

💬 STEP 3: BEHAVIOR & TONE
  Greeting: [Greeting]
  Should Do:    ✓ [What the role should do]
  Should Not Do: ✗ [What the role should NOT do]

🎯 STEP 4: EXPERTISE
  Tools & Methods: [Tools]

🗺️ STEP 5: JOURNEY
  Session 1: [Session name]
    Goal / Steps / Outcome

⚖️ STEP 8: ETHICS
  [STOP] [Absolutely forbidden]
  [WARN] [Warning — refer to specialist]

🧠 MEMORY
  Hot Memory / Warm Memory / Cold Memory`}
          </pre>
        </section>

        {/* VI. Why now */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? 'VI. ЧОМУ ЦЕ ВАЖЛИВО ЗАРАЗ' : 'VI. WHY THIS IS IMPORTANT RIGHT NOW'}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{uk
              ? 'Світ втрачає трильйони доларів інтелектуального потенціалу, бо люди не вміють "терти лампу".'
              : 'The world is losing trillions of dollars in intellectual potential because people don\'t know how to "rub the lamp."'}</p>
            <p>{uk ? 'Вони отримують:' : 'They get:'}</p>
            <ul className="space-y-1 pl-4 text-sm">
              {(uk ? [
                'замість Сократа — базіку',
                'замість терапевта — моралізатора',
                'замість ментора — генератор шаблонів',
              ] : [
                'instead of Socrates — a chatterbox',
                'instead of a therapist — a moralizer',
                'instead of a mentor — a template generator',
              ]).map((item, i) => <li key={i}>— {item}</li>)}
            </ul>
            <p className="font-medium text-foreground">{uk
              ? 'OpenRML — це не просто стандарт. Це вакцинація проти інформаційного інфантилізму. Це спосіб сказати Джину: "Ось ким ти маєш бути, щоб я зміг стати тим, ким хочу".'
              : 'OpenRML is not just a standard. It\'s vaccination against information infantilism. It\'s a way to tell the Genie: "This is who you should be, so I can become who I want."'}</p>
          </div>
        </section>

        {/* VII. Call to action */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? 'VII. ЗАКЛИК ДО ДІЇ' : 'VII. CALL TO ACTION'}
          </h2>
          <div className="space-y-4">
            {(uk ? [
              { num: '1', title: 'Візьми роль як шаблон', body: 'Відкрий файл .orml.txt. Подивись, як побудована архітектура.' },
              { num: '2', title: 'Створи свою', body: 'Використай конструктор на RolesAI.life. Експортуй у форматі .orml.txt.' },
              { num: '3', title: 'Поклади у відкритий хаб', body: 'Поділись з іншими. Отримай зворотний зв\'язок.' },
              { num: '4', title: 'Навчай інших', body: 'Покажи друзям. Напиши гайд. Створи свій шаблон.' },
            ] : [
              { num: '1', title: 'Take a role as a template', body: 'Open the .orml.txt file. See how the architecture is built.' },
              { num: '2', title: 'Create your own', body: 'Use the constructor at RolesAI.life. Export in .orml.txt format.' },
              { num: '3', title: 'Put it in the open hub', body: 'Share with others. Get feedback.' },
              { num: '4', title: 'Teach others', body: 'Show friends. Write a guide. Create your template.' },
            ]).map((step, i) => (
              <div key={i} className="flex gap-4 border border-border rounded-lg p-5">
                <span className="font-mono text-2xl font-bold text-muted-foreground/30 shrink-0">0{step.num}</span>
                <div>
                  <h3 className="font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="border border-border p-8 font-mono text-center">
          <p className="text-lg font-bold mb-1">OPENRML 2026–2036</p>
          <p className="text-sm text-muted-foreground mb-2">Format: *.orml.txt</p>
          <p className="text-sm italic text-muted-foreground">{uk ? '"Не три навмання. Будуй."' : '"Don\'t rub blindly. Build."'}</p>
          <p className="text-xs text-muted-foreground mt-4">OpenRML Team • 2026 • FromUA.Life</p>
        </div>

      </div>
    </div>
  )
}
