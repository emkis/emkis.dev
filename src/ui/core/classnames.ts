import { type ClassValue, clsx } from 'clsx'

export type ClassNameValue = ClassValue

export function cn(...classes: ClassValue[]) {
  return clsx(classes)
}
