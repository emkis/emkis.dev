import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode, { type Options as RehypePrettyCodeOptions } from 'rehype-pretty-code'

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    color: { type: 'string', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (article) => `/articles/${article._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'writings',
  documentTypes: [Article],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: 'dracula' } as RehypePrettyCodeOptions],
    ],
  },
})
