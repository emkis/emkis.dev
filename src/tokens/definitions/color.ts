import type { TokenContract } from '@tokens/types'
import { slateDark, slate } from '@radix-ui/colors'

const baseDark = '#000'

export const color = {
  textPrimary: {
    variable: 'color-text-primary',
    value: {
      dark: slateDark.slate12,
      light: slate.slate12,
    },
  },
  textSecondary: {
    variable: 'color-text-secondary',
    value: {
      dark: slateDark.slate11,
      light: slate.slate11,
    },
  },
  textLink: {
    variable: 'color-text-link',
    value: {
      dark: slateDark.slate12,
      light: slate.slate12,
    },
  },
  textLinkVisited: {
    variable: 'color-text-link-visited',
    value: {
      dark: slateDark.slate12,
      light: slate.slate12,
    },
  },
  backgroundScreen: {
    variable: 'color-background-screen',
    value: {
      dark: baseDark,
      light: slate.slate1,
    },
  },
  backgroundNeutral: {
    variable: 'color-background-neutral',
    value: {
      dark: slateDark.slate2,
      light: slate.slate2,
    },
  },
  backgroundElevated: {
    variable: 'color-background-elevated',
    value: {
      dark: baseDark,
      light: slate.slate1,
    },
  },
  interactive: {
    variable: 'color-interactive',
    value: {
      dark: slateDark.slate3,
      light: slate.slate3,
    },
  },
  interactiveHover: {
    variable: 'color-interactive-hover',
    value: {
      dark: slateDark.slate4,
      light: slate.slate4,
    },
  },
  interactiveActive: {
    variable: 'color-interactive-active',
    value: {
      dark: slateDark.slate5,
      light: slate.slate5,
    },
  },
} as const satisfies TokenContract
