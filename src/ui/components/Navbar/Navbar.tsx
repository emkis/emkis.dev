'use client'

import { usePathname } from 'next/navigation'
import { Text } from '@ui/components/Text'
import { Pill } from '@ui/components/Pill'
import { Link } from '@ui/components/Link'
import * as styles from './styles.css'

export function Navbar() {
  const pathname = usePathname()
  const isHomeActive = pathname === '/'
  const isArticlesActive = pathname.startsWith('/articles')
  const isMeActive = pathname.startsWith('/me')

  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <Text as={Link} unstyled href="/" weight="bold" size="large" color="primary">
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
