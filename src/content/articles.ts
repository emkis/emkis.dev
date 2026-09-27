/** biome-ignore-all lint/style/useNamingConvention: Keeps the same casing as the frontmatter */
import { type CollectionEntry, getCollection } from 'astro:content'
import { parseFilename } from './filename'

type Entry = CollectionEntry<'writing'>

/**
 * The publish date comes from the file name, so it is added here
 * next to the frontmatter data to keep everything in one place.
 */
type Article = Entry & {
  data: Entry['data'] & { published_at: string }
}

function withPublishedDate(entry: Entry): Article {
  // biome-ignore lint/style/noNonNullAssertion: The glob loader always sets the filePath
  const { publishedAt } = parseFilename(entry.filePath!)
  return { ...entry, data: { ...entry.data, published_at: publishedAt } }
}

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
  const today = new Date().toISOString().slice(0, 10)
  return article.data.published_at <= today
}

function sortDescendingPublishedDate(a: Article, b: Article): number {
  return (
    b.data.published_at.localeCompare(a.data.published_at) ||
    a.data.title.localeCompare(b.data.title)
  )
}

async function getSortedArticles(): Promise<Article[]> {
  const entries = await getCollection('writing')
  return entries
    .map(withPublishedDate)
    .filter(isPublished)
    .sort(sortDescendingPublishedDate)
}

async function getSortedArticlesByYear(): Promise<Map<number, Article[]>> {
  const sortedArticles = await getSortedArticles()
  return Map.groupBy(sortedArticles, (article) => {
    const publishedAt = new Date(article.data.published_at)
    return publishedAt.getFullYear()
  })
}

export { type Article, getSortedArticles, getSortedArticlesByYear }
