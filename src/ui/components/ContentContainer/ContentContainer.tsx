import { type PolymorphicComponentPropWithoutRef } from '@ui/core'
import * as styles from './styles.css'

export type ContentContainerProps<Component extends React.ElementType> =
  PolymorphicComponentPropWithoutRef<Component, {}>

export function ContentContainer<Component extends React.ElementType = 'div'>(
  props: ContentContainerProps<Component>
) {
  const { children, as } = props
  const Element = as ?? 'div'

  return <Element className={styles.container}>{children}</Element>
}
