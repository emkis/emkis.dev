/**
 * Build-time entry point for `astro.config.mjs`, which runs before Astro's
 * virtual modules exist, so it can't go through `index.ts`.
 */
export { rehypeDeleteH1s } from './rehype-delete-h1s.ts'
export { remarkReadingTime } from './remark-reading-time.ts'
