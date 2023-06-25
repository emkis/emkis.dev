import type * as React from 'react'

export type ContentContainerProps = React.PropsWithChildren

export function ContentContainer(props: ContentContainerProps) {
  const { children } = props
  return <div>{children}</div>
}
