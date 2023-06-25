import * as React from 'react'
import { cn, type ClassNameValue, type PolymorphicComponentPropWithoutRef } from '@ui/core'
import * as styles from './styles.css'

type TextSize = keyof typeof styles.sizeVariant
type TextWeight = keyof typeof styles.weightVariant
type TextFont = keyof typeof styles.fontVariant
type TextColor = keyof typeof styles.colorVariant

export type TextProps<Component extends React.ElementType> = PolymorphicComponentPropWithoutRef<
  Component,
  {
    size?: TextSize
    font?: TextFont
    weight?: TextWeight
    className?: ClassNameValue
    color?: TextColor
  }
>

export function Text<Component extends React.ElementType = 'span'>(props: TextProps<Component>) {
  const {
    children,
    as,
    className,
    size = 'base',
    weight = 'regular',
    font = 'sans-serif',
    color = 'secondary',
    ...restProps
  } = props
  const sizeClassName = styles.sizeVariant[size]
  const weightClassName = styles.weightVariant[weight]
  const fontClassName = styles.fontVariant[font]
  const colorClassName = styles.colorVariant[color]
  const Element = as ?? 'span'

  return (
    <Element
      {...restProps}
      className={cn(colorClassName, fontClassName, sizeClassName, weightClassName, className)}
    >
      {children}
    </Element>
  )
}
