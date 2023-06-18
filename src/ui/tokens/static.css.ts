import { createGlobalTheme } from '@vanilla-extract/css'
import { pxToRem } from '@ui/core/px-to-rem'

export const staticTokens = createGlobalTheme(':root', {
  fontFamily: {
    body: 'var(--font-body)',
    heading: 'var(--font-body)',
    monospaced: 'var(--font-monospaced)',
  },
  fontSize: {
    200: pxToRem(16),
    225: pxToRem(18),
    250: pxToRem(20),
    300: pxToRem(24),
    375: pxToRem(30),
    450: pxToRem(36),
    600: pxToRem(48),
  },
  fontWeight: {
    body: {
      regular: '400',
      medium: '500',
    },
    heading: {
      regular: '400',
      medium: '500',
    },
    monospaced: {
      regular: '400',
    },
  },
  letterSpacing: {
    regular: '0',
    dense: '-1px',
  },
  padding: {
    100: '8px',
    200: '16px',
    300: '24px',
    400: '32px',
  },
  radius: {
    125: '10px',
    200: '16px',
    300: '24px',
    400: '32px',
    full: '50%',
  },
  spacing: {
    50: '4px',
    100: '8px',
    200: '16px',
    300: '24px',
    400: '32px',
    500: '40px',
    700: '56px',
  },
  size: {
    300: '24px',
    500: '40px',
    600: '48px',
    700: '56px',
    900: '72px',
  },
})
