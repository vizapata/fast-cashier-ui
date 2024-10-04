import type { Category } from './category'

export const DEFAULT_MOCK_CATEGORY: Category = {
  name: 'Quesos',
  id: 'QUESO',
  icon: '/img/cheese.png',
  shortcut: 'Q'
}

export const MOCK_CATEGORIES: Category[] = [
  {
    name: 'Quesos',
    id: 'QUESO',
    icon: '/img/cheese.png',
    shortcut: 'Q'
  },
  {
    name: 'Yogur',
    id: 'YOGUR',
    icon: '/img/yogur.png',
    shortcut: 'Y'
  },
  {
    name: 'Torta',
    id: 'TORTA',
    icon: '/img/cake.png',
    shortcut: 'T'
  },
  {
    name: 'Fresas con crema',
    id: 'FRESAS_CON_CREMA',
    icon: '/img/strawberry.png',
    shortcut: 'S'
  }
]
