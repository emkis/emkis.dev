import type { TokenContract } from '@tokens/types'

export const size = {
  300: {
    variable: 'size-300',
    value: '24px',
  },
  500: {
    variable: 'size-500',
    value: '40px',
  },
  600: {
    variable: 'size-600',
    value: '48px',
  },
  700: {
    variable: 'size-700',
    value: '56px',
  },
  900: {
    variable: 'size-900',
    value: '72px',
  },
} as const satisfies TokenContract
