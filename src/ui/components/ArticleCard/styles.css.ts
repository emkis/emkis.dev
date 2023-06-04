import { style, createVar, fallbackVar } from '@vanilla-extract/css'
import { slateDark } from '@radix-ui/colors'

export const articleBackground = createVar()

export const card = style({
  position: 'relative',
})

export const background = style({
  height: '304px',
  width: '100%',
  borderRadius: '32px',
  background: fallbackVar(articleBackground, slateDark.slate5),
})

export const title = style({
  marginTop: '20px',
})

export const description = style({
  marginTop: '4px',
  color: slateDark.slate11,
})

export const articleLink = style({
  '::before': {
    position: 'absolute',
    content: '',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    borderRadius: '32px',
  },
})
