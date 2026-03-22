import rss from '@astrojs/rss'
import type { APIRoute } from 'astro'
import { getOrderedArticles } from '@/content/get-ordered-articles'
import { metadata } from '@/metadata'

const GET: APIRoute = async (context) => {
  const articles = await getOrderedArticles()

  return rss({
    title: metadata.title,
    description: metadata.description,
    customData: '<language>en-us</language>',
    // biome-ignore lint/style/noNonNullAssertion: The site will be always defined
    site: context.site!,
    items: articles.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/writing/${post.id}/`,
      pubDate: new Date(post.data.published_at),
    })),
  })
}

export { GET }
