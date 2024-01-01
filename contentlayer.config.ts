import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode, { type Options as RehypePrettyCodeOptions } from 'rehype-pretty-code'
import aylinTheme from './aylin.json'

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    color: { type: 'string', required: true },
    featured: { type: 'boolean', required: false },
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
      [
        // @ts-expect-error These types are incompatible, check issue: https://github.com/atomiks/rehype-pretty-code/issues/127
        rehypePrettyCode,
        {
          // @ts-expect-error The theme works fine, but for some reason the types are not compatible
          theme: aylinTheme,
        } satisfies RehypePrettyCodeOptions,
      ],
    ],
  },
})
