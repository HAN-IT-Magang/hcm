const LEAVE_MS = 420

let leaving = false

function reduced() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function slideTo(href) {
  if (leaving) return
  if (reduced()) {
    window.location.assign(href)
    return
  }
  leaving = true
  document.documentElement.classList.add('page-leave')
  window.setTimeout(() => window.location.assign(href), LEAVE_MS)
}

function installPageSlide() {
  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0) return
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    const link = event.target.closest('a[href]')
    if (!link || link.hasAttribute('download')) return
    if (link.target && link.target !== '_self') return
    let url
    try {
      url = new URL(link.href, window.location.href)
    } catch {
      return
    }
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return
    if (url.origin !== window.location.origin) return
    if (url.pathname === window.location.pathname && url.search === window.location.search) return
    event.preventDefault()
    slideTo(`${url.pathname}${url.search}${url.hash}`)
  }, true)
}

if (!window.__hanPageSlide) {
  window.__hanPageSlide = true
  installPageSlide()
}
