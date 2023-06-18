import { style } from '@vanilla-extract/css'
import { Tokens } from '@ui/tokens/index.css'

export const link = style({
  fontFamily: Tokens.fontFamily.body,
  cursor: 'pointer',
  color: Tokens.color.textPrimary,
  textDecoration: 'underline',
  textUnderlineOffset: '2px',
})
