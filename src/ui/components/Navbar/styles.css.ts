import { style, createVar, fallbackVar } from '@vanilla-extract/css'
import { token } from '@tokens'

export const navbarBackground = createVar()

export const navbar = style({
  maxWidth: '1280px',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
  background: fallbackVar(navbarBackground, token('color.background-screen')),
  height: '68px',
})

export const content = style({
  maxWidth: '1088px',
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: token('font-size.250'),
})

export const links = style({
  display: 'flex',
  gap: token('spacing.200'),
})
