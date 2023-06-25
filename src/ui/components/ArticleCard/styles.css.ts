import { style, createVar, fallbackVar } from '@vanilla-extract/css'
import { slateDark } from '@radix-ui/colors'
import { token } from '@tokens'

const cardRadius = token('radius.400')
export const articleBackground = createVar()

export const card = style({
  position: 'relative',
})

export const background = style({
  height: '304px',
  width: '100%',
  borderRadius: cardRadius,
  background: fallbackVar(articleBackground, slateDark.slate5),
})

export const title = style({
  marginTop: token('spacing.200'),
})

export const description = style({
  marginTop: token('spacing.50'),
  color: `${token('color.text-secondary')} !important`,
})

export const articleLink = style({
  '::before': {
    position: 'absolute',
    content: '',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    borderRadius: cardRadius,
  },
})
