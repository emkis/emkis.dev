import { Inter, Fira_Code } from 'next/font/google'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500'],
})

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
  weight: '400',
})

export const Fonts = {
  /** Font for body text and headings. */
  inter,

  /** Font for code snippets. */
  firaCode,
} as const
