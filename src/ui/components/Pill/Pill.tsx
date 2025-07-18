import type * as React from 'react'
import { cn, type PolymorphicComponentPropWithoutRef, type ClassNameValue } from '@ui/core'
import { Text } from '@ui/components/Text'
import { registerTheme } from '@tokens'
import * as styles from './styles.css'

type PillVariant = keyof typeof styles.variant

export type PillProps<Component extends React.ElementType> = PolymorphicComponentPropWithoutRef<
  Component,
  {
    variant?: PillVariant
    className?: ClassNameValue
  }
>

export function Pill<Component extends React.ElementType = 'button'>(props: PillProps<Component>) {
  const { as, children, className, variant = 'default', ...restProps } = props
  const themeAttribute = variant === 'active' ? registerTheme('light').props : null
  const textClassName = styles.variant[variant]
  const Element = as ?? 'button'
  const buttonProps: React.JSX.IntrinsicElements['button'] = { type: 'button' }

  return (
    <Element
      {...restProps}
      {...themeAttribute}
      {...(as ? null : buttonProps)}
      className={cn(styles.pill, className)}
    >
      <Text size="base" weight="bold" className={textClassName}>
        {children}
      </Text>
    </Element>
  )
}
