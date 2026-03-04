// app/why/data/reasons.ts
export interface Reason {
  icon: string
  title: string
  subtitle: string
  content: string
}

export const REASONS_EN: Reason[] = [
  {
    icon: '🔬',
    title: 'Lived Experience Instead of Theory',
    subtitle: '"While others studied resilience, we practiced it daily."',
    content: 'Most psychological methods are created in stable environments—university campuses, private practices in London or New York, research centers with air conditioning. FromUA was created by people who actually live in VUCA ×10: under rocket fire, during blackouts, with the loss of loved ones, with chronic sleep deprivation and anxiety. The difference: we know what works and what doesn\'t, not from textbooks, but from experience.',
  },
  {
    icon: '🏗️',
    title: 'Structure as a Form of Care',
    subtitle: 'When the world is falling apart, the worst thing is having to make decisions.',
    content: 'Our roles remove this burden. Each role provides clear steps: "Do this. Then this. And then this." This isn\'t control. This is care. We\'ve already thought it through for you, so you can just breathe and take steps. In VUCA ×10, structure = love.',
  },
  {
    icon: '🔓',
    title: 'Openness = Resilience',
    subtitle: 'Closed systems die in a crisis.',
    content: 'An app can shut down. A company can go bankrupt. A subscription can become unaffordable. Our roles are .txt files. You download them once and have them forever. Even if our site disappears, even if the internet is cut off, even if ChatGPT is blocked in your country—the file remains with you. The open protocol RML 0.9.1 can be forked, adapted, translated, and improved. This is infrastructure, not a product.',
  },
  {
    icon: '🤝',
    title: 'Collective Wisdom, Individual Path',
    subtitle: 'Each role accumulates the experience of thousands of Ukrainians.',
    content: 'Veterans who have been through the front lines, IDPs who have lost their homes, mothers who have buried their children, psychologists who have worked with trauma every day. But each session is your unique path. Your grief, your trauma, your pace. The paradox: the structure is universal, the experience is unique.',
  },
  {
    icon: '🔧',
    title: 'Technology as a Tool for Expansion, Not Replacement',
    subtitle: 'We don\'t believe in "AI will replace therapists."',
    content: 'We believe in "AI will expand human capabilities." Our roles do not treat, do not diagnose, do not give medical advice. They accompany, structure, and support. The therapist remains the therapist. Friends remain friends. But you gain a tool that works when no one else is around.',
  },
]

export const REASONS_UA: Reason[] = [
  {
    icon: '🔬',
    title: 'Lived Experience замість теорії',
    subtitle: '«Поки інші вивчали resilience, ми практикували його щодня.»',
    content: 'Більшість психологічних методик створені в stable environments — університетських кампусах, приватних практиках у Лондоні чи Нью-Йорку, дослідницьких центрах із кондиціонером. FromUA створено людьми, які реально живуть у VUCA ×10: під ракетними обстрілами, у блекаутах, з втратами близьких, з хронічним недосипанням і тривогою. Різниця: ми знаємо, що працює, а що — ні, не з підручників, а з досвіду.',
  },
  {
    icon: '🏗️',
    title: 'Структура як форма турботи',
    subtitle: 'Коли світ валиться, найгірше — це необхідність приймати рішення.',
    content: 'Наші ролі знімають це навантаження. Кожна роль дає чіткі кроки: «Зроби це. Потім це. А потім це.» Це не контроль. Це турбота. Ми вже подумали за вас, щоб ви могли просто дихати і робити кроки. У VUCA ×10 структура = любов.',
  },
  {
    icon: '🔓',
    title: 'Відкритість = стійкість',
    subtitle: 'Закриті системи вмирають у кризу.',
    content: 'Додаток може закритися. Компанія може збанкрутувати. Підписка може стати непідйомною. Наші ролі — це .txt файли. Ви завантажуєте їх один раз і маєте назавжди. Навіть якщо наш сайт зникне, навіть якщо інтернет вимкнуть, навіть якщо ChatGPT заблокують у вашій країні — файл залишиться у вас. Відкритий протокол RML 0.9.1 можна форкати, адаптувати, перекладати, покращувати. Це інфраструктура, а не продукт.',
  },
  {
    icon: '🤝',
    title: 'Колективна мудрість, індивідуальний шлях',
    subtitle: 'Кожна роль акумулює досвід тисяч українців.',
    content: 'Ветеранів, які пройшли фронт, ВПО, які втратили дім, матерів, які ховали дітей, психологів, які працювали з травмою щодня. Але кожна сесія — це ваш унікальний шлях. Ваше горе, ваша травма, ваш темп. Парадокс: структура загальна, досвід — унікальний.',
  },
  {
    icon: '🔧',
    title: 'Технологія як інструмент розширення, а не заміни',
    subtitle: 'Ми не віримо в "AI замінить терапевта."',
    content: 'Ми віримо в "AI розширить можливості людини." Наші ролі не лікують, не ставлять діагнозів, не дають медичних рекомендацій. Вони супроводжують, структурують, підтримують. Терапевт залишається терапевтом. Друзі залишаються друзями. Але у вас з\'являється інструмент, який працює, коли нікого немає поруч.',
  },
]