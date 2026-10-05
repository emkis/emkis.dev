/** biome-ignore-all lint/style/useNamingConvention: mirroring the frontmatter field names from articles */

import type { APIContext } from 'astro'
import { type Article, getArticlePathname, getSortedArticles } from '@/writing'

function buildFrontmatter(article: Article, url: URL): string {
  return `
---
canonical_url: ${url.href}
published_at: ${article.data.published_at}
${article.data.updated_at ? `updated_at: ${article.data.updated_at}` : ''}
---
`.trim()
}

export async function getStaticPaths() {
  const articles = await getSortedArticles()
  return articles.map((article) => ({
    props: article,
    params: {
      slug: article.id,
    },
  }))
}

export function GET({ props, site }: APIContext): Response {
  const article = props as Article
  const canonicalUrl = new URL(getArticlePathname(article), site)
  const frontmatter = buildFrontmatter(article, canonicalUrl)
  const body = `${frontmatter}\n\n${article.body}`.trim()

  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
