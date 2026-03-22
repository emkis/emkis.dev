import rss from '@astrojs/rss'
import type { APIRoute } from 'astro'
import { getSortedArticles } from '@/content/articles'
import { metadata } from '@/metadata'

const GET: APIRoute = async (context) => {
  const articles = await getSortedArticles()
  const rssUrl = new URL('/rss.xml', context.site)

  return rss({
    title: metadata.title,
    description: metadata.description,
    customData: `
    <language>en-us</language>
    <atom:link href="${rssUrl}" rel="self" type="application/rss+xml" />
    `.trim(),
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
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
