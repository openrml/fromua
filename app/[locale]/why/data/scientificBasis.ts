// app/why/data/scientificBasis.ts
export interface VUCAComponent {
  name: string
  response: string
  why: string
}

export interface ScientificBasis {
  title: string
  vuca: {
    title: string
    subtitle: string
    components: VUCAComponent[]
  }
  neuropsychology: {
    title: string
    content: string
  }
}

export const SCIENTIFIC_BASIS_EN: ScientificBasis = {
  title: 'Scientific Basis',
  vuca: {
    title: 'VUCA ×10 Framework',
    subtitle: 'Our approach addresses all components of extreme instability:',
    components: [
      {
        name: 'Volatility',
        response: 'Structured sessions of 20-30 min',
        why: 'When everything is chaotic, you need structure. Small steps = control.',
      },
      {
        name: 'Uncertainty',
        response: '"No timelines," acceptance-based approach',
        why: 'We don\'t fight uncertainty; we learn to live in it.',
      },
      {
        name: 'Complexity',
        response: '9 categories, network of related roles',
        why: 'A person can use 3-5 roles simultaneously for different needs.',
      },
      {
        name: 'Ambiguity',
        response: 'Normalization of conflicting emotions',
        why: 'All feelings are normal, even contradictory ones.',
      },
    ],
  },
  neuropsychology: {
    title: 'Neuropsychological Aspect',
    content: 'In a state of chronic stress, the prefrontal cortex (responsible for planning, control, rational decisions) "shuts down." We cannot think clearly. Our roles take on the function of an "external prefrontal cortex": Planning (what to do next), Structuring (how to do it), Inhibition (what not to do), Reflection (what this means). This allows the brain to "rest" while the role guides you step by step.',
  },
}

export const SCIENTIFIC_BASIS_UA: ScientificBasis = {
  title: 'Наукове обґрунтування',
  vuca: {
    title: 'VUCA ×10 Framework',
    subtitle: 'Наш підхід відповідає на всі компоненти екстремальної нестабільності:',
    components: [
      {
        name: 'Volatility (мінливість)',
        response: 'Структуровані сесії по 20-30 хв',
        why: 'Коли все хаотичне, потрібна структура. Маленькі кроки = контроль',
      },
      {
        name: 'Uncertainty (невизначеність)',
        response: '"No timelines", acceptance-based approach',
        why: 'Не боремося з невизначеністю, а вчимося в ній жити',
      },
      {
        name: 'Complexity (складність)',
        response: '9 категорій, network of related roles',
        why: 'Людина може використовувати 3-5 ролей одночасно під різні потреби',
      },
      {
        name: 'Ambiguity (неоднозначність)',
        response: 'Normalization of conflicting emotions',
        why: 'Всі почуття нормальні, навіть суперечливі',
      },
    ],
  },
  neuropsychology: {
    title: 'Нейропсихологічний аспект',
    content: 'У стані хронічного стресу префронтальна кора (відповідальна за планування, контроль, раціональні рішення) "відключається." Ми не можемо мислити ясно. Наші ролі беруть на себе функцію "зовнішньої префронтальної кори": Планування (що робити далі), Структурування (як це робити), Гальмування (чого не варто робити), Рефлексія (що це означає). Це дозволяє "відпочити" мозку, поки роль веде вас кроками.',
  },
}