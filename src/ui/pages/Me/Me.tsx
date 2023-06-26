import * as React from 'react'
import type { Metadata } from 'next'
import { ContentContainer } from '@ui/components/ContentContainer'
import { Navbar } from '@ui/components/Navbar'
import { Heading } from '@ui/components/Heading'
import { Text } from '@ui/components/Text'
import * as styles from './styles.css'

export const metadata: Metadata = {
  title: 'About me',
  description: `I'm Nicolas Jardim.`,
}

export function Me() {
  return (
    <React.Fragment>
      <Navbar />
      <ContentContainer as="main">
        <header className={styles.header}>
          <Heading as="h1" level={2}>
            Hi, I&apos;m Nicolas Jardim 👋
          </Heading>

          <Text as="p" size="large">
            I&apos;m not really sure what to put on this page for now, so this will have more
            content in a few days.
          </Text>
        </header>
      </ContentContainer>
    </React.Fragment>
  )
}
