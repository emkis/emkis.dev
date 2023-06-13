import { style, createVar } from '@vanilla-extract/css'
import { slateDark } from '@radix-ui/colors'

const spacingX = createVar()
const spacingY = createVar()

export const contentContainer = style({
  vars: {
    [spacingX]: '16px',
    [spacingY]: '160px',
  },
  padding: `128px ${spacingX}`,
  display: 'grid',
  gap: spacingY,

  '@media': {
    '(min-width: 768px)': {
      vars: {
        [spacingX]: '24px',
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
  gap: '32px',
})

export const profileImage = style({
  height: '144px',
  width: '144px',
  borderRadius: '50%',
  objectFit: 'cover',

  '@media': {
    '(min-width: 1024px)': {
      height: '160px',
      width: '160px',
    },
  },
})

export const greetingHeadline = style({
  display: 'block',
})

export const greetingSubHeadline = style({
  display: 'block',
  color: slateDark.slate11,
})

export const featured = style({
  marginBottom: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const featuredHeading = style({
  lineHeight: `1 !important`,
})

export const articles = style({
  display: 'grid',
  gap: '24px',

  '@media': {
    '(min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
})

export const contactInfo = style({
  color: `${slateDark.slate11} !important`,
})
