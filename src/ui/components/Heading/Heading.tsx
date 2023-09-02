import type * as React from 'react'
import TextWrapBalancer from 'react-wrap-balancer'
import { Link } from '@ui/components/Link'
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
  const { children, as, className, level, id, ...restProps } = props
  const levelClassNames = styles.levelVariant[level]
  const Element = as ?? 'span'

  return (
    <Element {...restProps} id={id} className={cn(levelClassNames, className)}>
      {id ? (
        <Link href={`#${id}`} unstyled>
          <TextWrapBalancer>
            {children}
            <span className={styles.anchor} aria-hidden>
              {' #'}
            </span>
          </TextWrapBalancer>
        </Link>
      ) : (
        <TextWrapBalancer>{children}</TextWrapBalancer>
      )}
    </Element>
  )
}
