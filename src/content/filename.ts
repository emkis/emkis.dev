/**
 * Articles are named `YYYY-MM-DD-slug.mdx` so they show up in chronological
 * order in the file explorer. The date is the publish date and the rest of
 * the name is the slug used in the URL.
 */
const datedFilenamePattern = /^(\d{4}-\d{2}-\d{2})-(.+)\.mdx?$/

interface ParsedFilename {
  publishedAt: string
  slug: string
}

function parseFilename(filePath: string): ParsedFilename {
  const basename = filePath.split('/').pop() ?? filePath
  const match = basename.match(datedFilenamePattern)
  if (!match) {
    throw new Error(
      `Article "${filePath}" must be named "YYYY-MM-DD-slug.mdx" (e.g. "2026-03-28-hello-world.mdx").`,
    )
  }
  const [, publishedAt, slug] = match
  return { publishedAt, slug }
}

export { parseFilename }
