import { style, styleVariants } from '@vanilla-extract/css'
import { Tokens } from '@ui/tokens/index.css'

const sizeBase = style({
  fontSize: Tokens.fontSize[200],
  lineHeight: 1.8,

  '@media': {
    '(min-width: 1024px)': {
      fontSize: Tokens.fontSize[225],
    },
  },
})

const sizeLarge = style({
  fontSize: Tokens.fontSize[225],
  lineHeight: 1.7,

  '@media': {
    '(min-width: 1024px)': {
      fontSize: Tokens.fontSize[250],
    },
  },
})

export const sizeVariant = styleVariants({
  base: [sizeBase],
  large: [sizeLarge],
})

export const weightVariant = styleVariants({
  regular: {
    fontWeight: Tokens.fontWeight.body.regular,
    color: Tokens.color.textSecondary,
  },
  bold: {
    fontWeight: Tokens.fontWeight.body.medium,
    color: Tokens.color.textPrimary,
  },
})

export const fontVariant = styleVariants({
  ['sans-serif']: {
    fontFamily: Tokens.fontFamily.body,
  },
  monospaced: {
    fontFamily: Tokens.fontFamily.monospaced,
  },
})
