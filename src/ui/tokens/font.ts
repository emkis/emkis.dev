/**
 * The CSS Variables in this file needs to be in sync
 * with the ones on static.css.ts file.
 *
 * It's not possible to share the variable using TypeScript,
 * this is a Next.JS limitation.
 */

import { Inter, Fira_Code } from 'next/font/google'

const body = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500'],
})

const monospaced = Fira_Code({
  variable: '--font-monospaced',
  subsets: ['latin'],
  weight: '400',
})

export const Font = {
  body,
  heading: body,
  monospaced,
} as const
