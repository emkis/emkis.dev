import { style } from '@vanilla-extract/css'
import { token } from '@tokens'

export const grid = style({
  display: 'grid',
  gap: `${token('spacing.400')} ${token('spacing.300')}`,
  '@media': {
    '(min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
})
