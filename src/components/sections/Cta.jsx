import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { siteConfig } from '@/config/site'
import { Container } from '../ui/Container'

export function Cta() {
  const { t, i18n } = useTranslation()
  const isEn = i18n.language === 'en'
  const items = t('ctaSection.items', { returnObjects: true })
  const list = Array.isArray(items) ? items : []
  const [titleLead, titleStrong] = t('ctaSection.title').split('\n')

  return (
    <section id="cta" className="relative z-10 scroll-mt-28 bg-white py-16 md:py-24">
      <Container className="max-w-[90rem]">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-20">
          <h2 className="type-h2 max-w-xl font-sans font-light text-ink-900">
            {titleLead}
            <br />
            <span className="font-bold">{titleStrong}</span>
          </h2>

          <div className="flex flex-col gap-4">
            {list.map((item) => {
              const wa = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(
                isEn
                  ? `Hello HCM, I want to talk about: ${item.headline}`
                  : `Halo HCM, saya mau konsultasi tentang: ${item.headline}`,
              )}`
              return (
                <a
                  key={item.label}
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-6 rounded-[1.25rem] bg-brand-50 px-6 py-5 md:px-8 md:py-6"
                >
                  <div className="min-w-0 flex-1">
                    <p className="type-caption font-sans text-ink-500">{item.label}</p>
                    <p className="type-h3 mt-4 font-sans text-ink-900">{item.headline}</p>
                  </div>
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-ink-700"
                    aria-hidden="true"
                  >
                    <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                </a>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
