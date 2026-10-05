/**
 * Semua teks halaman layanan ada di file ini.
 * Ubah judul, pill, ringkasan, atau poin di sini. Tidak perlu sentuh komponen.
 *
 * slug = bagian alamat. Contoh slug "multimedia" membuka /layanan/multimedia
 * Pakai huruf kecil dan tanda hubung. Jangan pakai spasi.
 * lead = kata putih di hero. highlight = kata di kotak kuning.
 * faq = pertanyaan di blok biru. Tiap layanan punya daftar sendiri.
 */

export const services = [
  {
    slug: 'multimedia',
    title: { id: 'Multimedia', en: 'Multimedia' },
    lead: { id: 'MULTIMEDIA', en: 'MULTIMEDIA' },
    highlight: { id: 'Video', en: 'Video' },
    pill: { id: 'Profil, iklan, dokumentasi', en: 'Profile, ads, documentation' },
    summary: { id: 'Video profil, iklan, dan dokumentasi.', en: 'Profile videos, ads, and documentation.' },
    points: {
      id: ['Video profil', 'Iklan', 'Dokumentasi'],
      en: ['Profile video', 'Ads', 'Documentation'],
    },
    faq: [
      {
        q: { id: 'Video apa yang dikerjakan?', en: 'What videos do you produce?' },
        a: { id: 'Video profil, iklan, dan dokumentasi.', en: 'Profile videos, ads, and documentation.' },
      },
      {
        q: { id: 'Bisa satu jenis video saja?', en: 'Can we order just one type of video?' },
        a: { id: 'Bisa. Cakupan mengikuti kebutuhan brand.', en: 'Yes. The scope follows what the brand needs.' },
      },
      {
        q: { id: 'Bagaimana cara mulai?', en: 'How do we start?' },
        a: { id: 'Kirim kebutuhan video lewat WhatsApp. Tim HCM lanjut membahas cakupannya.', en: 'Send the video brief on WhatsApp. The HCM team will go through the scope with you.' },
      },
    ],
  },
  {
    slug: 'live-commerce',
    title: { id: 'Live Commerce', en: 'Live Commerce' },
    lead: { id: 'LIVE', en: 'LIVE' },
    highlight: { id: 'Commerce', en: 'Commerce' },
    pill: { id: 'Strategi, teknis, host', en: 'Strategy, technical, host' },
    summary: { id: 'Siaran penjualan langsung: strategi, teknis, dan host.', en: 'Live selling: strategy, technical setup, and hosts.' },
    points: {
      id: ['Strategi siaran', 'Teknis live', 'Host'],
      en: ['Broadcast strategy', 'Live technical setup', 'Host'],
    },
    faq: [
      {
        q: { id: 'Apa yang ditangani saat live?', en: 'What is handled during a live?' },
        a: { id: 'Strategi siaran, teknis live, dan host.', en: 'Broadcast strategy, live technical setup, and the host.' },
      },
      {
        q: { id: 'Apakah host sudah termasuk?', en: 'Is the host included?' },
        a: { id: 'Ya. Host termasuk dalam layanan live commerce.', en: 'Yes. The host is part of the live commerce service.' },
      },
      {
        q: { id: 'Bagaimana cara mulai?', en: 'How do we start?' },
        a: { id: 'Ceritakan jadwal dan produk yang ingin di-live lewat WhatsApp.', en: 'Tell us the schedule and the products you want to sell live on WhatsApp.' },
      },
    ],
  },
  {
    slug: 'graphic-design',
    title: { id: 'Graphic Design', en: 'Graphic Design' },
    lead: { id: 'GRAPHIC', en: 'GRAPHIC' },
    highlight: { id: 'Design', en: 'Design' },
    pill: { id: 'Identitas dan materi', en: 'Identity and assets' },
    summary: { id: 'Identitas visual dan materi komunikasi.', en: 'Visual identity and communication assets.' },
    points: {
      id: ['Identitas visual', 'Materi komunikasi'],
      en: ['Visual identity', 'Communication assets'],
    },
    faq: [
      {
        q: { id: 'Desain apa yang dikerjakan?', en: 'What design work is included?' },
        a: { id: 'Identitas visual dan materi komunikasi.', en: 'Visual identity and communication assets.' },
      },
      {
        q: { id: 'Bisa identitas saja, tanpa materi lain?', en: 'Can we do identity only?' },
        a: { id: 'Bisa. Cakupan menyesuaikan kebutuhan brand.', en: 'Yes. The scope follows what the brand needs.' },
      },
      {
        q: { id: 'Bagaimana cara mulai?', en: 'How do we start?' },
        a: { id: 'Kirim brief desain lewat WhatsApp. Tim HCM bahas arah visualnya.', en: 'Send the design brief on WhatsApp. The HCM team will talk through the visual direction.' },
      },
    ],
  },
  {
    slug: 'social-media',
    title: { id: 'Social Media', en: 'Social Media' },
    lead: { id: 'SOCIAL', en: 'SOCIAL' },
    highlight: { id: 'Media', en: 'Media' },
    pill: { id: 'Rencana sampai interaksi', en: 'Plan through interaction' },
    summary: { id: 'Perencanaan, produksi, publikasi, dan interaksi.', en: 'Planning, production, publishing, and interaction.' },
    points: {
      id: ['Perencanaan', 'Produksi', 'Publikasi', 'Interaksi'],
      en: ['Planning', 'Production', 'Publishing', 'Interaction'],
    },
    faq: [
      {
        q: { id: 'Apa yang dikerjakan untuk sosial media?', en: 'What does social media work include?' },
        a: { id: 'Perencanaan, produksi, publikasi, dan interaksi.', en: 'Planning, production, publishing, and interaction.' },
      },
      {
        q: { id: 'Bisa ambil sebagian saja?', en: 'Can we take only part of it?' },
        a: { id: 'Bisa. Misalnya produksi saja, atau sampai publikasi.', en: 'Yes. For example, production only, or through to publishing.' },
      },
      {
        q: { id: 'Bagaimana cara mulai?', en: 'How do we start?' },
        a: { id: 'Ceritakan kanal dan kebutuhan konten lewat WhatsApp.', en: 'Tell us the channels and the content you need on WhatsApp.' },
      },
    ],
  },
  {
    slug: 'product-photo-video',
    title: { id: 'Product Photo & Video', en: 'Product Photo & Video' },
    lead: { id: 'PRODUCT', en: 'PRODUCT' },
    highlight: { id: 'Photo', en: 'Photo' },
    pill: { id: 'Katalog dan promosi', en: 'Catalog and promotion' },
    summary: { id: 'Pendekatan sinematik untuk katalog dan promosi.', en: 'A cinematic approach for catalogs and promotion.' },
    points: {
      id: ['Katalog', 'Promosi'],
      en: ['Catalog', 'Promotion'],
    },
    faq: [
      {
        q: { id: 'Foto dan video ini untuk apa?', en: 'What are the photos and videos for?' },
        a: { id: 'Untuk katalog dan promosi, dengan pendekatan sinematik.', en: 'For catalogs and promotion, with a cinematic approach.' },
      },
      {
        q: { id: 'Bisa katalog saja?', en: 'Can we do a catalog only?' },
        a: { id: 'Bisa. Cakupan mengikuti kebutuhan brand.', en: 'Yes. The scope follows what the brand needs.' },
      },
      {
        q: { id: 'Bagaimana cara mulai?', en: 'How do we start?' },
        a: { id: 'Kirim daftar produk yang ingin difoto atau direkam lewat WhatsApp.', en: 'Send the product list you want photographed or filmed on WhatsApp.' },
      },
    ],
  },
  {
    slug: 'e-commerce',
    title: { id: 'E-Commerce', en: 'E-Commerce' },
    lead: { id: 'E-COMMERCE', en: 'E-COMMERCE' },
    highlight: { id: 'Toko', en: 'Store' },
    pill: { id: 'Toko, iklan, penjualan', en: 'Store, ads, sales' },
    summary: { id: 'Optimasi toko, iklan, dan penjualan marketplace.', en: 'Store optimization, ads, and marketplace sales.' },
    points: {
      id: ['Optimasi toko', 'Iklan', 'Penjualan marketplace'],
      en: ['Store optimization', 'Ads', 'Marketplace sales'],
    },
    faq: [
      {
        q: { id: 'Apa yang dikerjakan untuk toko?', en: 'What is done for the store?' },
        a: { id: 'Optimasi toko, iklan, dan penjualan marketplace.', en: 'Store optimization, ads, and marketplace sales.' },
      },
      {
        q: { id: 'Bisa fokus ke iklan saja?', en: 'Can we focus on ads only?' },
        a: { id: 'Bisa. Cakupan menyesuaikan kebutuhan brand.', en: 'Yes. The scope follows what the brand needs.' },
      },
      {
        q: { id: 'Bagaimana cara mulai?', en: 'How do we start?' },
        a: { id: 'Ceritakan kondisi toko lewat WhatsApp. Tim HCM mulai dari audit brand.', en: 'Tell us how the store is doing on WhatsApp. The HCM team starts with a brand audit.' },
      },
    ],
  },
  {
    slug: 'web-development',
    title: { id: 'Web Development', en: 'Web Development' },
    lead: { id: 'WEB', en: 'WEB' },
    highlight: { id: 'Development', en: 'Development' },
    pill: { id: 'Rancang dan bangun', en: 'Design and build' },
    summary: { id: 'Perancangan dan pembangunan website.', en: 'Website design and development.' },
    points: {
      id: ['Perancangan', 'Pembangunan'],
      en: ['Design', 'Build'],
    },
    faq: [
      {
        q: { id: 'Apa yang dikerjakan untuk website?', en: 'What is included for the website?' },
        a: { id: 'Perancangan dan pembangunan website.', en: 'Website design and development.' },
      },
      {
        q: { id: 'Bisa rancang saja, tanpa bangun?', en: 'Can we design without building?' },
        a: { id: 'Bisa. Cakupan menyesuaikan kebutuhan brand.', en: 'Yes. The scope follows what the brand needs.' },
      },
      {
        q: { id: 'Bagaimana cara mulai?', en: 'How do we start?' },
        a: { id: 'Kirim gambaran website yang dibutuhkan lewat WhatsApp.', en: 'Send an outline of the website you need on WhatsApp.' },
      },
    ],
  },
  {
    slug: 'training',
    title: { id: 'Training', en: 'Training' },
    lead: { id: 'TRAINING', en: 'TRAINING' },
    highlight: { id: 'Tim', en: 'Team' },
    pill: { id: 'Kelas untuk tim internal', en: 'Classes for internal teams' },
    summary: { id: 'Kelas praktis untuk tim internal.', en: 'Practical classes for internal teams.' },
    points: {
      id: ['Kelas praktis', 'Tim internal'],
      en: ['Practical classes', 'Internal team'],
    },
    faq: [
      {
        q: { id: 'Training ini untuk siapa?', en: 'Who is this training for?' },
        a: { id: 'Kelas praktis untuk tim internal.', en: 'Practical classes for an internal team.' },
      },
      {
        q: { id: 'Apakah materinya bisa disesuaikan?', en: 'Can the material be tailored?' },
        a: { id: 'Bisa. Kelas mengikuti kebutuhan tim.', en: 'Yes. The class follows what the team needs.' },
      },
      {
        q: { id: 'Bagaimana cara mulai?', en: 'How do we start?' },
        a: { id: 'Ceritakan topik dan jumlah peserta lewat WhatsApp.', en: 'Tell us the topic and the number of participants on WhatsApp.' },
      },
    ],
  },
  {
    slug: 'ai-content',
    title: { id: 'AI Content', en: 'AI Content' },
    lead: { id: 'AI', en: 'AI' },
    highlight: { id: 'Content', en: 'Content' },
    pill: { id: 'Visual branding', en: 'Visual branding' },
    summary: { id: 'Produksi visual branding berbasis AI.', en: 'AI-based visual branding production.' },
    points: {
      id: ['Visual branding', 'Produksi berbasis AI'],
      en: ['Visual branding', 'AI-based production'],
    },
    faq: [
      {
        q: { id: 'Apa yang diproduksi?', en: 'What gets produced?' },
        a: { id: 'Visual branding berbasis AI.', en: 'AI-based visual branding.' },
      },
      {
        q: { id: 'Apakah tetap sesuai identitas brand?', en: 'Does it still match the brand identity?' },
        a: { id: 'Ya. Produksinya mengikuti arah visual brand.', en: 'Yes. Production follows the brand’s visual direction.' },
      },
      {
        q: { id: 'Bagaimana cara mulai?', en: 'How do we start?' },
        a: { id: 'Kirim contoh visual dan kebutuhan brand lewat WhatsApp.', en: 'Send visual references and what the brand needs on WhatsApp.' },
      },
    ],
  },
]

export function serviceBySlug(slug) {
  return services.find((item) => item.slug === slug)
}
