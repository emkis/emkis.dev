import { Text } from '@ui/components/Text'
import { Heading } from '@ui/components/Heading'
import { Link } from '@ui/components/Link'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  h2: ({ children, ...props }) => (
    <Heading {...props} as="h2" level={2}>
      {children}
    </Heading>
  ),
  h3: ({ children, ...props }) => (
    <Heading {...props} as="h3" level={3}>
      {children}
    </Heading>
  ),
  h4: ({ children, ...props }) => (
    <Heading {...props} as="h4" level={4}>
      {children}
    </Heading>
  ),
  p: ({ children, ...props }) => (
    <Text {...props} as="p" color="secondary" size="base">
      {children}
    </Text>
  ),
  li: ({ children, ...props }) => (
    <Text {...props} as="li" color="secondary" size="base">
      {children}
    </Text>
  ),
  a: ({ children, ...props }) => (
    // @ts-expect-error href will be injected from markdown
    <Link {...props} target="_blank" rel="noopener">
      {children}
    </Link>
  ),
  strong: ({ children, ...props }) => (
    <Text {...props} as="strong" size="base" color="primary" weight="bold">
      {children}
    </Text>
  ),
  img: ({ children, ...props }) => (
    // @ts-expect-error src prop will be injected from markdown
    <Image {...props} ref={undefined} placeholder="blur" width={800} height={500}>
      {children}
    </Image>
  ),
}

export type MDXToContentProps = {
  content: string
}

export function MDXToContent(props: MDXToContentProps) {
  const { content } = props
  const MDXContent = useMDXComponent(content)
  return <MDXContent components={components} />
}
