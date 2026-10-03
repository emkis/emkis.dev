# AGENTS.md

Personal website and blog built with Astro. Articles are numbered MDX files in
`writing/` (`000-article.mdx`).

## Commands

- `pnpm dev`: start the dev server
- `pnpm build`: build into `dist/`
- `pnpm lint` / `pnpm lint:fix`: check / auto-fix lint and formatting

## Architecture

`src/` is organized in verticals, one folder per concern, each exposing its public API through `index.ts`:

- `pages/`: routes (Astro file-based routing)
- `writing/`: articles: collection, queries, markdown plugins, article UI
- `shell/`: site chrome: navbar, footer, page container, `<head>` metadata
- `ui/`: style guide: typography, layout primitives, global styles

Verticals can only import in the direction of the arrows, and Biome enforces it:

```
pages ──► writing ──► ui
   │                   ▲
   └────► shell ───────┘
```
