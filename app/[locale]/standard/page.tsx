import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const title = locale === 'uk' ? '🔓 Стандарт OpenRML' : '🔓 OpenRML Standard'
  const description = locale === 'uk'
    ? 'Open Role Markup Language — відкрита специфікація для структурованих AI-ролей. Не формат промптів. Протокол.'
    : 'Open Role Markup Language — an open specification for structured AI roles. Not a prompt format. A protocol.'
  return {
    title, description,
    alternates: {
      canonical: `https://fromua.life/${locale}/standard`,
      languages: { en: 'https://fromua.life/en/standard', uk: 'https://fromua.life/uk/standard', 'x-default': 'https://fromua.life/uk/standard' },
    },
  }
}

export default async function StandardPage({ params }: Props) {
  const { locale } = await params
  const uk = locale === 'uk'

  const breadcrumbItems = [
    { label: uk ? 'Головна' : 'Home', href: `/${locale}` },
    { label: uk ? 'Стандарт OpenRML' : 'OpenRML Standard', href: `/${locale}/standard` },
  ]

  const archLayers = uk ? [
    { layer: 'База', code: 'BASE', desc: 'Основний поведінковий мандат та первинна функція' },
    { layer: 'Візуальний', code: 'VIS', desc: 'Стиль комунікації, регістр тону та мовні патерни' },
    { layer: 'Тон', code: 'TONE', desc: 'Емоційне калібрування — як роль відчувається в розмові' },
    { layer: 'Експертиза', code: 'EXP', desc: 'Межа предметних знань та визначення можливостей' },
    { layer: 'Шлях', code: 'JRNY', desc: 'Дуга сесії — як взаємодія розвивається з часом' },
    { layer: 'Команда', code: 'TEAM', desc: 'Модель співпраці — як роль співвідноситься з агентністю користувача' },
    { layer: "Пам'ять", code: 'MEM', desc: 'Управління станом — що роль відстежує та зберігає' },
    { layer: 'Етика', code: 'ETH', desc: 'Обмеження, відмови та межі безпеки' },
  ] : [
    { layer: 'Base', code: 'BASE', desc: 'Core behavioral mandate and primary function' },
    { layer: 'Visual', code: 'VIS', desc: 'Communication style, tone register, and language patterns' },
    { layer: 'Tone', code: 'TONE', desc: 'Emotional calibration — how the role feels in conversation' },
    { layer: 'Expertise', code: 'EXP', desc: 'Domain knowledge boundary and capability definition' },
    { layer: 'Journey', code: 'JRNY', desc: 'Session arc — how the interaction progresses over time' },
    { layer: 'Team', code: 'TEAM', desc: 'Collaboration model — how the role relates to user agency' },
    { layer: 'Memory', code: 'MEM', desc: 'State management — what the role tracks and retains' },
    { layer: 'Ethics', code: 'ETH', desc: 'Constraints, refusals, and safety boundaries' },
  ]

  const licenses = uk ? [
    { id: 'CC-BY-4.0', label: 'Вільне з атрибуцією', desc: 'Більшість ролей. Використовуйте вільно з атрибуцією.' },
    { id: 'CC-BY-SA-4.0', label: 'Поширення на тих самих умовах', desc: 'Похідні ролі повинні мати ту саму ліцензію.' },
    { id: 'CC-BY-NC-4.0', label: 'Некомерційна', desc: 'Безкоштовно лише для особистого та дослідницького використання.' },
    { id: 'CUSTOM', label: 'Спеціальна', desc: 'Спеціалізовані ролі з окремими умовами.' },
  ] : [
    { id: 'CC-BY-4.0', label: 'Free with Attribution', desc: 'Most roles. Use freely, commercially or not, with attribution.' },
    { id: 'CC-BY-SA-4.0', label: 'Share Alike', desc: 'Derivative roles must use the same license.' },
    { id: 'CC-BY-NC-4.0', label: 'Non-Commercial', desc: 'Free for personal and research use only.' },
    { id: 'CUSTOM', label: 'Custom', desc: 'Specialized roles with specific terms. See individual role.' },
  ]

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
          {uk ? 'Документація протоколу' : 'Protocol Documentation'}
        </p>
        <h1 className="text-4xl font-bold mb-3">
          {uk ? '🔓 Стандарт OpenRML.' : '🔓 The OpenRML Standard.'}
        </h1>
        <p className="text-muted-foreground text-lg">{uk
          ? 'Open Role Markup Language — відкрита специфікація для структурованих AI-ролей. Не формат промптів. Протокол.'
          : 'Open Role Markup Language — an open specification for structured AI roles. Not a prompt format. A protocol.'}</p>
      </div>

      <div className="space-y-16">

        {/* What is OpenRML */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? 'Що таке OpenRML' : 'What is OpenRML'}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{uk
              ? 'OpenRML (Open Role Markup Language) — відкритий протокол для визначення структурованих AI-ролей. Роль у OpenRML — це не промпт, а повна поведінкова специфікація з ідентичністю, архітектурними шарами, структурою сесії, етичними обмеженнями та версіонованою ідентичністю.'
              : 'OpenRML (Open Role Markup Language) is an open protocol for defining structured AI roles. A role in OpenRML is not a prompt — it is a complete behavioral specification with identity, architecture layers, session structure, ethics constraints, and versioned identity.'}</p>
            <p>{uk
              ? 'Ролі OpenRML розроблені як LLM-агностичні, переносні між мовами та вільно розповсюджувані. Валідна OpenRML-роль працює в будь-якій великій мовній моделі без модифікацій.'
              : 'OpenRML roles are designed to be LLM-agnostic, language-portable, and freely redistributable. A valid OpenRML role works in any major language model without modification.'}</p>
            <div className="border border-border rounded-lg p-4 font-mono text-sm bg-secondary/30">
              <p className="text-xs text-muted-foreground mb-2">{uk ? 'Стандартний формат URI-посилання:' : 'Standard reference URI format:'}</p>
              <p>orml://[author]/[role-name]/[version]</p>
            </div>
          </div>
        </section>

        {/* Role vs Prompt */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? 'Чому роль ≠ промпт' : 'Why Role ≠ Prompt'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-border rounded-lg p-6">
              <h3 className="font-bold mb-4 text-muted-foreground">{uk ? 'Промпт' : 'Prompt'}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {(uk ? ['Одна інструкція або запит','Немає постійної ідентичності','Немає дуги сесії','Немає етичного шару','Немає версіонування','Контекстно-залежна поведінка'] : ['Single instruction or query','No persistent identity','No session arc','No ethics layer','No versioning','Context-dependent behavior']).map((i, k) => (
                  <li key={k} className="flex items-center gap-2"><span className="text-red-400">✗</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="border border-foreground rounded-lg p-6">
              <h3 className="font-bold mb-4">{uk ? 'OpenRML Роль' : 'OpenRML Role'}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {(uk ? ['Повна поведінкова специфікація','Унікальна криптографічна ідентичність','Визначена структура сесії','Явні етичні обмеження','Семантичне версіонування','Відтворювана поведінка'] : ['Complete behavioral specification','Unique cryptographic identity','Defined session structure','Explicit ethics constraints','Semantic versioning','Reproducible behavior']).map((i, k) => (
                  <li key={k} className="flex items-center gap-2"><span className="text-green-500">✓</span>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Identity */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? 'Система ідентичності' : 'Identity System'}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{uk
              ? 'Кожна OpenRML-роль має унікальний рядок ідентичності — детермінований хеш, похідний від вмісту ролі, категорії та версії. Рядки ідентичності є постійними: якщо вміст ролі змінюється — змінюється її ідентичність. Це гарантує цілісність ролі при розгортанні.'
              : 'Every OpenRML role has a unique identity string — a deterministic hash derived from the role\'s content, category, and version. Identity strings are permanent: if a role\'s content changes, its identity changes. This ensures role integrity across deployments.'}</p>
            <div className="border border-border rounded-lg p-4 font-mono text-xs bg-secondary/30 overflow-x-auto">
              <p className="text-muted-foreground mb-2">{uk ? 'Формат ідентичності:' : 'Identity format:'}</p>
              <p>ORML/[CATEGORY]/[VERSION]/[ID]/[HASH-A]/[HASH-B]/[HASH-C]</p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-muted-foreground">
                {(uk ? [
                  ['КАТЕГОРІЯ', 'PS, EC, FR, RR, SP'],
                  ['ВЕРСІЯ', 'Семантична — 1.0.0'],
                  ['ID', '4-значний номер ролі'],
                  ['ХЕШ', '3 × 4-символьний хеш вмісту'],
                ] : [
                  ['CATEGORY', 'PS, EC, FR, RR, SP'],
                  ['VERSION', 'Semantic — 1.0.0'],
                  ['ID', '4-digit role number'],
                  ['HASH', '3 × 4-char content hash'],
                ]).map(([k, v], i) => (
                  <div key={i}><span className="text-foreground">{k}:</span> {v}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Architecture layers */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? 'Архітектурні шари' : 'Architecture Layers'}
          </h2>
          <p className="text-muted-foreground mb-6">{uk
            ? 'Кожна OpenRML-роль складається з восьми обов\'язкових архітектурних шарів. Кожен шар контролює певний вимір поведінки ролі.'
            : 'Every OpenRML role is composed of eight mandatory architecture layers. Each layer controls a specific dimension of the role\'s behavior.'}</p>
          <div className="space-y-2">
            {archLayers.map((l, i) => (
              <div key={i} className="flex items-start gap-4 p-4 border border-border rounded-lg">
                <span className="font-mono text-xs font-bold bg-secondary px-2 py-1 rounded shrink-0">{l.code}</span>
                <div>
                  <p className="font-bold text-sm">{l.layer}</p>
                  <p className="text-sm text-muted-foreground">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Versioning */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? 'Стратегія версіонування' : 'Versioning Strategy'}
          </h2>
          <p className="text-muted-foreground mb-6">{uk
            ? 'OpenRML використовує семантичне версіонування: MAJOR.MINOR.PATCH. Версія 1.0.0 є поточною публічною специфікацією.'
            : 'OpenRML uses semantic versioning: MAJOR.MINOR.PATCH. Version 1.0.0 is the current public specification.'}</p>
          <div className="grid md:grid-cols-3 gap-4">
            {(uk ? [
              { seg: 'MAJOR', desc: 'Зміни, що порушують сумісність', ex: '2.0.0' },
              { seg: 'MINOR', desc: 'Нові можливості, зворотна сумісність', ex: '1.1.0' },
              { seg: 'PATCH', desc: 'Виправлення помилок та уточнення', ex: '1.0.1' },
            ] : [
              { seg: 'MAJOR', desc: 'Breaking protocol changes', ex: '2.0.0' },
              { seg: 'MINOR', desc: 'New capabilities, backwards compatible', ex: '1.1.0' },
              { seg: 'PATCH', desc: 'Bug fixes, clarifications', ex: '1.0.1' },
            ]).map((v, i) => (
              <div key={i} className="border border-border rounded-lg p-5">
                <p className="font-mono font-bold mb-1">{v.seg}</p>
                <p className="text-sm text-muted-foreground mb-2">{v.desc}</p>
                <p className="font-mono text-xs text-muted-foreground">{uk ? 'Приклад:' : 'Example:'} {v.ex}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Licensing */}
        <section>
          <h2 className="text-xl font-bold font-mono mb-6 pb-3 border-b border-border">
            {uk ? 'Модель ліцензування' : 'Licensing Model'}
          </h2>
          <div className="space-y-3">
            {licenses.map((l, i) => (
              <div key={i} className="flex items-start gap-4 p-4 border border-border rounded-lg">
                <span className="font-mono text-xs font-bold bg-secondary px-2 py-1 rounded shrink-0 whitespace-nowrap">{l.id}</span>
                <div>
                  <p className="font-bold text-sm">{l.label}</p>
                  <p className="text-sm text-muted-foreground">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick ref */}
        <div className="border border-border rounded-lg p-6 bg-secondary/30">
          <h3 className="font-mono font-bold text-sm uppercase tracking-widest mb-4">{uk ? 'Поточна версія' : 'Current Version'}</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div><span className="text-muted-foreground">{uk ? 'Версія:' : 'Version:'}</span> <span className="font-mono font-bold">1.0.0</span></div>
            <div><span className="text-muted-foreground">{uk ? 'Статус:' : 'Status:'}</span> <span className="font-mono">Public</span></div>
            <div><span className="text-muted-foreground">{uk ? 'Формат файлу:' : 'File format:'}</span> <span className="font-mono">*.orml.txt</span></div>
            <div><span className="text-muted-foreground">{uk ? 'Ліцензія:' : 'License:'}</span> <span className="font-mono">CC-BY-4.0</span></div>
          </div>
        </div>

      </div>
    </div>
  )
}
