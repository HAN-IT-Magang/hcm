export const LANGS = ['id', 'en']
export const STORAGE_KEY = 'han-lang'

export function readStoredLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'id' || saved === 'en') return saved
  } catch {
    /* private mode */
  }
  return 'id'
}

export function localizePath(pathname, lang) {
  const safe = lang === 'en' ? 'en' : 'id'
  const parts = String(pathname || '/')
    .split('/')
    .filter(Boolean)
  if (parts[0] === 'id' || parts[0] === 'en') parts.shift()
  const rest = parts.join('/')
  return rest ? `/${safe}/${rest}` : `/${safe}`
}
