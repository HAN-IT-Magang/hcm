import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '../ui/Container'
import { siteConfig } from '@/config/site'

const services = [
  {
    id: 'Live Streaming',
    en: 'Live Streaming',
    descId: 'Host berpengalaman dan strategi live TikTok & Shopee untuk engagement dan penjualan real-time.',
    descEn: 'Experienced hosts and live strategies for TikTok & Shopee to drive engagement and real-time sales.',
  },
  {
    id: 'Social Media',
    en: 'Social Media',
    descId: 'Manajemen konten, desain visual, dan optimasi profil untuk kehadiran brand yang konsisten.',
    descEn: 'Content management, visual design, and profile optimization for a consistent brand presence.',
  },
  {
    id: 'Marketplace',
    en: 'Marketplace',
    descId: 'Optimasi toko TikTok Shop & Shopee: SEO produk, campaign, flash sale, dan voucher.',
    descEn: 'TikTok Shop & Shopee store optimization: product SEO, campaigns, flash sales, and vouchers.',
  },
  {
    id: 'Iklan Berbayar',
    en: 'Paid Ads',
    descId: 'Iklan TikTok, Meta, dan Shopee berbasis data dengan fokus ROAS positif.',
    descEn: 'Data-driven TikTok, Meta, and Shopee ads focused on positive ROAS.',
  },
  {
    id: 'Affiliate & KOL',
    en: 'Affiliate & KOL',
    descId: 'Kurasi 500+ kreator, distribusi sampel, brief konten, dan tracking GMV harian.',
    descEn: '500+ creator curation, sample seeding, content briefs, and daily GMV tracking.',
  },
  {
    id: 'CRM & CS',
    en: 'CRM & CS',
    descId: 'Layanan pelanggan dan manajemen relasi untuk repeat order dan loyalitas.',
    descEn: 'Customer service and relationship management for repeat orders and loyalty.',
  },
  {
    id: 'Konten Shoppable',
    en: 'Shoppable Content',
    descId: 'Video konten yang menghibur dan langsung bisa dibeli dalam satu klik.',
    descEn: 'Entertaining video content that viewers can buy in one click.',
  },
  {
    id: 'Foto & Video',
    en: 'Photo & Video',
    descId: 'Produksi foto dan video produk profesional untuk katalog dan campaign.',
    descEn: 'Professional product photo and video production for catalogs and campaigns.',
  },
  {
    id: 'Desain Grafis',
    en: 'Graphic Design',
    descId: 'Desain visual untuk feed, banner toko, dan materi campaign yang menjual.',
    descEn: 'Visual design for feeds, store banners, and high-converting campaign assets.',
  },
  {
    id: 'Web Design & Development',
    en: 'Web Design & Development',
    descId: 'Website company profile dan landing page cepat seperti web yang sedang kamu buka ini.',
    descEn: 'Fast company profile websites and landing pages — like the one you are browsing now.',
  },
]

