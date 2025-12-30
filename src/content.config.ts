import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './writing', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: (context) =>
    z.object({
      title: z.string(),
      published_at: z.string().date(),
      updated_at: z.string().date(),
      featured: z.boolean().optional(),
      color: z.string(),
    }),
})

export const collections = { blog }
