import { useTranslation } from 'react-i18next'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Testimonials() {
  const { t } = useTranslation()
  const items = t('testimonials.items', { returnObjects: true })

  return (
    <section id="testimoni" className="scroll-mt-20 bg-ink-900 py-16 text-white sm:py-24">
      <SectionHeading
        eyebrow={t('testimonials.eyebrow')}
        title={t('testimonials.title')}
        dark
      />
      <Container className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <figure key={item.name} data-reveal className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <div className="text-yellow-400">★★★★★</div>
            <blockquote className="mt-3 text-sm leading-relaxed text-white/85">“{item.quote}”</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-bold">
                {item.initial}
              </span>
              <span>
                <span className="block text-sm font-bold">{item.name}</span>
                <span className="block text-xs text-white/60">{item.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </Container>
    </section>
  )
}
