import { slateDark } from '@radix-ui/colors'
import { style } from '@vanilla-extract/css'

export const base = style({
  display: 'block',
  fontFamily: 'var(--font-inter)',
  fontWeight: 500,
  color: slateDark.slate12,
})

export const level1 = style({
  fontSize: '36px',
  lineHeight: 1.3,
  letterSpacing: '-1px',

  '@media': {
    '(min-width: 1024px)': {
      fontSize: '48px',
    },
  },
})

export const level2 = style({
  fontSize: '30px',
  lineHeight: 1.38,
  letterSpacing: '-1px',

  '@media': {
    '(min-width: 1024px)': {
      fontSize: '36px',
    },
  },
})

export const level3 = style({
  fontSize: '24px',
  lineHeight: 1.48,
  letterSpacing: '-1px',

  '@media': {
    '(min-width: 1024px)': {
      fontSize: '30px',
    },
  },
})

export const level4 = style({
  fontSize: '20px',
  lineHeight: 1.58,

  '@media': {
    '(min-width: 1024px)': {
      fontSize: '24px',
    },
  },
})
