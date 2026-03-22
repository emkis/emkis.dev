import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const collection = defineCollection({
  loader: glob({ base: './writing', pattern: '**/*.{md,mdx}' }),
  schema: (_context) =>
    z.object({
      title: z.string(),
      description: z.string().max(160),
      published_at: z.string().date(),
      updated_at: z.string().date(),
      featured: z.boolean().optional(),
      color: z.string(),
    }),
})

export const collections = {
  writing: collection,
}
