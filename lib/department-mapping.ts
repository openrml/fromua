// lib/department-mapping.ts
// Маппінг ролей на відділення AI-Аптечки

export interface DepartmentInfo {
  department: number; // 1-7
  departmentName: string;
  departmentNameUa: string;
  departmentEmoji: string;
  stateDescription: string;
  stateDescriptionUa: string;
}

export const DEPARTMENT_COLORS = {
  1: { bg: 'rgba(239, 68, 68, 0.1)', border: 'rgb(239, 68, 68)', text: 'rgb(239, 68, 68)' },   // 🟥 red
  2: { bg: 'rgba(249, 115, 22, 0.1)', border: 'rgb(249, 115, 22)', text: 'rgb(249, 115, 22)' }, // 🟧 orange
  3: { bg: 'rgba(234, 179, 8, 0.1)', border: 'rgb(234, 179, 8)', text: 'rgb(234, 179, 8)' },    // 🟨 yellow
  4: { bg: 'rgba(34, 197, 94, 0.1)', border: 'rgb(34, 197, 94)', text: 'rgb(34, 197, 94)' },    // 🟩 green
  5: { bg: 'rgba(59, 130, 246, 0.1)', border: 'rgb(59, 130, 246)', text: 'rgb(59, 130, 246)' }, // 🟦 blue
  6: { bg: 'rgba(168, 85, 247, 0.1)', border: 'rgb(168, 85, 247)', text: 'rgb(168, 85, 247)' }, // 🟪 purple
  7: { bg: 'rgba(120, 53, 15, 0.1)', border: 'rgb(120, 53, 15)', text: 'rgb(120, 53, 15)' },    // 🟫 brown
}

