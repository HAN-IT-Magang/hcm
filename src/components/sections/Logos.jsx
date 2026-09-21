import { useTranslation } from 'react-i18next'
import { Container } from '../ui/Container'

export function Logos() {
  const { t } = useTranslation()

  const clients = [
    { name: 'SLAVINA', font: 'font-montserrat font-bold uppercase tracking-[0.2em]' },
    { name: 'HANASUI', font: 'font-sans font-light uppercase tracking-widest' },
    { name: 'LABORÉ', font: 'font-montserrat font-medium uppercase tracking-widest' },
    { name: 'Vitalis', font: 'font-serif italic font-bold' },
    { name: 'TAKARA', font: 'font-anton uppercase tracking-widest' },
    { name: 'takeda', font: 'font-sans lowercase text-xl' },
    { name: 'Natura Grow', font: 'font-montserrat font-bold' },
    { name: 'Benih Seribuan', font: 'font-serif' },
    { name: 'PlantyGrow', font: 'font-montserrat font-bold' },
    { name: 'Wua Yoou', font: 'font-serif italic' },
    { name: 'PATRA BAG', font: 'font-anton uppercase' },
    { name: 'cheapywfx', font: 'font-sans lowercase font-bold tracking-tighter' },
    { name: 'ABOVEBOARD', font: 'font-anton uppercase text-2xl' },
    { name: 'Print.House', font: 'font-sans font-medium' },
    { name: 'SINEURO', font: 'font-anton uppercase text-xl' },
    { name: 'Amelia Kids', font: 'font-serif italic font-bold text-lg' },
    { name: 'HBU', font: 'font-montserrat font-bold text-2xl' },
    { name: 'Raraya Scarf', font: 'font-serif' },
    { name: 'KP', font: 'font-anton text-3xl' },
    { name: 'CUDDLE & CO', font: 'font-montserrat font-bold uppercase tracking-widest' },
  ]

  return (
    <section id="logos" className="relative z-10 bg-[#0030FF] pt-10 sm:pt-16 lg:pt-24 pb-12 sm:pb-20 lg:pb-32 border-b-[3px] border-[#00104D] overflow-hidden">
      <Container>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-20 text-center px-2" data-reveal>
          <h2 className="font-anton text-5xl sm:text-7xl md:text-9xl text-[#FFFFFF] leading-none" style={{ textShadow: '6px 6px 0px #00104D' }}>
            100+
          </h2>
          <div className="border-[3px] sm:border-[4px] border-[#FF2E93] px-4 sm:px-6 py-1.5 sm:py-2 shadow-[4px_4px_0_0_#FF2E93] sm:shadow-[8px_8px_0_0_#FF2E93] rotate-0 sm:-rotate-2 sm:hover:rotate-0 hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#FF2E93] transition-all duration-300 max-w-full">
            <h2 className="font-anton text-2xl sm:text-4xl md:text-6xl text-[#FFFFFF] leading-none uppercase">
              {t('logos.satisfiedLine1')}
              <br />
              {t('logos.satisfiedLine2')}
            </h2>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto h-[2px] sm:h-[3px] bg-[#FFFFFF] mb-10 sm:mb-12 md:mb-20 opacity-50"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8 md:gap-12 items-center justify-items-center px-2" data-reveal>
          {clients.map((client, idx) => (
            <div
              key={idx}
              className={`text-[#FFFFFF] text-center hover:scale-110 hover:text-[#00E0A4] transition-all duration-300 cursor-default min-w-0 max-w-full break-words leading-tight max-sm:text-sm ${client.font}`}
            >
              {client.name}
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center" data-reveal>
          <div className="bg-[#FFFFFF] border-[2px] sm:border-[3px] border-[#00104D] px-5 sm:px-6 py-2.5 sm:py-3 shadow-[4px_4px_0_0_#00104D] sm:shadow-[6px_6px_0_0_#00104D] hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#00104D] transition-all duration-300 cursor-pointer">
            <span className="font-montserrat font-bold text-lg text-[#0030FF] uppercase tracking-wider">
              {t('logos.more')}
            </span>
          </div>
        </div>

      </Container>
    </section>
  )
}
