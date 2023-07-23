import { style, createVar } from '@vanilla-extract/css'
import { token, breakpoint } from '@tokens'

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
    [breakpoint('md')]: {
      vars: {
        [spacingX]: token('spacing.300'),
        [spacingY]: '192px',
      },
      padding: `${spacingY} ${spacingX}`,
    },
    [breakpoint('lg')]: {
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
