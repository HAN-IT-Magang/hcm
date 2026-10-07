import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isMobile = () =>
  typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function varsFor(type, mobile) {
  const dx = mobile ? 40 : 110
  const far = mobile ? 64 : 180
  switch (type) {
    case 'left':
      return { x: -dx, opacity: 0, rotation: -1.5 }
    case 'left-far':
      return { x: -far, opacity: 0 }
    case 'right':
      return { x: dx, opacity: 0, rotation: 1.5 }
    case 'right-far':
      return { x: far, opacity: 0 }
    case 'zoom':
      return { scale: 0.85, opacity: 0, transformOrigin: 'center' }
    case 'pop':
      return { scale: 0.55, opacity: 0, rotation: -3, transformOrigin: 'center' }
    case 'flip-left':
      return {
        x: -dx,
        opacity: 0,
        rotationY: -45,
        transformPerspective: 800,
        transformOrigin: 'left center',
      }
    case 'flip-right':
      return {
        x: dx,
        opacity: 0,
        rotationY: 45,
        transformPerspective: 800,
        transformOrigin: 'right center',
      }
    case 'clip-left':
      return { x: -dx, opacity: 0, clipPath: 'inset(0% 100% 0% 0%)' }
    case 'clip-right':
      return { x: dx, opacity: 0, clipPath: 'inset(0% 0% 0% 100%)' }
    case 'fade':
    default:
      return { opacity: 0, scale: 0.97 }
  }
}

function easeFor(type) {
  if (type === 'pop') return 'back.out(1.5)'
  if (type === 'zoom' || type === 'fade') return 'expo.out'
  if (type === 'clip-left' || type === 'clip-right') return 'power4.inOut'
  if (type === 'flip-left' || type === 'flip-right') return 'power3.out'
  return 'power4.out'
}

function endVars(from) {
  const v = { x: 0, scale: 1, rotation: 0, rotationY: 0, opacity: 1 }
  if (from.clipPath) v.clipPath = 'inset(0% 0% 0% 0%)'
  return v
}

function resolveItemType(group, el, index) {
  const base = group.dataset.gsapGroup || 'stagger'
  const item = el.dataset.gsapItem
  if (item && item !== '' && item !== 'auto') return item
  if (base === 'alternate') return index % 2 === 0 ? 'left' : 'right'
  if (base === 'alternate-far') return index % 2 === 0 ? 'left-far' : 'right-far'
  if (base === 'stagger') return 'zoom'
  return base
}

export function playGsapIn(root) {
  if (!root || prefersReduced()) return undefined
  const mobile = isMobile()
  const ctx = gsap.context(() => {
    const nested = (el) => {
      const own = el.closest('[data-gsap-own]')
      return Boolean(own && own !== root && root.contains(own))
    }

    gsap.utils.toArray('[data-gsap]', root).forEach((el) => {
      if (nested(el)) return
      const type = el.dataset.gsap || 'fade'
      const from = varsFor(type, mobile)
      gsap.fromTo(el, from, {
        ...endVars(from),
        duration: parseFloat(el.dataset.gsapDuration || '0.85'),
        delay: parseFloat(el.dataset.gsapDelay || '0'),
        ease: easeFor(type),
      })
    })

    const groups = gsap.utils.toArray('[data-gsap-group]', root)
    if (root.matches?.('[data-gsap-group]')) groups.unshift(root)
    groups.forEach((group) => {
      if (nested(group)) return
      const kids = Array.from(group.querySelectorAll('[data-gsap-item]')).filter((el) => !nested(el))
      if (!kids.length) return
      kids.forEach((kid, i) => gsap.set(kid, varsFor(resolveItemType(group, kid, i), mobile)))
      gsap.to(kids, {
        x: 0,
        scale: 1,
        rotation: 0,
        rotationY: 0,
        opacity: 1,
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.85,
        ease: 'power4.out',
        stagger: parseFloat(group.dataset.gsapStagger || '0.08'),
      })
    })
  }, root)
  return () => ctx.revert()
}

export function useGsapReveal() {
  useLayoutEffect(() => {
    if (prefersReduced()) return undefined

    const ctx = gsap.context(() => {
      const mobile = isMobile()

      // 1. Elemen tunggal
      gsap.utils.toArray('[data-gsap]:not([data-gsap-hero])').forEach((el) => {
        const type = el.dataset.gsap || 'fade'
        const from = varsFor(type, mobile)
        gsap.set(el, from)
        gsap.to(el, {
          ...endVars(from),
          duration: parseFloat(el.dataset.gsapDuration || '1'),
          delay: parseFloat(el.dataset.gsapDelay || '0'),
          ease: easeFor(type),
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: el.hasAttribute('data-gsap-once') ? 'play none none none' : 'play reverse play reverse',
          },
        })
      })

      // 2. Grup stagger
      gsap.utils.toArray('[data-gsap-group]').forEach((group) => {
        const kids = Array.from(group.querySelectorAll('[data-gsap-item]'))
        if (!kids.length) return
        kids.forEach((kid, i) => {
          const t = resolveItemType(group, kid, i)
          gsap.set(kid, varsFor(t, mobile))
        })
        gsap.to(kids, {
          x: 0,
          scale: 1,
          rotation: 0,
          rotationY: 0,
          opacity: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 0.9,
          ease: 'power4.out',
          stagger: parseFloat(group.dataset.gsapStagger || '0.1'),
          scrollTrigger: {
            trigger: group,
            start: 'top 88%',
            end: 'bottom 10%',
            toggleActions: group.hasAttribute('data-gsap-once') ? 'play none none none' : 'play reverse play reverse',
          },
        })
      })

      // 3. Hero intro
      const heroEls = gsap.utils
        .toArray('[data-gsap-hero]')
        .sort(
          (a, b) =>
            parseFloat(a.dataset.gsapHero || '0') - parseFloat(b.dataset.gsapHero || '0'),
        )
      if (heroEls.length) {
        heroEls.forEach((el) => gsap.set(el, varsFor(el.dataset.gsap || 'fade', mobile)))
        const tl = gsap.timeline({
          delay: 0.2,
          defaults: { ease: 'power4.out' },
          scrollTrigger: {
            trigger: heroEls[0].closest('section') || heroEls[0],
            start: 'top 75%',
            end: 'bottom 20%',
            toggleActions: 'play reverse play reverse',
          },
        })
        heroEls.forEach((el) => {
          const from = varsFor(el.dataset.gsap || 'fade', mobile)
          tl.to(
            el,
            { ...endVars(from), duration: 1, ease: easeFor(el.dataset.gsap || 'fade') },
            '<0.15',
          )
        })
      }

      // 4. Parallax
      gsap.utils.toArray('[data-gsap-parallax]').forEach((el) => {
        gsap.to(el, {
          xPercent: parseFloat(el.dataset.gsapParallax || '10'),
          ease: 'none',
          scrollTrigger: {
            trigger: el.closest('section') || el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })

      // 5. Refresh trigger
      const onLoad = () => ScrollTrigger.refresh()
      if (document.readyState === 'complete') {
        onLoad()
      } else {
        window.addEventListener('load', onLoad, { once: true })
      }
    })

    return () => ctx.revert()
  }, [])
}
