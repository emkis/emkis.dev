import type { TokenContract } from '@tokens/types'

export const fontFamily = {
  body: {
    variable: 'font-family-body',
    value: 'var(--font-body)',
  },
  heading: {
    variable: 'font-family-heading',
    value: 'var(--font-body)',
  },
  monospaced: {
    variable: 'font-family-monospaced',
    value: 'var(--font-monospaced)',
  },
} as const satisfies TokenContract
