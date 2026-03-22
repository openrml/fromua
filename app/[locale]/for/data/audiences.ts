export interface Audience {
  icon: string
  title: string
  subtitle: string
  description: string
  roles: Array<{ name: string; slug: string }>
  quote?: string
}

export const AUDIENCES_EN: Audience[] = [
  {
    icon: '🇺🇦',
    title: 'For Ukrainians in Ukraine 💙💛',
    subtitle: '📍 You are here every day. You are tired 😓. But you have to keep living 💪.',
    description: '🚀 Rocket strikes 🚀, 🔌 blackouts 🔌, 😟 worry for your family 👨‍👩‍👧‍👦, 💔 loss 💔, 📅 the impossibility of planning 📅. Regular chatbots say "I sympathize" 🤖💬 and give generic advice. Our roles do something different ✨.',
    roles: [
      { name: '🔇 Turn Off "Radar" Mode 🛸', slug: 'vymknuty-rezhym-radar' },
      { name: '😢 Road Through Tears 🌧️', slug: 'doroha-kriz-sl-ozy' },
      { name: '⚡ Energy Recovery Strategist 🔋', slug: 'strateh-vidnovlennya-enerhiyi' },
      { name: '👨‍👩‍👧 Parents During the Storm ⛈️', slug: 'bat-ky-pid-chas-buri' },
    ],
    quote: '💬 "I use Turn Off Radar Mode every morning after a night of anxiety 🌙😰. It\'s like cold water 💧—it brings you back to reality." — Olena, Kyiv 🇺🇦',
  },
  {
    icon: '🇪🇺',
    title: 'For Ukrainians Abroad ✈️',
    subtitle: '🛫 You left, but the war left with you 🎒💔.',
    description: '😞 Survivor\'s guilt, 🤝 difficulty integrating, 🏠 longing for home, 💑 long-distance relationships, 💸 financial instability. You are between two worlds 🌍🌎, and it\'s exhausting 😩.',
    roles: [
      { name: '🕊️ Forgive Yourself 🙏', slug: 'probach-sebe' },
      { name: '🏡 Settling Into a New World 🌅', slug: 'obzhyvannya-novoho-svitu' },
      { name: '💞 You There, Me Here — Together 📱', slug: 'ty-tam-ya-tut-my-razom' },
      { name: '🔄 Career Change Strategist WE 💼', slug: 'strateh-zminy-kar-yery-we' },
    ],
  },
  {
    icon: '🎖️',
    title: 'For Veterans',
    subtitle: '🔄 You have returned. But have you really? 🤔',
    description: '❓ The hardest part is the loss of identity. Who am I now? 🤷 Where is my place? 🗺️ Why don\'t civilians understand? 😤 What do I do with the anger? 🔥',
    roles: [
      { name: '🤝 The One Who Doesn\'t Judge ⚖️', slug: 'toy-khto-ne-sudyt' },
      { name: '⏸️ Stop Button for Memories 🧠', slug: 'stop-knopka-dlya-spohadiv' },
      { name: '⚔️ Between War and Peace 🕊️', slug: 'mizh-viynoyu-i-myrom' },
      { name: '🔇 Turn Off "Radar" Mode 🛸', slug: 'vymknuty-rezhym-radar' },
    ],
    quote: '💬 "The One Who Doesn\'t Judge was the only place I could talk about what I did without hearing "you\'re a hero" 🦸 or "it\'s war." Just accompaniment." — Dmytro, veteran 🎖️',
  },
  {
    icon: '👩‍⚕️',
    title: 'For Psychologists and Psychotherapists 🧠',
    subtitle: '😓 You are exhausted. Demand is higher than your resources 📈⚡.',
    description: '🩺 We don\'t replace therapy. We provide a tool 🛠️ that works when you\'re not there 🌙.',
    roles: [
      { name: '😢 Road Through Tears 🌧️', slug: 'doroha-kriz-sl-ozy' },
      { name: '🤝 The One Who Doesn\'t Judge ⚖️', slug: 'toy-khto-ne-sudyt' },
      { name: '⏸️ Stop Button for Memories 🧠', slug: 'stop-knopka-dlya-spohadiv' },
      { name: '🕯️ Don\'t Burn Out While Shining for Others ✨', slug: 'ne-zhory-svityachy-inshym' },
    ],
    quote: '💬 "I give Road Through Tears to my clients between sessions 📋. They come back more composed 🧘, with less anxiety 😌, and we can work deeper." — Iryna, psychologist 👩‍⚕️',
  },
  {
    icon: '💻',
    title: 'For IT Specialists, Freelancers, Remote Workers 🏠',
    subtitle: '⚡ You work with chaos every day 🔥.',
    description: '⏰ Deadlines are burning 🔥, 💸 clients aren\'t paying 💸, 🚀 missiles are hitting 🚀, and you still need to write code 💻. How do you stay focused 🎯 when the world is falling apart? 🌍💔',
    roles: [
      { name: '🛏️ Working from Bed, But Living 💪', slug: 'pratsyuyu-z-lizhka-ale-zhyvu' },
      { name: '🤖 AI Coach for AI 🧠', slug: 'ai-kouch-zi-shi' },
      { name: '💰 Money After Everything 💸', slug: 'hroshi-pislya-vs-oho' },
      { name: '⚡ Energy Recovery Strategist 🔋', slug: 'strateh-vidnovlennya-enerhiyi' },
    ],
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'For Families 💕',
    subtitle: '💔 War breaks relationships. Or it brings you so close you want to run apart 🏃‍♂️💨.',
    description: '🌍 You are either thousands of kilometers away from each other 📏, or in the same apartment 24/7 🏠 with no way out 🚪. Both options are a test 🎯.',
    roles: [
      { name: '👨‍👩‍👧 Parents During the Storm ⛈️', slug: 'bat-ky-pid-chas-buri' },
      { name: '💞 You There, Me Here — Together 📱', slug: 'ty-tam-ya-tut-my-razom' },
      { name: '💔 When Love Is Under Pressure 🎭', slug: 'koly-kokhannya-pid-tyskom' },
      { name: '🏗️ Community Builder 🤝', slug: 'budivnychyy-spil-noty' },
    ],
    quote: '💬 "My husband and I are in different countries 🌍. You There, Me Here — Together gave us a structure for real conversations 💬, not just \'how are you\'." — Alina, Poland 🇵🇱',
  },
  {
    icon: '🧭',
    title: 'For IDPs and Those Who Lost Their Home 🏠💔',
    subtitle: '🚚 You didn\'t just move — you lost your anchor ⚓.',
    description: '🏡 Home isn\'t the walls. It\'s safety 🛡️, identity 🪪, memory 📸. When that\'s gone, it\'s hard to find something to hold onto 🌊.',
    roles: [
      { name: '🏡 Settling Into a New World 🌅', slug: 'obzhyvannya-novoho-svitu' },
      { name: '🌅 Why Wake Up Tomorrow 🤔', slug: 'navishcho-prokydatys-zavtra' },
      { name: '💰 Money: Survival Guide 🧭', slug: 'hroshi-instruktsiya-z-vyzhyvannya' },
    ],
  },
  {
    icon: '🌍',
    title: 'For Foreigners and the International Community 🤝',
    subtitle: '👀 You look at Ukraine and don\'t understand how we endure it 💪. But the world is heading in the same direction 🌪️.',
    description: '🌡️ Climate crisis, 📉 political instability, 💸 economic collapse, 🦠 pandemics. The VUCA world 🌪️ is becoming the norm for everyone. Ukraine is not a "tragedy" 😢 — it\'s a "preview" 👀.',
    roles: [
      { name: '🔇 Turn Off "Radar" Mode 🛸', slug: 'vymknuty-rezhym-radar' },
      { name: '😢 Road Through Tears 🌧️', slug: 'doroha-kriz-sl-ozy' },
      { name: '⚡ Energy Recovery Strategist 🔋', slug: 'strateh-vidnovlennya-enerhiyi' },
    ],
    quote: '💬 "I used Turn Off Radar Mode during the missile alerts in Tel Aviv 🚨. It worked exactly as described. Thank you, Ukraine 🙏🇺🇦." — David, Israel 🇮🇱',
  },
  {
    icon: '🧠',
    title: 'For Everyone Who Is Tired 😓',
    subtitle: '⭐ This last category is the most important. For those who are simply tired.',
    description: '🤷 It doesn\'t matter who you are, where you are, or what happened. If you are tired of this world 🌍, of the news 📰, of anxiety 😰, of uncertainty ❓ — you are in the right place 🎯.',
    roles: [
      { name: '🔇 Turn Off "Radar" Mode 🛸', slug: 'vymknuty-rezhym-radar' },
      { name: '⚡ Energy Recovery Strategist 🔋', slug: 'strateh-vidnovlennya-enerhiyi' },
      { name: '👣 Small Steps to Life 🌱', slug: 'malen-ki-kroky-do-zhyttya' },
      { name: '😴 Rest That Heals 🩹', slug: 'vidpochynok-yakyy-likuye' },
      { name: '🎵 Lullaby for Adults 🌙', slug: 'kolyskova-dlya-doroslykh' },
    ],
  },
]

