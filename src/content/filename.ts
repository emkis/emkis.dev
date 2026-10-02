// biome-ignore lint/correctness/noNodejsModules: Only used by the content config, which runs in Node at build time
import { basename, extname } from 'node:path'

/**
 * Articles are named `<number>-slug.mdx` (e.g. `001-hello-world.mdx`) so they
 * show up in writing order in the file explorer. The number is only for
 * ordering files, the rest of the name is the slug used in the URL.
 */
function getSlugFromFilename(filePath: string): string {
  const name = basename(filePath, extname(filePath))
  const [number, ...slugParts] = name.split('-')
  if (Number.isNaN(Number(number)) || slugParts.length === 0) {
    throw new Error(
      `Article "${filePath}" must be named "<number>-slug.mdx" (e.g. "001-hello-world.mdx").`,
    )
  }
  return slugParts.join('-')
}

export { getSlugFromFilename }
