import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/cn'
import { Container } from '../ui/Container'

export function Faq() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState(-1)
  const items = t('faq.items', { returnObjects: true })
  const list = Array.isArray(items) ? items : []

  return (
    <section id="faq" className="relative z-10 scroll-mt-28 bg-white py-16 md:py-24">
      <Container className="max-w-3xl">
        <div data-gsap="zoom" className="text-center">
          <p className="type-caption font-sans text-ink-500">{t('faq.eyebrow')}</p>
          <h2 className="type-h2 mt-3 font-sans text-ink-900">{t('faq.title')}</h2>
        </div>

        <div data-gsap-group="stagger" data-gsap-stagger="0.06" className="mt-12 border-t border-ink-900/15">
          {list.map((item, i) => {
            const open = openIndex === i
            return (
              <div key={item.q} data-gsap-item="zoom" className="border-b border-ink-900/15">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="type-body font-sans text-ink-700">{item.q}</span>
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-600 text-brand-600"
                    aria-hidden="true"
                  >
                    <Plus className={cn('h-3.5 w-3.5 transition-transform', open && 'rotate-45')} strokeWidth={1.75} />
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300',
                    open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="type-small pb-5 font-sans text-ink-700">{item.a}</p>
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
