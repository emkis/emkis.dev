/**
 * Articles are named `NNN-slug.mdx` (e.g. `001-hello-world.mdx`) so they show
 * up in writing order in the file explorer. The number is only for ordering
 * files, the rest of the name is the slug used in the URL.
 */
const numberedFilenamePattern = /^\d{3}-(.+)\.mdx?$/

function getSlugFromFilename(filePath: string): string {
  const basename = filePath.split('/').pop() ?? filePath
  const match = basename.match(numberedFilenamePattern)
  if (!match) {
    throw new Error(
      `Article "${filePath}" must be named "NNN-slug.mdx" (e.g. "001-hello-world.mdx").`,
    )
  }
  return match[1]
}

export { getSlugFromFilename }
