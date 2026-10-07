import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { siteConfig } from '@/config/site'
import { Container } from '../ui/Container'
import { services as footerServices } from '@/data/services'
import { localizePath } from '@/lib/locale'
import { useLang } from '@/components/ui/LanguageMenu'

export function Footer() {
  const { t } = useTranslation()
  const nav = t('nav', { returnObjects: true })
  const year = new Date().getFullYear()
  const lang = useLang()
  const isEn = lang === 'en'

  const PinIcon = () => (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )

  return (
    <footer id="kontak" className="relative z-40 bg-white scroll-mt-24">
      {/* Blok biru */}
      <div className="relative overflow-hidden bg-[#2637AD]">
        {/* Lapisan pixel */}
        <div className="absolute inset-y-0 right-0 w-[45%] overflow-hidden pointer-events-none" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'conic-gradient(rgba(255,255,255,0.07) 25%, transparent 0 50%, rgba(255,255,255,0.07) 0 75%, transparent 0)',
              backgroundSize: '56px 56px',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'conic-gradient(rgba(0,0,0,0.14) 25%, transparent 0 50%, rgba(0,0,0,0.14) 0 75%, transparent 0)',
              backgroundSize: '56px 56px',
              backgroundPosition: '28px 28px',
            }}
          />
        </div>

        <Container className="relative z-10 pt-10 md:pt-14 pb-8">
          {/* Konten */}
          <div data-gsap="fade" className="bg-white rounded-2xl p-8 md:p-12">
            <div data-gsap-group="stagger" data-gsap-stagger="0.08" className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1fr_1.1fr_0.7fr_1.4fr]">
              {/* Judul */}
              <div data-gsap-item="zoom">
                <p className="type-display font-sans text-ink-900">
                  {isEn ? "Let's" : 'Mari'}
                  <br />
                  <span className="text-brand-600">{isEn ? 'Connect' : 'Terhubung'}</span>
                </p>
              </div>

              {/* Kontak */}
              <div data-gsap-item="zoom">
                <h4 className="mb-4 font-sans text-sm font-bold uppercase tracking-widest text-ink-900">
                  {t('footer.contactTitle', 'CONTACT US')}
                </h4>
                <ul className="divide-y divide-ink-900/10">
                  <li className="py-3 first:pt-0">
                    <a href={`mailto:${siteConfig.contact.email}`} className="font-sans text-sm text-ink-700 hover:text-brand-600 transition-colors break-all">
                      {siteConfig.contact.email}
                    </a>
                  </li>
                  <li className="py-3">
                    <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noreferrer" className="font-sans text-sm text-ink-700 hover:text-brand-600 transition-colors">
                      {siteConfig.contact.whatsappFormatted}
                    </a>
                  </li>
                  <li className="py-3">
                    <p className="font-sans text-sm text-ink-700 leading-relaxed">
                      {siteConfig.contact.address}
                    </p>
                    <a
                      href={siteConfig.contact.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-brand-600 hover:text-brand-700"
                    >
                      <PinIcon />
                      {isEn ? 'View Location' : 'Lihat Lokasi'}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Navigasi */}
              <div data-gsap-item="zoom">
                <h4 className="mb-4 font-sans text-sm font-bold uppercase tracking-widest text-ink-900">
                  {t('footer.navTitle', 'NAVIGATION')}
                </h4>
                <ul className="space-y-3">
                  {Array.isArray(nav) && nav.map((n) => (
                    <li key={n.label}>
                      <Link to={localizePath(n.href, lang)} reloadDocument className="font-sans text-sm text-ink-700 hover:text-brand-600 transition-colors">
                        {n.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Layanan */}
              <div data-gsap-item="zoom">
                <h4 className="mb-4 font-sans text-sm font-bold uppercase tracking-widest text-ink-900">
                  {isEn ? 'Services' : 'Layanan'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                  <ul className="space-y-3">
                    {footerServices.slice(0, 5).map((svc) => (
                      <li key={svc.slug}>
                        <Link to={localizePath(`/layanan/${svc.slug}`, lang)} reloadDocument className="font-sans text-sm text-ink-700 hover:text-brand-600 transition-colors">
                          {isEn ? svc.title.en : svc.title.id}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-3 mt-3 sm:mt-0">
                    {footerServices.slice(5).map((svc) => (
                      <li key={svc.slug}>
                        <Link to={localizePath(`/layanan/${svc.slug}`, lang)} reloadDocument className="font-sans text-sm text-ink-700 hover:text-brand-600 transition-colors">
                          {isEn ? svc.title.en : svc.title.id}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bar bawah */}
            <div className="mt-10 pt-6 border-t border-ink-900/10 flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <a href={siteConfig.contact.instagram} target="_blank" rel="noreferrer" className="font-sans text-sm font-semibold text-ink-700 hover:text-brand-600 transition-colors">Instagram</a>
                <a href={siteConfig.contact.tiktok} target="_blank" rel="noreferrer" className="font-sans text-sm font-semibold text-ink-700 hover:text-brand-600 transition-colors">TikTok</a>
                <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noreferrer" className="font-sans text-sm font-semibold text-ink-700 hover:text-brand-600 transition-colors">Whatsapp</a>
              </div>
              <p className="font-sans text-xs text-ink-500">
                © {year} {siteConfig.brand.name}. {t('footer.rights')}
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
