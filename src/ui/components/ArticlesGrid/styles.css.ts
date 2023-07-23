import { style } from '@vanilla-extract/css'
import { token, breakpoint } from '@tokens'

export const grid = style({
  display: 'grid',
  gap: `${token('spacing.400')} ${token('spacing.300')}`,
  '@media': {
    [breakpoint('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
})
