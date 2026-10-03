# emkis.dev

Source code for [emkis.dev](https://emkis.dev), my personal website and blog.
If you came here from an article, its source is in [`writing/`](writing/).

## How it's built

A static [Astro](https://astro.build) site hosted on [Vercel](https://vercel.com). A few decisions worth pointing out:

- **Minimum JavaScript footprint**: pages are mostly HTML and CSS.
- **Articles are text-only**: plain MDX files with no images or embedded components.
- **Vertical slice architecture**: `src/` is split by concern, each with a public API and lint-enforced import boundaries.

## License

Code is licensed under [MIT](license). Articles in [`writing/`](writing/) are licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
