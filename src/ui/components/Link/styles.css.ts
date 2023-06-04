import { slateDark } from '@radix-ui/colors'
import { style } from '@vanilla-extract/css'

export const link = style({
  fontFamily: 'var(--font-inter)',
  cursor: 'pointer',
  color: slateDark.slate12,
  textDecoration: 'underline',
  textUnderlineOffset: '2px',
})
