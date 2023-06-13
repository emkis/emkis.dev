import type * as React from 'react'
import TextWrapBalancer from 'react-wrap-balancer'
import { cn, type ClassNameValue, type PolymorphicComponentPropWithoutRef } from '@ui/core'
import * as styles from './styles.css'

type HeadingLevel = keyof typeof styles.levelVariant

export type HeadingProps<Component extends React.ElementType> = PolymorphicComponentPropWithoutRef<
  Component,
  {
    className?: ClassNameValue
    level: HeadingLevel
  }
>

export function Heading<Component extends React.ElementType = 'span'>(
  props: HeadingProps<Component>
) {
  const { children, as, className, level, ...restProps } = props
  const levelClassNames = styles.levelVariant[level]
  const Element = as ?? 'span'

  return (
    <Element {...restProps} className={cn(levelClassNames, className)}>
      <TextWrapBalancer>{children}</TextWrapBalancer>
    </Element>
  )
}
