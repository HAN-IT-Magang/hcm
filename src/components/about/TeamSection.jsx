import { useTranslation } from 'react-i18next'
import { Zap } from 'lucide-react'
import { siteConfig } from '@/config/site'
import teamPhoto from '@/assets/fotoorang/Contents (5).png'
import comproPdf from '@/assets/fotoorang/COMPRO_HCM_2026.pdf'
import member1 from '@/assets/aboutfotot/Contents (6).png'
import member2 from '@/assets/aboutfotot/Contents (7).png'
import member3 from '@/assets/aboutfotot/Contents (8).png'
import member4 from '@/assets/aboutfotot/Contents (9).png'
import member5 from '@/assets/aboutfotot/Contents (10).png'
import member6 from '@/assets/aboutfotot/Contents (11).png'

// TODO: ganti name & role dengan data asli tim
const members = [
  { src: member1, name: 'Data 1', role: { id: 'Koordinator Marketing', en: 'Marketing Coordinator' } },
  { src: member2, name: 'Data 2', role: { id: 'Eksekutif Akun', en: 'Account Executive' } },
  { src: member3, name: 'Data 3', role: { id: 'Kreator Konten', en: 'Content Creator' } },
  { src: member4, name: 'Data 4', role: { id: 'Desainer Produk', en: 'Product Designer' } },
  { src: member5, name: 'Data 5', role: { id: 'Spesialis Iklan', en: 'Ads Specialist' } },
  { src: member6, name: 'Data 6', role: { id: 'Spesialis Kreatif', en: 'Creative Specialist' } },
]

const servicePills = [
  { id: 'Manajemen Marketplace', en: 'Marketplace Management' },
  { id: 'Live Streaming', en: 'Live Streaming' },
  { id: 'Affiliator & KOL', en: 'Affiliator & KOL' },
  { id: 'Manajemen Iklan', en: 'Ads Management' },
  { id: 'Media Sosial', en: 'Social Media' },
  { id: 'Konten Kreatif', en: 'Creative Content' },
]

