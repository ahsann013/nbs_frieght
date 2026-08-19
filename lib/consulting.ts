export interface ConsultationPlan {
  id: '30-min' | '60-min'
  duration: string
  unit: string
  title: string
  tagline: string
  price: string
  description: string
  invoiceUrl: string
  bestFor: string[]
  featured?: boolean
}

export const CONSULTATION_PLANS: ConsultationPlan[] = [
  {
    id: '30-min',
    duration: '30',
    unit: 'min',
    title: '30-Minute Direction Call',
    tagline: 'One focused question. One clear path forward.',
    price: '$125',
    description:
      'Best for one specific question, challenge, or decision you are working through right now. Come with a clear topic. Leave with a clear direction.',
    invoiceUrl: 'https://www.paypal.com/invoice/p/#7W2JV7EURLTF434S',
    bestFor: [
      'One specific brokerage or trucking question',
      'A decision you are wrestling with',
      'Quick reality check on a deal or lane',
      'First step before committing to a longer session',
    ],
    featured: false,
  },
  {
    id: '60-min',
    duration: '60',
    unit: 'min',
    title: '60-Minute Freight Strategy Session',
    tagline: 'Deeper review. Real strategy. Actionable next steps.',
    price: '$250',
    description:
      'Best for a comprehensive review of your brokerage, trucking operation, client acquisition approach, or next career move. We go deeper, cover more ground, and leave with a real plan.',
    invoiceUrl: 'https://www.paypal.com/invoice/p/#XZ6M8XRKMRULGZUN',
    bestFor: [
      'Building or improving your freight brokerage',
      'Trucking-to-brokerage career transition',
      'Owner-operator business strategy',
      'Client acquisition and shipper relationships',
      'Understanding freight pricing and margins',
      'Small logistics company operations',
    ],
    featured: true,
  },
]
