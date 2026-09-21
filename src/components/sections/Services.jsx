import { useTranslation } from 'react-i18next'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const serviceIcons = [
  <svg key="store" className="w-6 h-6 text-[#0030ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>,
  <svg key="affiliator" className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  <svg key="ads" className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>,
]

export function Services() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true })

  return (
    <section id="layanan" className="scroll-mt-20 bg-white py-20 sm:py-24 relative z-10">
      <SectionHeading
        eyebrow={t('services.eyebrow')}
        title={t('services.title')}
        subtitle={t('services.subtitle')}
      />
      <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {Array.isArray(items) && items.map((s, idx) => (
          <article
            key={s.title}
            data-reveal
            className="group rounded-3xl border border-neutral-200/90 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-neutral-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-50 border border-neutral-100 shadow-sm">
                {serviceIcons[idx] || serviceIcons[0]}
              </div>
              <h3 className="mt-5 text-lg font-bold text-neutral-900">{s.title}</h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600">{s.desc}</p>
            </div>

            <ul className="mt-6 space-y-2 border-t border-neutral-100 pt-5">
              {Array.isArray(s.points) && s.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                  <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </Container>
    </section>
  )
}
