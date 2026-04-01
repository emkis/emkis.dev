import type { APIRoute, GetStaticPaths } from 'astro'
import { getSortedArticles } from '@/content/articles'
import { resolveArticleColor } from '@/lib/og/colors'
import { Design1 } from '@/lib/og/designs'
import { generateOgImage } from '@/lib/og/generate'

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getSortedArticles()
  return articles.map((article) => ({
    params: {
      slug: article.id,
    },
    props: {
      title: article.data.title,
      color: article.data.color,
    },
  }))
}

export const GET: APIRoute = async ({ props }) => {
  const color = resolveArticleColor(props.color as string)
  const image = await generateOgImage(
    Design1({ title: props.title as string, color }),
  )
  return new Response(image, {
    headers: {
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
