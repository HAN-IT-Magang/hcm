import { useTranslation } from 'react-i18next'
import { Container } from '../ui/Container'
import aboutImg from '../../assets/fotoorang/Contents (5).png'

export function About() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  return (
    <section id="about" className="relative bg-white overflow-hidden flex flex-col font-sans pt-2 sm:pt-6 md:pt-20">

      {/* COMPOSITION AREA */}
      <div className="relative w-full min-h-[280px] sm:min-h-[420px] md:min-h-[800px] flex justify-center items-end z-10 overflow-hidden">

        {/* Blue Squiggles from PDF — parallax horizontal */}
        <svg data-gsap-parallax="-10" viewBox="0 0 1000 300" className="absolute top-1/2 left-0 w-full -translate-y-1/2 -z-30 opacity-80 pointer-events-none" preserveAspectRatio="none">
          <path d="M-100,150 C100,250 300,50 500,150 C700,250 900,50 1100,150" fill="none" stroke="#0099FF" strokeWidth="5" strokeLinecap="round" />
          <path d="M-50,170 C150,270 350,70 550,170 C750,270 950,70 1150,170" fill="none" stroke="#0099FF" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
        </svg>

        {/* Lime Green Starburst — zoom tengah */}
        <div data-gsap="zoom" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[220px] sm:w-[380px] md:w-[750px] aspect-square -z-20 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#CEFE4A]">
            <polygon fill="currentColor" points="50,0 60,30 95,15 75,45 100,70 65,65 55,100 40,65 0,80 30,50 5,20 40,35" />
          </svg>
        </div>

        {/* Floating Gradient Squares — hidden on mobile */}
        <div className="hidden sm:block absolute top-[20%] right-[15%] w-24 h-24 bg-gradient-to-br from-[#FF2E93] to-white/50 -z-10" />
        <div className="hidden sm:block absolute bottom-[30%] right-[5%] w-16 h-16 bg-gradient-to-tr from-[#0030FF] to-white/50 -z-10" />
        <div className="hidden sm:block absolute top-[35%] left-[8%] w-12 h-12 bg-gradient-to-t from-[#CEFE4A] to-white/50 -z-10" />

        {/* Massive H C M Typography — H kiri jauh, C zoom, M kanan jauh */}
        <div className="absolute top-1/2 left-0 w-full flex justify-center gap-2 sm:gap-8 md:gap-32 -translate-y-[60%] pointer-events-none -z-10">
          <div data-gsap="left-far" className="text-transparent font-black text-[70px] sm:text-[120px] md:text-[350px] leading-none transform -rotate-12 select-none" style={{ WebkitTextStroke: '2px #60A5FA' }}>H</div>
          <div data-gsap="zoom" data-gsap-delay="0.1" className="text-transparent font-black text-[90px] sm:text-[150px] md:text-[400px] leading-none transform rotate-12 select-none -ml-2 sm:-ml-6 md:-ml-10" style={{ WebkitTextStroke: '2px #60A5FA' }}>C</div>
          <div data-gsap="right-far" data-gsap-delay="0.2" className="text-[#0030FF] font-black text-[70px] sm:text-[120px] md:text-[350px] leading-none transform -rotate-6 select-none ml-2 sm:ml-6 md:ml-10">M</div>
        </div>

        {/* The Photo and Badges Container */}
        <Container className="relative z-20 flex justify-center h-full items-end pb-0">

          <img
            data-gsap="zoom"
            src={aboutImg}
            alt="HCM Team"
            className="relative z-10 w-[110%] sm:w-[120%] md:w-[110%] max-w-[1200px] h-auto object-contain object-bottom drop-shadow-[0_0_15px_rgba(255,255,255,1)]"
            style={{ filter: 'drop-shadow(0px 0px 20px white)' }}
          />

          {/* 'About' Badge — masuk dari kiri */}
          <div data-gsap="left" className="absolute -top-[8%] sm:-top-[5%] md:-top-[12%] left-1 sm:left-0 md:left-[2%] bg-gradient-to-r from-white to-[#CEFE4A] border-[2px] sm:border-[3px] border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] z-30 px-5 py-2 sm:px-8 sm:py-3 md:px-14 md:py-6 transform -rotate-3 hover:scale-105 transition-transform">
            <h1 className="text-[#00104D] font-sans font-black text-4xl sm:text-6xl md:text-9xl leading-none tracking-tight">
              About
            </h1>
          </div>

          {/* 'Han Creative Marketing' Badge — masuk dari kanan */}
          <div data-gsap="right" className="absolute bottom-[12%] sm:bottom-[10%] -right-1 sm:right-[-5%] md:right-[5%] bg-gradient-to-l from-white to-[#CEFE4A] border-[2px] sm:border-[3px] border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] z-30 px-3 py-2 sm:px-6 sm:py-4 md:px-12 md:py-6 transform rotate-2 hover:scale-105 transition-transform max-w-[85%] sm:max-w-none">
            <h2 className="text-[#00104D] font-sans font-black text-sm sm:text-2xl md:text-5xl whitespace-nowrap tracking-tight">
              Han Creative Marketing
            </h2>
          </div>
        </Container>
      </div>

      {/* BOTTOM BLUE SECTION (Matches PDF exactly, no soft gradients) */}
      <div className="relative bg-[#0030FF] w-full z-40 px-6 py-16 md:px-16 md:py-24 border-t-[4px] border-black">

        {/* Decorative star from PDF */}
        <div className="absolute top-12 right-12 text-[#FFD600] z-50 pointer-events-none">
          <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start relative z-10">



          <div className="grid lg:grid-cols-2 gap-10 lg:gap-24">
            {/* Left Yellow Text — dari kiri jauh */}
            <p data-gsap="left-far" className="text-[#FFD600] font-sans font-bold text-3xl md:text-[40px] leading-[1.3] tracking-tight">
              {isEn
                ? "HCM is a growth partner for e-commerce brands looking to expand through integrated strategies."
                : "HCM adalah partner pertumbuhan bagi brand e-commerce yang ingin berkembang melalui strategi yang terintegrasi."}
            </p>

            {/* Right White Text — dari kanan jauh */}
            <p data-gsap="right-far" data-gsap-delay="0.12" className="text-white font-sans font-medium text-xl md:text-[24px] leading-[1.6] tracking-wide pt-2">
              {isEn
                ? "From early stages to achieving millions or billions of GMV per month, we believe that the combination of strategy, data, and execution is the key to winning the e-commerce competition."
                : "Dari tahap awal hingga mencapai pertumbuhan jutaan hingga miliaran GMV per bulan, kami percaya bahwa kombinasi antara strategi, data, dan execution adalah kunci untuk memenangkan persaingan e-commerce."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
