import { useTranslation } from 'react-i18next'
import { Container } from '../ui/Container'

const steps = {
  id: [
    { no: '01', title: 'Dengar', text: 'Kami mulai dari kondisi bisnis Anda, bukan dari daftar layanan kami' },
    { no: '02', title: 'Susun', text: 'Kami pilih yang relevan. Sisanya tidak perlu ditawarkan' },
    { no: '03', title: 'Kerjakan', text: 'Satu tim, satu koordinasi, satu standar' },
    { no: '04', title: 'Ukur', text: 'Target disepakati di awal. Hasil dilaporkan secara transparan' },
  ],
  en: [
    { no: '01', title: 'Listen', text: 'We start from your business condition, not from our service list' },
    { no: '02', title: 'Shape', text: 'We choose what is relevant. The rest does not need to be offered' },
    { no: '03', title: 'Do', text: 'One team, one coordination, one standard' },
    { no: '04', title: 'Measure', text: 'Targets are agreed at the start. Results are reported transparently' },
  ],
}

export function HowWeWork() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'
  const items = isEn ? steps.en : steps.id

  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 data-gsap="clip-left" className="type-h2 max-w-xl font-sans text-ink-900">
            {isEn ? 'How we' : 'Cara kami'}
            <span className="mt-1 block text-brand-600">{isEn ? 'work' : 'bekerja'}</span>
          </h2>
          <span data-gsap="pop" className="inline-flex items-center rounded-full bg-accent-yellow px-4 py-2 font-sans text-xs font-black uppercase tracking-[0.16em] text-ink-900">
            {isEn ? '4 steps' : '4 langkah'}
          </span>
        </div>

        <ol data-gsap-group="stagger" data-gsap-stagger="0.1" className="relative mt-14 flex flex-col gap-10 sm:grid sm:grid-cols-2 sm:gap-12 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          <span className="pointer-events-none absolute left-[8%] right-[8%] top-5 hidden h-[3px] bg-ink-900 lg:block" aria-hidden="true" />
          {items.map((step, index) => (
            <li
              key={step.no}
              data-gsap-item="zoom"
              className={`${['ml-0', 'ml-8', 'ml-14', 'ml-20'][index]} sm:ml-0`}
            >
              <span className="relative z-10 inline-flex h-11 w-11 items-center justify-center bg-accent-yellow font-sans text-sm font-black text-ink-900">
                {step.no}
              </span>
              <h3 className="type-h3 mt-5 font-sans uppercase text-ink-900">
                {step.title}
              </h3>
              <p className="type-body mt-3 max-w-[16rem] font-sans text-ink-700">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
