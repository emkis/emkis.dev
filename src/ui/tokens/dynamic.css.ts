import { createThemeContract } from '@vanilla-extract/css'

export const dynamicTokens = createThemeContract({
  color: {
    textPrimary: null,
    textSecondary: null,
    textLink: null,
    textLinkVisited: null,
    backgroundScreen: null,
    backgroundNeutral: null,
    backgroundElevated: null,
    interactive: null,
    interactiveHover: null,
    interactiveActive: null,
  },
})
