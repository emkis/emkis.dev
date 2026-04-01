/** biome-ignore-all lint/style/useNamingConvention: Snake_case is preferred in YAML */
import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

/**
 * I've read multiple recommendations on the internet about keeping these
 * meta descriptions between 150 and 160 characters, so I'm just following,
 * I don't feel like going too deep into that.
 */
const maxDescriptionLength = 150

const collection = defineCollection({
  loader: glob({ base: './writing', pattern: '**/*.{md,mdx}' }),
  schema: (_context) =>
    z.object({
      title: z.string(),
      description: z.string().max(maxDescriptionLength),
      published_at: z.string().date(),
      updated_at: z.string().date(),
      featured: z.boolean().optional(),
      color: z.string(),
    }),
})

export const collections = {
  writing: collection,
}
