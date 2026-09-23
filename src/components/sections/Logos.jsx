import { Container } from '../ui/Container'
import clientImg from '../../assets/fotoorang/Contents (4) - Copy.png'

export function Logos() {
  const clients = [
    { name: 'SLAVINA', font: 'font-sans font-bold uppercase tracking-[0.2em]' },
    { name: 'HANASUI', font: 'font-sans font-light uppercase tracking-widest' },
    { name: 'LABORÉ', font: 'font-sans font-medium uppercase tracking-widest' },
    { name: 'Vitalis', font: 'font-serif italic font-bold text-xl' },
    { name: 'TAKARA', font: 'font-sans font-bold uppercase tracking-widest text-xl' },
    { name: 'takeda', font: 'font-sans lowercase text-2xl' },
    { name: 'Natura Grow', font: 'font-sans font-bold text-lg' },
    { name: 'Benih Seribuan', font: 'font-serif text-lg' },
    { name: 'PlantyGrow', font: 'font-sans font-bold text-lg' },
    { name: 'Wua Yoou', font: 'font-serif italic text-xl' },
    { name: 'PATRA BAG', font: 'font-sans font-bold uppercase text-lg' },
    { name: 'cheapywfx', font: 'font-sans lowercase font-bold tracking-tighter' },
    { name: 'ABOVEBOARD', font: 'font-sans font-black uppercase text-xl' },
    { name: 'Print.House', font: 'font-sans font-medium text-lg' },
    { name: 'SINEURO', font: 'font-sans font-black uppercase text-2xl' },
    { name: 'Amelia Kids', font: 'font-serif italic font-bold text-xl' },
    { name: 'HBU', font: 'font-sans font-bold text-3xl' },
    { name: 'Raraya Scarf', font: 'font-serif text-xl' },
    { name: 'CUDDLE & CO', font: 'font-sans font-bold uppercase tracking-widest' },
  ]

  return (
    <section id="logos" className="relative z-10 bg-gradient-to-br from-[#1C4BFF] to-[#0030FF] pt-20 pb-24 overflow-hidden">
      
      {/* Right side cutout and "Our Clients" Badge — panel dari kanan jauh */}
      <div data-gsap="right-far" className="hidden lg:block absolute top-0 right-0 h-full w-1/3 bg-white z-0 rounded-l-[100px] shadow-2xl">
        <div className="absolute top-20 -left-12 flex flex-col items-end z-30">
          <div className="bg-brand-500 text-white font-sans font-bold text-5xl py-2 px-6 -mb-4 z-10 shadow-lg">Our</div>
          <div className="bg-brand-100 text-brand-600 font-sans font-bold text-5xl py-2 px-6 shadow-lg">Clients</div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-accent-magenta rounded-full blur-[80px] opacity-20 pointer-events-none" />
        
        {/* The requested photo, pasted inside the white area */}
        <img 
          src={clientImg} 
          alt="Our Clients Team" 
          className="absolute -bottom-8 right-10 w-[120%] max-w-none h-auto object-contain object-bottom drop-shadow-2xl z-20"
        />
      </div>

      <Container className="relative z-10">
        
        <div className="lg:w-2/3">
          {/* Header — angka dari kiri jauh, teks dari kanan */}
          <div className="flex flex-col md:flex-row items-baseline gap-6 mb-12">
            <h2 data-gsap="left-far" className="font-sans font-bold text-7xl md:text-9xl text-white leading-none">
              100+
            </h2>
            <div data-gsap="right" data-gsap-delay="0.12" className="border-t-4 border-white/50 pt-4 flex-1">
              <h2 className="font-sans font-light text-3xl md:text-5xl text-white leading-tight uppercase tracking-wide">
                Clients<br/><span className="font-bold">Satisfied</span>
              </h2>
            </div>
          </div>

          {/* Grid — stagger zoom */}
          <div data-gsap-group="stagger" data-gsap-stagger="0.06" className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center mb-16 relative z-10">
            {clients.map((client, idx) => (
              <div
                key={idx}
                data-gsap-item="zoom"
                className={`text-white text-center hover:scale-110 transition-transform duration-300 cursor-default ${client.font}`}
              >
                {client.name}
              </div>
            ))}
          </div>

          {/* Button — pop */}
          <div data-gsap="pop" className="flex justify-center md:justify-start">
            <button className="flex items-center gap-4 bg-white text-[#0030FF] font-sans font-bold text-lg px-6 py-3 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
              add more. 
              <span className="text-2xl leading-none font-black text-[#1C4BFF]">+</span>
            </button>
          </div>
        </div>

      </Container>
    </section>
  )
}
