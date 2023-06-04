import { type ClassNameValue, cn } from '@ui/core'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import * as styles from './styles.css'

type NativeProps = Omit<JSX.IntrinsicElements['a'], 'ref'>
export type LinkProps = NativeProps &
  NextLinkProps & {
    className?: ClassNameValue
    unstyled?: boolean
  }

export function Link(props: LinkProps) {
  const { children, className, unstyled, ...restProps } = props
  const baseClassNames = unstyled ? undefined : styles.link

  return (
    <NextLink {...restProps} className={cn(baseClassNames, className)}>
      {children}
    </NextLink>
  )
}
