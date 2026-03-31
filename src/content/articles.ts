import { type CollectionEntry, getCollection } from 'astro:content'

type Article = CollectionEntry<'writing'>

function sortDescendingPublishedDate(a: Article, b: Article): number {
  return (
    new Date(b.data.published_at).valueOf() -
    new Date(a.data.published_at).valueOf()
  )
}

async function getSortedArticles(): Promise<Article[]> {
  const articles = await getCollection('writing')
  return articles.sort(sortDescendingPublishedDate)
}

async function getSortedArticlesByYear(): Promise<Map<number, Article[]>> {
  const sortedArticles = await getSortedArticles()
  return Map.groupBy(sortedArticles, (article) => {
    const publishedAt = new Date(article.data.published_at)
    return publishedAt.getFullYear()
  })
}

export { type Article, getSortedArticles, getSortedArticlesByYear }
