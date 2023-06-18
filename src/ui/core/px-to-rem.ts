export type RemToken = `${string}rem`

export function pxToRem(px: number): RemToken {
  const baseFontSize = 16
  const remSize = px / baseFontSize
  const size = remSize.toFixed(2)

  return `${size}rem` as const
}
