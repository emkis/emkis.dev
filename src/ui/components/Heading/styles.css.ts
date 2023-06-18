import { style, styleVariants } from '@vanilla-extract/css'
import { Tokens } from '@ui/tokens/index.css'

const base = style({
  display: 'block',
  fontFamily: Tokens.fontFamily.heading,
  fontWeight: Tokens.fontWeight.heading.medium,
  color: Tokens.color.textPrimary,
})

const level1 = style({
  fontSize: Tokens.fontSize[450],
  lineHeight: 1.3,
  letterSpacing: Tokens.letterSpacing.dense,

  '@media': {
    '(min-width: 1024px)': {
      fontSize: Tokens.fontSize[600],
    },
  },
})

const level2 = style({
  fontSize: Tokens.fontSize[375],
  lineHeight: 1.38,
  letterSpacing: Tokens.letterSpacing.dense,

  '@media': {
    '(min-width: 1024px)': {
      fontSize: Tokens.fontSize[450],
    },
  },
})

const level3 = style({
  fontSize: Tokens.fontSize[300],
  lineHeight: 1.48,
  letterSpacing: Tokens.letterSpacing.dense,

  '@media': {
    '(min-width: 1024px)': {
      fontSize: Tokens.fontSize[375],
    },
  },
})

const level4 = style({
  fontSize: Tokens.fontSize[250],
  lineHeight: 1.58,
  letterSpacing: Tokens.letterSpacing.regular,

  '@media': {
    '(min-width: 1024px)': {
      fontSize: Tokens.fontSize[300],
    },
  },
})

export const levelVariant = styleVariants({
  1: [base, level1],
  2: [base, level2],
  3: [base, level3],
  4: [base, level4],
})
