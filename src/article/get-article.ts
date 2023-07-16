import { allArticles, type Article } from '@content'

export function getAllArticles(): Article[] {
  return allArticles
}

export function getArticleBySlug(slug: string): Article {
  const article = allArticles.find((article) => article._raw.flattenedPath === slug)
  if (!article) throw new Error(`Article not found with slug: ${slug}`)
  return article
}
