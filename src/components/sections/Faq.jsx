import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/cn'
import { Container } from '../ui/Container'

export function Faq() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(-1)
  const items = t('faq.items', { returnObjects: true })

  return (
    <section id="faq" className="scroll-mt-20 bg-[#0030FF] py-20 lg:py-32 relative overflow-hidden">

      {/* Pattern: Starburst Top Left */}
      <div className="absolute -top-20 -left-20 w-80 h-80 text-white/5 pointer-events-none -rotate-12">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 L55 40 L95 20 L65 50 L95 80 L55 60 L50 100 L45 60 L5 80 L35 50 L5 20 L45 40 Z" />
        </svg>
      </div>

      {/* Pattern: Dotted Background Bottom Right */}
      <div className="absolute -bottom-[20%] -right-[10%] w-[800px] h-[600px] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 3px, transparent 4px)',
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to top left, rgba(0,0,0,1), rgba(0,0,0,0))'
        }}
      ></div>

      <Container className="relative z-10">

        <div className="text-center mb-16 px-2">
          <div data-gsap="pop" className="inline-block px-5 py-2 bg-accent-magenta text-white font-sans font-bold text-sm uppercase tracking-widest mb-6 shadow-lg rotate-1">
            {t('faq.eyebrow')}
          </div>
          <h2 data-gsap="zoom" data-gsap-delay="0.08" className="font-sans text-[clamp(2.5rem,6vw,5rem)] font-black text-white uppercase leading-none tracking-tight">
            {t('faq.title', 'FAQ')}
          </h2>
        </div>

        <div data-gsap-group="alternate" data-gsap-stagger="0.1" className="max-w-4xl mx-auto space-y-4">
          {Array.isArray(items) && items.map((f, i) => {
            const open = openIndex === i
            return (
              <div
                key={i}
                data-gsap-item="auto"
                className={`overflow-hidden bg-white shadow-[6px_6px_0_0_#05051a] transition-all duration-300 ${open ? '-translate-y-1 -translate-x-1 shadow-[10px_10px_0_0_#05051a]' : 'hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[8px_8px_0_0_#05051a]'}`}
              >
                <button
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 p-5 md:p-6 text-left font-sans font-bold text-ink-900 bg-white transition-colors duration-200"
                >
                  <span className="text-lg md:text-xl leading-snug">{f.q}</span>
                  <span className={cn('text-3xl font-black transition-transform duration-300 flex-shrink-0 text-accent-magenta', open && 'rotate-45')}>+</span>
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out bg-white border-t-2 border-brand-100",
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 border-t-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="p-5 md:p-6 text-base md:text-lg font-sans font-medium text-ink-700 leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
