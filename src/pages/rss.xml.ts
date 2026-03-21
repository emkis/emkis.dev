import rss from '@astrojs/rss'
import type { APIRoute } from 'astro'
import { getOrderedArticles } from '@/content/get-ordered-articles'

const GET: APIRoute = async (context) => {
  const articles = await getOrderedArticles()

  return rss({
    title: 'Nicolas Jardim',
    description:
      'Articles about web development, software engineering, and technology.',
    // biome-ignore lint/style/noNonNullAssertion: The site will be always defined
    site: context.site!,
    items: articles.map((post) => ({
      ...post.data,
      link: `/writing/${post.id}/`,
    })),
  })
}

export { GET }
