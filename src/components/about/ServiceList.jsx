import { useTranslation } from 'react-i18next'

export const serviceCatalog = [
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

  const vision = isEn
    ? 'To be a long-term growth partner for businesses in Indonesia through measurable creative work.'
    : 'Menjadi mitra pertumbuhan jangka panjang bagi bisnis di Indonesia melalui kerja kreatif yang terukur'

  const mission = isEn
    ? [
        'Provide creative and digital services in one coordinated workflow',
        'Keep a consistent standard of execution across every line',
        'Grow the client’s capacity, not only finish the job',
        'Build a lasting working relationship, not a transactional one',
      ]
    : [
        'Menyediakan layanan kreatif dan digital dalam satu koordinasi kerja',
        'Menjaga standar eksekusi yang konsisten di setiap lini',
        'Menumbuhkan kapasitas klien, bukan hanya menyelesaikan pekerjaan',
        'Membangun hubungan kerja yang berkelanjutan, bukan transaksional',
      ]

  return (
    <section className="grid lg:grid-cols-2">
      <div data-gsap="left-far" className="flex items-center bg-brand-50 px-6 py-16 sm:px-10 md:px-16 md:py-24">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-[#CEFE4A] px-4 py-1.5 font-sans text-xs font-black uppercase tracking-[0.16em] text-ink-900">
            <span className="h-2 w-2 rounded-full bg-accent-magenta" />
            {isEn ? 'Our Vision' : 'Visi Kami'}
          </p>
          <h2 className="mt-6 max-w-xl font-sans text-xl font-bold leading-snug tracking-tight text-ink-900 sm:text-2xl md:text-3xl">
            {vision}
          </h2>
        </div>
      </div>
      <div data-gsap="right-far" className="bg-brand-600 px-6 py-16 text-white sm:px-10 md:px-16 md:py-24">
        <p className="type-caption font-sans text-accent-yellow">
          {isEn ? 'Our Mission' : 'Misi Kami'}
        </p>
        <ol data-gsap-group="stagger" data-gsap-stagger="0.08" className="mt-8">
          {mission.map((item, index) => (
            <li key={item} data-gsap-item="zoom" className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-white/20 py-5">
              <span className="font-sans text-sm font-bold text-accent-yellow">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="type-body font-sans text-white/90">{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
