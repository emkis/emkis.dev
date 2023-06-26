import { style } from '@vanilla-extract/css'
import { token } from '@tokens'

export const header = style({
  display: 'grid',
  gap: token('spacing.300'),
})
