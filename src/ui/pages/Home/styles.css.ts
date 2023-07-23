import { style, createVar } from '@vanilla-extract/css'
import { token, breakpoint } from '@tokens'

const profileSize = createVar()

export const greetingContainer = style({
  display: 'grid',
  gap: token('spacing.400'),
})

export const profileImage = style({
  vars: {
    [profileSize]: '144px',
  },
  height: profileSize,
  width: profileSize,
  borderRadius: token('radius.full'),
  objectFit: 'cover',

  '@media': {
    [breakpoint('lg')]: {
      vars: {
        [profileSize]: '160px',
      },
    },
  },
})

export const greetingHeadline = style({
  display: 'block',
})

export const greetingSubHeadline = style({
  display: 'block',
  color: token('color.text-secondary'),
})

export const featured = style({
  marginBottom: token('spacing.400'),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const featuredHeading = style({
  lineHeight: '1 !important',
})

export const contactInfo = style({
  color: `${token('color.text-secondary')} !important`,
})
