import { style, styleVariants } from '@vanilla-extract/css'
import { slateDark } from '@radix-ui/colors'

const sizeBase = style({
  fontSize: '16px',
  lineHeight: 1.8,

  '@media': {
    '(min-width: 1024px)': {
      fontSize: '18px',
    },
  },
})

const sizeLarge = style({
  fontSize: '18px',
  lineHeight: 1.7,

  '@media': {
    '(min-width: 1024px)': {
      fontSize: '20px',
    },
  },
})

export const sizeVariant = styleVariants({
  base: [sizeBase],
  large: [sizeLarge],
})

export const weightVariant = styleVariants({
  regular: {
    fontWeight: 400,
    color: slateDark.slate11,
  },
  bold: {
    fontWeight: 500,
    color: slateDark.slate12,
  },
})

export const fontVariant = styleVariants({
  ['sans-serif']: {
    fontFamily: 'var(--font-inter)',
  },
  monospaced: {
    fontFamily: 'var(--font-fira-code)',
  },
})
