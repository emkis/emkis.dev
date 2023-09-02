/**
 * This file creates the light theme tokens for the application.
 *
 * When this file is imported, all the CSS Variables for the tokens below
 * are generated and injected on the target selector.
 */

import { createGlobalTheme } from '@vanilla-extract/css'
import { themeTokens } from './contracts/theme.css'
import { color } from '@tokens/definitions/color'
import { registerTheme } from '@tokens/utilities/register-theme'

const lightThemeSelector = registerTheme('light').selector

createGlobalTheme(lightThemeSelector, themeTokens, {
  'color.text-primary': color.textPrimary.value.light,
  'color.text-secondary': color.textSecondary.value.light,
  'color.text-link': color.textLink.value.light,
  'color.text-link-visited': color.textLinkVisited.value.light,
  'color.text-selection': color.textSelection.value.light,
  'color.background-screen': color.backgroundScreen.value.light,
  'color.background-neutral': color.backgroundNeutral.value.light,
  'color.background-elevated': color.backgroundElevated.value.light,
  'color.interactive': color.interactive.value.light,
  'color.interactive-hover': color.interactiveHover.value.light,
  'color.interactive-active': color.interactiveActive.value.light,
})
