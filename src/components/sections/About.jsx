import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { localizePath } from '@/lib/locale'
import { useLang } from '@/components/ui/LanguageMenu'
import { Container } from '../ui/Container'
import aboutImg from '../../assets/fotoorang/Contents (5).png'

export function About() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'
  const lang = useLang()

  return (
    <section id="about" className="relative bg-white overflow-hidden flex flex-col font-sans pt-2 sm:pt-6 md:pt-20">

      {/* Komposisi */}
      <div className="relative w-full min-h-[280px] sm:min-h-[420px] md:min-h-[800px] flex justify-center items-end z-10 overflow-hidden">

        {/* Garis biru */}
        <svg data-gsap-parallax="-10" viewBox="0 0 1000 300" className="absolute top-1/2 left-0 w-full -translate-y-1/2 -z-30 opacity-80 pointer-events-none" preserveAspectRatio="none">
          <path d="M-100,150 C100,250 300,50 500,150 C700,250 900,50 1100,150" fill="none" stroke="#0099FF" strokeWidth="5" strokeLinecap="round" />
          <path d="M-50,170 C150,270 350,70 550,170 C750,270 950,70 1150,170" fill="none" stroke="#0099FF" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
        </svg>

        {/* Starburst */}
        <div data-gsap="zoom" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[220px] sm:w-[380px] md:w-[750px] aspect-square -z-20 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#CEFE4A]">
            <polygon fill="currentColor" points="50,0 60,30 95,15 75,45 100,70 65,65 55,100 40,65 0,80 30,50 5,20 40,35" />
          </svg>
        </div>

        {/* Kotak gradien */}
        <div className="hidden sm:block absolute top-[20%] right-[15%] w-24 h-24 bg-gradient-to-br from-[#FF2E93] to-white/50 -z-10" />
        <div className="hidden sm:block absolute bottom-[30%] right-[5%] w-16 h-16 bg-gradient-to-tr from-[#0030FF] to-white/50 -z-10" />
        <div className="hidden sm:block absolute top-[35%] left-[8%] w-12 h-12 bg-gradient-to-t from-[#CEFE4A] to-white/50 -z-10" />

        {/* Tipografi HCM */}
        <div className="absolute top-1/2 left-0 w-full flex justify-center gap-2 sm:gap-8 md:gap-32 -translate-y-[60%] pointer-events-none -z-10">
          <div data-gsap="left-far" className="text-transparent font-black text-[70px] sm:text-[120px] md:text-[350px] leading-none transform -rotate-12 select-none" style={{ WebkitTextStroke: '2px #60A5FA' }}>H</div>
          <div data-gsap="zoom" data-gsap-delay="0.1" className="text-transparent font-black text-[90px] sm:text-[150px] md:text-[400px] leading-none transform rotate-12 select-none -ml-2 sm:-ml-6 md:-ml-10" style={{ WebkitTextStroke: '2px #60A5FA' }}>C</div>
          <div data-gsap="right-far" data-gsap-delay="0.2" className="text-[#0030FF] font-black text-[70px] sm:text-[120px] md:text-[350px] leading-none transform -rotate-6 select-none ml-2 sm:ml-6 md:ml-10">M</div>
        </div>

        {/* Foto dan badge */}
        <Container className="relative z-20 flex justify-center h-full items-end pb-0">

          <img
            data-gsap="zoom"
            src={aboutImg}
            alt="HCM Team"
            className="relative z-10 h-auto w-full max-w-[520px] object-contain object-bottom drop-shadow-[0_0_15px_rgba(255,255,255,1)] sm:w-[110%] sm:max-w-[1200px]"
            style={{ filter: 'drop-shadow(0px 0px 20px white)' }}
          />

          {/* Badge About */}
          <div data-gsap="left" className="absolute -top-[8%] sm:-top-[5%] md:-top-[12%] left-1 sm:left-0 md:left-[2%] bg-gradient-to-r from-white to-[#CEFE4A] border-[2px] sm:border-[3px] border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] z-30 px-5 py-2 sm:px-8 sm:py-3 md:px-14 md:py-6 transform -rotate-3 hover:scale-105 transition-transform">
            <h1 className="text-[#00104D] font-sans font-black text-[1.75rem] sm:text-[2.25rem] md:text-[3.5rem] leading-none tracking-tight">
              {isEn ? 'About' : 'Tentang'}
            </h1>
          </div>

          {/* Badge nama */}
          <div data-gsap="right" className="absolute bottom-[12%] right-2 z-30 max-w-[calc(100%-1.5rem)] border-[2px] border-black bg-gradient-to-l from-white to-[#CEFE4A] px-3 py-2 shadow-[4px_4px_0_0_#000] transition-transform hover:scale-105 sm:bottom-[10%] sm:right-[-5%] sm:max-w-none sm:rotate-2 sm:border-[3px] sm:px-6 sm:py-4 sm:shadow-[8px_8px_0_0_#000] md:right-[5%] md:px-12 md:py-6">
            <h2 className="text-sm font-sans font-bold leading-tight tracking-tight text-[#00104D] sm:whitespace-nowrap sm:text-xl md:text-[1.75rem]">
              Han Creative Marketing
            </h2>
          </div>
        </Container>
      </div>

      {/* Blok biru bawah */}
      <div className="relative bg-[#0030FF] w-full z-40 pt-16 md:pt-24 pb-24 md:pb-36 border-t-[4px] border-black">

        {/* Aksen bintang */}
        <div className="absolute top-10 right-6 md:right-16 text-[#FFD600] z-50 pointer-events-none" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" />
          </svg>
        </div>

        <Container className="relative z-10">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,40rem)_minmax(0,1fr)] lg:gap-x-14 lg:pr-16">
            <p data-gsap="left-far" className="max-w-[22rem] text-balance font-sans text-[clamp(1.35rem,2vw,1.7rem)] font-extrabold leading-snug text-[#FFD600] sm:max-w-xl lg:max-w-none">
              {isEn
                ? 'HCM is a growth partner for e\u2011commerce brands looking to expand through integrated strategies.'
                : 'HCM adalah partner pertumbuhan bagi brand e\u2011commerce yang ingin berkembang melalui strategi yang terintegrasi.'}
            </p>

            {/* Penjelas */}
            <p data-gsap="right-far" data-gsap-delay="0.12" className="type-body max-w-xl text-pretty font-sans text-white lg:max-w-none lg:pt-1">
              {isEn
                ? "From early stages to achieving millions or billions of GMV per month, we believe that the combination of strategy, data, and execution is the key to winning the e-commerce competition."
                : "Dari tahap awal hingga mencapai pertumbuhan jutaan hingga miliaran GMV per bulan, kami percaya bahwa kombinasi antara strategi, data, dan execution adalah kunci untuk memenangkan persaingan e-commerce."}
            </p>

            <div>
              <Link
                reloadDocument
                to={localizePath('/about', lang)}
                className="inline-flex items-center gap-3 bg-accent-yellow text-ink-900 font-sans font-bold text-sm md:text-base px-8 py-4 transition-all hover:-translate-y-1"
              >
                {isEn ? 'More About HCM' : 'Selengkapnya Tentang HCM'}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}
