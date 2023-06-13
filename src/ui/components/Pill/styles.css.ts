import { style, styleVariants } from '@vanilla-extract/css'
import { slate, slateDark } from '@radix-ui/colors'

const root = style({
  padding: '6px 12px',
  display: 'inline-block',
  lineHeight: 1,
  border: 0,
  borderRadius: '32px',
  transitionProperty: 'color, background-color',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '200ms',
})

const backgroundDefault = style({
  background: slateDark.slate3,
  ':hover': {
    background: slateDark.slate4,
  },
  ':focus': {
    background: slateDark.slate4,
  },
  ':active': {
    background: slateDark.slate5,
  },
})

const backgroundActive = style({
  background: slate.slate3,
  ':hover': {
    background: slate.slate4,
  },
  ':focus': {
    background: slate.slate4,
  },
  ':active': {
    background: slate.slate5,
  },
})

export const backgroundVariant = styleVariants({
  default: [root, backgroundDefault],
  active: [root, backgroundActive],
})

export const textVariant = styleVariants({
  default: {
    color: `${slateDark.slate11} !important`,
    lineHeight: '1 !important',
  },
  active: {
    color: `${slate.slate12} !important`,
    lineHeight: '1 !important',
  },
})
