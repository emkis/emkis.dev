import type { Theme } from '../types'

export type ThemeAttributeProps = { 'data-theme': Theme }

export const themeAttribute = 'data-theme'

export function registerTheme(theme: Theme) {
  const props: ThemeAttributeProps = { [themeAttribute]: theme }
  const selector = `[${themeAttribute}='${theme}']` as const

  return { props, selector }
}
