import { useTranslation } from 'react-i18next'
import { Container } from '../ui/Container'

export function About() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  const pillars = isEn
    ? [
      {
        id: '01',
        title: 'Marketplace Management',
        desc: 'End-to-end management from product SEO ranking, high-conversion visual catalogs, to daily flash sale scheduling on TikTok Shop & Shopee.',
        color: 'bg-[#FFD600]',
        tag: 'TikTok Shop & Shopee',
        stat: '98.4%',
        statLabel: 'Store Health'
      },
      {
        id: '02',
        title: 'Affiliator / KOL',
        desc: 'Direct seeding to vetted creators across diverse niches with automated sample tracking and high-converting briefs.',
        color: 'bg-[#FF2E93]',
        tag: '500+ Creators',
        stat: '12.4M',
        statLabel: 'Organic Views'
      },
      {
        id: '03',
        title: 'Ads Management',
        desc: 'Algorithmic ad scaling across TikTok Shop GMV Ads and Meta Ads with real-time creative A/B testing and attribution.',
        color: 'bg-[#FF6A13]',
        tag: 'ROAS-Driven',
        stat: '4.8x',
        statLabel: 'Avg. ROAS'
      },
    ]
    : [
      {
        id: '01',
        title: 'Marketplace Management',
        desc: 'Manajemen menyeluruh dari optimasi SEO produk, etalase visual konversi tinggi, hingga flash sale harian otomatis di TikTok Shop & Shopee.',
        color: 'bg-[#FFD600]',
        tag: 'TikTok Shop & Shopee',
        stat: '98.4%',
        statLabel: 'Kesehatan Toko'
      },
      {
        id: '02',
        title: 'Affiliator / KOL',
        desc: 'Seeding produk langsung ke ratusan affiliator terkurasi dengan logistik sampel terarah dan brief video persuasif.',
        color: 'bg-[#FF2E93]',
        tag: '500+ Kreator',
        stat: '12.4M',
        statLabel: 'Views Bulanan'
      },
      {
        id: '03',
        title: 'Ads Management',
        desc: 'Scaling iklan berbayar TikTok Shop & Meta Ads dengan A/B testing materi konten dan laporan analitik real-time.',
        color: 'bg-[#FF6A13]',
        tag: 'Fokus ROAS',
        stat: '4.8x',
        statLabel: 'Rata-rata ROAS'
      },
    ]

  return (
    <section id="about" className="relative z-20 bg-[#EAF0FF] py-14 sm:py-20 lg:py-32 border-b-[3px] border-[#00104D]">
      <div className="absolute top-10 right-10 md:top-20 md:right-20 rotate-[6deg] bg-[#FFD600] text-[#00104D] px-3 py-1.5 rounded-[6px] border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] font-['Bebas_Neue',_sans-serif] text-xl tracking-wide z-10 hidden sm:block">
        {isEn ? "GROWTH PARTNER" : "PARTNER SCALE UP"}
      </div>

      <Container className="relative z-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center mb-10 sm:mb-20 md:mb-32" data-reveal>
          <div className="lg:col-span-7 min-w-0">
            <h2 className="font-anton text-[clamp(2.5rem,11vw,6.5rem)] lg:text-[clamp(3.5rem,7vw,6.5rem)] uppercase leading-[0.95] break-words text-[#0030FF] [-webkit-text-stroke:2px_#00104D] [text-shadow:6px_6px_0px_#00104D] max-sm:[-webkit-text-stroke-width:1px] max-sm:[text-shadow:3px_3px_0px_#00104D]">
              {isEn ? "Not Just Another Agency." : "Bukan Agensi Biasa."}
            </h2>
          </div>

          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="absolute -left-12 -top-12 hidden lg:flex w-16 h-16 bg-[#00E0A4] rounded-full border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] items-center justify-center -rotate-12 z-10">
              <svg className="w-8 h-8 text-[#00104D]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            <div className="bg-[#FFFFFF] border-[2px] sm:border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] sm:shadow-[8px_8px_0_0_#00104D] p-5 sm:p-6 md:p-8 rounded-[10px] sm:rounded-[14px] rotate-0 sm:rotate-[1deg] sm:hover:rotate-[0deg] transition-transform relative z-0">
              <p className="font-montserrat font-medium text-sm sm:text-base sm:text-lg text-[#00104D] leading-[1.55] sm:leading-[1.6]">
                {isEn
                  ? "We are your true E-Commerce Growth Partner. Combining data-driven strategy, aggressive marketplace execution, and high-converting creative assets. We don't just run ads; we build your GMV staircase."
                  : "Kami adalah Partner Pertumbuhan E-Commerce sejati Anda. Menggabungkan strategi berbasis data, eksekusi marketplace yang agresif, dan aset kreatif berkonversi tinggi. Kami tidak sekadar menjalankan iklan; kami membangun tangga GMV Anda."}
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-8 sm:mb-12 flex justify-between items-end" data-reveal>
            <h3 className="font-anton text-[clamp(1.75rem,3.2vw,2.75rem)] text-[#00104D] uppercase">
              {isEn ? "Core Services" : "Layanan Inti"}
            </h3>
            <a
              href="https://wa.me/6285732052021"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 bg-[#FFFFFF] text-[#00104D] font-montserrat font-bold text-sm px-6 py-4 rounded-[999px] border-[3px] border-[#00104D] shadow-[6px_6px_0_0_#00104D] hover:bg-[#FFD600] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0_0_#00104D] transition-all duration-150"
            >
              {isEn ? 'START SCALING NOW' : 'MULAI SCALE BRAND'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {pillars.map((item, idx) => (
              <div
                key={item.id}
                data-reveal
                className={`group relative flex flex-col justify-between p-5 sm:p-6 md:p-8 rounded-[10px] sm:rounded-[14px] border-[2px] sm:border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] sm:shadow-[6px_6px_0_0_#00104D] transition-transform duration-150 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[10px_10px_0_0_#00104D] min-w-0 ${item.color} ${idx === 2 ? 'md:col-span-2 md:max-w-md md:mx-auto md:w-full lg:col-span-1 lg:max-w-none' : ''}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    <span className="bg-[#FFFFFF] text-[#00104D] font-montserrat font-bold text-xs sm:text-sm px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-[6px] border-[2px] sm:border-[3px] border-[#00104D] shadow-[2px_2px_0_0_#00104D] -rotate-2">
                      {item.tag}
                    </span>
                    <span className="font-anton text-3xl sm:text-4xl text-[#00104D] opacity-80">{item.id}</span>
                  </div>

                  <h3 className="font-['Bebas_Neue',_sans-serif] text-2xl sm:text-3xl md:text-4xl text-[#00104D] leading-[1] tracking-wide mb-3 sm:mb-4 uppercase">
                    {item.title}
                  </h3>
                  <p className="font-montserrat font-medium text-sm sm:text-base text-[#00104D] leading-[1.55] sm:leading-[1.6]">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t-[2px] sm:border-t-[3px] border-[#00104D]">
                  <div className="flex items-baseline gap-2">
                    <span className="font-anton text-[clamp(2.5rem,4vw,3.5rem)] text-[#00104D] leading-none tracking-tight">{item.stat}</span>
                    <span className="font-montserrat font-bold text-sm text-[#00104D] uppercase tracking-wide">{item.statLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center md:hidden" data-reveal>
            <a
              href="https://wa.me/6285732052021"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFFFFF] text-[#00104D] font-montserrat font-bold text-sm px-6 py-4 rounded-[999px] border-[3px] border-[#00104D] shadow-[6px_6px_0_0_#00104D] hover:bg-[#FFD600] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_#00104D] transition-all duration-150 w-full justify-center"
            >
              {isEn ? 'START SCALING NOW' : 'MULAI SCALE BRAND'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>

      </Container>
    </section>
  )
}
