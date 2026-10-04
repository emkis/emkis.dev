import type { APIContext } from 'astro'
import { getSortedArticles } from '@/writing'

export async function getStaticPaths() {
  const articles = await getSortedArticles()
  return articles.map((article) => ({
    props: article,
    params: {
      slug: article.id,
    },
  }))
}

export function GET({ props }: APIContext): Response {
  return new Response(props.body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  })
}
