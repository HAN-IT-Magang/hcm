import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { localizePath } from '@/lib/locale'
import { useLang } from '@/components/ui/LanguageMenu'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { services as servicePages } from '@/data/services'
import {
  Video,
  Radio,
  Palette,
  Share2,
  Camera,
  Store,
  Code,
  Briefcase,
  Zap,
} from 'lucide-react'
import { Container } from '../ui/Container'

gsap.registerPlugin(ScrollTrigger)

const visuals = {
  multimedia: { Icon: Video, tile: 'bg-brand-600', glyph: 'text-white' },
  'live-commerce': { Icon: Radio, tile: 'bg-accent-magenta', glyph: 'text-white' },
  'graphic-design': { Icon: Palette, tile: 'bg-[#CEFE4A]', glyph: 'text-ink-900' },
  'social-media': { Icon: Share2, tile: 'bg-accent-yellow', glyph: 'text-ink-900' },
  'product-photo-video': { Icon: Camera, tile: 'bg-ink-900', glyph: 'text-white' },
  'e-commerce': { Icon: Store, tile: 'bg-brand-600', glyph: 'text-white' },
  'web-development': { Icon: Code, tile: 'bg-accent-magenta', glyph: 'text-white' },
  training: { Icon: Briefcase, tile: 'bg-[#CEFE4A]', glyph: 'text-ink-900' },
  'ai-content': { Icon: Zap, tile: 'bg-accent-yellow', glyph: 'text-ink-900' },
}

export function Services() {
  const lang = useLang()
  const services = servicePages.map((item, index) => ({
    id: String(index + 1).padStart(2, '0'),
    slug: item.slug,
    title: item.title[lang],
    description: item.summary[lang],
    ...visuals[item.slug],
  }))
  const sectionRef = useRef(null)
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const progressRef = useRef(null)

  // Scroll ke bawah (vertical) -> track kartu geser horizontal (scrub + pin).
  // Mobile: fallback swipe horizontal native (tanpa pin).
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      // Desktop / tablet: pin section, vertical scroll menggerakkan track ke kiri
      // (kartu baru masuk dari kanan).
      mm.add('(min-width: 768px)', () => {
        const track = trackRef.current
        const viewport = viewportRef.current
        if (!track || !viewport) return

        const getAmount = () =>
          Math.max(0, track.scrollWidth - viewport.clientWidth)

        const trigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${getAmount()}`,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const amount = getAmount()
            gsap.set(track, { x: -amount * self.progress })
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`
            }
          },
        })

        return () => {
          trigger.kill()
          gsap.set(track, { clearProps: 'transform' })
        }
      })

      // Mobile: geser kartu horizontal. Tanpa pin, biar tidak ada ruang kosong.
      mm.add('(max-width: 767px)', () => {
        const viewport = viewportRef.current
        if (!viewport) return

        const onScroll = () => {
          const max = viewport.scrollWidth - viewport.clientWidth
          const p = max > 0 ? viewport.scrollLeft / max : 0
          if (progressRef.current) {
            progressRef.current.style.transform = `scaleX(${p})`
          }
        }
        viewport.addEventListener('scroll', onScroll, { passive: true })
        onScroll()

        return () => {
          viewport.removeEventListener('scroll', onScroll)
        }
      })
    }, sectionRef)

    const onLoad = () => ScrollTrigger.refresh()
    if (document.readyState === 'complete') onLoad()
    else window.addEventListener('load', onLoad, { once: true })

    const root = document.getElementById('root')
    const onEnterEnd = (event) => {
      if (event.animationName === 'page-enter') ScrollTrigger.refresh()
    }
    root?.addEventListener('animationend', onEnterEnd)
    const afterSlide = window.setTimeout(() => ScrollTrigger.refresh(), 560)

    return () => {
      window.removeEventListener('load', onLoad)
      root?.removeEventListener('animationend', onEnterEnd)
      window.clearTimeout(afterSlide)
      ctx.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} id="services" className="relative z-50 bg-brand-50 pt-20 lg:pt-28 pb-12 lg:pb-16 overflow-hidden -mt-8 md:-mt-14 rounded-t-[2rem] md:rounded-t-[3.5rem]">
      <Container className="max-w-[90rem] relative z-10">

         {/* Header — judul + petunjuk scroll */}
         <div className="mb-10 md:mb-14 border-b border-ink-900/10 pb-8 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
            <h2 data-gsap="clip-left" data-gsap-once className="type-h2 font-sans text-ink-900 max-w-2xl">
               {lang === 'en'
                 ? 'Elevating brands through comprehensive digital solutions.'
                 : 'Mengangkat brand lewat solusi digital yang menyeluruh.'}
            </h2>
            <div data-gsap="right" data-gsap-once className="flex gap-4 items-center shrink-0 cursor-default" aria-hidden="true">
               <span className="type-caption font-sans text-ink-700">{lang === 'en' ? 'Scroll' : 'Gulir'}</span>
               <svg className="w-6 h-6 text-ink-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
            </div>
         </div>

          {/* Horizontal Slider — digerakkan scroll vertical (desktop pin) */}
          <div
            ref={viewportRef}
            className="overflow-x-auto md:overflow-visible pb-10 pt-2 snap-x snap-mandatory md:snap-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            <div ref={trackRef} className="flex gap-4 md:gap-5 w-max will-change-transform items-stretch">
            {services.map((s) => (
               <Link
                 key={s.id}
                 reloadDocument
                 to={localizePath(`/layanan/${s.slug}`, lang)}
                 className="snap-start shrink-0 w-[min(17.5rem,calc(100vw-4.75rem))] md:w-[360px] min-h-[280px] md:min-h-[380px] flex flex-col bg-white border border-ink-900/10 p-6 md:p-8"
               >
                  <h3 className="type-h3 font-sans text-ink-900">
                    {s.title}
                  </h3>
                  <div className="flex flex-1 items-center justify-center py-10">
                    <span className={`flex items-center justify-center w-20 h-20 ${s.tile}`} aria-hidden="true">
                      <s.Icon className={`w-9 h-9 ${s.glyph}`} strokeWidth={2} aria-hidden="true" />
                    </span>
                  </div>
                  <p className="type-small font-sans text-ink-700">
                    {s.description}
                  </p>
               </Link>
            ))}
            {/* spacer kanan biar kartu terakhir tidak nempel */}
            <div className="shrink-0 w-2 md:w-[4vw]" aria-hidden="true" />
            </div>
          </div>

          {/* Progress — garis tipis + isi biru brand */}
          <div className="flex items-center gap-4">
            <div className="h-[2px] flex-1 bg-ink-900/10 overflow-hidden">
              <div
                ref={progressRef}
                className="h-full w-full bg-brand-600 origin-left scale-x-0"
              />
            </div>
          </div>

      </Container>
    </section>
  )
}
