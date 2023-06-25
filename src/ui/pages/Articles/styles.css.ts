import { style } from '@vanilla-extract/css'
import { token } from '@tokens'

export const header = style({
  display: 'grid',
  gap: token('spacing.300'),
})

export const articlesTitle = style({
  marginBottom: token('spacing.400'),
  lineHeight: '1 !important',
})

export const articleList = style({
  display: 'grid',
  gap: `${token('spacing.400')} ${token('spacing.300')}`,
  '@media': {
    '(min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
})
