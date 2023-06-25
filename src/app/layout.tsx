import '@ui/styles/base.css'
import '@tokens/styles/base.css'
import '@tokens/styles/theme-light.css'
import '@tokens/styles/theme-dark.css'

import type * as React from 'react'
import { registerTheme } from '@tokens'
import { font } from '@tokens/font'
import { cn } from '@ui/core'
import * as styles from './app.css'

type RootLayoutProps = { children: React.ReactNode }

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      {...registerTheme('dark')}
      className={cn(font.body, font.heading, font.monospaced, styles.app)}
    >
      <body>{children}</body>
    </html>
  )
}
