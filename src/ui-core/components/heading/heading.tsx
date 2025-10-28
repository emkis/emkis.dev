/** biome-ignore-all lint/style/noMagicNumbers: Pretty obvious what heading levels are */

import { Slot } from '@radix-ui/react-slot'
import { clamp } from 'es-toolkit/math'
import { cn } from '../../utilities/classnames'
import styles from './heading.module.css'

type HeadingLevel = '1' | '2' | '3' | '4' | '5'
type HeadingColor = 'primary' | 'secondary'

type HeadingProps = {
  level: HeadingLevel
  color?: HeadingColor
  asChild?: boolean
} & React.ComponentPropsWithRef<'h1'>

function Heading(props: HeadingProps) {
  const { level, ref, children, asChild, className, color, ...restProps } =
    props
  const headingLevel = clamp(Number(level), 1, 5)
  const Component = asChild ? Slot : `h${headingLevel}`

  return (
    <Component
      {...restProps}
      ref={ref}
      className={cn(
        styles.heading,
        styles[`level-${headingLevel}`],
        styles[`color-${color}`],
        className,
      )}
    >
      {children}
    </Component>
  )
}

export { Heading, type HeadingProps, type HeadingLevel, type HeadingColor }
