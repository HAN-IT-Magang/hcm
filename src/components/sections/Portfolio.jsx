import { Container } from '../ui/Container'

function MetricCard({ title, date, compareDate, metrics }) {
  return (
    <div className="bg-white rounded-md shadow-2xl p-3 sm:p-6 relative z-10 overflow-hidden">
      <div className="border border-gray-100 rounded bg-[#F8F9FA] p-3 sm:p-5 font-sans text-sm text-gray-500 shadow-inner">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-200 pb-3 mb-4 sm:mb-5 gap-1">
          <span className="font-bold text-black text-sm sm:text-base">{title}</span>
          <div className="flex flex-col text-[10px] sm:text-[11px] font-medium text-gray-400">
            <span>{date}</span>
            <span className="border border-gray-200 rounded px-1 py-0.5 mt-0.5 w-fit">{compareDate}</span>
          </div>
        </div>

        {/* Metrics — stack on mobile, 3-col on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {metrics.map((m, i) => (
            <div key={i} className={`flex flex-col ${i > 0 ? 'border-t sm:border-t-0 sm:border-l border-gray-200 pt-3 sm:pt-0 sm:pl-4' : ''}`}>
              <div className="flex items-center gap-2 mb-2">
                {m.color && <span className={`w-[3px] h-3 ${m.color}`}></span>}
                <span className="text-xs text-gray-400 font-semibold">{m.label}</span>
              </div>
              <div className="font-bold text-black text-xl sm:text-[22px] leading-none mb-1">{m.value}</div>
              <div className={`${m.positive ? 'text-[#00C853]' : 'text-[#F44336]'} text-[11px] font-bold flex items-center gap-1`}>
                {m.positive ? '▲' : '▼'} {m.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Portfolio() {
  return (
    <section id="portfolio" className="relative z-10 bg-gradient-to-br from-[#1C4BFF] to-[#0A2CC2] overflow-hidden pt-16 sm:pt-24 pb-20 sm:pb-32">

      {/* Background Shapes matching PDF */}

      {/* Top Right Dotted Pattern */}
      <div className="absolute -top-[20%] -right-[10%] w-[1200px] h-[800px] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 3px, transparent 4px)',
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom left, rgba(0,0,0,1), rgba(0,0,0,0))'
        }}
      />

      {/* Bottom Left Dotted Pattern */}
      <div className="absolute -bottom-[20%] -left-[10%] w-[1200px] h-[800px] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 3px, transparent 4px)',
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to top right, rgba(0,0,0,1), rgba(0,0,0,0))'
        }}
      />

      <Container className="relative z-10 max-w-6xl mx-auto">

        {/* Header — wipe dari kiri */}
        <div className="mb-8 sm:mb-12">
          <h2 data-gsap="clip-left" className="font-sans font-bold text-4xl sm:text-6xl md:text-8xl text-white tracking-tight">
            Portofolio
          </h2>
        </div>

        {/* Dashboards Section */}
        <div className="space-y-14 sm:space-y-20">

          {/* Case 1: Bangun brand dari nol — judul kiri, desc kanan */}
          <div>
            <div className="mb-6 sm:mb-10">
              <h3 data-gsap="left" className="text-white font-sans font-bold text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">Bangun brand dari nol</h3>
              <p data-gsap="right" data-gsap-delay="0.1" className="text-white font-sans text-base sm:text-xl md:text-2xl font-light">Marketplace Actiavation, pertumbuhan GMV 3.971,9% di bulan pertama</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 relative mt-8 sm:mt-16">

              {/* BEFORE — dari kiri jauh */}
              <div data-gsap="left-far" className="relative sm:pt-0">
                {/* BEFORE Tag — inline on mobile, absolute on sm+ */}
                <div className="relative sm:absolute mb-3 sm:mb-0 sm:-top-14 left-0 sm:left-4 bg-white px-4 sm:px-6 py-1.5 sm:py-2 shadow-xl z-20 w-fit">
                  <span className="text-[#FF1E8F] font-sans font-bold text-xl sm:text-3xl uppercase tracking-wider block leading-none py-1">BEFORE</span>
                </div>

                <MetricCard
                  title="Metrik utama"
                  date="Jul 01, 2026 - Jul 31, 2026"
                  compareDate="Bandingkan Mei 31, 2026 - Jun 30, 2026"
                  metrics={[
                    { label: 'GMV', value: 'Rp 626.065', change: '966,84%', positive: true, color: 'bg-[#4285F4]' },
                    { label: 'Produk terjual', value: '11', change: '1.000%', positive: true, color: 'bg-[#00C853]' },
                    { label: 'Pesanan SKU', value: '11', change: '1.000%', positive: true },
                  ]}
                />
              </div>

              {/* AFTER — dari kanan jauh */}
              <div data-gsap="right-far" data-gsap-delay="0.12" className="relative mt-4 md:mt-0">
                {/* AFTER Tag — inline on mobile, absolute on sm+ */}
                <div className="relative sm:absolute mb-3 sm:mb-0 sm:-top-14 left-0 sm:left-4 bg-white px-4 sm:px-6 py-1.5 sm:py-2 shadow-xl z-20 w-fit">
                  <span className="text-[#FF1E8F] font-sans font-bold text-xl sm:text-3xl uppercase tracking-wider block leading-none py-1">AFTER</span>
                </div>

                <MetricCard
                  title="Metrik utama"
                  date="Agt 01, 2026 - Agt 31, 2026"
                  compareDate="Bandingkan Jul 01, 2026 - Jul 31, 2026"
                  metrics={[
                    { label: 'GMV', value: 'Rp 25,5 jt', change: '3.971,9%', positive: true, color: 'bg-[#4285F4]' },
                    { label: 'Produk terjual', value: '458', change: '4.063,64%', positive: true, color: 'bg-[#00C853]' },
                    { label: 'Pesanan SKU', value: '453', change: '4.018,18%', positive: true },
                  ]}
                />
              </div>

            </div>
          </div>

          {/* Case 2: pola dibalik — judul kanan, kartu kiri/kanan */}
          <div className="pt-4 sm:pt-10">
            <div className="mb-6 sm:mb-10">
              <h3 data-gsap="right" className="text-white font-sans font-bold text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">Menghidupkan kembali brand yang stagnan</h3>
              <p data-gsap="left" data-gsap-delay="0.1" className="text-white font-sans text-base sm:text-xl md:text-2xl font-light">balikin momentum pertumbuhan pada brand dengan GMV miliaran</p>
            </div>

            <div data-gsap-group="alternate-far" data-gsap-stagger="0.15" className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 relative">

              <div data-gsap-item="auto">
                <MetricCard
                  title="Metrik utama"
                  date="Apr 01, 2026 - Apr 30, 2026"
                  compareDate="Bandingkan mar 02, 2026 - mar 31, 2026"
                  metrics={[
                    { label: 'GMV', value: 'Rp 2,8 M', change: '16,78%', positive: true, color: 'bg-[#4285F4]' },
                    { label: 'Produk terjual', value: '361.070', change: '42,16%', positive: true, color: 'bg-[#00C853]' },
                    { label: 'Pesanan SKU', value: '218.327', change: '38,16%', positive: true },
                  ]}
                />
              </div>

              <div data-gsap-item="auto">
                <MetricCard
                  title="Metrik utama"
                  date="Jan 01, 2026 - Jan 31, 2026"
                  compareDate="Bandingkan dez 01, 2025 - dez 31, 2025"
                  metrics={[
                    { label: 'GMV', value: 'Rp 5,2 M', change: '15,71%', positive: true, color: 'bg-[#4285F4]' },
                    { label: 'Produk terjual', value: '82.516', change: '8,44%', positive: false, color: 'bg-[#00C853]' },
                    { label: 'Pesanan SKU', value: '77.571', change: '8,62%', positive: false },
                  ]}
                />
              </div>

            </div>
          </div>

        </div>

      </Container>
    </section>
  )
}
