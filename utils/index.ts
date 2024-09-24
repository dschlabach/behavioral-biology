import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converts a timestamp in the format "HH:MM:SS,MS" to seconds
 * Milliseconds are optional, and if not provided, the function will assume 0
 * @param timestamp - The timestamp string to convert
 * @returns The timestamp in seconds
 */
export function timestampToSeconds(timestamp: string): number {
  const [time, milliseconds = '0'] = timestamp.split(',')
  const [hours, minutes, seconds] = time.split(':').map(Number)
  return hours * 3600 + minutes * 60 + seconds + Number(milliseconds) / 1000
}
