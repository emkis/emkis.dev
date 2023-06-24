import type { TokenContract } from '@tokens/types'

export const spacing = {
  50: {
    variable: 'spacing-50',
    value: '4px',
  },
  100: {
    variable: 'spacing-100',
    value: '8px',
  },
  200: {
    variable: 'spacing-200',
    value: '16px',
  },
  300: {
    variable: 'spacing-300',
    value: '24px',
  },
  400: {
    variable: 'spacing-400',
    value: '32px',
  },
  500: {
    variable: 'spacing-500',
    value: '40px',
  },
  700: {
    variable: 'spacing-700',
    value: '56px',
  },
} as const satisfies TokenContract
