import { useEffect, useRef } from 'react'

export function Parallax({ children, className, from = 48, to = -48 }) {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    if (!el) return
    let raf = 0
    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const p = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)))
      el.style.transform = `translate3d(0, ${(from + (to - from) * p).toFixed(1)}px, 0)`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [from, to])

  return (
    <div ref={ref} className={className ? `${className} will-change-transform` : 'will-change-transform'}>
      {children}
    </div>
  )
}
