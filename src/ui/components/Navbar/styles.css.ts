import { style, createVar, fallbackVar } from '@vanilla-extract/css'
import { token, breakpoint } from '@tokens'

export const navbarBackground = createVar()
export const navbarWidth = '1366px'

export const emkis = style({
  display: 'none',
  '@media': {
    [breakpoint('md')]: {
      display: 'block',
    },
  },
})

export const navbar = style({
  maxWidth: navbarWidth,
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
  background: fallbackVar(navbarBackground, token('color.background-screen')),
  height: '68px',
  '@media': {
    [breakpoint('md')]: {
      padding: `0 ${token('padding.300')}`,
    },
  },
})

export const content = style({
  maxWidth: '1088px',
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: token('font-size.250'),
  '@media': {
    [breakpoint('md')]: {
      justifyContent: 'space-between',
    },
  },
})

export const links = style({
  display: 'flex',
  gap: token('spacing.200'),
})
