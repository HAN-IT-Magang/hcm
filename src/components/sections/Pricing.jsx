import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/cn'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Pricing() {
  const { t } = useTranslation()
  const items = t('pricing.items', { returnObjects: true })

  return (
    <section id="harga" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <SectionHeading
        eyebrow={t('pricing.eyebrow')}
        title={t('pricing.title')}
        subtitle={t('pricing.subtitle')}
      />
      <Container className="grid items-stretch gap-5 lg:grid-cols-3">
        {items.map((p) => (
          <article
            key={p.name}
            data-reveal
            className={cn(
              'flex flex-col rounded-3xl border p-7',
              p.featured ? 'border-brand-600 bg-ink-900 text-white shadow-2xl' : 'bg-white',
            )}
          >
            {p.featured && (
              <span className="mb-4 w-fit rounded-full bg-brand-600 px-3 py-1 text-xs font-bold">
                {t('pricing.badge')}
              </span>
            )}
            <h3 className={cn('font-bold', p.featured ? 'text-white' : 'text-ink-900')}>{p.name}</h3>
            <p className="mt-2">
              <span className="text-3xl font-extrabold">{p.price}</span>
              <span className={cn('text-sm', p.featured ? 'text-white/60' : 'text-ink-500')}>{p.period}</span>
            </p>
            <p className={cn('mt-2 text-sm', p.featured ? 'text-white/70' : 'text-ink-500')}>{p.desc}</p>
            <ul className="mt-5 flex-1 space-y-2.5 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-green-500">✓</span> {f}
                </li>
              ))}
            </ul>
            <Button
              href="#kontak"
              variant={p.featured ? 'accent' : 'outline'}
              className="mt-6 w-full"
            >
              {p.cta}
            </Button>
          </article>
        ))}
      </Container>
      <p className="mt-6 text-center text-xs text-ink-500">{t('pricing.note')}</p>
    </section>
  )
}
