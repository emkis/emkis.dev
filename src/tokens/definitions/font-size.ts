import type { TokenContract } from '@tokens/types'
import { pxToRem } from '@tokens/utilities/px-to-rem'

export const fontSize = {
  200: {
    variable: 'font-size-200',
    value: pxToRem(16),
  },
  225: {
    variable: 'font-size-225',
    value: pxToRem(18),
  },
  250: {
    variable: 'font-size-250',
    value: pxToRem(20),
  },
  300: {
    variable: 'font-size-300',
    value: pxToRem(24),
  },
  375: {
    variable: 'font-size-375',
    value: pxToRem(30),
  },
  450: {
    variable: 'font-size-450',
    value: pxToRem(36),
  },
  600: {
    variable: 'font-size-600',
    value: pxToRem(48),
  },
} as const satisfies TokenContract
