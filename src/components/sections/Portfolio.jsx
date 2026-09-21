import { useTranslation } from 'react-i18next'
import { Container } from '../ui/Container'

export function Portfolio() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  const projects = [
    {
      id: 1,
      title: 'NuMar Brand Identity Design',
      category: 'Noakhali, Bangladesh',
      image: 'https://placehold.co/600x800/EAF0FF/00104D?text=Brand+Identity',
    },
    {
      id: 2,
      title: 'Optic 3D Visual Campaign',
      category: 'Noakhali, Bangladesh',
      image: 'https://placehold.co/600x600/FF2E93/FFFFFF?text=3D+Design',
    },
    {
      id: 3,
      title: 'Manifest Branding Group',
      category: 'Noakhali, Bangladesh',
      image: 'https://placehold.co/600x800/00E0A4/00104D?text=Typography',
    }
  ]

  return (
    <section id="portofolio" className="relative z-10 bg-[#0030FF] pt-[clamp(72px,12vw,120px)] pb-12 overflow-hidden">

      {/* Decorative Wavy Lines */}
      <div className="absolute bottom-20 right-[30%] opacity-20 pointer-events-none hidden md:block">
        <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
          <path d="M0 10 Q 15 0, 30 10 T 60 10 T 90 10 T 120 10" stroke="white" strokeWidth="2" fill="none" />
          <path d="M0 30 Q 15 20, 30 30 T 60 30 T 90 30 T 120 30" stroke="white" strokeWidth="2" fill="none" />
          <path d="M0 50 Q 15 40, 30 50 T 60 50 T 90 50 T 120 50" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <Container className="relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

          {/* COLUMN 1: Headline + Project 1 */}
          <div className="flex flex-col gap-10">
            {/* Headline */}
            <div data-reveal>
              <h2 className="font-anton text-[clamp(3.5rem,5vw,5rem)] text-[#FFFFFF] uppercase leading-[1.05] tracking-wide" style={{ textShadow: '4px 4px 0px #00104D' }}>
                {isEn ? (
                  <>Our Latest<br />Projects</>
                ) : (
                  <>Proyek<br />Terbaru</>
                )}
              </h2>
            </div>

            {/* Project 1 */}
            <div className="flex flex-col gap-5 border-t-[2px] border-white/30 pt-6" data-reveal>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-['Bebas_Neue',_sans-serif] text-2xl lg:text-3xl text-[#FFFFFF] tracking-wide mb-1 leading-none">{projects[0].title}</h3>
                  <p className="font-montserrat font-medium text-[11px] lg:text-xs text-[#FFFFFF]/80 uppercase">{projects[0].category}</p>
                </div>
                <a href="#" className="shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-[8px] bg-[#FFFFFF] border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] flex items-center justify-center text-[#00104D] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#00104D] transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                </a>
              </div>
              <div className="rounded-[14px] border-[3px] border-[#00104D] shadow-[6px_6px_0_0_#00104D] overflow-hidden bg-white group hover:rotate-1 transition-all duration-300">
                <img src={projects[0].image} alt={projects[0].title} className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
              </div>
            </div>
          </div>

          {/* COLUMN 2: Project 2 */}
          <div className="flex flex-col gap-10 lg:pt-16">
            <div className="flex flex-col gap-5 border-t-[2px] border-white/30 pt-6" data-reveal>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-['Bebas_Neue',_sans-serif] text-2xl lg:text-3xl text-[#FFFFFF] tracking-wide mb-1 leading-none">{projects[1].title}</h3>
                  <p className="font-montserrat font-medium text-[11px] lg:text-xs text-[#FFFFFF]/80 uppercase">{projects[1].category}</p>
                </div>
                <a href="#" className="shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-[8px] bg-[#FFFFFF] border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] flex items-center justify-center text-[#00104D] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#00104D] transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                </a>
              </div>
              <div className="rounded-[14px] border-[3px] border-[#00104D] shadow-[6px_6px_0_0_#00104D] overflow-hidden bg-white group hover:rotate-1 transition-all duration-300">
                <img src={projects[1].image} alt={projects[1].title} className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
              </div>
            </div>
          </div>

          {/* COLUMN 3: Project 3 */}
          <div className="flex flex-col gap-10 lg:pt-0">
            <div className="flex flex-col gap-5 border-t-[2px] border-white/30 pt-6" data-reveal>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-['Bebas_Neue',_sans-serif] text-2xl lg:text-3xl text-[#FFFFFF] tracking-wide mb-1 leading-none">{projects[2].title}</h3>
                  <p className="font-montserrat font-medium text-[11px] lg:text-xs text-[#FFFFFF]/80 uppercase">{projects[2].category}</p>
                </div>
                <a href="#" className="shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-[8px] bg-[#FFFFFF] border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] flex items-center justify-center text-[#00104D] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#00104D] transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                </a>
              </div>
              <div className="rounded-[14px] border-[3px] border-[#00104D] shadow-[6px_6px_0_0_#00104D] overflow-hidden bg-white group hover:rotate-1 transition-all duration-300">
                <img src={projects[2].image} alt={projects[2].title} className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
              </div>
            </div>
          </div>

        </div>

        {/* Rotating Circular Badge EXPLORE MORE */}
        <div className="absolute -bottom-8 right-0 sm:bottom-0 z-30 flex items-center justify-center pointer-events-none select-none">
          <div className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-full border border-white/30 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_12s_linear_infinite]">
              <path id="circlePathPortfolio" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="transparent" />
              <text className="text-[10px] lg:text-[11px] uppercase font-bold tracking-[3.5px] fill-white">
                <textPath href="#circlePathPortfolio" startOffset="0%">
                  EXPLORE MORE • EXPLORE MORE •
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
        </div>

      </Container>
    </section>
  )
}
