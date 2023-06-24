export type Theme = 'light' | 'dark'

export type BaseToken = string

export type ThemeToken = {
  [ThemeName in Theme]: BaseToken
}

export type TokenDefinition = {
  variable: string
  value: BaseToken | ThemeToken
}

export type TokenContract = Record<string, TokenDefinition>
