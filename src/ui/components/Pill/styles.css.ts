import { style, styleVariants } from '@vanilla-extract/css'
import { Tokens } from '@ui/tokens/index.css'

export const pill = style({
  padding: `${Tokens.padding[100]} ${Tokens.padding[200]}`,
  display: 'inline-block',
  lineHeight: 1,
  border: 0,
  borderRadius: Tokens.radius[400],
  background: Tokens.color.interactive,
  transitionProperty: 'color, background-color',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '200ms',

  selectors: {
    '&:hover, &:focus': {
      background: Tokens.color.interactiveHover,
    },
  },
  ':active': {
    background: Tokens.color.interactiveActive,
  },
})

export const variant = styleVariants({
  default: {
    color: `${Tokens.color.textSecondary} !important`,
    lineHeight: '1 !important',
  },
  active: {
    color: `${Tokens.color.textPrimary} !important`,
    lineHeight: '1 !important',
  },
})
