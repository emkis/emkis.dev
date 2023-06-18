import type * as React from 'react'
import { cn, type PolymorphicComponentPropWithoutRef, type ClassNameValue } from '@ui/core'
import { Text } from '@ui/components/Text'
import { lightTheme } from '@ui/tokens/themes/light.css'
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
  const themeClassName = variant === 'active' ? lightTheme : null
  const textClassName = styles.variant[variant]
  const Element = as ?? 'button'
  const buttonProps: JSX.IntrinsicElements['button'] = { type: 'button' }

  return (
    <Element
      {...restProps}
      {...(as ? null : buttonProps)}
      className={cn(themeClassName, styles.pill, className)}
    >
      <Text size="base" weight="bold" className={textClassName}>
        {children}
      </Text>
    </Element>
  )
}
