'use client'

import type * as React from 'react'
import { format, parseISO } from 'date-fns'
import { Heading } from '@ui/components/Heading'
import { Text } from '@ui/components/Text'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import * as styles from './styles.css'

type NativeProps = Omit<JSX.IntrinsicElements['header'], 'ref'>

export type ArticleHeaderProps = NativeProps & {
  title: string
  date: string
  color: string
}

export function ArticleHeader(props: ArticleHeaderProps) {
  const { title, date, color } = props
  const rootStyles = assignInlineVars({ [styles.articleBackground]: color })

  return (
    <header style={rootStyles}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <Heading as="h1" level={1}>
            {title}
          </Heading>
          <Text as="time" size="large">
            {formatDate(date)} — 15 min
          </Text>
        </div>
      </div>
    </header>
  )
}

function formatDate(date: string) {
  return format(parseISO(date), 'LLLL d, yyyy')
}
