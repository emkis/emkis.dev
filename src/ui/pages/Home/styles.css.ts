import { style, createVar } from '@vanilla-extract/css'
import { token } from '@tokens'

const spacingX = createVar()
const spacingY = createVar()
const profileSize = createVar()

export const contentContainer = style({
  vars: {
    [spacingX]: token('spacing.200'),
    [spacingY]: '160px',
  },
  padding: `128px ${spacingX}`,
  display: 'grid',
  gap: spacingY,

  '@media': {
    '(min-width: 768px)': {
      vars: {
        [spacingX]: token('spacing.300'),
        [spacingY]: '192px',
      },
      padding: `${spacingY} ${spacingX}`,
    },

    '(min-width: 1024px)': {
      margin: '0 auto',
      maxWidth: '1088px',
    },

    '(min-width: 1136px)': {
      vars: {
        [spacingX]: '0',
      },
    },
  },
})

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
    '(min-width: 1024px)': {
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

export const articles = style({
  display: 'grid',
  gap: token('spacing.300'),

  '@media': {
    '(min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
})

export const contactInfo = style({
  color: `${token('color.text-secondary')} !important`,
})
