import type { TokenContract } from '@tokens/types'

export const radius = {
  125: {
    variable: 'radius-125',
    value: '10px',
  },
  200: {
    variable: 'radius-200',
    value: '16px',
  },
  300: {
    variable: 'radius-300',
    value: '24px',
  },
  400: {
    variable: 'radius-400',
    value: '32px',
  },
  full: {
    variable: 'radius-full',
    value: '50%',
  },
} as const satisfies TokenContract
