import { type PolymorphicComponentPropWithoutRef } from '@ui/core'
import * as styles from './styles.css'

export type ArticlesGridProps<Component extends React.ElementType> =
  PolymorphicComponentPropWithoutRef<Component, {}>

export function ArticlesGrid<Component extends React.ElementType = 'div'>(
  props: ArticlesGridProps<Component>
) {
  const { children, as } = props
  const Element = as ?? 'div'

  return <Element className={styles.grid}>{children}</Element>
}
