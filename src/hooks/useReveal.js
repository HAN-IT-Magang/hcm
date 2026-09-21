import { useEffect } from 'react'

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

    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))

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
