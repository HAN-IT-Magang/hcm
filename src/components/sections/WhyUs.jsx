import { useTranslation } from 'react-i18next'
import { Container } from '../ui/Container'
import founderImg from '../../assets/Contents.svg'

export function WhyUs() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  return (
    <section id="why-us" className="relative z-10 bg-[#0030FF] pt-12 lg:pt-20 pb-[clamp(72px,12vw,120px)] border-b-[3px] border-[#00104D] overflow-hidden">

      <Container className="relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT COLUMN: Text and Message */}
          <div className="flex flex-col gap-8 lg:gap-12" data-reveal>

            {/* Pill Badge */}
            <div className="self-start">
              <span className="inline-block px-5 py-2 rounded-[999px] bg-[#FFFFFF] border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] font-montserrat font-bold text-xs sm:text-sm text-[#00104D] uppercase tracking-wide">
                {isEn ? "Message From Founder" : "Pesan Dari Founder"}
              </span>
            </div>

            {/* Huge Quote */}
            <div>
              <h2 className="font-anton text-[clamp(2.5rem,5vw,4.5rem)] text-[#FFFFFF] leading-[1.1] uppercase" style={{ textShadow: '4px 4px 0px #00104D' }}>
                <span className="text-[#FF2E93]">"</span>
                {isEn ? (
                  <> Elevate Your Brand <br /> With Our Designs <span className="text-[#FF2E93]">"</span></>
                ) : (
                  <> Scale Up Brand Kamu <br /> Bersama Kami <span className="text-[#FF2E93]">"</span></>
                )}
              </h2>
            </div>

            {/* Bottom Links and Name */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t-[3px] border-white/20 mt-4">
              <a href="#about" className="inline-flex items-center gap-2 font-['Bebas_Neue',_sans-serif] text-2xl text-[#FFFFFF] hover:text-[#FF2E93] transition-colors group">
                {isEn ? "Visit Our Team" : "Kunjungi Tim Kami"}
                <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-[4px] h-10 bg-[#FFFFFF]"></div>
                <div>
                  <h3 className="font-montserrat font-bold text-[#FFFFFF] text-lg leading-none mb-1">Arefin Shuvo</h3>
                  <p className="font-montserrat font-medium text-xs text-[#FFFFFF]/80 tracking-[0.2em] uppercase">Founder</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0" data-reveal>

            {/* Ellipse Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[110%] rounded-[50%] border-[2px] border-[#FFFFFF]/30 -rotate-12 pointer-events-none z-0 hidden sm:block"></div>

            {/* Sparkle 1 */}
            <svg className="absolute top-[20%] left-[10%] w-10 h-10 text-[#FFD600] drop-shadow-[2px_2px_0_rgba(0,16,77,1)] z-20 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>

            {/* Sparkle 2 */}
            <svg className="absolute bottom-[20%] right-[10%] w-8 h-8 text-[#00E0A4] drop-shadow-[2px_2px_0_rgba(0,16,77,1)] z-20 animate-pulse delay-75" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>

            <div className="relative z-10 bg-[#00E0A4] border-[3px] border-[#00104D] shadow-[12px_12px_0_0_#00104D] rounded-[24px] overflow-hidden rotate-[2deg] w-full max-w-xs sm:max-w-sm aspect-square lg:aspect-[4/5] mx-auto lg:mx-0">
              <img src={founderImg} alt="Arefin Shuvo - Founder" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 object-top" />
            </div>

          </div>

        </div>
      </Container>
    </section>
  )
}
