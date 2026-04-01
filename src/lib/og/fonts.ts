import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import process from 'node:process'

interface FontData {
  inter400: ArrayBuffer
  merriweather700: ArrayBuffer
}

let cachedFonts: FontData | null = null

async function getFonts(): Promise<FontData> {
  if (cachedFonts) {
    return cachedFonts
  }

  const [inter400, merriweather700] = await Promise.all([
    readFile(
      join(
        process.cwd(),
        'node_modules/@fontsource/inter/files/inter-latin-400-normal.woff',
      ),
    ),
    readFile(
      join(
        process.cwd(),
        'node_modules/@fontsource/merriweather/files/merriweather-latin-700-normal.woff',
      ),
    ),
  ])

  cachedFonts = {
    inter400: inter400.buffer as ArrayBuffer,
    merriweather700: merriweather700.buffer as ArrayBuffer,
  }
  return cachedFonts
}

export { getFonts }