export const DEPARTMENT_MAPPING: Record<string, DepartmentInfo> = {
  // 🟥 ВІДДІЛЕННЯ 1: КОЛИ ТІЛО КРИЧИТЬ (11 ролей)
  'stop-kran-dlya-paniky': {
    department: 1,
    departmentName: 'When the body screams',
    departmentNameUa: 'Коли тіло кричить',
    departmentEmoji: '🟥',
    stateDescription: 'When your heart races, hands shake, thoughts get confused',
    stateDescriptionUa: 'Коли серце калатає, руки тремтять, думки плутаються'
  },
  'stop-knopka-dlya-spohadiv': {
    department: 1,
    departmentName: 'When the body screams',
    departmentNameUa: 'Коли тіло кричить',
    departmentEmoji: '🟥',
    stateDescription: 'When the past suddenly becomes reality',
    stateDescriptionUa: 'Коли минуле раптом стає реальністю'
  },
  'doroha-kriz-sl-ozy': {
    department: 1,
    departmentName: 'When the body screams',
    departmentNameUa: 'Коли тіло кричить',
    departmentEmoji: '🟥',
    stateDescription: 'When loss paralyzes',
    stateDescriptionUa: 'Коли втрата паралізує'
  },
  'suputnyk-pry-khronichnomu-bolyu': {
    department: 1,
    departmentName: 'When the body screams',
    departmentNameUa: 'Коли тіло кричить',
    departmentEmoji: '🟥',
    stateDescription: 'When your body won\'t let you forget about itself',
    stateDescriptionUa: 'Коли тіло не дає забути про себе'
  },
  'kolyskova-dlya-doroslykh': {
    department: 1,
    departmentName: 'When the body screams',
    departmentNameUa: 'Коли тіло кричить',
    departmentEmoji: '🟥',
    stateDescription: 'When there\'s "noise" in your head and your eyes won\'t close',
    stateDescriptionUa: 'Коли в голові "шум", а очі не закриваються'
  },
  'vymknuty-rezhym-radar': {
    department: 1,
    departmentName: 'When the body screams',
    departmentNameUa: 'Коли тіло кричить',
    departmentEmoji: '🟥',
    stateDescription: 'When you\'re constantly scanning for danger',
    stateDescriptionUa: 'Коли постійно скануєш небезпеку'
  },
  'probach-sebe': {
    department: 1,
    departmentName: 'When the body screams',
    departmentNameUa: 'Коли тіло кричить',
    departmentEmoji: '🟥',
    stateDescription: 'When it seems you could have done more',
    stateDescriptionUa: 'Коли здається, що міг зробити більше'
  },
  'ne-zhory-svityachy-inshym': {
    department: 1,
    departmentName: 'When the body screams',
    departmentNameUa: 'Коли тіло кричить',
    departmentEmoji: '🟥',
    stateDescription: 'When caring for a loved one exhausts you',
    stateDescriptionUa: 'Коли турбота про близького виснажує тебе'
  },
  'mystetstvo-chekaty': {
    department: 1,
    departmentName: 'When the body screams',
    departmentNameUa: 'Коли тіло кричить',
    departmentEmoji: '🟥',
    stateDescription: 'When the outcome is unknown and you\'re in limbo',
    stateDescriptionUa: 'Коли результат невідомий, а ти в підвішеному стані'
  },
  'hid-po-tilu-pislya-travmy': {
    department: 1,
    departmentName: 'When the body screams',
    departmentNameUa: 'Коли тіло кричить',
    departmentEmoji: '🟥',
    stateDescription: 'When your physical condition has changed and needs to be accepted',
    stateDescriptionUa: 'Коли фізичний стан змінився і треба це прийняти'
  },
  'toy-khto-ne-sudyt': {
    department: 1,
    departmentName: 'When the body screams',
    departmentNameUa: 'Коли тіло кричить',
    departmentEmoji: '🟥',
    stateDescription: 'When you had to make a choice that haunts you',
    stateDescriptionUa: 'Коли довелось робити вибір, який переслідує'
  },

  // 🟧 ВІДДІЛЕННЯ 2: КОЛИ ПОРУЧ ІНШІ (5 ролей)
  'bat-ky-pid-chas-buri': {
    department: 2,
    departmentName: 'When others are around',
    departmentNameUa: 'Коли поруч інші',
    departmentEmoji: '🟧',
    stateDescription: 'When you need to be support for your child, but you are on the edge yourself',
    stateDescriptionUa: 'Коли треба бути опорою для дитини, а сам на межі'
  },
  'koly-kokhannya-pid-tyskom': {
    department: 2,
    departmentName: 'When others are around',
    departmentNameUa: 'Коли поруч інші',
    departmentEmoji: '🟧',
    stateDescription: 'When war/crisis breaks a couple',
    stateDescriptionUa: 'Коли війна/криза ламає пару'
  },
  'ty-tam-ya-tut-my-razom': {
    department: 2,
    departmentName: 'When others are around',
    departmentNameUa: 'Коли поруч інші',
    departmentEmoji: '🟧',
    stateDescription: 'When you want closeness, but kilometers separate you',
    stateDescriptionUa: 'Коли хочеться близькості, але кілометри розділяють'
  },
  'budivnychyy-spil-noty': {
    department: 2,
    departmentName: 'When others are around',
    departmentNameUa: 'Коли поруч інші',
    departmentEmoji: '🟧',
    stateDescription: 'When you want to be with people, but have no strength to seek them out',
    stateDescriptionUa: 'Коли хочеться бути з людьми, але нема сил шукати'
  },
  'kyshen-kovyy-yuryst': {
    department: 2,
    departmentName: 'When others are around',
    departmentNameUa: 'Коли поруч інші',
    departmentEmoji: '🟧',
    stateDescription: 'Helps to deal with simple legal issues',
    stateDescriptionUa: 'Допоможе розібратися з простими юридичними питаннями'
  },

  // 🟨 ВІДДІЛЕННЯ 3: КОЛИ ГРОШЕЙ НЕМАЄ (3 ролі)
  'hroshi-instruktsiya-z-vyzhyvannya': {
    department: 3,
    departmentName: 'When there is no money',
    departmentNameUa: 'Коли грошей немає',
    departmentEmoji: '🟨',
    stateDescription: 'When money is scarce and panic sets in',
    stateDescriptionUa: 'Коли грошей обмаль і паніка'
  },
  'hroshi-pislya-vs-oho': {
    department: 3,
    departmentName: 'When there is no money',
    departmentNameUa: 'Коли грошей немає',
    departmentEmoji: '🟨',
    stateDescription: 'When you need to rebuild finances from scratch',
    stateDescriptionUa: 'Коли треба відновлювати фінанси з нуля'
  },
  'biznes-dlya-tykh-u-koho-nichoho-nemaye': {
    department: 3,
    departmentName: 'When there is no money',
    departmentNameUa: 'Коли грошей немає',
    departmentEmoji: '🟨',
    stateDescription: 'When you have an idea, but no start-up capital',
    stateDescriptionUa: 'Коли є ідея, але нема стартового капіталу'
  },

  // 🟩 ВІДДІЛЕННЯ 4: КОЛИ НЕМАЄ СИЛ (5 ролей)
  'strateh-vidnovlennya-enerhiyi': {
    department: 4,
    departmentName: 'When there is no strength',
    departmentNameUa: 'Коли немає сил',
    departmentEmoji: '🟩',
    stateDescription: 'When even getting out of bed is an achievement',
    stateDescriptionUa: 'Коли навіть встати з ліжка — подвиг'
  },
  'pratsyuyu-z-lizhka-ale-zhyvu': {
    department: 4,
    departmentName: 'When there is no strength',
    departmentNameUa: 'Коли немає сил',
    departmentEmoji: '🟩',
    stateDescription: 'When work exists, but life doesn\'t',
    stateDescriptionUa: 'Коли робота є, а життя — ні'
  },
  'malen-ki-kroky-do-zhyttya': {
    department: 4,
    departmentName: 'When there is no strength',
    departmentNameUa: 'Коли немає сил',
    departmentEmoji: '🟩',
    stateDescription: 'When everything falls out of your hands and you need to do something',
    stateDescriptionUa: 'Коли все валиться з рук і треба хоч щось'
  },
  'strateh-zminy-kar-yery-we': {
    department: 4,
    departmentName: 'When there is no strength',
    departmentNameUa: 'Коли немає сил',
    departmentEmoji: '🟩',
    stateDescription: 'When the old job no longer pays or inspires',
    stateDescriptionUa: 'Коли стара робота більше не заробляє або не надихає'
  },
  'suputnyk-perezavantazhennya-zhyttya': {
    department: 4,
    departmentName: 'When there is no strength',
    departmentNameUa: 'Коли немає сил',
    departmentEmoji: '🟩',
    stateDescription: 'When you need to put everything in order',
    stateDescriptionUa: 'Коли треба навести порядок у всьому'
  },

  // 🟦 ВІДДІЛЕННЯ 5: КОЛИ ВТРАЧЕНО СЕБЕ (3 ролі)
  'navishcho-prokydatys-zavtra': {
    department: 5,
    departmentName: 'When you\'ve lost yourself',
    departmentNameUa: 'Коли втрачено себе',
    departmentEmoji: '🟦',
    stateDescription: 'When you\'ve lost meaning and motivation',
    stateDescriptionUa: 'Коли втрачено сенс і мотивацію'
  },
  'obzhyvannya-novoho-svitu': {
    department: 5,
    departmentName: 'When you\'ve lost yourself',
    departmentNameUa: 'Коли втрачено себе',
    departmentEmoji: '🟦',
    stateDescription: 'When a new city/country doesn\'t feel like home',
    stateDescriptionUa: 'Коли нове місто/країна не стає домом'
  },
  'mizh-viynoyu-i-myrom': {
    department: 5,
    departmentName: 'When you\'ve lost yourself',
    departmentNameUa: 'Коли втрачено себе',
    departmentEmoji: '🟦',
    stateDescription: 'When civilian life feels alien and incomprehensible',
    stateDescriptionUa: 'Коли цивільне життя чуже і незрозуміле'
  },

  // 🟪 ВІДДІЛЕННЯ 6: ТЕХНОЛОГІЇ ТА ВІДПОЧИНОК (4 ролі)
  'ai-kouch-zi-shi': {
    department: 6,
    departmentName: 'Technology and leisure',
    departmentNameUa: 'Технології та відпочинок',
    departmentEmoji: '🟪',
    stateDescription: 'When you want to use AI, but scared',
    stateDescriptionUa: 'Коли хочеш використовувати AI, але страшно'
  },
  'hid-z-tsyfrovoyi-bezpeky': {
    department: 6,
    departmentName: 'Technology and leisure',
    departmentNameUa: 'Технології та відпочинок',
    departmentEmoji: '🟪',
    stateDescription: 'When you want security online',
    stateDescriptionUa: 'Коли хочеться безпеки в інтернеті'
  },
  'vidpochynok-yakyy-likuye': {
    department: 6,
    departmentName: 'Technology and leisure',
    departmentNameUa: 'Технології та відпочинок',
    departmentEmoji: '🟪',
    stateDescription: 'When you need to reboot without harm',
    stateDescriptionUa: 'Коли треба перезавантажитись без шкоди'
  },
  'tsyfrovyy-bronezhylet': {
    department: 6,
    departmentName: 'Technology and leisure',
    departmentNameUa: 'Технології та відпочинок',
    departmentEmoji: '🟪',
    stateDescription: 'When you need to secure your phone',
    stateDescriptionUa: 'Коли треба захистити телефон'
  },

  // 🟫 ВІДДІЛЕННЯ 7: ДОМАШНІ СПРАВИ (2 ролі)
  'poryadok-u-khati-poryadok-u-holovi': {
    department: 7,
    departmentName: 'Household chores',
    departmentNameUa: 'Домашні справи',
    departmentEmoji: '🟫',
    stateDescription: 'When the mess around intensifies the mess inside',
    stateDescriptionUa: 'Коли безлад навколо посилює безлад всередині'
  },
  'pomichnyk-na-kukhni': {
    department: 7,
    departmentName: 'Household chores',
    departmentNameUa: 'Домашні справи',
    departmentEmoji: '🟫',
    stateDescription: 'Helps cook deliciously while saving your budget',
    stateDescriptionUa: 'Допоможе смачно приготувати, заощадивши бюджет'
  },
}

