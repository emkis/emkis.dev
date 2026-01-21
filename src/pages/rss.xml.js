import rss from '@astrojs/rss'
import { getOrderedArticles } from '@/content/get-ordered-articles'

export async function GET(context) {
  const articles = await getOrderedArticles()
  return rss({
    title: 'Nicolas Jardim',
    description:
      'Articles about web development, software engineering, and technology.',
    site: context.site,
    items: articles.map((post) => ({
      ...post.data,
      link: `/writing/${post.id}/`,
    })),
  })
}
