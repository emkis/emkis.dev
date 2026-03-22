import { type CollectionEntry, getCollection } from 'astro:content'

type Article = CollectionEntry<'writing'>

async function getSortedArticles(): Promise<Article[]> {
  const articles = await getCollection('writing')
  return articles.sort(
    (a, b) =>
      new Date(b.data.published_at).valueOf() -
      new Date(a.data.published_at).valueOf(),
  )
}

export { type Article, getSortedArticles }
