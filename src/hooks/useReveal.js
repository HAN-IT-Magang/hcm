import { useEffect } from 'react'

/**
 * Reveal-on-scroll sederhana (IntersectionObserver).
 * Pakai: <div data-reveal> ... </div>
 * Class `is-visible` akan ditambah otomatis saat masuk viewport.
 */
export function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    // Observe initial elements
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))

    // Watch for new elements added to the DOM (for HMR support)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            if (node.hasAttribute('data-reveal')) {
              io.observe(node)
            }
            node.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))
          }
        })
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      observer.disconnect()
    }
  }, [])
}
