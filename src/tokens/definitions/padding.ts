import type { TokenContract } from '@tokens/types'

export const padding = {
  100: {
    variable: 'padding-100',
    value: '8px',
  },
  200: {
    variable: 'padding-200',
    value: '16px',
  },
  300: {
    variable: 'padding-300',
    value: '24px',
  },
  400: {
    variable: 'padding-400',
    value: '32px',
  },
} as const satisfies TokenContract
