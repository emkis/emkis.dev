import type * as React from 'react'
import { cn } from '@ui/core'
import { Font } from '@ui/tokens'
import { darkTheme } from '@ui/tokens/themes/dark.css'
import * as styles from './styles.css'
import '@ui/styles/base.css'
import '@ui/tokens/static.css'

type RootLayoutProps = { children: React.ReactNode }

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(
        Font.body.variable,
        Font.heading.variable,
        Font.monospaced.variable,
        darkTheme,
        styles.app
      )}
    >
      <body>{children}</body>
    </html>
  )
}
