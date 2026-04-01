const articleColors: Record<string, string> = {
  '--article-color-1': '#e2a336',
  '--article-color-2': '#5eb1ef',
  '--article-color-3': '#c2a499',
  '--article-color-4': '#cea37e',
  '--article-color-5': '#e093b2',
  '--article-color-6': '#3db9cf',
  '--article-color-7': '#b9a88d',
  '--article-color-8': '#65ba74',
  '--article-color-9': '#5bb98b',
  '--article-color-10': '#8da4ef',
  '--article-color-11': '#9b9ef0',
  '--article-color-12': '#56ba9f',
  '--article-color-13': '#8db654',
  '--article-color-14': '#4cbba5',
  '--article-color-15': '#ec9455',
  '--article-color-16': '#dd93c2',
  '--article-color-17': '#cf91d8',
  '--article-color-18': '#be93e4',
  '--article-color-19': '#eb8e90',
  '--article-color-20': '#e592a3',
  '--article-color-21': '#60b3d7',
  '--article-color-22': '#53b9ab',
  '--article-color-23': '#ec8e7b',
  '--article-color-24': '#aa99ec',
  '--article-color-25': '#d5ae39',
}

function resolveArticleColor(cssVar: string): string {
  const normalized = cssVar.replace(/^var\((.+)\)$/, '$1').trim()
  const color = articleColors[normalized]
  if (!color) throw new Error(`Unknown article color: ${cssVar}`)
  return color
}

export { resolveArticleColor }
