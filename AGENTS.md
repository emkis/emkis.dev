# AGENTS.md

Personal website and blog built with Astro. Articles live in `writing/` as
numbered MDX files (`001-hello-world.mdx`).

## Commands

- `pnpm dev`: start the dev server
- `pnpm build`: build the static site into `dist/`
- `pnpm lint`: run Biome (lint + format check), `pnpm lint --fix` to apply fixes

## Code organization

Code in `src/` is organized in **verticals**: top-level folders that each own
one concern end to end, instead of folders grouped by file type.

```
src/
├── pages/      routing: every route, with its own markup and styles
├── writing/    articles: collection, queries, markdown plugins, article UI
├── shell/      site chrome: navbar, footer, page container, <head> metadata
├── ui/         design system: typography, layout primitives, global styles
└── content.config.ts
```

### Pages

- `src/pages/` is Astro's file-based routing. A page holds the majority of its
  own markup and styles, so opening the file shows what the page is.
- Pages import building blocks from verticals and compose them. Don't move
  page-specific markup into a vertical just to make the page shorter.
- Small page-specific files can be colocated next to the page. CSS files are
  never routes; `.astro`/`.ts` helpers must be prefixed with `_` so Astro
  doesn't turn them into routes.
- Once something is needed by a second consumer, or a page grows big enough to
  deserve its own concern, promote it to a vertical.

### Verticals

- Each vertical is a flat folder. Add subfolders only when a group of files
  clearly forms on its own.
- Each vertical exposes its public API through `index.ts`. Anything not
  exported there is internal to the vertical.
- Inside a vertical, files import each other with relative paths (`./file`).
- `writing` has two extra build-time entry points, because the files that use
  them run before Astro's virtual modules exist (or would create a cycle):
  - `writing/collection.ts`: used only by `src/content.config.ts`
  - `writing/markdown.ts`: used only by `astro.config.mjs`

### Dependency rules

```
pages ──► writing ──► ui
   │                   ▲
   └────► shell ───────┘
```

1. Outside a vertical, import only from its entry point: `@/writing`, not
   `@/writing/articles`. The build-time entries above are the only exceptions.
2. No `../` imports. Cross-folder imports go through `@/<vertical>`.
3. `ui` doesn't import any other vertical.
4. `shell` and `writing` may import `@/ui`, but not each other.
5. Pages may import from any vertical.

These rules are enforced by Biome's `noRestrictedImports` (see `biome.json`),
so `pnpm lint` fails when they're broken.
