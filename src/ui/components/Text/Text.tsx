import * as React from 'react'
import { cn, type ClassNameValue, type PolymorphicComponentPropWithoutRef } from '@ui/core'
import * as styles from './styles.css'

type TextSize = 'base' | 'large'
type TextVariant = 'regular' | 'bold'

export type TextProps<Component extends React.ElementType> = PolymorphicComponentPropWithoutRef<
  Component,
  {
    className?: ClassNameValue
    size?: TextSize
    variant?: TextVariant
  }
>

const textSizes = {
  base: styles.sizeBase,
  large: styles.sizeLarge,
} satisfies Record<TextSize, string>

const textVariants = {
  regular: styles.variantRegular,
  bold: styles.variantBold,
} satisfies Record<TextVariant, string>

export function Text<Component extends React.ElementType>(props: TextProps<Component>) {
  const { children, as, className, size = 'base', variant = 'regular', ...restProps } = props
  const sizeClassName = textSizes[size]
  const variantClassName = textVariants[variant]
  const Element = as ?? 'span'

  return (
    <Element {...restProps} className={cn(styles.base, sizeClassName, variantClassName, className)}>
      {children}
    </Element>
  )
}
