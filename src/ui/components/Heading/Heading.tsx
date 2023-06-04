import type * as React from 'react'
import TextWrapBalancer from 'react-wrap-balancer'
import { cn, type ClassNameValue, type PolymorphicComponentPropWithoutRef } from '@ui/core'
import * as styles from './styles.css'

type HeadingLevel = 1 | 2 | 3 | 4

export type HeadingProps<Component extends React.ElementType> = PolymorphicComponentPropWithoutRef<
  Component,
  {
    className?: ClassNameValue
    level: HeadingLevel
  }
>

const headingLevels = {
  1: styles.level1,
  2: styles.level2,
  3: styles.level3,
  4: styles.level4,
} satisfies Record<HeadingLevel, string>

export function Heading<Component extends React.ElementType>(props: HeadingProps<Component>) {
  const { children, as, className, level, ...restProps } = props
  const levelClassNames = headingLevels[level]
  const Element = as ?? 'span'

  return (
    <Element {...restProps} className={cn(styles.base, levelClassNames, className)}>
      <TextWrapBalancer>{children}</TextWrapBalancer>
    </Element>
  )
}
