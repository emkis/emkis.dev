import readingTime from 'reading-time'

export type Minutes = number

export function getReadingTime(content: string): Minutes {
  const { minutes } = readingTime(content)
  const roundedMinutes = minutes % 2 === 0 ? minutes : minutes + 1
  return Math.round(roundedMinutes)
}
