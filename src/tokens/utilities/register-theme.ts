import type { Theme } from '../types'

export type ThemeAttribute = { 'data-theme': Theme }

export function registerTheme(theme: Theme): ThemeAttribute {
  return { 'data-theme': theme }
}
