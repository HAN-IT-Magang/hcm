import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from '../locales/en/landing.json'
import id from '../locales/id/landing.json'

const STORAGE_KEY = 'han-lang'

/** Best practice a11y/SEO: atribut <html lang> selalu sinkron dengan bahasa aktif. */
function applyHtmlLang(lng) {
  const base = (lng || 'id').split('-')[0]
  document.documentElement.setAttribute('lang', base)
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      id: { landing: id },
      en: { landing: en },
    },
    fallbackLng: 'id',
    supportedLngs: ['id', 'en'],
    defaultNS: 'landing',
    // Urutan deteksi: pilihan tersimpan > bahasa browser. Pilihan user di-cache.
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: STORAGE_KEY,
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  })

applyHtmlLang(i18n.language)
i18n.on('languageChanged', applyHtmlLang)

export default i18n
