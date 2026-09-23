import { useTranslation } from 'react-i18next'
import { Container } from '../ui/Container'
import { siteConfig } from '@/config/site'

export function Hero() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'
  const waMessage = isEn
    ? 'Hello HCM, I would like to scale my e-commerce brand.'
    : 'Halo HCM, saya mau konsultasi scale brand e-commerce saya.'

  const waUrl = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(waMessage)}`

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-gradient-to-br from-brand-600 via-brand-500 to-accent-cyan overflow-hidden pt-20">

      {/* Abstract Background Shapes — 2 garis bleed melewati layar */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg data-gsap-parallax="-6" viewBox="0 0 1440 800" className="absolute top-0 h-full w-[130%] -left-[15%] opacity-80" preserveAspectRatio="xMidYMid slice" style={{ overflow: 'visible' }}>
          {/* Magenta Swoosh — ujung kiri-kanan lewat batas layar */}
          <path d="M-300,620 C300,500 500,820 820,400 C1120,-20 1400,220 1750,80" fill="none" stroke="#ff007f" strokeWidth="80" strokeLinecap="round" className="opacity-90" />
          <path d="M-300,820 C400,620 600,1020 920,600 C1220,180 1420,420 1750,280" fill="none" stroke="#00d0ff" strokeWidth="40" strokeLinecap="round" className="opacity-40" />
        </svg>
      </div>

      <Container className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">

        {/* Main Logo Text "HAN" — H dari kiri jauh, A pop tengah, N dari kanan jauh */}
        <div className="relative mb-6">
          <h1 className="font-sans font-black text-[150px] md:text-[250px] leading-none tracking-tighter text-white drop-shadow-2xl flex items-center justify-center">
            <span data-gsap="left-far" data-gsap-hero="0" className="bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-200" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>H</span>
            <span data-gsap="pop" data-gsap-hero="1" className="bg-clip-text text-transparent bg-gradient-to-b from-brand-500 to-brand-700 -ml-8 md:-ml-16 z-10" style={{ WebkitTextStroke: '3px white' }}>A</span>
            <span data-gsap="right-far" data-gsap-hero="2" className="bg-clip-text text-transparent bg-gradient-to-b from-brand-600 to-brand-700 -ml-8 md:-ml-16" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>N</span>
          </h1>

          {/* Creative Marketing Badge — pop tengah */}
          <div data-gsap="pop" data-gsap-hero="3" className="absolute bottom-0 md:-bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-2 md:px-8 md:py-3 shadow-xl flex items-center gap-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-accent-magenta font-sans font-extrabold text-2xl md:text-5xl tracking-tight">Creative</span>
            <span className="text-brand-600 font-sans font-light text-2xl md:text-5xl tracking-tight">Marketing</span>
          </div>
        </div>

        {/* Subtitle Box — kiri dari kiri (clip), kanan dari kanan (clip) */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 bg-transparent border-t-2 border-white/30 w-full max-w-4xl">
          <div data-gsap="clip-left" data-gsap-hero="4" className="border-r-2 border-white/30 p-4 md:p-8 text-right">
            <h2 className="text-white font-sans font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight">
              {isEn ? "E-Commerce" : "E-Commerce"}
            </h2>
          </div>
          <div data-gsap="clip-right" data-gsap-hero="5" className="p-4 md:p-8 text-left">
            <h2 className="text-white font-sans font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight">
              {isEn ? "Growth Partner" : "Growth Partner"}
            </h2>
          </div>
        </div>

        {/* CTA Button — zoom tengah */}
        <div data-gsap="zoom" data-gsap-hero="6" className="mt-12 mb-20">
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
