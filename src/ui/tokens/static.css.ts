import { createGlobalTheme } from '@vanilla-extract/css'

export const staticTokens = createGlobalTheme(':root', {
  font: {
    body: 'var(--font-body)',
    heading: 'var(--font-body)',
    monospaced: 'var(--font-monospaced)',
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
