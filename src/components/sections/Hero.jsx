import { useTranslation } from 'react-i18next'
import { Container } from '../ui/Container'
import { siteConfig } from '@/config/site'
import hanLogo from '../../assets/2-bg.transparant.png'

export function Hero() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'
  const waMessage = isEn
    ? 'Hello HCM, I would like to scale my e-commerce brand.'
    : 'Halo HCM, saya mau konsultasi scale brand e-commerce saya.'

  const waUrl = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(waMessage)}`

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-gradient-to-br from-brand-600 via-brand-500 to-accent-cyan overflow-hidden pt-32">

      {/* Abstract Background Shapes — 2 garis bleed melewati layar */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg data-gsap-parallax="-6" viewBox="0 0 1440 800" className="absolute top-0 h-full w-[130%] -left-[15%] opacity-80" preserveAspectRatio="xMidYMid slice" style={{ overflow: 'visible' }}>
          {/* Magenta Swoosh — ujung kiri-kanan lewat batas layar */}
          <path d="M-300,620 C300,500 500,820 820,400 C1120,-20 1400,220 1750,80" fill="none" stroke="#ff007f" strokeWidth="80" strokeLinecap="round" className="opacity-90" />
          <path d="M-300,820 C400,620 600,1020 920,600 C1220,180 1420,420 1750,280" fill="none" stroke="#00d0ff" strokeWidth="40" strokeLinecap="round" className="opacity-40" />
        </svg>
      </div>

      <Container className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">

        {/* Main Logo Image "HAN" */}
        <div className="relative mb-6 flex justify-center items-center">
          <img 
            data-gsap="zoom"
            data-gsap-hero="0"
            src={hanLogo} 
            alt="HAN" 
            className="w-auto h-[140px] md:h-[235px] lg:h-[285px] object-contain drop-shadow-2xl" 
          />
        </div>

        {/* Subtitle Box — Stacked */}
        <div className="mt-12 md:mt-16 flex flex-col items-center justify-center gap-1 md:gap-2 bg-transparent border-t-2 border-white/30 w-full max-w-4xl pt-6 md:pt-10">
          <div data-gsap="clip-left" data-gsap-hero="4">
            <h2 className="text-white font-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl tracking-tight text-center">
              {isEn ? "E-Commerce" : "E-Commerce"}
            </h2>
          </div>
          <div data-gsap="clip-right" data-gsap-hero="5">
            <h2 className="text-white/90 font-sans font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide text-center">
              {isEn ? "Your Growth Partner" : "Your Growth Partner"}
            </h2>
          </div>
        </div>

        {/* CTA Button — zoom tengah */}
        <div data-gsap="zoom" data-gsap-hero="6" className="mt-10 mb-8 md:mb-12">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-4 px-8 py-4 bg-accent-yellow text-ink-900 font-sans font-bold text-lg shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            <span>{isEn ? 'Start scaling' : 'Mulai Scale Brand'}</span>
            <span className="text-2xl leading-none font-black">+</span>
          </a>
        </div>

      </Container>
    </section>
  )
}
