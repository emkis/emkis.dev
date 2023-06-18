import { style, styleVariants } from '@vanilla-extract/css'
import { Tokens } from '@ui/tokens/index.css'
import { lightTheme } from '@ui/tokens/themes/light.css'

const root = style({
  padding: `${Tokens.padding[100]} ${Tokens.padding[200]}`,
  display: 'inline-block',
  lineHeight: 1,
  border: 0,
  borderRadius: Tokens.radius[400],
  transitionProperty: 'color, background-color',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '200ms',
})

const background = style({
  background: Tokens.color.interactive,
  selectors: {
    '&:hover, &:focus': {
      background: Tokens.color.interactiveHover,
    },
  },
  ':active': {
    background: Tokens.color.interactiveActive,
  },
})

export const backgroundVariant = styleVariants({
  default: [root, background],
  active: [lightTheme, root, background],
})

export const textVariant = styleVariants({
  default: {
    color: `${Tokens.color.textSecondary} !important`,
    lineHeight: '1 !important',
  },
  active: {
    color: `${Tokens.color.textPrimary} !important`,
    lineHeight: '1 !important',
  },
})
