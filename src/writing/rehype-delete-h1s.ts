import type { Root } from 'hast'
import type { Plugin } from 'unified'

/**
 * I want each article to contain its own title in the markdown content directly,
 * but on HTML I want to render the title outside the content so that I can better
 * position things visually, so this plugin removes the H1s from the markdown content.
 */
const rehypeDeleteH1s: Plugin<[], Root> = () => (tree) => {
  tree.children = tree.children.filter(
    (node) => !(node.type === 'element' && node.tagName === 'h1'),
  )
}

export { rehypeDeleteH1s }
