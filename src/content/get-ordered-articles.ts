import { type CollectionEntry, getCollection } from 'astro:content'

export type Article = CollectionEntry<'writing'>

export async function getOrderedArticles(): Promise<Article[]> {
  const articles = await getCollection('writing')
  return articles.sort(
    (a, b) =>
      new Date(b.data.published_at).valueOf() -
      new Date(a.data.published_at).valueOf(),
  )
}
