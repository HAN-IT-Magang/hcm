import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/cn'
import { Container } from '../ui/Container'

export function Faq() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(0)
  const items = t('faq.items', { returnObjects: true })

  return (
    <section id="faq" className="scroll-mt-20 bg-[#FFD600] py-10 sm:py-20 lg:py-32 border-b-[3px] border-[#00104D] relative overflow-hidden">

      <div className="absolute top-10 right-10 w-24 h-24 bg-[#FF2E93] rounded-full border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] opacity-20 pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-[#00E0A4] rotate-45 border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] opacity-20 pointer-events-none hidden md:block"></div>

      <Container className="relative z-10">

        <div className="text-center mb-8 sm:mb-16 px-2" data-reveal>
          <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-[999px] bg-[#FFFFFF] border-[2px] sm:border-[3px] border-[#00104D] shadow-[3px_3px_0_0_#00104D] sm:shadow-[4px_4px_0_0_#00104D] font-montserrat font-bold text-xs sm:text-sm text-[#00104D] uppercase tracking-wide mb-4 sm:mb-6 -rotate-2 max-w-full">
            {t('faq.eyebrow')}
          </div>
          <h2 className="font-anton text-[clamp(2rem,9vw,4.5rem)] sm:text-[clamp(2.5rem,5vw,4.5rem)] text-[#00104D] uppercase leading-none tracking-wide break-words" style={{ textShadow: '4px 4px 0px #FFFFFF' }}>
            {t('faq.title')}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4" data-reveal>
          {Array.isArray(items) && items.map((f, i) => {
            const open = openIndex === i
            return (
              <div
                key={i}
                className={`overflow-hidden bg-[#FFFFFF] border-[2px] sm:border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] sm:shadow-[6px_6px_0_0_#00104D] transition-all duration-300 ${open ? 'translate-x-[-2px] translate-y-[-2px] shadow-[6px_6px_0_0_#00104D] sm:shadow-[8px_8px_0_0_#00104D]' : ''}`}
              >
                <button
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 text-left font-montserrat font-bold text-[#00104D] bg-[#FFFFFF] hover:bg-[#EAF0FF] transition-colors duration-200"
                >
                  <span className="text-[13px] sm:text-sm md:text-base leading-snug">{f.q}</span>
                  <span className={cn('text-3xl font-anton transition-transform duration-300 flex-shrink-0 text-[#FF2E93]', open && 'rotate-45')}>+</span>
                </button>

                {open && (
                  <div className="bg-[#FFFFFF]">
                    <p className="px-4 sm:px-5 md:px-6 pb-5 sm:pb-6 text-[13px] sm:text-sm md:text-[15px] font-montserrat font-medium text-[#00104D] leading-relaxed opacity-90 border-t-[2px] sm:border-t-[3px] border-[#00104D] pt-3 sm:pt-4 mx-2">
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
