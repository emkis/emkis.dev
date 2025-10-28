import { Slot } from '@radix-ui/react-slot'
import { cn } from '../../utilities/classnames'
import styles from './text.module.css'

type TextColor = 'primary' | 'secondary'

type TextProps = {
  color?: TextColor
  asChild?: boolean
  underline?: boolean
} & React.ComponentPropsWithRef<'span'>

function Text(props: TextProps) {
  const {
    ref,
    children,
    asChild,
    className,
    color = 'primary',
    underline,
    ...restProps
  } = props
  const Component = asChild ? Slot : 'span'

  return (
    <Component
      {...restProps}
      ref={ref}
      className={cn(
        styles.text,
        styles[`color-${color}`],
        underline && styles['text-underline'],
        className,
      )}
    >
      {children}
    </Component>
  )
}

export { Text, type TextProps, type TextColor }
