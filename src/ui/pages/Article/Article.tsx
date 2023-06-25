import * as React from 'react'
import type { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import { resolve } from 'node:path'
import { readFileSync, readdirSync } from 'node:fs'
import shiki from 'shiki'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkShiki from '@stefanprobst/remark-shiki'
import remarkCodeTitle from 'remark-code-title'
import rehypeStringify from 'rehype-stringify'
import rehypeSlug from 'rehype-slug'
import rehypeRaw from 'rehype-raw'
import rehypeReact from 'rehype-react'
import { Text } from '@ui/components/Text'
import { Navbar } from '@ui/components/Navbar'
import { Heading } from '@ui/components/Heading'
import { Link } from '@ui/components/Link'
import * as styles from './styles.css'

type PageProps = {
  params: {
    slug: string
  }
}

const writingsFolderPath = resolve(process.cwd(), 'writings')

export async function generateStaticParams() {
  const articleFiles: string[] = readdirSync(writingsFolderPath)

  return articleFiles.map((fileName) => {
    return { slug: fileName.replaceAll('.md', '') }
  })
}

type MarkdownElementProps = {
  children: React.ReactNode
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: 'Article',
  }
}

export async function Article({ params }: PageProps) {
  const rawMarkdown = readFileSync(`${writingsFolderPath}/${params.slug}.md`)
  const syntaxHighlighter = await shiki.getHighlighter({ theme: 'dracula' })
  const snippet = await unified()
    .use(remarkParse)
    .use(remarkCodeTitle)
    .use(remarkShiki, { highlighter: syntaxHighlighter })
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeStringify)
    // @ts-expect-error foo
    .use(rehypeReact, {
      createElement: React.createElement,
      Fragment: React.Fragment,
      components: {
        h2: ({ children, ...props }: MarkdownElementProps) => (
          <Heading {...props} level={2} as="h2">
            {children}
          </Heading>
        ),
        h3: ({ children, ...props }: MarkdownElementProps) => (
          <Heading {...props} level={3} as="h3">
            {children}
          </Heading>
        ),
        h4: ({ children, ...props }: MarkdownElementProps) => (
          <Heading {...props} level={4} as="h4">
            {children}
          </Heading>
        ),
        p: ({ children, ...props }: MarkdownElementProps) => (
          <Text {...props} as="p" size="base">
            {children}
          </Text>
        ),
        li: ({ children, ...props }: MarkdownElementProps) => (
          <Text {...props} as="li" size="base">
            {children}
          </Text>
        ),
        a: ({ children, ...props }: MarkdownElementProps) => (
          // @ts-expect-error href will be injected from markdown
          <Link {...props} target="_blank" rel="noopener">
            {children}
          </Link>
        ),
        strong: ({ children, ...props }: MarkdownElementProps) => (
          <Text {...props} as="strong" size="base" weight="bold">
            {children}
          </Text>
        ),
        img: ({ children, ...props }: MarkdownElementProps) => (
          // @ts-expect-error src prop will be injected from markdown
          <Image {...props} alt="" width={800} height={500} className="rounded-lg">
            {children}
          </Image>
        ),
      },
    })
    .process(rawMarkdown)

  return (
    <React.Fragment>
      <Navbar />
      <main>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <Heading as="h1" level={1}>
              The path of building my personal website on 2023
            </Heading>
            <Text as="time" size="large">
              14 March, 2023 — 15 min
            </Text>
          </div>
        </header>
        <article className={styles.article}>{snippet.result}</article>
      </main>
    </React.Fragment>
  )
}