export function TeamSection() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  const joinMessage = isEn
    ? 'Hello HCM, I want to join the team!'
    : 'Halo HCM, saya mau gabung tim HCM!'
  const joinUrl = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(joinMessage)}`

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Foto grup full-bleed — tinggi dikunci, wajah aman di tengah-atas */}
      <div className="relative">
        <img
          data-gsap="zoom"
          src={teamPhoto}
          alt={isEn ? 'HCM Team photo' : 'Foto tim HCM'}
          className="h-auto w-full md:h-[520px] md:object-cover md:object-[50%_30%] lg:h-[600px]"
          loading="lazy"
        />
        {/* fade bawah nyambung ke konten biru */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-600 via-brand-600/60 to-transparent md:h-56" />
      </div>

      {/* Konten biru — label, deskripsi, company profile, counter, pills */}
      <div className="relative overflow-hidden bg-brand-600 pb-16 pt-4 md:pb-24">
        <div
          className="pointer-events-none absolute -left-[5%] top-[10%] h-[400px] w-[500px] opacity-50"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 3px, transparent 4px)',
            backgroundSize: '36px 36px',
            maskImage: 'linear-gradient(to bottom right, rgba(0,0,0,1), rgba(0,0,0,0))',
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          {/* KIRI */}
          <div className="flex flex-col items-start pt-4">
            <div data-gsap="pop" className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 backdrop-blur-sm border border-white/20">
              <span className="font-sans text-sm font-semibold tracking-wide text-white">
                {isEn ? 'Growth Partner 🇮🇩' : 'Mitra Pertumbuhan 🇮🇩'}
              </span>
            </div>
            <p data-gsap="zoom" data-gsap-delay="0.1" className="type-body mt-6 max-w-lg font-sans text-white/90">
              {isEn ? (
                <>HCM combines <span className="font-semibold text-accent-yellow">strategy, data, and execution</span> to drive sustainable e-commerce brand growth. As a growth partner in Indonesia, we grow when your brand grows.</>
              ) : (
                <>HCM memadukan <span className="font-semibold text-accent-yellow">strategi, data, dan eksekusi</span> untuk mendorong pertumbuhan brand e-commerce yang berkelanjutan. Sebagai growth partner di Indonesia, kami tumbuh saat brand kamu tumbuh.</>
              )}
            </p>

            <div data-gsap="pop" data-gsap-delay="0.15" className="mt-8">
              <a
                href={comproPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent-yellow px-7 py-3 font-sans text-sm font-bold text-[#00104D] transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                {isEn ? 'Company Profile' : 'Profil Perusahaan'}
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4 md:gap-6">
              <div data-gsap="zoom" className="type-display font-sans text-white">
                Rp25M<span className="text-accent-yellow">+</span>
              </div>
              <div data-gsap="zoom" data-gsap-delay="0.1" className="type-caption font-sans text-white/80">
                {isEn ? <>GMV Generated<br />for Brands</> : <>GMV Dihasilkan<br />untuk Brand</>}
              </div>
            </div>
          </div>

          {/* KANAN */}
          <div>
            <div className="flex items-center gap-6 md:gap-8">

              <div className="flex flex-col justify-center">
                <div data-gsap="zoom" className="type-display font-sans text-white">
                  20<span className="text-accent-yellow">+</span>
                </div>
                <div data-gsap="zoom" data-gsap-delay="0.1" className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-accent-magenta px-4 py-1.5 font-sans text-sm font-bold tracking-wide text-white w-fit shadow-md">
                  {isEn ? 'Professional Team' : 'Tim Profesional'} <Zap className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
                </div>
              </div>
            </div>

            <div data-gsap-group="alternate" data-gsap-stagger="0.08" className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {servicePills.map((s, i) => (
                <div
                  key={s.id}
                  data-gsap-item="auto"
                  className="group flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="font-sans text-lg font-bold text-brand-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="min-w-0 font-sans text-sm font-semibold leading-tight text-[#00104D]">
                    {isEn ? s.en : s.id}
                  </span>
                  <span className="ml-auto font-sans text-lg font-bold text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-brand-600">
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Anggota tim — "Leadership" Miro Style */}
      <div className="bg-white py-24 md:py-32 relative overflow-hidden">
        
        {/* SVG Clip Paths for Shapes */}
        <svg width="0" height="0" className="absolute pointer-events-none">
          <defs>
            <clipPath id="shape-0" clipPathUnits="objectBoundingBox">
              <polygon points="0,0 1,0 0.85,1 0.15,1" />
            </clipPath>
            <clipPath id="shape-2" clipPathUnits="objectBoundingBox">
              <polygon points="0,0 0.75,0 1,0.5 0.75,1 0,1" />
            </clipPath>
            <clipPath id="shape-3" clipPathUnits="objectBoundingBox">
              <path d="M0.1,0 L0.9,0 C1,0.15 0.8,0.35 0.9,0.5 C1,0.65 0.8,0.85 0.9,1 L0.1,1 C0,0.85 0.2,0.65 0.1,0.5 C0,0.35 0.2,0.15 0.1,0 Z" />
            </clipPath>
            <clipPath id="shape-4" clipPathUnits="objectBoundingBox">
              <polygon points="0,0 1,0.15 0.9,1 0.1,1" />
            </clipPath>
            <clipPath id="shape-5" clipPathUnits="objectBoundingBox">
              <polygon points="0.05,0 0.95,0 1,1 0,1" />
            </clipPath>
          </defs>
        </svg>

        <div className="mx-auto max-w-[1100px] px-6 relative z-10">
          <h2 className="type-h2 mb-16 text-center font-sans text-[#00104D] md:mb-24">
            {isEn ? 'Meet Our Team' : 'Tim Kami'}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 items-start justify-items-center">
            {members.map((m, index) => {
              const i = index % 6;
              let bg = '';
              let clip = '';
              let extraElements = null;

              switch (i) {
                case 0:
                  bg = 'bg-[#F7D03F]';
                  clip = 'url(#shape-0)';
                  break;
                case 1:
                  bg = 'bg-[#354BEB]';
                  clip = 'circle(48% at 50% 50%)'; // Slightly smaller circle to allow decorative dots outside
                  extraElements = (
                    <>
                      <div className="absolute top-[0%] right-[-5%] w-[20%] h-[20%] rounded-full bg-[#354BEB] -z-10"></div>
                      <div className="absolute bottom-[5%] left-[-10%] w-[25%] h-[25%] rounded-full bg-[#354BEB] -z-10"></div>
                    </>
                  );
                  break;
                case 2:
                  bg = 'bg-[#FF5D74]';
                  clip = 'url(#shape-2)';
                  break;
                case 3:
                  bg = 'bg-[#FF5D74]';
                  clip = 'url(#shape-3)';
                  break;
                case 4:
                  bg = 'bg-[#F8AEAA]';
                  clip = 'url(#shape-4)';
                  break;
                case 5:
                  bg = 'bg-[#F7D03F]';
                  clip = 'url(#shape-5)';
                  break;
              }

              return (
                <div
                  key={m.src}
                  data-gsap="pop"
                  data-gsap-delay={index * 0.1}
                  className="flex flex-col items-center w-full max-w-[280px]"
                >
                  <div className="relative w-full aspect-square flex justify-center items-end">
                    {extraElements}
                    
                    {/* The container acts as the clipping mask for BOTH the background color and the image */}
                    <div 
                      className={`absolute inset-0 w-full h-full ${bg} flex justify-center items-end`}
                      style={{ clipPath: clip, WebkitClipPath: clip }}
                    >
                      <img
                        src={m.src}
                        alt={m.name}
                        loading="lazy"
                        className="w-[90%] h-[95%] object-contain object-bottom"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-8 flex flex-col items-center text-center">
                    <h3 className="type-h3 mb-1 font-sans text-[#00104D]">
                      {m.name}
                    </h3>
                    <p className="type-small max-w-[200px] font-sans text-[#00104D]/70">
                      {isEn ? m.role.en : m.role.id}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div data-gsap="pop" className="mt-20 flex justify-center">
            <a
              href={joinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-[#00104D] text-white font-sans text-sm font-bold tracking-wide transition-transform hover:scale-105"
            >
              {isEn ? 'Join our team' : 'Gabung Tim Kami'}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
