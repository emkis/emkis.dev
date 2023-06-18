import { style, createVar, fallbackVar } from '@vanilla-extract/css'
import { Tokens } from '@ui/tokens/index.css'
import { slateDark } from '@radix-ui/colors'

const cardRadius = Tokens.radius[400]
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
  marginTop: Tokens.spacing[200],
})

export const description = style({
  marginTop: Tokens.spacing[50],
  color: `${Tokens.color.textSecondary} !important`,
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