export function ServiceList() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'
  const [open, setOpen] = useState(0)

  const left = services.slice(0, 5)
  const right = services.slice(5)

  const renderItem = (s, globalIndex) => {
    const isOpen = open === globalIndex
    const waUrl = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(
      isEn ? `Hello HCM, I want to ask about ${s.en}.` : `Halo HCM, saya mau tanya tentang layanan ${s.id}.`,
    )}`
    return (
      <div key={s.id} className="border-b-2 border-ink-900/10">
        <button
          onClick={() => setOpen(isOpen ? -1 : globalIndex)}
          aria-expanded={isOpen}
          className="group flex w-full items-center gap-4 py-5 text-left"
        >
          <span className="font-sans text-sm font-bold text-accent-magenta">
            {String(globalIndex + 1).padStart(2, '0')}
          </span>
          <span className="flex-1 font-sans text-lg font-bold text-ink-900 transition-colors group-hover:text-brand-600 md:text-xl">
            {isEn ? s.en : s.id}
          </span>
          <span
            className={`flex shrink-0 items-center justify-center transition-all duration-300 ${
              isOpen ? 'rotate-90 text-brand-600' : 'text-ink-900 group-hover:translate-x-1 group-hover:text-brand-600'
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </button>
        <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden">
            <p className="max-w-lg pb-2 font-sans text-sm leading-relaxed text-ink-500 md:text-base">
              {isEn ? s.descEn : s.descId}{' '}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="font-bold text-ink-900 underline decoration-accent-magenta decoration-2 underline-offset-2 hover:text-brand-600"
              >
                {isEn ? 'View More' : 'Lihat Selengkapnya'}
              </a>
            </p>
            <div className="pb-6" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="bg-brand-50 py-16 md:py-24">
      <Container>
        <div className="relative mb-14 flex flex-col md:mb-20">
          
          {/* Decorative Sparkles */}
          <svg data-gsap="zoom" className="absolute -left-4 top-16 h-6 w-6 animate-spin-slow text-accent-magenta md:-left-10 md:top-20 md:h-10 md:w-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
          </svg>
          <svg data-gsap="zoom" data-gsap-delay="0.1" className="absolute right-4 top-0 h-5 w-5 animate-spin-slow text-accent-yellow md:right-32 md:h-8 md:w-8" style={{ animationDirection: 'reverse', animationDuration: '6s' }} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
          </svg>

          {/* Decorative Placards (Signposts) */}
          <div data-gsap="zoom" data-gsap-delay="0.2" className="z-10 flex items-end gap-3 px-4 sm:gap-4 sm:px-6 md:gap-8 md:px-12">
            {/* Thumbs Up Sign */}
            <div className="group flex cursor-pointer flex-col items-center transition-all duration-500 hover:-translate-y-4">
              <div className="z-10 -rotate-6 rounded-xl border-2 border-black bg-accent-yellow px-3 py-1.5 shadow-[3px_3px_0_0_#000] transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110 sm:px-4 sm:py-2 md:rounded-2xl md:px-5 md:py-3 md:shadow-[4px_4px_0_0_#000]">
                <span className="text-3xl drop-shadow-md sm:text-4xl md:text-5xl">👍</span>
              </div>
              <div className="-mt-1 h-6 w-[2px] -rotate-3 bg-black transition-all group-hover:h-8 sm:-mt-2 sm:h-10 sm:w-[3px] sm:group-hover:h-14 md:h-14 md:group-hover:h-16"></div>
            </div>
            
            {/* 5 Stars Sign */}
            <div className="group flex cursor-pointer flex-col items-center transition-all duration-500 hover:-translate-y-4">
              <div className="z-10 rotate-2 rounded-xl border-2 border-black bg-white px-3 py-1.5 shadow-[3px_3px_0_0_#000] transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105 sm:px-5 sm:py-2 md:rounded-2xl md:px-7 md:py-3 md:shadow-[4px_4px_0_0_#000]">
                <div className="flex gap-0.5 sm:gap-1 md:gap-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="h-5 w-5 drop-shadow-sm transition-transform hover:scale-125 hover:text-[#FFDF00] sm:h-8 sm:w-8 md:h-10 md:w-10" style={{ color: '#FFC107' }} viewBox="0 0 24 24" fill="currentColor" stroke="#B8860B" strokeWidth="1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="-mt-1 h-8 w-[2px] rotate-2 bg-black transition-all group-hover:h-10 sm:-mt-2 sm:h-14 sm:w-[3px] sm:group-hover:h-16 md:h-20 md:group-hover:h-24"></div>
            </div>
          </div>

          {/* Title on Platform */}
          <div data-gsap="clip-left" className="relative border-t-[3px] border-black pt-4 sm:pt-5 md:pt-6">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-5">
              <span className="font-sans text-4xl font-black uppercase tracking-tighter text-ink-900 sm:text-5xl md:text-[5.5rem]">
                End to End
              </span>
              <span 
                className="font-sans text-4xl font-black uppercase tracking-tighter text-transparent sm:text-5xl md:text-[5.5rem]" 
                style={{ WebkitTextStroke: '2px #00104D' }}
              >
                Service
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-x-12 md:gap-x-16 lg:grid-cols-2">
          <div data-gsap-group="alternate" data-gsap-stagger="0.06">
            {left.map((s, i) => (
              <div key={s.id} data-gsap-item="auto">{renderItem(s, i)}</div>
            ))}
          </div>
          <div data-gsap-group="alternate" data-gsap-stagger="0.06">
            {right.map((s, i) => (
              <div key={s.id} data-gsap-item="auto">{renderItem(s, i + 5)}</div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
