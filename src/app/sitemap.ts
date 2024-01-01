import type { MetadataRoute } from 'next'
import { getAllArticles } from '@article'

const hostname = 'https://emkis.dev'

export default function sitemap(): MetadataRoute.Sitemap {
  const rootRoutes: MetadataRoute.Sitemap = [
    {
      url: `${hostname}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${hostname}/me`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${hostname}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  const articlesRoutes: MetadataRoute.Sitemap = getAllArticles().map((article) => {
    return {
      url: `${hostname}${article.url}`,
      lastModified: new Date(article.date),
      changeFrequency: 'weekly',
      priority: 0.8,
    }
  })

  return [rootRoutes, articlesRoutes].flat()
}
