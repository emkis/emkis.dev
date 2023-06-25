import { style } from '@vanilla-extract/css'
import { token } from '@tokens'

export const link = style({
  fontFamily: token('font-family.body'),
  cursor: 'pointer',
  color: token('color.text-primary'),
  textDecoration: 'underline',
  textUnderlineOffset: '2px',
})
