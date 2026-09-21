/**
 * URUTAN + VISIBILITAS SECTION (dinamis).
 * Sesuai struktur data HCM:
 * 1. Hero
 * 2. About (Partner Pertumbuhan)
 * 3. Services (3 Layanan Inti)
 * 4. Why Choose HCM (5 Kartu)
 * 5. Portfolio / Case Studies
 * 6. FAQ (6 Pertanyaan)
 * 7. Kontak & Footer
 */
export const landingSections = [
  { id: 'hero', type: 'hero', enabled: true },
  { id: 'logos', type: 'logos', enabled: true },
  { id: 'about', type: 'about', enabled: true },
  { id: 'portofolio', type: 'portfolio', enabled: true },
  { id: 'why-us', type: 'whyUs', enabled: true },
  { id: 'ratecard', type: 'ratecard', enabled: true },
  { id: 'faq', type: 'faq', enabled: true },
  { id: 'kontak', type: 'contact', enabled: false },
]
