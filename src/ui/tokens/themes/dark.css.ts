import { createTheme } from '@vanilla-extract/css'
import { dynamicTokens } from '../dynamic.css'
import { slateDark } from '@radix-ui/colors'

const baseDark = '#000'

export const darkTheme = createTheme(dynamicTokens, {
  color: {
    textPrimary: slateDark.slate12,
    textSecondary: slateDark.slate11,
    textLink: slateDark.slate12,
    textLinkVisited: slateDark.slate12,
    backgroundScreen: baseDark,
    backgroundNeutral: slateDark.slate2,
    backgroundElevated: baseDark,
  },
})
