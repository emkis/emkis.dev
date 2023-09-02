/**
 * This file only defines the contract of tokens that are dynamic
 * based on different themes.
 *
 * This file does not generate any CSS, it only holds the reference
 * for the CSS Variables that will be created when someone implements
 * this contract.
 */

import { createGlobalThemeContract } from '@vanilla-extract/css'
import { color } from '@tokens/definitions/color'

export const themeTokens = createGlobalThemeContract({
  'color.text-primary': color.textPrimary.variable,
  'color.text-secondary': color.textSecondary.variable,
  'color.text-link': color.textLink.variable,
  'color.text-link-visited': color.textLinkVisited.variable,
  'color.text-selection': color.textSelection.variable,
  'color.background-screen': color.backgroundScreen.variable,
  'color.background-neutral': color.backgroundNeutral.variable,
  'color.background-elevated': color.backgroundElevated.variable,
  'color.interactive': color.interactive.variable,
  'color.interactive-hover': color.interactiveHover.variable,
  'color.interactive-active': color.interactiveActive.variable,
})
