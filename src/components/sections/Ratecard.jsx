import { useTranslation } from 'react-i18next'
import { Container } from '../ui/Container'

export function Ratecard() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  const scopeOfWorks = [
    { num: '01', title: 'Marketing Strategy', rotate: 'sm:-rotate-2' },
    { num: '02', title: 'Marketplace Activation (MPA)', rotate: 'sm:rotate-1' },
    { num: '03', title: 'Marketplace Optimization (MPO)', rotate: 'sm:-rotate-3' },
  ]

  const mpaServices = isEn
    ? [
      { name: '1 Creative Photo', price: '120.000' },
      { name: '1 Plain Photo', price: '80.000' },
      { name: '1 Showcase Design', price: '40.000' },
      { name: '1 Store Decoration Design', price: '50.000' },
      { name: '1 UGC-Style Showcase Video', price: '100.000' },
    ]
    : [
      { name: '1 Foto Creative', price: '120.000' },
      { name: '1 Foto Polos', price: '80.000' },
      { name: '1 Design Etalase', price: '40.000' },
      { name: '1 Design Dekorasi', price: '50.000' },
      { name: '1 Video Etalase ala UGC', price: '100.000' },
    ]

  const monthlyManagement = isEn
    ? [
      { name: 'MP (Marketplace)', price: '3.500.000' },
      { name: '250-Affiliator Database', price: '4.000.000' },
      { name: 'Ads Management', price: '3.500.000' },
      { name: '50 Shoppable Content Videos', price: '2.500.000' },
      { name: 'Product Live Streaming', price: '3.000.000' },
    ]
    : [
      { name: 'MP (Marketplace)', price: '3.500.000' },
      { name: '250 Affiliator Database', price: '4.000.000' },
      { name: 'Ads Management', price: '3.500.000' },
      { name: '50 Video Shoppable Content', price: '2.500.000' },
      { name: 'Live Stream Product', price: '3.000.000' },
    ]

  const mpoTiers = [
    {
      name: 'Introduction',
      price: '8 JT',
      duration: isEn ? '1-Month Management' : 'Management 1 Bulan',
      color: 'bg-[#FFFFFF]',
      textColor: 'text-[#00104D]',
      features: ['MP (Marketplace)', 'Ads Management', 'Affiliate Management']
    },
    {
      name: 'Workmate',
      price: '7 JT',
      duration: isEn ? '3-Month Management' : 'Management 3 Bulan',
      color: 'bg-[#C6FF00]',
      textColor: 'text-[#00104D]',
      features: ['MP (Marketplace)', 'Ads Management', 'Affiliate Management']
    },
    {
      name: 'Best Friend',
      price: '6 JT',
      duration: isEn ? '6-Month Management' : 'Management 6 Bulan',
      color: 'bg-[#FF2E93]',
      textColor: 'text-[#FFFFFF]',
      features: ['MP (Marketplace)', 'Ads Management', 'Affiliate Management']
    }
  ]

  const inclusions = isEn
    ? [
      'SEO keyword research',
      'Pricing setup',
      'Competitor research',
      'Brand & gameplay audit',
      '2-platform mirroring'
    ]
    : [
      'Riset keyword SEO',
      'Setting Harga',
      'Riset kompetitor',
      'Bedah Brand & gameplay',
      'Miroring 2 platform'
    ]

  return (
    <section id="ratecard" className="relative z-10 bg-[#EAF0FF] pt-10 sm:pt-20 lg:pt-24 pb-[clamp(60px,12vw,140px)] border-b-[3px] border-[#00104D] overflow-hidden">

      <div className="absolute top-10 left-10 w-24 h-24 bg-[#FF2E93] rounded-full border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] -rotate-12 hidden lg:block opacity-60"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-[#FFD600] border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] rotate-45 hidden lg:block opacity-60"></div>

      <Container>

        <div className="mb-12 sm:mb-20 lg:mb-24" data-gsap="zoom">
          <div className="text-center mb-8 sm:mb-12 px-2">
            <h2 className="font-anton text-3xl sm:text-5xl md:text-7xl text-[#00104D] uppercase mb-3 sm:mb-4 break-words" style={{ WebkitTextStroke: '1px #00104D', textShadow: '4px 4px 0px #00E0A4' }}>Scope of Works</h2>
            <p className="font-montserrat font-bold text-base sm:text-xl text-[#00104D] uppercase tracking-widest">{isEn ? "Our Expertise" : "Keahlian Kami"}</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-6">
            {scopeOfWorks.map((item, idx) => (
              <div key={idx} className={`group relative bg-white border-[2px] sm:border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] sm:shadow-[8px_8px_0_0_#00104D] px-5 sm:px-8 py-4 sm:py-6 max-w-sm w-full transition-transform hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#00104D] cursor-default min-w-0 rotate-0 ${item.rotate}`}>
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 bg-[#00E0A4] border-[2px] sm:border-[3px] border-[#00104D] rounded-full flex items-center justify-center font-anton text-base sm:text-lg text-[#00104D] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  {item.num}
                </div>
                <h3 className="font-['Bebas_Neue',_sans-serif] text-2xl sm:text-3xl text-[#0030FF] mt-1 sm:mt-2 transition-colors duration-300 group-hover:text-[#FF2E93]">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div data-gsap-group="alternate-far" data-gsap-stagger="0.15" className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-12 mb-12 sm:mb-24 lg:mb-32 min-w-0" >

          <div data-gsap-item="auto" className="bg-[#FFD600] border-[2px] sm:border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] sm:shadow-[12px_12px_0_0_#00104D] p-5 sm:p-10 rotate-0 sm:-rotate-1 min-w-0">
            <div className="mb-6 sm:mb-8 border-b-[2px] sm:border-b-[3px] border-[#00104D] pb-4 sm:pb-6">
              <h3 className="font-anton text-3xl sm:text-4xl text-[#00104D] uppercase mb-2 break-words">Ratecard <span className="text-[#00E0A4]" style={{ WebkitTextStroke: '1.5px #00104D', textShadow: '2px 2px 0px #00104D' }}>MPA</span></h3>
              <p className="font-['Bebas_Neue',_sans-serif] text-3xl sm:text-4xl text-[#0030FF]">Aset digital</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between gap-3 font-montserrat font-bold text-[#00104D] text-base sm:text-lg uppercase mb-2">
                <span>Services</span>
                <span className="whitespace-nowrap">Price (IDR)</span>
              </div>
              {mpaServices.map((srv, idx) => (
                <div key={idx} className="group flex justify-between items-end gap-3 border-b-2 border-dashed border-[#00104D]/30 pb-2 hover:border-[#00104D] transition-colors cursor-default">
                  <span className="font-montserrat font-bold text-[#00104D] text-sm sm:text-base pr-4 transition-transform duration-300 group-hover:translate-x-2">{srv.name}</span>
                  <div className="flex flex-col items-end whitespace-nowrap transition-transform duration-300 group-hover:-translate-x-2">
                    <span className="font-montserrat text-[10px] font-bold text-[#00104D] uppercase leading-none mb-1 opacity-70">{isEn ? "Start From" : "Mulai Dari"}</span>
                    <span className="font-['Bebas_Neue',_sans-serif] text-[#0030FF] text-2xl leading-none">{srv.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div data-gsap-item="auto" className="bg-[#00E0A4] border-[2px] sm:border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] sm:shadow-[12px_12px_0_0_#00104D] p-5 sm:p-10 rotate-0 sm:rotate-1 min-w-0">
            <div className="mb-6 sm:mb-8 border-b-[2px] sm:border-b-[3px] border-[#00104D] pb-4 sm:pb-6">
              <h3 className="font-anton text-3xl sm:text-4xl text-[#00104D] uppercase mb-2 break-words">Ratecard <span className="text-[#FF2E93]" style={{ WebkitTextStroke: '1.5px #00104D', textShadow: '2px 2px 0px #00104D' }}>Monthly</span></h3>
              <p className="font-['Bebas_Neue',_sans-serif] text-3xl sm:text-4xl text-[#0030FF]">Management</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between gap-3 font-montserrat font-bold text-[#00104D] text-base sm:text-lg uppercase mb-2">
                <span>Services</span>
                <span className="whitespace-nowrap">Price (IDR)</span>
              </div>
              {monthlyManagement.map((srv, idx) => (
                <div key={idx} className="group flex justify-between items-end gap-3 border-b-2 border-dashed border-[#00104D]/30 pb-2 hover:border-[#00104D] transition-colors cursor-default">
                  <span className="font-montserrat font-bold text-[#00104D] text-sm sm:text-base pr-4 transition-transform duration-300 group-hover:translate-x-2">{srv.name}</span>
                  <div className="flex flex-col items-end whitespace-nowrap transition-transform duration-300 group-hover:-translate-x-2">
                    <span className="font-montserrat text-[10px] font-bold text-[#00104D] uppercase leading-none mb-1 opacity-70">{isEn ? "Start From" : "Mulai Dari"}</span>
                    <span className="font-['Bebas_Neue',_sans-serif] text-[#0030FF] text-2xl leading-none">{srv.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div data-gsap="zoom" className="bg-[#0030FF] border-[2px] sm:border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] sm:shadow-[16px_16px_0_0_#00104D] p-5 sm:p-12 min-w-0" >
          <div className="mb-8 sm:mb-12">
            <h2 className="font-anton text-3xl sm:text-5xl md:text-7xl text-[#FFFFFF] uppercase break-words" style={{ textShadow: '4px 4px 0px #00104D' }}>Marketplace <span className="text-[#C6FF00]">MPO</span></h2>
            <p className="font-['Bebas_Neue',_sans-serif] text-2xl sm:text-4xl md:text-5xl text-[#00E0A4]">Optimization</p>
          </div>

          <div className="flex flex-col xl:flex-row gap-6 sm:gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 flex-1">
              {mpoTiers.map((tier, idx) => (
                <div key={idx} className={`group relative overflow-hidden ${tier.color} border-[2px] sm:border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] sm:shadow-[6px_6px_0_0_#00104D] p-5 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-3 hover:shadow-[12px_12px_0_0_#00104D] cursor-default`}>

                  <div className="absolute inset-0 -translate-x-full bg-white/30 skew-x-[30deg] transition-transform duration-700 group-hover:translate-x-[200%] pointer-events-none"></div>

                  <h4 className={`relative z-10 font-montserrat font-bold text-lg sm:text-xl ${tier.textColor} mb-3 sm:mb-4 transition-transform duration-300 group-hover:translate-x-2`}>{tier.name}</h4>
                  <div className={`relative z-10 flex flex-col mb-6 sm:mb-8 transition-transform duration-300 group-hover:scale-105 origin-left ${tier.textColor}`}>
                    <span className="font-montserrat text-sm font-bold uppercase mb-1 opacity-80">{isEn ? "Start From" : "Mulai Dari"}</span>
                    <span className="font-anton text-4xl sm:text-5xl md:text-6xl leading-none">{tier.price}</span>
                  </div>

                  <div className={`relative z-10 mt-auto border-t-[2px] sm:border-t-[3px] border-current pt-4 sm:pt-6 ${tier.textColor}`}>
                    <p className="font-montserrat font-bold text-sm uppercase mb-3">{tier.duration}</p>
                    <ul className="space-y-2">
                      {tier.features.map((feat, fidx) => (
                        <li key={fidx} className="font-montserrat font-bold text-xs flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="xl:w-80 bg-white border-[2px] sm:border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] sm:shadow-[8px_8px_0_0_#00104D] p-5 sm:p-8 shrink-0 relative overflow-hidden">
              <h4 className="font-anton text-3xl text-[#0030FF] uppercase mb-6 relative z-10">Inclusion</h4>
              <ul className="space-y-4 relative z-10">
                {inclusions.map((item, idx) => (
                  <li key={idx} className="group flex items-center gap-4 cursor-default">
                    <span className="w-8 h-8 shrink-0 flex items-center justify-center bg-[#FFD600] border-[2px] border-[#00104D] font-anton text-[#00104D] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12 group-hover:bg-[#00E0A4]">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="font-montserrat font-bold text-sm text-[#00104D] transition-transform duration-300 group-hover:translate-x-2">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="absolute -bottom-10 -right-10 text-[12rem] leading-none font-sans text-black/5 rotate-45 select-none pointer-events-none">*</div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  )
}
