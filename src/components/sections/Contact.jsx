import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { siteConfig } from '@/config/site'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Contact() {
  const { t, i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  const [form, setForm] = useState({ name: '', brandName: '', wa: '', service: 'Marketplace Management', message: '' })
  const [sent, setSent] = useState(false)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const text = isEn
      ? `Hello HCM! I want to scale my brand.\n\nName: ${form.name}\nBrand: ${form.brandName}\nWhatsApp: ${form.wa}\nService: ${form.service}\nNotes: ${form.message}`
      : `Halo HCM! Saya mau konsultasi scale brand e-commerce.\n\nNama: ${form.name}\nNama Brand: ${form.brandName}\nWhatsApp: ${form.wa}\nLayanan yang diminati: ${form.service}\nCatatan: ${form.message}`

    window.open(`${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank')
    setSent(true)
  }

  return (
    <section id="kontak" className="scroll-mt-20 bg-neutral-50 py-20">
      <SectionHeading
        eyebrow={t('contact.eyebrow')}
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
      />
      <Container className="grid gap-8 lg:grid-cols-5 mt-12">
        
        {/* Contact Info Card */}
        <div data-reveal className="rounded-3xl bg-[#0b0b14] p-8 text-white lg:col-span-2 flex flex-col justify-between shadow-xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0030ff]/30 text-blue-300 text-xs font-semibold mb-4 border border-blue-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {isEn ? 'Growth Team Active' : 'Tim Konsultan Aktif'}
            </div>
            <h3 className="text-xl font-bold">{isEn ? 'Consultation & HQ' : 'Kantor & Konsultasi'}</h3>
            <p className="mt-2 text-xs text-white/60 leading-relaxed">
              {isEn 
                ? 'Connect directly with our e-commerce growth specialists.' 
                : 'Hubungi langsung tim spesialis TikTok Shop & Shopee HCM.'}
            </p>

            <ul className="mt-6 space-y-4 text-xs">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.33 5L2 22l5.18-1.31C8.61 21.53 10.26 22 12 22c5.48 0 10-4.48 10-10S17.48 2 12 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">WhatsApp Fast Response</p>
                  <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noreferrer" className="text-white/70 hover:text-[#25D366] transition-colors">
                    {siteConfig.contact.whatsappFormatted}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-white/70 hover:text-white transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Alamat Kantor</p>
                  <p className="text-white/70 leading-relaxed">{siteConfig.contact.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white">Jam Operasional</p>
                  <p className="text-amber-300 font-medium">{siteConfig.contact.operationalHours}</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs transition-all shadow-md"
            >
              <span>Chat via WhatsApp</span>
            </a>
            <a
              href={siteConfig.contact.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl border border-white/20 hover:border-white text-white/90 text-xs font-semibold transition-all"
            >
              <span>Buka Google Maps</span>
            </a>
          </div>
        </div>

        {/* Contact Consultation Form */}
        <form data-reveal onSubmit={onSubmit} className="rounded-3xl border border-neutral-200 bg-white p-8 lg:col-span-3 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-neutral-900 mb-1">
              {isEn ? 'Get a Free Store Growth Audit' : 'Dapatkan Audit Pertumbuhan Toko Gratis'}
            </h3>
            <p className="text-xs text-neutral-500 mb-6">
              {isEn
                ? 'Fill in your store details and our team will prepare growth recommendations on WhatsApp.'
                : 'Isi form ringkas di bawah, tim kami akan kirim analisa potensi scale toko ke WhatsApp kamu.'}
            </p>

            {sent && (
              <p className="mb-4 rounded-xl bg-green-50 border border-green-200 p-3 text-xs font-semibold text-green-700 flex items-center gap-2">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{isEn ? 'Form submitted! Redirecting to WhatsApp...' : 'Data terkirim! Mengalihkan ke WhatsApp...'}</span>
              </p>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-xs font-semibold text-neutral-800">
                {isEn ? 'Your Name' : 'Nama Lengkap'}
                <input
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder={isEn ? 'e.g. Yoga Fahreza' : 'Contoh: Yoga Fahreza'}
                  className="mt-1 w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-xs font-normal outline-none focus:border-[#0030ff]"
                />
              </label>

              <label className="text-xs font-semibold text-neutral-800">
                {isEn ? 'Brand / Store Name' : 'Nama Brand / Toko'}
                <input
                  required
                  value={form.brandName}
                  onChange={update('brandName')}
                  placeholder={isEn ? 'e.g. MyBrand Official' : 'Contoh: MyBrand Store'}
                  className="mt-1 w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-xs font-normal outline-none focus:border-[#0030ff]"
                />
              </label>

              <label className="text-xs font-semibold text-neutral-800">
                {isEn ? 'WhatsApp Number' : 'Nomor WhatsApp'}
                <input
                  required
                  value={form.wa}
                  onChange={update('wa')}
                  placeholder="08123456789"
                  className="mt-1 w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-xs font-normal outline-none focus:border-[#0030ff]"
                />
              </label>

              <label className="text-xs font-semibold text-neutral-800">
                {isEn ? 'Primary Service Needed' : 'Layanan yang Dibutuhkan'}
                <select
                  value={form.service}
                  onChange={update('service')}
                  className="mt-1 w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-xs font-normal bg-white"
                >
                  <option value="Marketplace Management">Marketplace Management (TikTok/Shopee)</option>
                  <option value="Affiliator Management">Affiliator Management & Seeding</option>
                  <option value="Ads Management">TikTok Shop & Meta Ads Management</option>
                  <option value="Full End-to-End Growth">Full Package (End-to-End Scale)</option>
                </select>
              </label>
            </div>

            <label className="mt-4 block text-xs font-semibold text-neutral-800">
              {isEn ? 'Current Store Challenges / Monthly Target' : 'Kendala Toko Saat Ini / Target Omzet'}
              <textarea
                value={form.message}
                onChange={update('message')}
                rows={3}
                placeholder={isEn ? 'Tell us your current challenges or monthly sales target...' : 'Ceritakan kendala tokomu saat ini atau target omzet yang ingin dicapai...'}
                className="mt-1 w-full rounded-xl border border-neutral-200 px-4 py-2.5 text-xs font-normal outline-none focus:border-[#0030ff]"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-full sm:w-auto px-8 py-3.5 bg-[#0030ff] hover:bg-[#0028d4] text-white font-semibold text-xs rounded-full shadow-[0_4px_14px_rgba(0,48,255,0.3)] transition-all flex items-center justify-center gap-2"
          >
            <span>{isEn ? 'Submit & Chat via WhatsApp' : 'Kirim & Konsultasi via WhatsApp'}</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>

      </Container>
    </section>
  )
}
