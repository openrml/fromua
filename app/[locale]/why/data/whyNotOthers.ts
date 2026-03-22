// app/why/data/whyNotOthers.ts
export interface WhyNotItem {
  title: string
  items?: string[]
  content?: string
  conclusion?: string
}

export const WHY_NOT_OTHERS_EN: WhyNotItem[] = [
  {
    title: 'Motivational Quotes Don\'t Work in a Crisis',
    items: [
      '"Be strong" → The person feels guilty for being weak.',
      '"Everything will be fine" → The person knows it won\'t be.',
      '"You\'ve got this" → The person isn\'t sure they do.',
    ],
    conclusion: 'Our roles don\'t motivate. They structure the chaos.',
  },
  {
    title: 'Therapy Isn\'t Always Accessible',
    content: 'Expensive. Time-consuming. Waiting lists. Stigma. Lack of specialists. Our roles aren\'t a replacement, but a bridge to therapy and support when therapy isn\'t available.',
  },
  {
    title: 'Medication Doesn\'t Solve the Problem',
    content: 'Antidepressants are important, but they don\'t teach you to live with loss, don\'t provide a structure for grief, and don\'t help you find meaning. Our roles address what medication cannot.',
  },
  {
    title: 'Talking to Friends Doesn\'t Always Help',
    content: 'Friends get tired. Friends have their own problems. Friends don\'t always know what to say. Roles don\'t get tired, don\'t judge, and don\'t disappear.',
  },
]

export const WHY_NOT_OTHERS_UA: WhyNotItem[] = [
  {
    title: 'Мотиваційні цитати не працюють у кризі',
    items: [
      '«Будь сильним» → людина відчуває провину, що вона слабка.',
      '«Все буде добре» → людина знає, що не буде.',
      '«Ти впораєшся» → людина не впевнена, що впорається.',
    ],
    conclusion: 'Наші ролі не мотивують. Вони структурують хаос.',
  },
  {
    title: 'Терапія не завжди доступна',
    content: 'Дорого. Довго. Черги. Стигма. Відсутність спеціалістів. Наші ролі — не заміна, а міст до терапії і підтримка, коли терапії немає.',
  },
  {
    title: 'Ліки не вирішують проблему',
    content: 'Антидепресанти важливі, але вони не вчать жити з втратою, не дають структури для горя, не допомагають знайти сенс. Наші ролі працюють з тим, що ліки не закривають.',
  },
  {
    title: 'Розмови з друзями не завжди допомагають',
    content: 'Друзі втомлюються. Друзі мають свої проблеми. Друзі не завжди знають, що сказати. Ролі не втомлюються, не засуджують, не зникають.',
  },
]