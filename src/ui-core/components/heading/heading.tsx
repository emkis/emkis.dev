/** biome-ignore-all lint/style/noMagicNumbers: Pretty obvious what heading levels are */

import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { clamp } from 'es-toolkit/math'
import styles from './heading.module.css'

type HeadingLevel = '1' | '2' | '3' | '4' | '5'

type HeadingProps = {
  level: HeadingLevel
  asChild?: boolean
} & React.ComponentPropsWithRef<'h1'>

function Heading(props: HeadingProps) {
  const { level, ref, children, asChild, className, ...restProps } = props
  const headingLevel = clamp(Number(level), 1, 5)
  const Component = asChild ? Slot : `h${headingLevel}`

  return (
    <Component
      {...restProps}
      ref={ref}
      className={clsx(
        styles.heading,
        styles[`level-${headingLevel}`],
        className,
      )}
    >
      {children}
    </Component>
  )
}

export { Heading, type HeadingProps, type HeadingLevel }
