import { globalStyle } from '@vanilla-extract/css'
import { token } from '@tokens'

globalStyle('::selection', {
  backgroundColor: token('color.text-selection'),
})
