import '@ui/styles/base.css'
import '@tokens/styles/base.css'
import '@tokens/styles/theme-light.css'
import '@tokens/styles/theme-dark.css'

import type * as React from 'react'
import { cn } from '@ui/core'
import { Font } from '@ui/tokens'
import * as styles from './app.css'

type RootLayoutProps = { children: React.ReactNode }

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={cn(
        Font.body.variable,
        Font.heading.variable,
        Font.monospaced.variable,
        styles.app
      )}
    >
      <body>{children}</body>
    </html>
  )
}
