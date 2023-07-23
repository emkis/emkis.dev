import { style, styleVariants, globalStyle } from '@vanilla-extract/css'
import { token, breakpoint } from '@tokens'

const base = style({
  display: 'block',
  width: 'fit-content',
  fontFamily: token('font-family.heading'),
  fontWeight: token('font-weight.heading.medium'),
  color: token('color.text-primary'),
})

export const anchor = style({
  color: token('color.text-secondary'),
  opacity: 0,
  transition: 'opacity 100ms ease-in',
})

globalStyle(`${base}[id]:hover ${anchor}`, {
  opacity: 1,
})

const level1 = style({
  fontSize: token('font-size.450'),
  lineHeight: 1.3,
  letterSpacing: token('letter-spacing.dense'),
  '@media': {
    [breakpoint('md')]: {
      fontSize: token('font-size.600'),
    },
  },
})

const level2 = style({
  fontSize: token('font-size.375'),
  lineHeight: 1.38,
  letterSpacing: token('letter-spacing.dense'),
  '@media': {
    [breakpoint('md')]: {
      fontSize: token('font-size.450'),
    },
  },
})

const level3 = style({
  fontSize: token('font-size.300'),
  lineHeight: 1.48,
  letterSpacing: token('letter-spacing.dense'),
  '@media': {
    [breakpoint('md')]: {
      fontSize: token('font-size.375'),
    },
  },
})

const level4 = style({
  fontSize: token('font-size.250'),
  lineHeight: 1.58,
  letterSpacing: token('letter-spacing.regular'),
  '@media': {
    [breakpoint('md')]: {
      fontSize: token('font-size.300'),
    },
  },
})

export const levelVariant = styleVariants({
  1: [base, level1],
  2: [base, level2],
  3: [base, level3],
  4: [base, level4],
})
