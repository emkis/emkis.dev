import * as React from 'react'
import type { Metadata } from 'next'
import { getAllArticles, getArticleBySlug, getReadingTime } from '@article'
import { MDXToContent } from '@ui/core'
import { Navbar } from '@ui/components/Navbar'
import { ArticleColor } from './ArticleColor'
import { ArticleHeader } from './ArticleHeader'
import * as styles from './styles.css'

type PageProps = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({ slug: article._raw.flattenedPath }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  return {
    title: article.title,
  }
}

export function Article({ params }: PageProps) {
  const article = getArticleBySlug(params.slug)
  const articleRawContent = article.body.raw
  const articleReadTime = getReadingTime(articleRawContent)

  return (
    <React.Fragment>
      <Navbar background={article.color} />
      <ArticleColor color={article.color}>
        <ArticleHeader title={article.title} date={article.date} readTime={articleReadTime} />
        <article className={styles.article}>
          <MDXToContent content={article.body.code} />
        </article>
      </ArticleColor>
    </React.Fragment>
  )
}
