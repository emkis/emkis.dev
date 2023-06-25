/**
 * This file creates the dark theme tokens for the application.
 *
 * When this file is imported, all the CSS Variables for the tokens below
 * are generated and injected on the target selector.
 */

import { createGlobalTheme } from '@vanilla-extract/css'
import { themeTokens } from './contracts/theme.css'
import { color } from '@tokens/definitions/color'

createGlobalTheme('[data-theme="dark"]', themeTokens, {
  'color.text-primary': color.textPrimary.value.dark,
  'color.text-secondary': color.textSecondary.value.dark,
  'color.text-link': color.textLink.value.dark,
  'color.text-link-visited': color.textLinkVisited.value.dark,
  'color.background-screen': color.backgroundScreen.value.dark,
  'color.background-neutral': color.backgroundNeutral.value.dark,
  'color.background-elevated': color.backgroundElevated.value.dark,
  'color.interactive': color.interactive.value.dark,
  'color.interactive-hover': color.interactiveHover.value.dark,
  'color.interactive-active': color.interactiveActive.value.dark,
})
