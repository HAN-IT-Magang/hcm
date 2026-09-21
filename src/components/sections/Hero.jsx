import { useTranslation } from 'react-i18next'
import { Container } from '../ui/Container'
import { siteConfig } from '@/config/site'

// Brutalist Flat Vertical Bar for Floating Stat Card (Replacing 3D Purple)
function BrutalistBar({ height, delay = '0s', isTallest = false }) {
  return (
    <div className="flex flex-col items-center justify-end h-20 w-6 relative">
      <div
        className={`w-full transition-all duration-700 relative overflow-hidden border-[2px] border-[#00104D] shadow-[2px_2px_0_0_#00104D] ${isTallest
          ? 'bg-[#FF2E93]' // Pink
          : 'bg-[#FFD600]' // Yellow
          }`}
        style={{ height, animationDelay: delay }}
      >
      </div>
    </div>
  )
}

export function Hero() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  const waMessage = isEn
    ? 'Hello HCM, I would like to scale my e-commerce brand (TikTok Shop / Shopee).'
    : 'Halo HCM, saya mau konsultasi scale brand e-commerce saya di TikTok Shop & Shopee.'

  const waUrl = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(waMessage)}`

  return (
    <section className="relative z-30 bg-[#FFFFFF] pt-8 sm:pt-12 lg:pt-14 select-none">

      {/* The Blue Half-Background for Seamless Overlap */}
      <div className="absolute bottom-0 left-0 w-full h-40 sm:h-56 lg:h-[320px] bg-[#0030FF] z-0"></div>

      {/* Decorative Neo-Brutalist elements in background */}
      <div className="absolute top-20 -left-10 w-32 h-32 bg-[#00E0A4] rounded-[999px] border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] opacity-20 z-0" />
      <div className="absolute top-40 -right-10 w-48 h-48 bg-[#FF2E93] rounded-[14px] border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] rotate-12 opacity-10 z-0" />

      <Container className="relative z-10">

        {/* ========================================================================= */}
        {/* TOP BADGE: Experts in TikTok Shop, Shopee, Meta Ads                       */}
        {/* ========================================================================= */}
        <div className="flex items-center justify-center gap-2 sm:gap-3.5 mb-6 sm:mb-8 text-[#00104D]">
          <span className="font-montserrat text-xs sm:text-[13.5px] font-bold text-[#00104D]">
            {isEn ? 'E-Commerce Experts in' : 'Spesialis E-Commerce di'}
          </span>
          {/* Brutalist Badge */}
          <div className="flex items-center gap-3.5 sm:gap-5 bg-[#FFFFFF] border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] px-4 py-1.5 rounded-[6px]">
            {/* TikTok Shop */}
            <div className="flex items-center gap-1.5 font-montserrat font-bold text-xs sm:text-sm text-[#00104D]">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3.1 15.68a6.34 6.34 0 0 0 10.82 4.48 6.27 6.27 0 0 0 1.86-4.48V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-.97-.07Z" />
              </svg>
              <span>TikTok Shop</span>
            </div>

            {/* Shopee */}
            <div className="flex items-center gap-1.5 font-montserrat font-bold text-xs sm:text-sm text-[#00104D]">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.69 2 6 4.69 6 8v1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2h-2V8c0-3.31-2.69-6-6-6Zm0 2c2.21 0 4 1.79 4 4v1H8V8c0-2.21 1.79-4 4-4Zm0 8.5a2.5 2.5 0 0 1 2.5 2.5c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5c0-1.38 1.12-2.5 2.5-2.5Z" />
              </svg>
              <span>Shopee</span>
            </div>

            {/* Meta Ads */}
            <div className="flex items-center gap-1.5 font-montserrat font-bold text-xs sm:text-sm text-[#00104D]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" />
              </svg>
              <span>Meta Ads</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MAIN HEADLINE                                                             */}
        {/* ========================================================================= */}
        <div className="text-center max-w-5xl mx-auto">
          {/* Use Anton for the big headline */}
          <h1 className="font-anton text-[clamp(2.5rem,7vw,5.5rem)] text-[#00104D] uppercase leading-[0.95] tracking-tight">
            {isEn ? (
              <>
                Scale Your E-Commerce <br className="hidden sm:block" /> Brand with the Right{' '}
                <span className="relative inline-flex items-center">
                  <span className="inline-flex items-center justify-center px-4 py-1 bg-[#0030FF] text-[#FFFFFF] rounded-[999px] border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] -translate-y-2 sm:-translate-y-3 mx-2 rotate-[-2deg]">
                    HCM
                  </span>
                </span>{' '}
                Growth Partner
              </>
            ) : (
              <>
                Scale Brand E-Commerce <br className="hidden sm:block" /> Kamu bareng{' '}
                <span className="relative inline-flex items-center">
                  <span className="inline-flex items-center justify-center px-4 py-1 bg-[#0030FF] text-[#FFFFFF] rounded-[999px] border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] -translate-y-2 sm:-translate-y-3 mx-2 rotate-[-2deg]">
                    HCM
                  </span>
                </span>{' '}
                Growth Partner yang Tepat
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 font-montserrat font-medium text-lg md:text-[17px] text-[#00104D] max-w-2xl mx-auto leading-[1.6] max-md:text-sm max-md:mt-4 max-sm:text-xs max-sm:mt-3">
            {isEn
              ? "We help brands dominate TikTok Shop & Shopee with end-to-end e-commerce strategies. More than an agency, we're your true growth partner."
              : "Bantu brand mendominasi TikTok Shop & Shopee dengan strategi e-commerce end-to-end. Bukan sekadar agensi, kami adalah partner pertumbuhan bisnismu."}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:px-9 sm:py-4 bg-[#0030FF] text-[#FFFFFF] font-montserrat font-bold text-sm sm:text-[15px] rounded-[999px] border-[3px] border-[#00104D] shadow-[6px_6px_0_0_#00104D] hover:bg-[#FFD600] hover:text-[#00104D] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0_0_#00104D] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_#00104D] transition-all duration-150"
            >
              <span>{isEn ? 'Start scaling' : 'Mulai Scale Brand'}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center px-8 py-3.5 sm:px-9 sm:py-4 bg-[#FFFFFF] text-[#00104D] font-montserrat font-bold text-sm sm:text-[15px] rounded-[999px] border-[3px] border-[#00104D] shadow-[6px_6px_0_0_#00104D] hover:bg-[#EAF0FF] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0_0_#00104D] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_#00104D] transition-all duration-150"
            >
              {isEn ? 'Book a demo' : 'Lihat Layanan'}
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HERO MOCKUP: IN-SECTION OVERLAP EFFECT                                    */}
        {/* ========================================================================= */}
        <div className="mt-14 sm:mt-18 lg:mt-20 max-w-5xl mx-auto relative z-30 pointer-events-none select-none pb-12 sm:pb-16 lg:pb-24">

          {/* Main Dashboard Window - Brutalist Style */}
          <div className="rounded-t-[14px] sm:rounded-t-[14px] rounded-b-[14px] sm:rounded-b-[14px] bg-[#FFFFFF] border-[3px] border-[#00104D] shadow-[12px_12px_0_0_#00104D] overflow-hidden">

            {/* Top Bar Navigation */}
            <div className="flex items-center justify-between border-b-[3px] border-[#00104D] px-4 sm:px-7 py-3.5 bg-[#EAF0FF]">
              <div className="flex items-center gap-4 sm:gap-6">
                {/* Brand selector dropdown */}
                <div className="flex items-center gap-2 bg-[#FFFFFF] px-3 py-1.5 rounded-[6px] border-[3px] border-[#00104D] shadow-[2px_2px_0_0_#00104D] font-montserrat text-xs font-bold text-[#00104D] cursor-pointer hover:bg-[#FFD600] transition-colors">
                  <div className="w-4 h-4 rounded-full bg-[#00104D] flex items-center justify-center text-[9px] text-[#FFFFFF] font-bold">
                    Y
                  </div>
                  <span>Your brand</span>
                  <span className="text-[10px] text-[#00104D]">▾</span>
                </div>

                {/* Menu items */}
                <div className="hidden md:flex items-center gap-5 text-xs font-montserrat font-bold text-[#00104D]">
                  <span className="hover:text-[#FF2E93] cursor-pointer transition-colors">Explore creators</span>
                  <span className="hover:text-[#FF2E93] cursor-pointer transition-colors">Manage campaigns</span>
                  <span className="bg-[#FF2E93] text-[#FFFFFF] px-2 py-1 rounded-[6px] border-[2px] border-[#00104D] shadow-[2px_2px_0_0_#00104D] cursor-pointer hover:-translate-y-[1px] hover:shadow-[3px_3px_0_0_#00104D] transition-all">CreativeOps</span>
                </div>
              </div>

              {/* Right tools */}
              <div className="flex items-center gap-3.5 text-xs text-[#00104D] font-montserrat font-bold">
                <div className="hidden sm:flex items-center gap-1.5 cursor-pointer hover:text-[#FF6A13]">
                  <svg className="w-4 h-4 text-[#00104D]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <span>Inbox</span>
                </div>
                <span className="bg-[#00E0A4] text-[#00104D] px-2.5 py-1 rounded-[6px] border-[2px] border-[#00104D] shadow-[2px_2px_0_0_#00104D]">
                  $5000
                </span>
                <div className="w-7 h-7 rounded-full bg-[#FF6A13] border-[2px] border-[#00104D] shadow-[2px_2px_0_0_#00104D] flex items-center justify-center text-[10px] font-bold text-white hover:-translate-y-[1px] hover:shadow-[3px_3px_0_0_#00104D] cursor-pointer transition-all">
                  <svg className="w-4 h-4 text-[#FFFFFF]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Inner Dashboard View */}
            <div className="p-5 sm:p-7 bg-[#FFFFFF]">

              {/* Secondary Sub-tabs */}
              <div className="flex items-center gap-6 border-b-[3px] border-[#00104D] pb-3 mb-6 text-xs sm:text-sm font-montserrat font-bold">
                <span className="text-[#00104D] opacity-60 cursor-pointer hover:opacity-100">Dashboard</span>
                <span className="text-[#00104D] opacity-60 cursor-pointer hover:opacity-100">AI mashups</span>
                <span className="text-[#FF2E93] border-b-[4px] border-[#FF2E93] pb-3 -mb-[16px] cursor-pointer relative z-10">Creative analytics</span>
              </div>

              {/* Heading */}
              <div className="mb-4">
                <h3 className="font-['Bebas_Neue',_sans-serif] text-2xl sm:text-3xl text-[#00104D] tracking-wide">Creative analytics</h3>
              </div>

              {/* 3 Metric Insight Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">

                {/* Card 1 */}
                <div className="p-4 rounded-[10px] bg-[#FFFFFF] border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] flex items-start gap-3 hover:-translate-y-1 transition-transform">
                  <div className="w-8 h-8 rounded-[6px] bg-[#00E0A4] border-[2px] border-[#00104D] text-[#00104D] flex items-center justify-center shrink-0 mt-0.5 shadow-[2px_2px_0_0_#00104D]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-xs text-[#00104D]">Recognize top performances</h4>
                    <p className="font-montserrat font-medium text-[11px] text-[#00104D] leading-tight mt-1">
                      All video ad performance summarized in one place.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="p-4 rounded-[10px] bg-[#FFFFFF] border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] flex items-start gap-3 hover:-translate-y-1 transition-transform">
                  <div className="w-8 h-8 rounded-[6px] bg-[#FFD600] border-[2px] border-[#00104D] text-[#00104D] flex items-center justify-center shrink-0 mt-0.5 shadow-[2px_2px_0_0_#00104D]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-xs text-[#00104D]">Next best step</h4>
                    <p className="font-montserrat font-medium text-[11px] text-[#00104D] leading-tight mt-1">
                      Scale winners, fix under performers and their briefs smarter.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="p-4 rounded-[10px] bg-[#FFFFFF] border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] flex items-start gap-3 hover:-translate-y-1 transition-transform">
                  <div className="w-8 h-8 rounded-[6px] bg-[#FF6A13] border-[2px] border-[#00104D] text-[#00104D] flex items-center justify-center shrink-0 mt-0.5 shadow-[2px_2px_0_0_#00104D]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-xs text-[#00104D]">Optimize portfolio</h4>
                    <p className="font-montserrat font-medium text-[11px] text-[#00104D] leading-tight mt-1">
                      All ads are measured for real performance and ROI.
                    </p>
                  </div>
                </div>

              </div>

              {/* Recommendations Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-[10px] bg-[#EAF0FF] border-[3px] border-[#00104D] text-xs shadow-[4px_4px_0_0_#00104D]">
                <div className="flex items-center gap-2 text-[#00104D] font-montserrat font-bold text-[11px] sm:text-xs">
                  <div className="bg-[#FF2E93] text-[#FFFFFF] border-[2px] border-[#00104D] rounded-full p-1 shadow-[2px_2px_0_0_#00104D]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <span><strong>Recommendations:</strong> You have 16 recommendations for 4 of your ads</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#00104D] text-base font-anton leading-none">16</span>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FFD600] text-[#00104D] rounded-[6px] border-[2px] border-[#00104D] shadow-[2px_2px_0_0_#00104D] text-[11px] font-montserrat font-bold hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_0_#00104D] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0_0_#00104D] transition-all">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Unlock</span>
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* ======================================================================= */}
          {/* FLOATING GLASS STAT CARD -> Neo-Brutalist Sticker Block                */}
          {/* ======================================================================= */}
          <div className="hidden sm:flex absolute -bottom-6 right-6 lg:right-10 bg-[#FFFFFF] border-[3px] border-[#00104D] shadow-[8px_8px_0_0_#00104D] rounded-[14px] p-5 sm:p-6 w-72 sm:w-80 flex-col gap-2.5 z-40 rotate-[3deg]">

            {/* Top Stat Row */}
            <div className="flex items-baseline justify-between border-b-[3px] border-[#00104D] pb-3">
              <span className="font-anton text-[2.5rem] text-[#0030FF] leading-none tracking-tight" style={{ WebkitTextStroke: '1px #00104D', textShadow: '2px 2px 0px #00104D' }}>68%</span>
              <span className="font-montserrat font-bold text-[10px] tracking-wider uppercase text-[#00104D] bg-[#FFD600] px-2 py-1 rounded-[4px] border-[2px] border-[#00104D] shadow-[2px_2px_0_0_#00104D] -rotate-2">
                OF HCM CREATORS
              </span>
            </div>

            {/* Subtext */}
            <p className="font-montserrat font-medium text-xs text-[#00104D] leading-snug mt-1">
              outperform ROAS, CTR, or Hook Rate industry medians
            </p>

            {/* Brutalist Bar Chart */}
            <div className="flex items-end justify-between h-20 pt-3 px-2 gap-3 relative mt-3 border-l-[3px] border-b-[3px] border-[#00104D]">
              <BrutalistBar height="50%" delay="0.2s" />
              <BrutalistBar height="75%" delay="0.4s" />
              <BrutalistBar height="100%" delay="0.6s" isTallest />
              <BrutalistBar height="85%" delay="0.8s" />
            </div>

          </div>

        </div>

      </Container>
    </section>
  )
}
