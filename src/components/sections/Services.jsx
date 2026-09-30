import { Container } from '../ui/Container'

const services = [
  { id: '01', title: 'Live Stream' },
  { id: '02', title: 'Social Media' },
  { id: '03', title: 'Marketplace' },
  { id: '04', title: 'Ads' },
  { id: '05', title: 'Affiliate & KOL' },
  { id: '06', title: 'CRM & CS' },
  { id: '07', title: 'Shoppable\nContent' },
  { id: '08', title: 'Photo & Video' },
  { id: '09', title: 'Graphic\nDesign' },
  { id: '10', title: 'Web Design &\nDevelopment' },
]

export function Services() {
  return (
    <section id="services" className="relative z-20 bg-brand-50 py-20 lg:py-32 overflow-hidden">

      {/* Abstract blue background swoosh — parallax */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-40">
        <svg data-gsap-parallax="14" viewBox="0 0 1000 600" className="absolute top-0 right-0 w-[120%] h-[120%] -translate-y-20 translate-x-20" preserveAspectRatio="none">
          <path d="M400,600 C300,300 600,100 1000,300" fill="none" stroke="#1a56ff" strokeWidth="80" strokeLinecap="round" />
        </svg>
      </div>

      <Container className="relative z-10">

        {/* Title — wipe dari kiri */}
        <div className="mb-16">
          <h2 data-gsap="clip-left" className="inline-block bg-accent-magenta text-white font-sans font-bold text-5xl md:text-7xl py-4 px-8 tracking-tight transform -skew-x-6">
            Our Service
          </h2>
        </div>

        {/* Grid — selang-seling kiri/kanan + stagger */}
        <div data-gsap="zoom" className="bg-white py-12 px-8 shadow-2xl relative">
          <div data-gsap-group="alternate" data-gsap-stagger="0.12" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-y-16 border-t-2 border-b-2 border-brand-100 py-8">

            {services.map((item, index) => (
              <div
                key={item.id}
                data-gsap-item="auto"
                className={`flex gap-4 md:gap-6 px-4 md:px-8 ${index === 9 ? 'lg:col-start-2' : ''
                  } ${index % 3 !== 2 && index !== 9 ? 'lg:border-r-2 lg:border-brand-100' : ''
                  } ${index % 2 !== 1 ? 'md:border-r-2 md:border-brand-100 lg:border-r-0' : 'md:border-r-0'
                  }`}
              >
                <div className="font-sans font-bold text-4xl md:text-5xl text-accent-magenta transform -scale-y-100 scale-y-100">
                  {item.id}
                </div>
                <h3 className="font-sans font-bold text-xl md:text-2xl text-ink-900 leading-tight whitespace-pre-line">
                  {item.title}
                </h3>
              </div>
            ))}

          </div>
        </div>

      </Container>
    </section>
  )
}
