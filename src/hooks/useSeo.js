import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function upsertMeta(attr, key, value) {
  if (!value) return
  const selector = `meta[${attr}="${key}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

export function useSeo() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const meta = t('meta', { returnObjects: true }) || {}

    if (meta.title) document.title = meta.title
    upsertMeta('name', 'description', meta.description)
    upsertMeta('name', 'keywords', meta.keywords)
    upsertMeta('property', 'og:title', meta.title)
    upsertMeta('property', 'og:description', meta.description)
    upsertMeta('property', 'og:locale', meta.locale)
    upsertMeta('property', 'og:locale:alternate', meta.localeAlternate)
    upsertMeta('name', 'twitter:title', meta.title)
    upsertMeta('name', 'twitter:description', meta.description)

    const faqItems = t('faq.items', { returnObjects: true })
    const existing = document.head.querySelector('#seo-faq-jsonld')
    if (Array.isArray(faqItems) && faqItems.length > 0) {
      let el = existing
      if (!el) {
        el = document.createElement('script')
        el.id = 'seo-faq-jsonld'
        el.type = 'application/ld+json'
        document.head.appendChild(el)
      }
      el.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      })
    } else if (existing) {
      existing.remove()
    }
  }, [i18n.language, t])
}
