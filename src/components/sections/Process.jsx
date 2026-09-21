import { useTranslation } from 'react-i18next'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Process() {
  const { t } = useTranslation()
  const steps = t('process.steps', { returnObjects: true })

  return (
    <section id="proses" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <SectionHeading
        eyebrow={t('process.eyebrow')}
        title={t('process.title')}
      />
      <Container className="grid gap-5 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.no} data-reveal className="rounded-3xl border p-6">
            <p className="text-3xl font-extrabold text-brand-600/20">{s.no}</p>
            <h3 className="mt-2 font-bold text-ink-900">{s.title}</h3>
            <p className="mt-2 text-sm text-ink-500">{s.desc}</p>
          </div>
        ))}
      </Container>
    </section>
  )
}
