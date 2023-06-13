import { style, styleVariants } from '@vanilla-extract/css'
import { slateDark } from '@radix-ui/colors'

const base = style({
  display: 'block',
  fontFamily: 'var(--font-inter)',
  fontWeight: 500,
  color: slateDark.slate12,
})

const level1 = style({
  fontSize: '36px',
  lineHeight: 1.3,
  letterSpacing: '-1px',

  '@media': {
    '(min-width: 1024px)': {
      fontSize: '48px',
    },
  },
})

const level2 = style({
  fontSize: '30px',
  lineHeight: 1.38,
  letterSpacing: '-1px',

  '@media': {
    '(min-width: 1024px)': {
      fontSize: '36px',
    },
  },
})

const level3 = style({
  fontSize: '24px',
  lineHeight: 1.48,
  letterSpacing: '-1px',

  '@media': {
    '(min-width: 1024px)': {
      fontSize: '30px',
    },
  },
})

const level4 = style({
  fontSize: '20px',
  lineHeight: 1.58,

  '@media': {
    '(min-width: 1024px)': {
      fontSize: '24px',
    },
  },
})

export const levelVariant = styleVariants({
  1: [base, level1],
  2: [base, level2],
  3: [base, level3],
  4: [base, level4],
})
