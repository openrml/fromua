// app/for/data/audiences.ts
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
    title: 'For Ukrainians in Ukraine',
    subtitle: 'You are here every day. You are tired. But you have to keep living.',
    description: 'Rocket strikes, blackouts, worry for your family, loss, the impossibility of planning. Regular chatbots say "I sympathize" and give generic advice. Our roles do something different.',
    roles: [
      { name: 'Hypervigilance Manager', slug: 'hypervigilance-manager-en' },
      { name: 'Grief Companion', slug: 'grief-companion-en' },
      { name: 'Energy Recovery Strategist', slug: 'energy-recovery-strategist-en' },
      { name: 'Wartime Parenting Guide', slug: 'wartime-parenting-guide-en' },
    ],
    quote: '"I use Grounding Instructor every morning after a night of anxiety. It\'s like cold water—it brings you back to reality." — Olena, Kyiv',
  },
  {
    icon: '🇪🇺',
    title: 'For Ukrainians Abroad',
    subtitle: 'You left, but the war left with you.',
    description: 'Survivor\'s guilt, difficulty integrating, longing for home, long-distance relationships, financial instability. You are between two worlds, and it\'s exhausting.',
    roles: [
      { name: 'Guilt & Self-Compassion Guide', slug: 'guilt-self-compassion-guide-en' },
      { name: 'Relocation & Adaptation Buddy', slug: 'relocation-adaptation-buddy-en' },
      { name: 'Long-Distance Relationship Sustainer', slug: 'long-distance-relationship-sustainer-en' },
      { name: 'Career Pivot Strategist', slug: 'career-pivot-strategist-wartime-edition-en' },
    ],
  },
  {
    icon: '🎖️',
    title: 'For Veterans',
    subtitle: 'You have returned. But have you really?',
    description: 'The hardest part is the loss of identity. Who am I now? Where is my place? Why don\'t civilians understand? What do I do with the anger?',
    roles: [
      { name: 'Moral Injury Companion', slug: 'moral-injury-companion-en' },
      { name: 'Triggers & Flashbacks Navigator', slug: 'triggers-flashbacks-navigator-en' },
      { name: 'Veteran Reintegration Coach', slug: 'veteran-reintegration-coach-en' },
      { name: 'Hypervigilance Manager', slug: 'hypervigilance-manager-en' },
    ],
    quote: '"Moral Injury Companion was the only place I could talk about what I did and not hear \'you\'re a hero\' or \'it\'s war.\' Just accompaniment." — Dmytro, veteran',
  },
  {
    icon: '👩⚕️',
    title: 'For Psychologists and Psychotherapists',
    subtitle: 'You are exhausted. Demand is higher than your resources.',
    description: 'We don\'t replace therapy. We provide a tool that works when you\'re not there.',
    roles: [
      { name: 'Grief Companion', slug: 'grief-companion-en' },
      { name: 'Moral Injury Companion', slug: 'moral-injury-companion-en' },
      { name: 'Triggers & Flashbacks Navigator', slug: 'triggers-flashbacks-navigator-en' },
      { name: 'Hypervigilance Manager', slug: 'hypervigilance-manager-en' },
    ],
    quote: '"I give Grief Companion to my clients between sessions. They come back more composed, with less anxiety, and we can work deeper." — Iryna, psychologist',
  },
  {
    icon: '💻',
    title: 'For IT Specialists, Freelancers, Remote Workers',
    subtitle: 'You work with chaos every day.',
    description: 'Deadlines are burning, clients aren\'t paying, missiles are hitting, and you still need to write code. How do you stay focused when the world is falling apart?',
    roles: [
      { name: 'Routine & Structure Coach', slug: 'routine-structure-coach-en' },
      { name: 'Remote Work Wellness Coach', slug: 'remote-work-wellness-coach-en' },
      { name: 'AI Productivity Coach', slug: 'ai-productivity-coach-en' },
      { name: 'Income Recovery Planner', slug: 'income-recovery-planner-en' },
    ],
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'For Families',
    subtitle: 'War breaks relationships. Or it brings you so close you want to run apart.',
    description: 'You are either thousands of kilometers away from each other, or in the same apartment 24/7 with no way out. Both options are a test.',
    roles: [
      { name: 'Family Stress Mediator', slug: 'family-stress-mediator-en' },
      { name: 'Long-Distance Relationship Sustainer', slug: 'long-distance-relationship-sustainer-en' },
      { name: 'Wartime Parenting Guide', slug: 'wartime-parenting-guide-en' },
    ],
    quote: '"My husband and I are in different countries. Long-Distance Relationship Sustainer gave us a structure for our conversations—not just \'how are you,\' but real connection." — Alina, Poland',
  },
  {
    icon: '🧭',
    title: 'For IDPs and Those Who Lost Their Home',
    subtitle: 'You didn\'t just move—you lost your anchor.',
    description: 'Home isn\'t the walls. It\'s safety, identity, memory. When that\'s gone, it\'s hard to find something to hold onto.',
    roles: [
      { name: 'Relocation & Adaptation Buddy', slug: 'relocation-adaptation-buddy-en' },
      { name: 'Meaning-Making Guide', slug: 'meaning-making-guide-after-loss-en' },
      { name: 'Financial Crisis Navigator', slug: 'financial-crisis-navigator-en' },
    ],
  },
  {
    icon: '🌍',
    title: 'For Foreigners and the International Community',
    subtitle: 'You look at Ukraine and don\'t understand how we endure it. But the world is heading in the same direction.',
    description: 'Climate crisis, political instability, economic collapse, pandemics. The VUCA world is becoming the norm for everyone. Ukraine is not a "tragedy"—it\'s a "preview."',
    roles: [
      { name: 'Hypervigilance Manager', slug: 'hypervigilance-manager-en' },
      { name: 'Grief Companion', slug: 'grief-companion-en' },
      { name: 'Energy Recovery Strategist', slug: 'energy-recovery-strategist-en' },
    ],
    quote: '"I used Hypervigilance Manager during the missile alerts in Tel Aviv. It worked exactly as described. Thank you, Ukraine." — David, Israel',
  },
  {
    icon: '🧠',
    title: 'For Everyone Who Is Tired',
    subtitle: 'This last category is the most important. For those who are simply tired.',
    description: 'It doesn\'t matter who you are, where you are, or what happened. If you are tired of this world, of the news, of anxiety, of uncertainty—you are in the right place.',
    roles: [
      { name: 'Hypervigilance Manager', slug: 'hypervigilance-manager-en' },
      { name: 'Energy Recovery Strategist', slug: 'energy-recovery-strategist-en' },
      { name: 'Daily Life Reset Companion', slug: 'daily-life-reset-companion-en' },
      { name: 'Healthy Escapism Curator', slug: 'healthy-escapism-curator-en' },
      { name: 'Grounding Instructor', slug: 'grounding-instructor-en' },
    ],
  },
]

