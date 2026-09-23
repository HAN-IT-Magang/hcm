import { useTranslation } from 'react-i18next'
import { siteConfig } from '@/config/site'
import { Container } from '../ui/Container'

export function Contact() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  const waMessage = isEn
    ? 'Hello HCM! I want to scale my brand.'
    : 'Halo HCM! Saya mau konsultasi scale brand e-commerce.'

  const waUrl = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(waMessage)}`

  return (
    <section id="kontak" className="relative z-10 bg-gradient-to-br from-brand-600 via-brand-500 to-[#9b51e0] pt-32 pb-40 overflow-hidden">



      <Container className="relative z-10">
        <div className="max-w-5xl">
          {/* Judul atas — wipe dari kiri */}
          <h2 data-gsap="clip-left" className="font-sans font-light text-5xl md:text-8xl text-white leading-[1.1] tracking-tight mb-4 drop-shadow-md">
            Grow Your <br /> Brand With
          </h2>
          <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-6 mb-16">
            {/* Huruf H-A-N — stagger: H kiri, A pop, N kanan */}
            <h1 data-gsap-group="stagger" data-gsap-stagger="0.12" className="font-sans font-black text-6xl md:text-9xl text-white leading-none flex items-center drop-shadow-xl">
              <span data-gsap-item="left" className="bg-white text-brand-600 px-4 py-1 rounded-sm mr-4 md:mr-6">H</span>
              <span data-gsap-item="pop" className="bg-white text-brand-600 px-4 py-1 rounded-sm mr-4 md:mr-6">A</span>
              <span data-gsap-item="right" className="bg-white text-brand-600 px-4 py-1 rounded-sm">N</span>
            </h1>
            {/* Creative Marketing — wipe dari kanan */}
            <h2 data-gsap="clip-right" data-gsap-delay="0.15" className="font-sans font-bold text-5xl md:text-8xl text-white drop-shadow-md mt-4 md:mt-0">
              Creative <br /> Marketing
            </h2>
          </div>

          {/* CTA — pop */}
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
      </Container>



    </section>
  )
}
