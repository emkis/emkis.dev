import { style, createVar } from '@vanilla-extract/css'
import { token } from '@tokens'

const spacingX = createVar()
const spacingY = createVar()

export const container = style({
  vars: {
    [spacingX]: token('spacing.200'),
    [spacingY]: '160px',
  },
  padding: `128px ${spacingX}`,
  display: 'grid',
  gap: spacingY,
  '@media': {
    '(min-width: 768px)': {
      vars: {
        [spacingX]: token('spacing.300'),
        [spacingY]: '192px',
      },
      padding: `${spacingY} ${spacingX}`,
    },
    '(min-width: 1024px)': {
      margin: '0 auto',
      maxWidth: '1088px',
    },
    '(min-width: 1136px)': {
      vars: {
        [spacingX]: '0',
      },
    },
  },
})
