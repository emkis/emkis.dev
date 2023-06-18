import { createTheme } from '@vanilla-extract/css'
import { dynamicTokens } from '../dynamic.css'
import { slate } from '@radix-ui/colors'

export const lightTheme = createTheme(dynamicTokens, {
  color: {
    textPrimary: slate.slate12,
    textSecondary: slate.slate11,
    textLink: slate.slate12,
    textLinkVisited: slate.slate12,
    backgroundScreen: slate.slate1,
    backgroundNeutral: slate.slate2,
    backgroundElevated: slate.slate1,
    interactive: slate.slate3,
    interactiveHover: slate.slate4,
    interactiveActive: slate.slate5,
  },
})
