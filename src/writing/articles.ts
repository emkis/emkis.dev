import { type CollectionEntry, getCollection } from 'astro:content'

type Article = CollectionEntry<'writing'>

/**
 * Drafts and future-dated articles are hidden from the production build,
 * but still visible in dev so I can preview them while writing.
 */
function isPublished(article: Article): boolean {
  if (import.meta.env.DEV) {
    return true
  }
  if (article.data.draft) {
    return false
  }
  return new Date(article.data.published_at).valueOf() <= Date.now()
}

function sortDescendingPublishedDate(a: Article, b: Article): number {
  return (
    new Date(b.data.published_at).valueOf() -
    new Date(a.data.published_at).valueOf()
  )
}

async function getSortedArticles(): Promise<Article[]> {
  const articles = await getCollection('writing')
  return articles.filter(isPublished).sort(sortDescendingPublishedDate)
}

async function getSortedArticlesByYear(): Promise<Map<number, Article[]>> {
  const sortedArticles = await getSortedArticles()
  return Map.groupBy(sortedArticles, (article) => {
    const publishedAt = new Date(article.data.published_at)
    return publishedAt.getFullYear()
  })
}

function getArticlePathname(article: Article): string {
  return `/writing/${article.id}`
}

export {
  type Article,
  getArticlePathname,
  getSortedArticles,
  getSortedArticlesByYear,
}
