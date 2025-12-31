import rss from '@astrojs/rss'
import { getOrderedArticles } from '@/content/get-ordered-articles'

export async function GET(context) {
  const articles = await getOrderedArticles()
  return rss({
    title: 'TODO__DEFINE_WEBSITE_NAME',
    description: 'TODO__DEFINE_WEBSITE_DESCRIPTION',
    site: context.site,
    items: articles.map((post) => ({
      ...post.data,
      link: `/writing/${post.id}/`,
    })),
  })
}
