import { useTranslation } from 'react-i18next'
import { Container } from '../ui/Container'

// Using individual team member photos from aboutfotot
import div1Img from '../../assets/aboutfotot/Contents (10).png'
import div2Img from '../../assets/aboutfotot/Contents (7).png'
import div3Img from '../../assets/aboutfotot/Contents (11).png'

export function Division() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  const divisions = [
    {
      title: 'Marketplace\nSpecialist',
      desc: isEn
        ? 'Take full control, view the store from a helicopter view, then manage and optimize everything, from product SEO, pricing, to promotions, so that incoming traffic leads to transactions.'
        : 'Pegang kendali penuh, lihat toko dari helicopter view, lalu kelola dan optimasi semuanya, mulai dari SEO produk, harga, sampai promosi, biar traffic yang datang berujung transaksi.',
      img: div1Img,
    },
    {
      title: 'Affiliate/KOL\nSpecialist',
      desc: isEn
        ? 'Build and manage affiliate and KOL networks, from reaching out to the right creators to campaign execution, so the brand becomes more known and sales increase.'
        : 'Bangun dan kelola jaringan affiliate serta KOL, mulai dari reach out kreator yang pas sampai eksekusi campaign, biar brand makin dikenal dan penjualan ikut naik.',
      img: div2Img,
    },
    {
      title: 'Ads\nSpecialist',
      desc: isEn
        ? 'Create data-driven advertising strategies, set targeting and budget so every rupiah is not wasted.'
        : 'Bikin strategi iklan berbasis data, atur targeting dan budget biar setiap rupiah nggak terbuang sia-sia.',
      img: div3Img,
    }
  ]

  return (
    <section id="division" className="relative z-10 bg-gradient-to-b from-[#3561FF] to-[#1D40FF] overflow-hidden py-20 md:py-32">

      {/* Background Graphic Swoosh (Large White Wave) */}
      <div className="absolute top-[30%] left-0 w-full h-[500px] pointer-events-none opacity-[0.15] overflow-hidden">
        <svg viewBox="0 0 1000 300" className="w-full h-full transform scale-150" preserveAspectRatio="none">
          <path d="M-100,200 C200,100 400,350 700,200 C900,100 1100,150 1200,150" fill="none" stroke="#FFFFFF" strokeWidth="80" strokeLinecap="round" />
        </svg>
      </div>

      <Container className="relative z-10 max-w-7xl mx-auto">

        {/* Title Badge exactly as PDF (Clean Pink Box) — wipe dari kiri */}
        <div className="flex justify-center mb-16 md:mb-24">
          <div data-gsap="clip-left" className="inline-block bg-[#E80F88] text-white font-sans font-semibold text-4xl md:text-6xl py-4 px-12">
            Our Division
          </div>
        </div>

        {/* 3 Columns Grid — kiri / zoom / kanan */}
        <div data-gsap-group="alternate-far" data-gsap-stagger="0.15" className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x-2 divide-white/30">

          {divisions.map((item, idx) => {
            // Label colors for each division to make them pop
            const labelColors = [
              'bg-[#CEFE4A] text-[#00104D]', // Lime Green
              'bg-[#FF2E93] text-white',      // Hot Pink
              'bg-[#FFD600] text-[#00104D]'   // Bright Yellow
            ]
            const labelClass = labelColors[idx % labelColors.length]

            return (
              <div key={idx} data-gsap-item="auto" className="relative flex flex-col group px-6 md:px-10 pb-10">

                {/* Photo Area (No Background, Just Image) */}
                <div className="w-full h-[350px] md:h-[450px] flex items-end justify-center relative z-10">
                  <img
                    src={item.img}
                    alt={item.title.replace('\n', ' ')}
                    className="h-full w-auto object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-500 origin-bottom"
                  />
                </div>

                {/* Text Area (Label overlapping the image cut) */}
                <div className="text-left flex-1 flex flex-col relative z-20 -mt-6 md:-mt-10 items-center text-center">
                  <div className={`inline-block ${labelClass} px-5 py-3 mb-4 shadow-lg transform group-hover:-translate-y-1 transition-transform`}>
                    <h3 className="font-sans font-bold text-2xl md:text-3xl whitespace-pre-line leading-tight m-0">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-white/90 font-sans font-normal text-base md:text-lg leading-relaxed mt-2 text-left">
                    {item.desc}
                  </p>
                </div>

              </div>
            )
          })}

        </div>

      </Container>
    </section>
  )
}
