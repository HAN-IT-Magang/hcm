import { useTranslation } from 'react-i18next'
import { Container } from '../ui/Container'
import { siteConfig } from '@/config/site'
import starIcon from '@/assets/Icon.webp'

export function HeroAbout() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  const waMessage = isEn
    ? 'Hello HCM, I want to scale my brand with you.'
    : 'Halo HCM, saya mau scale brand saya bareng HCM.'
  const waUrl = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(waMessage)}`

  return (
    <section className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-accent-cyan pt-[72px] lg:pt-[80px]">
      {/* glow halus biar teks kebaca */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/3 top-1/4 h-[420px] w-[720px] -translate-x-1/2 bg-white/10 blur-[110px]" />
      </div>

      <Container className="relative z-10 px-6 py-14 md:py-20">
        {/* breadcrumb kecil — penanda halaman */}
        <nav data-gsap="zoom" aria-label="Breadcrumb" className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1.5 font-sans text-xs font-medium text-white/70 md:text-sm">
          <a href="/" className="transition-colors hover:text-white">
            {isEn ? 'Home' : 'Beranda'}
          </a>
          <span aria-hidden="true" className="font-bold text-white">»</span>
          <span className="text-white">{isEn ? 'About Us' : 'Tentang Kami'}</span>
        </nav>

        {/* ====== TIPOGRAFI ALA BILLA ====== */}
        <h1 className="font-sans leading-[0.95] tracking-tight">
          {/* Baris 1: YOUR + kotak kuning */}
          <span className="flex flex-wrap items-center gap-4 md:gap-6">
            <span data-gsap="clip-left" className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              YOUR
            </span>
            <span data-gsap="pop" data-gsap-delay="0.1" className="relative inline-block">
              {/* icon starburst asli */}
              <img src={starIcon} alt="" aria-hidden="true" className="absolute -right-10 -top-10 h-20 w-20 animate-float md:-right-14 md:-top-14 md:h-28 md:w-28" />
              <span className="relative block bg-accent-yellow px-5 py-2 font-serif text-3xl font-bold italic text-ink-900 sm:text-4xl md:px-8 md:text-5xl">
                All In One
              </span>
            </span>
          </span>

          {/* Baris 2: CREATIVE + pill pengganti foto (TANPA FOTO) */}
          <span className="mt-3 flex flex-wrap items-center gap-4 md:mt-4 md:gap-6">
            <span data-gsap="clip-left" data-gsap-delay="0.08" className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              CREATIVE
            </span>
            {/* pill statik — bukan foto: marquee mini creator */}
            <span data-gsap="zoom" data-gsap-delay="0.15" className="inline-flex h-12 items-center gap-2 overflow-hidden rounded-full bg-[#CEFE4A] px-5 font-sans text-xs font-black uppercase tracking-widest text-ink-900 sm:h-14 sm:text-sm md:px-6">
              <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-accent-magenta" />
              {isEn ? '500+ Creators' : '500+ Kreator'}
              <span className="font-black">⚡</span>
            </span>
          </span>

          {/* Baris 3: Agency + deskripsi + CTA */}
          <span className="mt-4 grid items-end gap-6 md:mt-6 lg:grid-cols-[auto_1fr_auto] lg:gap-10">
            <span data-gsap="clip-left" data-gsap-delay="0.14" className="inline-block overflow-visible pb-4 pt-1 font-serif text-4xl font-medium italic leading-[1.15] text-white sm:text-5xl md:text-6xl">
              Agency
            </span>
            <span data-gsap="zoom" data-gsap-delay="0.2" className="max-w-md font-sans text-sm font-normal leading-relaxed text-white/85 md:text-base">
              {isEn
                ? 'HCM partners with brands to build sustainable growth and meaningful connections.'
                : 'HCM bermitra dengan brand untuk membangun pertumbuhan berkelanjutan dan koneksi yang bermakna.'}
            </span>
            <span data-gsap="pop" data-gsap-delay="0.25">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-accent-yellow px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-ink-900 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl md:text-base"
              >
                {isEn ? 'Get Started' : 'Mulai Scale'}
                <span className="ml-2 text-lg font-black leading-none">+</span>
              </a>
            </span>
          </span>
        </h1>
      </Container>
    </section>
  )
}
