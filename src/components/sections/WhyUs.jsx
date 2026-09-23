import { useTranslation } from 'react-i18next'
import { Container } from '../ui/Container'
import founderImg from '../../assets/Contents.svg'

export function WhyUs() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  return (
    <section id="why-us" className="relative z-10 bg-[#0030FF] pt-10 sm:pt-12 lg:pt-20 pb-[clamp(56px,12vw,120px)] border-b-[3px] border-[#00104D] overflow-hidden">

      <Container className="relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">

          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12" data-gsap="left-far">


            <div className="min-w-0">
              <h2 className="font-anton text-[clamp(2rem,9vw,4.5rem)] sm:text-[clamp(2.5rem,5vw,4.5rem)] text-[#FFFFFF] leading-[1.1] uppercase break-words" style={{ textShadow: '4px 4px 0px #00104D' }}>
                <span className="text-[#FF2E93]">"</span>
                {isEn ? (
                  <> Elevate Your Brand <br className="hidden sm:block" /> With Our Designs <span className="text-[#FF2E93]">"</span></>
                ) : (
                  <> Scale Up Brand Kamu <br className="hidden sm:block" /> Bersama Kami <span className="text-[#FF2E93]">"</span></>
                )}
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-4 sm:gap-6 pt-6 sm:pt-8 border-t-[2px] sm:border-t-[3px] border-white/20 mt-2 sm:mt-4">
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

          <div className="relative flex justify-center lg:justify-end mt-8 sm:mt-12 lg:mt-0" data-gsap="right-far" data-gsap-delay="0.12">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[110%] rounded-[50%] border-[2px] border-[#FFFFFF]/30 -rotate-12 pointer-events-none z-0 hidden sm:block"></div>

            <svg className="absolute top-[20%] left-[10%] w-10 h-10 text-[#FFD600] drop-shadow-[2px_2px_0_rgba(0,16,77,1)] z-20 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>

            <svg className="absolute bottom-[20%] right-[10%] w-8 h-8 text-[#00E0A4] drop-shadow-[2px_2px_0_rgba(0,16,77,1)] z-20 animate-pulse delay-75" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>

            <div className="relative z-10 bg-[#00E0A4] border-[2px] sm:border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] sm:shadow-[8px_8px_0_0_#00104D] lg:shadow-[12px_12px_0_0_#00104D] rounded-[16px] sm:rounded-[24px] overflow-hidden rotate-0 sm:rotate-[2deg] w-full max-w-[280px] sm:max-w-sm aspect-square lg:aspect-[4/5] mx-auto lg:mx-0">
              <img src={founderImg} alt="Arefin Shuvo - Founder" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 object-top" />
            </div>

          </div>

        </div>
      </Container>
    </section>
  )
}
