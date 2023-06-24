import type { TokenContract } from '@tokens/types'

export const letterSpacing = {
  regular: {
    variable: 'letter-spacing-regular',
    value: '0',
  },
  dense: {
    variable: 'letter-spacing-dense',
    value: '-1px',
  },
} as const satisfies TokenContract
