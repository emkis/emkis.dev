import type { Root } from 'mdast'
// biome-ignore lint/performance/noNamespaceImport: Avoids the namespace collision
import * as MdAst from 'mdast-util-to-string'
import calculateReadingTime from 'reading-time'
import type { VFile } from 'vfile'

export function remarkReadingTime() {
  return (tree: Root, file: VFile) => {
    const textOnPage = MdAst.toString(tree)
    const readingTime = calculateReadingTime(textOnPage)
    // @ts-expect-error - Injects into Astro's frontmatter so it can be used in the template
    file.data.astro.frontmatter.minutesToRead = readingTime.text
  }
}
