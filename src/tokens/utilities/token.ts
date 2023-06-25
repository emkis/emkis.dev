/**
 * The `token` function is just a handy way to expose the tokens
 * to be used on .css.ts or any .ts or .tsx file.
 */

import { baseTokens } from '@tokens/styles/contracts/base.css'
import { themeTokens } from '@tokens/styles/contracts/theme.css'

const tokens = {
  ...baseTokens,
  ...themeTokens,
}

export type Token = keyof typeof tokens

export type CSSVarToken = string

export function token(name: Token): CSSVarToken {
  return tokens[name]
}