export const AUDIENCES_UA: Audience[] = [
  {
    icon: '🇺🇦',
    title: 'Для українців в Україні',
    subtitle: 'Ви тут щодня. Ви втомилися. Але мусите жити далі.',
    description: 'Ракетні удари, блекаути, тривога за рідних, втрати, неможливість планувати. Звичайні чат-боти кажуть "співчуваю" і дають загальні поради. Наші ролі роблять інакше.',
    roles: [
      { name: 'Hypervigilance Manager', slug: 'hypervigilance-manager-en' },
      { name: 'Grief Companion', slug: 'grief-companion-en' },
      { name: 'Energy Recovery Strategist', slug: 'energy-recovery-strategist-en' },
      { name: 'Wartime Parenting Guide', slug: 'wartime-parenting-guide-en' },
    ],
    quote: '«Я використовую Grounding Instructor щоранку після тривожної ночі. Це як холодна вода — повертає в реальність.» — Олена, Київ',
  },
  {
    icon: '🇪🇺',
    title: 'Для українців за кордоном',
    subtitle: 'Ви виїхали, але війна виїхала з вами.',
    description: 'Почуття провини вцілілого, неможливість інтегруватися, туга за домом, стосунки на відстані, фінансова нестабільність. Ви між двома світами, і це виснажує.',
    roles: [
      { name: 'Guilt & Self-Compassion Guide', slug: 'guilt-self-compassion-guide-en' },
      { name: 'Relocation & Adaptation Buddy', slug: 'relocation-adaptation-buddy-en' },
      { name: 'Long-Distance Relationship Sustainer', slug: 'long-distance-relationship-sustainer-en' },
      { name: 'Career Pivot Strategist', slug: 'career-pivot-strategist-wartime-edition-en' },
    ],
  },
  {
    icon: '🎖️',
    title: 'Для ветеранів',
    subtitle: 'Ви повернулися. Але чи повернулися ви?',
    description: 'Найважче — втрата ідентичності. Хто я тепер? Де моє місце? Чому цивільні не розуміють? Що робити з гнівом?',
    roles: [
      { name: 'Moral Injury Companion', slug: 'moral-injury-companion-en' },
      { name: 'Triggers & Flashbacks Navigator', slug: 'triggers-flashbacks-navigator-en' },
      { name: 'Veteran Reintegration Coach', slug: 'veteran-reintegration-coach-en' },
      { name: 'Hypervigilance Manager', slug: 'hypervigilance-manager-en' },
    ],
    quote: '«Moral Injury Companion — єдине місце, де я міг сказати про те, що зробив, і не почути \'ти герой\' або \'це війна\'. Просто супровід.» — Дмитро, ветеран',
  },
  {
    icon: '👩⚕️',
    title: 'Для психологів та психотерапевтів',
    subtitle: 'Ви виснажені. Запитів більше, ніж ресурсу.',
    description: 'Ми не замінюємо терапію. Ми даємо інструмент, який працює, коли вас немає поруч.',
    roles: [
      { name: 'Grief Companion', slug: 'grief-companion-en' },
      { name: 'Moral Injury Companion', slug: 'moral-injury-companion-en' },
      { name: 'Triggers & Flashbacks Navigator', slug: 'triggers-flashbacks-navigator-en' },
      { name: 'Hypervigilance Manager', slug: 'hypervigilance-manager-en' },
    ],
    quote: '«Я даю клієнтам Grief Companion між сесіями. Вони приходять більш зібрані, з меншим рівнем тривоги, і ми можемо працювати глибше.» — Ірина, психологиня',
  },
  {
    icon: '💻',
    title: 'Для IT-спеціалістів, фрілансерів, віддалених працівників',
    subtitle: 'Ви працюєте з хаосом щодня.',
    description: 'Дедлайни горять, замовники не платять, ракети прилітають, а треба писати код. Як утримати фокус, коли світ валиться?',
    roles: [
      { name: 'Routine & Structure Coach', slug: 'routine-structure-coach-en' },
      { name: 'Remote Work Wellness Coach', slug: 'remote-work-wellness-coach-en' },
      { name: 'AI Productivity Coach', slug: 'ai-productivity-coach-en' },
      { name: 'Income Recovery Planner', slug: 'income-recovery-planner-en' },
    ],
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Для родин',
    subtitle: 'Війна ламає стосунки. Або зближує так, що хочеться розбігтися.',
    description: 'Ви або за тисячі кілометрів одне від одного, або в одній квартирі 24/7 без можливості вийти. Обидва варіанти — випробування.',
    roles: [
      { name: 'Family Stress Mediator', slug: 'family-stress-mediator-en' },
      { name: 'Long-Distance Relationship Sustainer', slug: 'long-distance-relationship-sustainer-en' },
      { name: 'Wartime Parenting Guide', slug: 'wartime-parenting-guide-en' },
    ],
    quote: '«Ми з чоловіком у різних країнах. Long-Distance Relationship Sustainer дав нам структуру для розмов — не просто \'як справи\', а справжній контакт.» — Аліна, Польща',
  },
  {
    icon: '🧭',
    title: 'Для ВПО та тих, хто втратив дім',
    subtitle: 'Ви не просто переїхали — ви втратили точку опори.',
    description: 'Дім — це не стіни. Це безпека, ідентичність, пам\'ять. Коли цього немає, важко знайти, за що зачепитися.',
    roles: [
      { name: 'Relocation & Adaptation Buddy', slug: 'relocation-adaptation-buddy-en' },
      { name: 'Meaning-Making Guide', slug: 'meaning-making-guide-after-loss-en' },
      { name: 'Financial Crisis Navigator', slug: 'financial-crisis-navigator-en' },
    ],
  },
  {
    icon: '🌍',
    title: 'Для іноземців та міжнародної спільноти',
    subtitle: 'Ви дивитесь на Україну і не розумієте, як ми це витримуємо. Але світ рухається до того ж.',
    description: 'Кліматична криза, політична нестабільність, економічні колапси, пандемії. VUCA-світ стає нормою для всіх. Україна — це не «трагедія», це «прев\'ю».',
    roles: [
      { name: 'Hypervigilance Manager', slug: 'hypervigilance-manager-en' },
      { name: 'Grief Companion', slug: 'grief-companion-en' },
      { name: 'Energy Recovery Strategist', slug: 'energy-recovery-strategist-en' },
    ],
    quote: '«I used Hypervigilance Manager during the missile alerts in Tel Aviv. It worked exactly as described. Thank you, Ukraine.» — David, Israel',
  },
  {
    icon: '🧠',
    title: 'Для всіх, хто втомився',
    subtitle: 'Остання категорія — найважливіша. Для тих, хто просто втомився.',
    description: 'Не має значення, хто ви, де ви, що сталося. Якщо ви втомились від цього світу, від новин, від тривоги, від невизначеності — ви за адресою.',
    roles: [
      { name: 'Hypervigilance Manager', slug: 'hypervigilance-manager-en' },
      { name: 'Energy Recovery Strategist', slug: 'energy-recovery-strategist-en' },
      { name: 'Daily Life Reset Companion', slug: 'daily-life-reset-companion-en' },
      { name: 'Healthy Escapism Curator', slug: 'healthy-escapism-curator-en' },
      { name: 'Grounding Instructor', slug: 'grounding-instructor-en' },
    ],
  },
]