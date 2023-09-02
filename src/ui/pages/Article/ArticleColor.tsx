'use client'

import type * as React from 'react'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { articleBackground } from './styles.css'

type InternalProps = 'style' | 'color'
type NativeProps = Omit<React.ComponentPropsWithoutRef<'main'>, InternalProps>

export type ArticleColorProps = NativeProps & {
  color: string
}

ArticleColor.displayName = 'ArticleColor'

export function ArticleColor(props: ArticleColorProps) {
  const { children, color, ...restProps } = props
  const rootStyles = assignInlineVars({ [articleBackground]: color })

  return (
    <main {...restProps} style={rootStyles}>
      {children}
    </main>
  )
}
