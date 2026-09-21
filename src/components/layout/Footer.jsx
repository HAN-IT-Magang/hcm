import { useTranslation } from 'react-i18next'
import { siteConfig } from '@/config/site'
import { Container } from '../ui/Container'
import logoHan from '@/assets/2-bg.transparant.png'

export function Footer() {
  const { t, i18n } = useTranslation()
  const nav = t('nav', { returnObjects: true })
  const year = new Date().getFullYear()
  const isEn = i18n.language === 'en'

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
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )

  const PhoneIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )

  return (
    <footer className="bg-[#FFFFFF] border-t-[3px] border-[#00104D] pt-10 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 relative z-40 overflow-hidden">

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-16 lg:gap-8 mb-10 sm:mb-20 lg:mb-24">

          <div className="lg:col-span-6 flex flex-col items-center justify-center h-full gap-8 relative">
            <div className="absolute top-10 left-10 lg:left-20 w-8 h-8 bg-[#FF2E93] rounded-full border-[3px] border-[#00104D] shadow-[2px_2px_0_0_#00104D] opacity-20"></div>
            <div className="absolute bottom-10 right-10 lg:right-20 w-12 h-12 bg-[#00E0A4] rotate-12 border-[3px] border-[#00104D] shadow-[2px_2px_0_0_#00104D] opacity-20"></div>

            <img
              src={logoHan}
              alt="HAN Creative Marketing"
              className="w-48 sm:w-80 lg:w-[400px] h-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300 relative z-10"
            />

            <div className="bg-[#FFD600] border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] px-4 py-1.5 rotate-0 sm:-rotate-2">
              <span className="font-montserrat font-bold text-xs text-[#00104D] tracking-widest uppercase">
                #1 Growth Partner
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-8 min-w-0">

            <div className="min-w-0">
              <h4 className="font-montserrat font-bold text-[#00104D] text-sm sm:text-base sm:text-lg uppercase mb-4 sm:mb-6">{t('footer.navTitle')}</h4>
              <ul className="space-y-3 sm:space-y-4">
                {Array.isArray(nav) && nav.map((n) => (
                  <li key={n.label} className="min-w-0">
                    <a href={n.href} className="font-montserrat font-semibold text-xs sm:text-sm text-[#00104D]/70 hover:text-[#FF2E93] hover:translate-x-1 inline-block transition-transform break-words">{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <h4 className="font-montserrat font-bold text-[#00104D] text-sm sm:text-base sm:text-lg uppercase mb-4 sm:mb-6">{t('footer.servicesTitle', 'Layanan')}</h4>
              <ul className="space-y-3 sm:space-y-4">
                {siteConfig.services.map((svc) => (
                  <li key={svc} className="min-w-0">
                    <a href="#layanan" className="font-montserrat font-semibold text-xs sm:text-sm text-[#00104D]/70 hover:text-[#00E0A4] hover:translate-x-1 inline-block transition-transform break-words">{svc}</a>
                  </li>
                ))}
                <li>
                  <a href="#layanan" className="font-montserrat font-semibold text-xs sm:text-sm text-[#00104D]/70 hover:text-[#00E0A4] hover:translate-x-1 inline-block transition-transform break-words">TikTok & Shopee Live</a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-montserrat font-bold text-[#00104D] text-sm sm:text-base sm:text-lg uppercase mb-4 sm:mb-6">{t('footer.contactTitle', 'Kontak')}</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-montserrat font-semibold text-xs sm:text-sm text-[#00104D]/70 hover:text-[#FF6A13] group">
                    <PhoneIcon />
                    <span className="group-hover:underline underline-offset-4">{siteConfig.contact.whatsappFormatted}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 font-montserrat font-semibold text-xs sm:text-sm text-[#00104D]/70 hover:text-[#FF6A13] group">
                    <MailIcon />
                    <span className="group-hover:underline underline-offset-4">{siteConfig.contact.email}</span>
                  </a>
                </li>
                <li>
                  <p className="font-montserrat font-semibold text-sm text-[#00104D]/70 leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                </li>
                <li>
                  <p className="font-montserrat font-bold text-sm text-[#0030FF]">
                    {siteConfig.contact.operationalHours}
                  </p>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="border-t-[2px] sm:border-t-[3px] border-[#00104D] pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 md:gap-8">

          <div className="max-w-2xl text-center md:text-left">
            <p className="font-montserrat font-bold text-xs sm:text-sm text-[#00104D] leading-relaxed mb-3 sm:mb-4">
              {isEn
                ? "HAN Creative Marketing is a specialized E-Commerce Growth Partner focusing on TikTok Shop and Shopee. Participation is limited to partnered brands."
                : "HAN Creative Marketing adalah Partner Pertumbuhan E-Commerce spesialis TikTok Shop dan Shopee, berfokus pada peningkatan GMV melalui strategi organik, KOL, dan Ads."
              }
            </p>
            <p className="font-montserrat font-semibold text-xs text-[#00104D]/60">
              © {year} {siteConfig.brand.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FF2E93] text-[#FFFFFF] border-[2px] sm:border-[3px] border-[#00104D] shadow-[3px_3px_0_0_#00104D] sm:shadow-[4px_4px_0_0_#00104D] flex items-center justify-center hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#00104D] active:translate-y-0 active:shadow-none transition-all duration-200"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href={siteConfig.contact.tiktok}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#000000] text-[#FFFFFF] border-[2px] sm:border-[3px] border-[#00104D] shadow-[3px_3px_0_0_#00104D] sm:shadow-[4px_4px_0_0_#00104D] flex items-center justify-center hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#00104D] active:translate-y-0 active:shadow-none transition-all duration-200"
              aria-label="TikTok"
            >
              <TiktokIcon />
            </a>
            <a
              href={siteConfig.contact.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00E0A4] text-[#00104D] border-[2px] sm:border-[3px] border-[#00104D] shadow-[3px_3px_0_0_#00104D] sm:shadow-[4px_4px_0_0_#00104D] flex items-center justify-center hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#00104D] active:translate-y-0 active:shadow-none transition-all duration-200"
              aria-label="Google Maps"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
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
