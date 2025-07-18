'use client'
import type * as React from 'react'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { usePathname } from 'next/navigation'
import { Text } from '@ui/components/Text'
import { Pill } from '@ui/components/Pill'
import { Link } from '@ui/components/Link'
import { cn } from '@ui/core'
import * as styles from './styles.css'

type NativeProps = Omit<React.JSX.IntrinsicElements['nav'], 'ref'>

export type NavbarProps = NativeProps & {
  background?: string
}

export function Navbar(props: NavbarProps) {
  const { background, className, style, ...restProps } = props
  const pathname = usePathname()
  const isHomeActive = pathname === '/'
  const isArticlesActive = pathname.startsWith('/articles')
  const isMeActive = pathname.startsWith('/me')
  const customBackground = background
    ? assignInlineVars({ [styles.navbarBackground]: background })
    : null

  return (
    <nav
      {...restProps}
      style={{ ...style, ...customBackground }}
      className={cn(styles.navbar, className)}
    >
      <div className={styles.content}>
        <Text
          as={Link}
          unstyled
          href="/"
          weight="bold"
          size="large"
          color="primary"
          className={styles.emkis}
        >
          emkis.dev
        </Text>

        <div className={styles.links}>
          <Pill as={Link} unstyled href="/" variant={isHomeActive ? 'active' : 'default'}>
            Home
          </Pill>
          <Pill
            as={Link}
            unstyled
            href="/articles"
            variant={isArticlesActive ? 'active' : 'default'}
          >
            Articles
          </Pill>
          <Pill as={Link} unstyled href="/me" variant={isMeActive ? 'active' : 'default'}>
            About me
          </Pill>
        </div>
      </div>
    </nav>
  )
}
