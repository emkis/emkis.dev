import type { TokenContract } from '@tokens/types'

export const fontWeight = {
  regular: {
    variable: 'font-weight-regular',
    value: '400',
  },
  medium: {
    variable: 'font-weight-medium',
    value: '500',
  },
} as const satisfies TokenContract
