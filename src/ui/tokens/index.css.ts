/**
 * I'm only exporting this file here for convenience,
 * then we can import all tokens together, instead of having
 * multiple imports for tokens.
 */

import { dynamicTokens } from './dynamic.css'
import { staticTokens } from './static.css'

export const Tokens = {
  ...staticTokens,
  ...dynamicTokens,
}
