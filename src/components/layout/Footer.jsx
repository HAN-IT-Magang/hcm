import { useTranslation } from 'react-i18next'
import { siteConfig } from '@/config/site'
import { Container } from '../ui/Container'
import hanLogo from '../../assets/4-bg.transparant.png'

export function Footer() {
  const { t, i18n } = useTranslation()
  const nav = t('nav', { returnObjects: true })
  const year = new Date().getFullYear()
  const isEn = i18n.language === 'en'

  const waMessage = isEn
    ? 'Hello HCM! I want to scale my brand.'
    : 'Halo HCM! Saya mau konsultasi scale brand e-commerce.'
  const waUrl = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(waMessage)}`

  const InstagramIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )

  const TiktokIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3.1 15.68a6.34 6.34 0 0 0 10.82 4.48 6.27 6.27 0 0 0 1.86-4.48V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-.97-.07Z" />
    </svg>
  )

  const MailIcon = () => (
    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )

  const PhoneIcon = () => (
    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )

  return (
    <footer className="relative z-40 bg-gradient-to-br from-brand-600 via-brand-500 to-[#9b51e0] overflow-hidden">
      <Container className="relative z-10 pt-24 md:pt-32">

        {/* Integrated CTA Section (tujuan link nav #kontak) */}
        <div id="kontak" className="max-w-5xl mb-32 scroll-mt-24">
          <h2 data-gsap="clip-left" className="font-sans font-light text-5xl md:text-8xl text-white leading-[1.1] tracking-tight mb-4 drop-shadow-md">
            Grow Your <br /> Brand With
          </h2>
          <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-6 mb-16">
            <h1 data-gsap-group="stagger" data-gsap-stagger="0.12" className="font-sans font-black text-6xl md:text-9xl text-white leading-none flex items-center drop-shadow-xl">
              <span data-gsap-item="left" className="bg-white text-brand-600 px-4 py-1 rounded-sm mr-4 md:mr-6">H</span>
              <span data-gsap-item="pop" className="bg-white text-brand-600 px-4 py-1 rounded-sm mr-4 md:mr-6">A</span>
              <span data-gsap-item="right" className="bg-white text-brand-600 px-4 py-1 rounded-sm">N</span>
            </h1>
            <h2 data-gsap="clip-right" data-gsap-delay="0.15" className="font-sans font-bold text-5xl md:text-8xl text-white drop-shadow-md mt-4 md:mt-0">
              Creative <br /> Marketing
            </h2>
          </div>

          <a
            data-gsap="pop"
            data-gsap-delay="0.2"
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-4 px-10 py-5 bg-accent-yellow text-ink-900 font-sans font-bold text-xl shadow-2xl hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <span>{isEn ? 'Contact Us Now' : 'Hubungi Kami Sekarang'}</span>
            <span className="text-3xl leading-none font-black">+</span>
          </a>
        </div>

        {/* Top Horizontal Line */}
        <div className="w-full h-px bg-white/20 mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">

          {/* Left Column: Logo & Text */}
          <div className="lg:col-span-4 relative flex flex-col items-start">


            {/* HAN Logo Image */}
            <img
              data-gsap="left"
              src={hanLogo}
              alt="HAN Creative Marketing"
              className="mb-6 z-10 h-16 md:h-24 w-auto object-contain"
            />

            <p className="font-sans text-white/90 text-sm leading-relaxed max-w-sm z-10">
              {isEn
                ? "HAN Creative Marketing is a specialized E-Commerce Growth Partner focusing on TikTok Shop and Shopee. Participation is limited to partnered brands."
                : "HAN Creative Marketing adalah Partner Pertumbuhan E-Commerce spesialis TikTok Shop dan Shopee, berfokus pada peningkatan GMV melalui strategi organik, KOL, dan Ads."
              }
            </p>
          </div>

          {/* Right Columns: Links & Contact */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Navigation */}
            <div>
              <h4 className="font-sans font-bold text-white text-base tracking-wide uppercase mb-6">{t('footer.navTitle', 'NAVIGATION')}</h4>
              <ul className="space-y-4">
                {Array.isArray(nav) && nav.map((n) => (
                  <li key={n.label}>
                    <a href={n.href} className="font-sans text-sm text-white/80 hover:text-white transition-colors">{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-sans font-bold text-white text-base tracking-wide uppercase mb-6">{t('footer.servicesTitle', 'SERVICES')}</h4>
              <ul className="space-y-4">
                {siteConfig.services.map((svc) => (
                  <li key={svc}>
                    <a href="#layanan" className="font-sans text-sm text-white/80 hover:text-white transition-colors">{svc}</a>
                  </li>
                ))}
                <li>
                  <a href="#layanan" className="font-sans text-sm text-white/80 hover:text-white transition-colors">TikTok & Shopee Live</a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-sans font-bold text-white text-base tracking-wide uppercase mb-6">{t('footer.contactTitle', 'CONTACT US')}</h4>
              <ul className="space-y-5">
                <li>
                  <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noreferrer" className="flex items-start gap-3 font-sans text-sm text-white/80 hover:text-white group">
                    <div className="mt-0.5"><PhoneIcon /></div>
                    <span>{siteConfig.contact.whatsappFormatted}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.contact.email}`} className="flex items-start gap-3 font-sans text-sm text-white/80 hover:text-white group">
                    <div className="mt-0.5"><MailIcon /></div>
                    <span className="break-all">{siteConfig.contact.email}</span>
                  </a>
                </li>
                <li>
                  <p className="font-sans text-sm text-white/80 leading-relaxed pr-4">
                    {siteConfig.contact.address}
                  </p>
                </li>
                <li>
                  <p className="font-sans font-bold text-sm text-accent-yellow">
                    {siteConfig.contact.operationalHours}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Line */}
        <div className="w-full h-px bg-white/20 mb-6"></div>

        {/* Bottom Bar */}
        <div className="pb-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-sans text-xs text-white/70">
            © {year} {siteConfig.brand.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a href={siteConfig.contact.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href={siteConfig.contact.tiktok} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="TikTok">
              <TiktokIcon />
            </a>
            <a href={siteConfig.contact.mapsUrl} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Google Maps">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
