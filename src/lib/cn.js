import { clsx } from 'clsx'

/** Gabung class Tailwind secara aman: cn('px-4', isActive && 'bg-black') */
export function cn(...inputs) {
  return clsx(...inputs)
}
