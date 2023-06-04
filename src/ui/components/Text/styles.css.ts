import { style } from '@vanilla-extract/css'
import { slateDark } from '@radix-ui/colors'

export const base = style({
  fontFamily: 'var(--font-inter)',
})

export const sizeBase = style({
  fontSize: '16px',
  lineHeight: 1.8,

  '@media': {
    '(min-width: 1024px)': {
      fontSize: '18px',
    },
  },
})

export const sizeLarge = style({
  fontSize: '18px',
  lineHeight: 1.7,

  '@media': {
    '(min-width: 1024px)': {
      fontSize: '20px',
    },
  },
})

export const variantRegular = style({
  color: slateDark.slate11,
  fontWeight: 400,
})

export const variantBold = style({
  color: slateDark.slate12,
  fontWeight: 500,
})
