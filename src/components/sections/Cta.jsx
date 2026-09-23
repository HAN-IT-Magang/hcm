import { useTranslation } from 'react-i18next'
import { siteConfig } from '@/config/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Cta() {
  const { t } = useTranslation()
  const wa = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(t('ctaSection.waText'))}`

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div
          data-gsap="zoom"
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-ink-900 to-fuchsia-700 px-8 py-14 text-center text-white sm:px-16"
        >
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold sm:text-4xl">{t('ctaSection.title')}</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/75">{t('ctaSection.subtitle')}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={wa} target="_blank" rel="noreferrer" variant="whatsapp">
              {t('ctaSection.primaryCta')}
            </Button>
            <Button href="#harga" variant="outline" className="border-white/30 bg-white/10 text-white hover:border-white">
              {t('ctaSection.secondaryCta')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
