import type { APIRoute } from 'astro'

const getRobotsTxt = (sitemapUrl: URL) =>
  `
User-agent: *
Allow: /

Sitemap: ${sitemapUrl.href}
`.trim()

const GET: APIRoute = (context) => {
  const sitemapUrl = new URL('sitemap-index.xml', context.site)
  return new Response(getRobotsTxt(sitemapUrl))
}

export { GET }
