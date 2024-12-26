export interface Symbol {
  name: string
  symbol: string
  icon?: string
}

const plus: Symbol = { name: 'plus', symbol: '+' }
const minus: Symbol = { name: 'minus', symbol: '-' }
const multiply: Symbol = { name: 'multiply', symbol: '*' }
// const divide = { name: "divide", symbol: "/", icon: null };

export const REGISTERED_SPECIAL_KEYS = Object.freeze({
  plus,
  minus,
  multiply
})

export const ALLOWED_OPERATORS: readonly string[] = Object.freeze(
  [plus, minus, multiply].map((_) => _.symbol)
)

export const KEY_TYPES = Object.freeze({
  CATEGORY: 'CATEGORY',
  DIGIT: 'DIGIT',
  OPERATION: 'OPERATION',
  ACTION: 'ACTION'
})

export const ALLOWED_ACTIONS = {
  DELETE: 'DELETE', // TODO: Rename to CLEAR
  ENTER: 'ENTER',
  BACKSPACE: 'BACKSPACE',
  HUNDRED: '00',
  THOUSAND: '000'
}
