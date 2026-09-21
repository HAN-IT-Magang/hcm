import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/cn'
import { Container } from '../ui/Container'

export function Faq() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(0)
  const items = t('faq.items', { returnObjects: true })

  return (
    <section id="faq" className="scroll-mt-20 bg-[#FFD600] py-20 lg:py-32 border-b-[3px] border-[#00104D] relative">

      {/* Neo-Brutalist Background Decoration */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-[#FF2E93] rounded-full border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] opacity-20 pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-[#00E0A4] rotate-45 border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] opacity-20 pointer-events-none hidden md:block"></div>

      <Container className="relative z-10">

        {/* Custom Brutalist Header */}
        <div className="text-center mb-16" data-reveal>
          <div className="inline-block px-5 py-2 rounded-[999px] bg-[#FFFFFF] border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] font-montserrat font-bold text-xs sm:text-sm text-[#00104D] uppercase tracking-wide mb-6 -rotate-2">
            {t('faq.eyebrow')}
          </div>
          <h2 className="font-anton text-[clamp(2.5rem,5vw,4.5rem)] text-[#00104D] uppercase leading-none tracking-wide" style={{ textShadow: '4px 4px 0px #FFFFFF' }}>
            {t('faq.title')}
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4" data-reveal>
          {Array.isArray(items) && items.map((f, i) => {
            const open = openIndex === i
            return (
              <div
                key={i}
                className={`overflow-hidden bg-[#FFFFFF] border-[3px] border-[#00104D] shadow-[6px_6px_0_0_#00104D] transition-all duration-300 ${open ? 'translate-x-[-2px] translate-y-[-2px] shadow-[8px_8px_0_0_#00104D]' : ''}`}
              >
                <button
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 p-5 md:p-6 text-left font-montserrat font-bold text-[#00104D] bg-[#FFFFFF] hover:bg-[#EAF0FF] transition-colors duration-200"
                >
                  <span className="text-sm md:text-base leading-snug">{f.q}</span>
                  <span className={cn('text-3xl font-anton transition-transform duration-300 flex-shrink-0 text-[#FF2E93]', open && 'rotate-45')}>+</span>
                </button>

                {open && (
                  <div className="bg-[#FFFFFF]">
                    <p className="px-5 md:px-6 pb-6 text-sm md:text-[15px] font-montserrat font-medium text-[#00104D] leading-relaxed opacity-90 border-t-[3px] border-[#00104D] pt-4 mx-2">
                      {f.a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
