const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const

export type CSSBreakpoint = `(min-width: ${string})`
export type Breakpoint = keyof typeof breakpoints

/**
 * Returns the CSS value for the respective breakpoint.
 *
 * @example
 * `sm` => 640px
 * `md` => 768px
 * `lg` => 1024px
 * `xl` => 1280px
 */
export function breakpoint(breakpoint: Breakpoint): CSSBreakpoint {
  const targetBreakpoint = breakpoints[breakpoint]
  return `(min-width: ${targetBreakpoint})`
}
