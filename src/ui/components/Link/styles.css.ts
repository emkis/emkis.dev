import { globalStyle, style } from '@vanilla-extract/css'
import { token } from '@tokens'

export const link = style({
  fontFamily: token('font-family.body'),
  cursor: 'pointer',
  color: token('color.text-link'),
  textDecoration: 'underline',
  textUnderlineOffset: '2px',
  selectors: {
    '&:visited': {
      color: token('color.text-link-visited'),
    },
  },
})

globalStyle(`${link} *`, {
  color: token('color.text-link'),
})

globalStyle(`${link}:visited *`, {
  color: token('color.text-link-visited'),
})