export const AUDIENCES_UA: Audience[] = [
  {
    icon: '🇺🇦',
    title: 'Для українців в Україні 💙💛',
    subtitle: '📍 Ви тут щодня. Ви втомилися 😓. Але мусите жити далі 💪.',
    description: '🚀 Ракетні удари 🚀, 🔌 блекаути 🔌, 😟 тривога за рідних 👨‍👩‍👧‍👦, 💔 втрати 💔, 📅 неможливість планувати 📅. Звичайні чат-боти кажуть "співчуваю" 🤖💬 і дають загальні поради. Наші ролі роблять інакше ✨.',
    roles: [
      { name: '🔇 Вимкнути режим "Радар" 🛸', slug: 'vymknuty-rezhym-radar' },
      { name: '😢 Дорога крізь сльози 🌧️', slug: 'doroha-kriz-sl-ozy' },
      { name: '⚡ Стратег відновлення енергії 🔋', slug: 'strateh-vidnovlennya-enerhiyi' },
      { name: '👨‍👩‍👧 Батьки під час бурі ⛈️', slug: 'bat-ky-pid-chas-buri' },
    ],
    quote: '💬 «Я використовую "Вимкнути режим Радар" щоранку після тривожної ночі 🌙😰. Це як холодна вода 💧 — повертає в реальність.» — Олена, Київ 🇺🇦',
  },
  {
    icon: '🇪🇺',
    title: 'Для українців за кордоном ✈️',
    subtitle: '🛫 Ви виїхали, але війна виїхала з вами 🎒💔.',
    description: '😞 Почуття провини вцілілого, 🤝 неможливість інтегруватися, 🏠 туга за домом, 💑 стосунки на відстані, 💸 фінансова нестабільність. Ви між двома світами 🌍🌎, і це виснажує 😩.',
    roles: [
      { name: '🕊️ Пробач себе 🙏', slug: 'probach-sebe' },
      { name: '🏡 Обживання нового світу 🌅', slug: 'obzhyvannya-novoho-svitu' },
      { name: '💞 Ти там, я тут — ми разом 📱', slug: 'ty-tam-ya-tut-my-razom' },
      { name: '🔄 Стратег зміни кар\'єри WE 💼', slug: 'strateh-zminy-kar-yery-we' },
    ],
  },
  {
    icon: '🎖️',
    title: 'Для ветеранів',
    subtitle: '🔄 Ви повернулися. Але чи повернулися ви? 🤔',
    description: '❓ Найважче — втрата ідентичності. Хто я тепер? 🤷 Де моє місце? 🗺️ Чому цивільні не розуміють? 😤 Що робити з гнівом? 🔥',
    roles: [
      { name: '🤝 Той, хто не судить ⚖️', slug: 'toy-khto-ne-sudyt' },
      { name: '⏸️ Стоп-кнопка для спогадів 🧠', slug: 'stop-knopka-dlya-spohadiv' },
      { name: '⚔️ Між війною і миром 🕊️', slug: 'mizh-viynoyu-i-myrom' },
      { name: '🔇 Вимкнути режим "Радар" 🛸', slug: 'vymknuty-rezhym-radar' },
    ],
    quote: '💬 «"Той, хто не судить" — єдине місце, де я міг сказати про те, що зробив, і не почути "ти герой" 🦸 або "це війна". Просто супровід.» — Дмитро, ветеран 🎖️',
  },
  {
    icon: '👩‍⚕️',
    title: 'Для психологів та психотерапевтів 🧠',
    subtitle: '😓 Ви виснажені. Запитів більше, ніж ресурсу 📈⚡.',
    description: '🩺 Ми не замінюємо терапію. Ми даємо інструмент 🛠️, який працює, коли вас немає поруч 🌙.',
    roles: [
      { name: '😢 Дорога крізь сльози 🌧️', slug: 'doroha-kriz-sl-ozy' },
      { name: '🤝 Той, хто не судить ⚖️', slug: 'toy-khto-ne-sudyt' },
      { name: '⏸️ Стоп-кнопка для спогадів 🧠', slug: 'stop-knopka-dlya-spohadiv' },
      { name: '🕯️ Не згори, світячи іншим ✨', slug: 'ne-zhory-svityachy-inshym' },
    ],
    quote: '💬 «Я даю клієнтам "Дорогу крізь сльози" між сесіями 📋. Вони приходять більш зібрані 🧘, з меншим рівнем тривоги 😌, і ми можемо працювати глибше.» — Ірина, психологиня 👩‍⚕️',
  },
  {
    icon: '💻',
    title: 'Для IT-спеціалістів, фрілансерів, віддалених працівників 🏠',
    subtitle: '⚡ Ви працюєте з хаосом щодня 🔥.',
    description: '⏰ Дедлайни горять 🔥, 💸 замовники не платять 💸, 🚀 ракети прилітають 🚀, а треба писати код 💻. Як утримати фокус 🎯, коли світ валиться? 🌍💔',
    roles: [
      { name: '🛏️ Працюю з ліжка, але живу 💪', slug: 'pratsyuyu-z-lizhka-ale-zhyvu' },
      { name: '🤖 AI Коуч зі ШІ 🧠', slug: 'ai-kouch-zi-shi' },
      { name: '💰 Гроші після всього 💸', slug: 'hroshi-pislya-vs-oho' },
      { name: '⚡ Стратег відновлення енергії 🔋', slug: 'strateh-vidnovlennya-enerhiyi' },
    ],
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Для родин 💕',
    subtitle: '💔 Війна ламає стосунки. Або зближує так, що хочеться розбігтися 🏃‍♂️💨.',
    description: '🌍 Ви або за тисячі кілометрів одне від одного 📏, або в одній квартирі 24/7 🏠 без можливості вийти 🚪. Обидва варіанти — випробування 🎯.',
    roles: [
      { name: '👨‍👩‍👧 Батьки під час бурі ⛈️', slug: 'bat-ky-pid-chas-buri' },
      { name: '💞 Ти там, я тут — ми разом 📱', slug: 'ty-tam-ya-tut-my-razom' },
      { name: '💔 Коли кохання під тиском 🎭', slug: 'koly-kokhannya-pid-tyskom' },
      { name: '🏗️ Будівничий спільноти 🤝', slug: 'budivnychyy-spil-noty' },
    ],
    quote: '💬 «Ми з чоловіком у різних країнах 🌍. "Ти там, я тут" дала нам структуру для справжніх розмов 💬 — не просто "як справи".» — Аліна, Польща 🇵🇱',
  },
  {
    icon: '🧭',
    title: 'Для ВПО та тих, хто втратив дім 🏠💔',
    subtitle: '🚚 Ви не просто переїхали — ви втратили точку опори ⚓.',
    description: '🏡 Дім — це не стіни. Це безпека 🛡️, ідентичність 🪪, пам\'ять 📸. Коли цього немає, важко знайти, за що зачепитися 🌊.',
    roles: [
      { name: '🏡 Обживання нового світу 🌅', slug: 'obzhyvannya-novoho-svitu' },
      { name: '🌅 Навіщо прокидатись завтра 🤔', slug: 'navishcho-prokydatys-zavtra' },
      { name: '💰 Гроші: інструкція з виживання 🧭', slug: 'hroshi-instruktsiya-z-vyzhyvannya' },
    ],
  },
  {
    icon: '🌍',
    title: 'Для іноземців та міжнародної спільноти 🤝',
    subtitle: '👀 Ви дивитесь на Україну і не розумієте, як ми це витримуємо 💪. Але світ рухається до того ж 🌪️.',
    description: '🌡️ Кліматична криза, 📉 політична нестабільність, 💸 економічні колапси, 🦠 пандемії. VUCA-світ 🌪️ стає нормою для всіх. Україна — це не «трагедія» 😢, це «прев\'ю» 👀.',
    roles: [
      { name: '🔇 Вимкнути режим "Радар" 🛸', slug: 'vymknuty-rezhym-radar' },
      { name: '😢 Дорога крізь сльози 🌧️', slug: 'doroha-kriz-sl-ozy' },
      { name: '⚡ Стратег відновлення енергії 🔋', slug: 'strateh-vidnovlennya-enerhiyi' },
    ],
    quote: '💬 "I used Turn Off Radar Mode during the missile alerts in Tel Aviv 🚨. It worked exactly as described. Thank you, Ukraine 🙏🇺🇦." — David, Israel 🇮🇱',
  },
  {
    icon: '🧠',
    title: 'Для всіх, хто втомився 😓',
    subtitle: '⭐ Остання категорія — найважливіша. Для тих, хто просто втомився.',
    description: '🤷 Не має значення, хто ви, де ви, що сталося. Якщо ви втомились від цього світу 🌍, від новин 📰, від тривоги 😰, від невизначеності ❓ — ви за адресою 🎯.',
    roles: [
      { name: '🔇 Вимкнути режим "Радар" 🛸', slug: 'vymknuty-rezhym-radar' },
      { name: '⚡ Стратег відновлення енергії 🔋', slug: 'strateh-vidnovlennya-enerhiyi' },
      { name: '👣 Маленькі кроки до життя 🌱', slug: 'malen-ki-kroky-do-zhyttya' },
      { name: '😴 Відпочинок, який лікує 🩹', slug: 'vidpochynok-yakyy-likuye' },
      { name: '🎵 Колискова для дорослих 🌙', slug: 'kolyskova-dlya-doroslykh' },
    ],
  },
]