export function getDepartmentInfo(slug: string): DepartmentInfo | null {
  return DEPARTMENT_MAPPING[slug] || null
}

export function getDepartmentEmoji(department: number): string {
  const emojis = ['🟥', '🟧', '🟨', '🟩', '🟦', '🟪', '🟫']
  return emojis[department - 1] || ''
}

export const DEPARTMENTS = [
  {
    id: 1,
    emoji: '🟥',
    name: 'When the body screams',
    nameUa: 'Коли тіло кричить',
    description: 'Physical and mental health in crisis conditions',
    descriptionUa: 'Фізичне та ментальне здоров\'я в кризових умовах',
    count: 11
  },
  {
    id: 2,
    emoji: '🟧',
    name: 'When others are around',
    nameUa: 'Коли поруч інші',
    description: 'Relationships, family, community in crisis',
    descriptionUa: 'Стосунки, сім\'я, спільнота в кризу',
    count: 5
  },
  {
    id: 3,
    emoji: '🟨',
    name: 'When there is no money',
    nameUa: 'Коли грошей немає',
    description: 'Finances, work, survival',
    descriptionUa: 'Фінанси, робота, виживання',
    count: 3
  },
  {
    id: 4,
    emoji: '🟩',
    name: 'When there is no strength',
    nameUa: 'Коли немає сил',
    description: 'Energy, routine, recovery',
    descriptionUa: 'Енергія, рутина, відновлення',
    count: 5
  },
  {
    id: 5,
    emoji: '🟦',
    name: 'When you\'ve lost yourself',
    nameUa: 'Коли втрачено себе',
    description: 'Meaning, identity, adaptation',
    descriptionUa: 'Сенс, ідентичність, адаптація',
    count: 3
  },
  {
    id: 6,
    emoji: '🟪',
    name: 'Technology and leisure',
    nameUa: 'Технології та відпочинок',
    description: 'Digital world and safe escapism',
    descriptionUa: 'Цифровий світ і безпечний ескапізм',
    count: 4
  },
  {
    id: 7,
    emoji: '🟫',
    name: 'Household chores',
    nameUa: 'Домашні справи',
    description: 'Household and order',
    descriptionUa: 'Побут і порядок',
    count: 2
  }
]
