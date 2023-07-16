import { style, styleVariants, globalStyle } from '@vanilla-extract/css'
import { token } from '@tokens'

export const pill = style({
  padding: `${token('padding.100')} ${token('padding.200')}`,
  display: 'inline-block',
  lineHeight: 1,
  border: 0,
  borderRadius: token('radius.400'),
  background: token('color.interactive'),
  transitionProperty: 'color, background-color',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '200ms',
  selectors: {
    '&:hover, &:focus': {
      background: token('color.interactive-hover'),
    },
  },
  ':active': {
    background: token('color.interactive-active'),
  },
})

globalStyle(`${pill} > span`, {
  verticalAlign: 'middle',
})

export const variant = styleVariants({
  default: {
    color: `${token('color.text-secondary')} !important`,
    lineHeight: '1 !important',
  },
  active: {
    color: `${token('color.text-primary')} !important`,
    lineHeight: '1 !important',
  },
})
