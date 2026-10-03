import { unified } from '@astrojs/markdown-remark'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import { rehypeDeleteH1s, remarkReadingTime } from './src/writing/markdown.ts'

// https://astro.build/config
export default defineConfig({
  site: 'https://emkis.dev',
  trailingSlash: 'never',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  build: {
    inlineStylesheets: 'always',
  },
  markdown: {
    processor: unified({
      rehypePlugins: [rehypeDeleteH1s],
      remarkPlugins: [remarkReadingTime],
    }),
  },
  integrations: [mdx(), sitemap()],
})
