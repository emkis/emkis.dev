import { style, styleVariants } from '@vanilla-extract/css'
import { token } from '@tokens'

const sizeBase = style({
  fontSize: token('font-size.200'),
  lineHeight: 1.8,
  '@media': {
    '(min-width: 1024px)': {
      fontSize: token('font-size.225'),
    },
  },
})

const sizeLarge = style({
  fontSize: token('font-size.225'),
  lineHeight: 1.7,
  '@media': {
    '(min-width: 1024px)': {
      fontSize: token('font-size.250'),
    },
  },
})

export const sizeVariant = styleVariants({
  base: [sizeBase],
  large: [sizeLarge],
})

export const weightVariant = styleVariants({
  regular: {
    fontWeight: token('font-weight.body.regular'),
    color: token('color.text-secondary'),
  },
  bold: {
    fontWeight: token('font-weight.body.medium'),
    color: token('color.text-primary'),
  },
})

export const fontVariant = styleVariants({
  ['sans-serif']: {
    fontFamily: token('font-family.body'),
  },
  monospaced: {
    fontFamily: token('font-family.monospaced'),
  },
})
