import '@ui/styles/base.css'
import '@tokens/styles/base.css'
import '@tokens/styles/theme-light.css'
import '@tokens/styles/theme-dark.css'

import type * as React from 'react'
import type { Metadata } from 'next'
import { registerTheme } from '@tokens'
import { font } from '@tokens/font'
import { cn } from '@ui/core'
import * as styles from './app.css'

type RootLayoutProps = { children: React.ReactNode }

export const metadata: Metadata = {
  title: {
    default: 'emkis.dev',
    template: '%s — emkis.dev',
  },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      {...registerTheme('dark').props}
      className={cn(font.body, font.heading, font.monospaced, styles.app)}
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
