'use client'

import type * as React from 'react'
import { format, parseISO } from 'date-fns'
import { Heading } from '@ui/components/Heading'
import { Text } from '@ui/components/Text'
import { registerTheme } from '@tokens'
import * as styles from './styles.css'

type NativeProps = Omit<JSX.IntrinsicElements['header'], 'ref'>

export type ArticleHeaderProps = NativeProps & {
  title: string
  date: string
  readTime: number
}

export function ArticleHeader(props: ArticleHeaderProps) {
  const { title, date, readTime } = props

  return (
    <header {...registerTheme('dark').props}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <Heading as="h1" level={1}>
            {title}
          </Heading>
          <Text size="large">
            <time dateTime={date}>{formatDate(date)}</time>
            <span> — {readTime} min</span>
          </Text>
        </div>
      </div>
    </header>
  )
}

function formatDate(date: string) {
  return format(parseISO(date), 'LLLL d, yyyy')
}
