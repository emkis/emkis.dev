import type { ReactNode } from 'react'
import satori from 'satori'
import sharp from 'sharp'
import { getFonts } from './fonts'

async function generateOgImage(element: ReactNode): Promise<Buffer> {
  const fonts = await getFonts()

  const svg = await satori(element, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Inter', data: fonts.inter400, weight: 400, style: 'normal' },
      { name: 'Merriweather', data: fonts.merriweather700, weight: 700, style: 'normal' },
    ],
  })

  return sharp(Buffer.from(svg)).jpeg({ quality: 85 }).toBuffer()
}

export { generateOgImage }
