import { type ClassValue, clsx } from 'clsx'

type ClassNameValue = ClassValue

function cn(...classes: ClassValue[]) {
  return clsx(classes)
}

export { type ClassNameValue, cn }
