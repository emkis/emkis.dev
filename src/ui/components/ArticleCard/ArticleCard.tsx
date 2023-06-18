'use client'

import type * as React from 'react'
import type { PolymorphicComponentPropWithoutRef } from '@ui/core'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { Heading } from '@ui/components/Heading'
import { Link } from '@ui/components/Link'
import * as styles from './styles.css'

export type RootProps<Component extends React.ElementType> = PolymorphicComponentPropWithoutRef<
  Component,
  { background: string }
>

export function Root<Component extends React.ElementType = 'div'>(props: RootProps<Component>) {
  const { as, children, background } = props
  const Element = as ?? 'div'

  return (
    <Element className={styles.card}>
      <div
        className={styles.background}
        style={assignInlineVars({ [styles.articleBackground]: background })}
        aria-hidden
      />
      {children}
    </Element>
  )
}

export type TitleProps<Component extends React.ElementType> = PolymorphicComponentPropWithoutRef<
  Component,
  { articleSlug?: string }
>

export function Title<Component extends React.ElementType = 'span'>(props: TitleProps<Component>) {
  const { as, children, articleSlug, ...restProps } = props
  const articleUrl = articleSlug ? `/articles/${articleSlug}` : null

  return (
    // @ts-expect-error Some weird inference error going on.
    <Heading {...restProps} as={as} level={4} className={styles.title}>
      {articleUrl ? (
        <Link href={articleUrl} className={styles.articleLink} unstyled>
          {children}
        </Link>
      ) : (
        children
      )}
    </Heading>
  )
}

export type DescriptionProps<Component extends React.ElementType> =
  PolymorphicComponentPropWithoutRef<Component>

export function Description<Component extends React.ElementType = 'span'>(
  props: DescriptionProps<Component>
) {
  const { as, children, ...restProps } = props

  return (
    // @ts-expect-error Some weird inference error going on.
    <Heading {...restProps} as={as} level={4} className={styles.description}>
      {children}
    </Heading>
  )
}
