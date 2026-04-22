import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import { rehypeDeleteH1s } from './src/rehype.ts'
import { remarkReadingTime } from './src/remark.ts'

// https://astro.build/config
export default defineConfig({
  site: 'https://emkis.dev',
  trailingSlash: 'never',
  integrations: [
    mdx({
      rehypePlugins: [rehypeDeleteH1s],
      remarkPlugins: [remarkReadingTime],
    }),
    sitemap(),
    react(),
  ],
})
