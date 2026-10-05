import { useEffect, useState } from 'react'
import { useLang } from '@/components/ui/LanguageMenu'
import { siteConfig } from '@/config/site'

const copy = {
  id: {
    tab: 'Konsultasi',
    title: 'Hubungi Kami',
    intro: 'Ceritakan kondisi brand kamu. Tim HCM lanjutkan lewat WhatsApp.',
    name: 'Nama',
    phone: 'WhatsApp',
    brand: 'Nama brand',
    platform: 'Platform',
    message: 'Apa yang bisa kami bantu?',
    namePh: 'Nama kamu',
    phonePh: '08xxxxxxxxxx',
    brandPh: 'Nama brand',
    messagePh: 'Ceritakan kebutuhan brand kamu',
    platforms: ['TikTok Shop', 'Shopee', 'Keduanya'],
    send: 'Lanjut ke WhatsApp',
    close: 'Tutup',
    required: 'Nama dan nomor WhatsApp wajib diisi.',
  },
  en: {
    tab: 'Book a Call',
    title: 'Contact Us',
    intro: 'Tell us about your brand. The HCM team continues on WhatsApp.',
    name: 'Name',
    phone: 'WhatsApp',
    brand: 'Brand name',
    platform: 'Platform',
    message: 'How can we help?',
    namePh: 'Your name',
    phonePh: '08xxxxxxxxxx',
    brandPh: 'Brand name',
    messagePh: 'Tell us what your brand needs',
    platforms: ['TikTok Shop', 'Shopee', 'Both'],
    send: 'Continue on WhatsApp',
    close: 'Close',
    required: 'Name and WhatsApp number are required.',
  },
}

const empty = { name: '', phone: '', brand: '', platform: '', message: '' }

export function FloatingWhatsApp() {
  const lang = useLang()
  const text = copy[lang] || copy.id
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState(empty)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open])

  function setField(key, value) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  function submit(event) {
    event.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) {
      setError(text.required)
      return
    }
    const lines = lang === 'en'
      ? [
          'Hello HCM, I want to talk about my brand.',
          `Name: ${form.name.trim()}`,
          `WhatsApp: ${form.phone.trim()}`,
          form.brand.trim() ? `Brand: ${form.brand.trim()}` : '',
          form.platform ? `Platform: ${form.platform}` : '',
          form.message.trim() ? `Message: ${form.message.trim()}` : '',
        ]
      : [
          'Halo HCM, saya mau konsultasi brand saya.',
          `Nama: ${form.name.trim()}`,
          `WhatsApp: ${form.phone.trim()}`,
          form.brand.trim() ? `Brand: ${form.brand.trim()}` : '',
          form.platform ? `Platform: ${form.platform}` : '',
          form.message.trim() ? `Pesan: ${form.message.trim()}` : '',
        ]
    const url = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(lines.filter(Boolean).join('\n'))}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setOpen(false)
    setForm(empty)
    setError('')
  }

  const field = 'w-full border-0 border-b border-[#00104D]/25 bg-transparent py-2 font-sans text-sm text-[#00104D] outline-none placeholder:text-[#00104D]/35'

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-0 z-[70] rounded-l-2xl bg-[#FF1E8F] px-2.5 py-2.5 font-sans text-xs font-semibold leading-tight text-white shadow-lg bottom-[max(1rem,env(safe-area-inset-bottom))] md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:px-3 md:py-4 md:text-sm"
      >
        <span className="block w-14 text-center md:w-16">{text.tab}</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-8">
          <button
            type="button"
            aria-label={text.close}
            className="absolute inset-0 bg-[#05051a]/55"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="hcm-contact-title"
            className="relative grid max-h-[min(40rem,calc(100dvh-2rem))] w-full max-w-4xl overflow-y-auto bg-[#F6EFE6] md:grid-cols-[0.8fr_1.2fr]"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={text.close}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#FF1E8F] text-sm text-white"
            >
              ×
            </button>
            <div className="px-5 py-6 pr-14 sm:px-8 sm:py-10">
              <h2 id="hcm-contact-title" className="font-sans text-2xl font-bold text-[#00104D]">
                {text.title}
              </h2>
              <p className="type-small mt-4 max-w-xs font-sans text-[#00104D]/80">{text.intro}</p>
            </div>
            <form onSubmit={submit} className="grid gap-x-6 gap-y-5 px-5 py-6 sm:grid-cols-2 sm:px-8 sm:py-10">
              <label className="block font-sans text-sm font-semibold text-[#00104D]">
                {text.name}<span className="text-[#FF1E8F]">*</span>
                <input className={field} value={form.name} placeholder={text.namePh} onChange={(event) => setField('name', event.target.value)} />
              </label>
              <label className="block font-sans text-sm font-semibold text-[#00104D]">
                {text.phone}<span className="text-[#FF1E8F]">*</span>
                <input className={field} inputMode="tel" value={form.phone} placeholder={text.phonePh} onChange={(event) => setField('phone', event.target.value)} />
              </label>
              <label className="block font-sans text-sm font-semibold text-[#00104D]">
                {text.brand}
                <input className={field} value={form.brand} placeholder={text.brandPh} onChange={(event) => setField('brand', event.target.value)} />
              </label>
              <label className="block font-sans text-sm font-semibold text-[#00104D]">
                {text.platform}
                <select className={field} value={form.platform} onChange={(event) => setField('platform', event.target.value)}>
                  <option value="">{lang === 'en' ? 'Choose' : 'Pilih'}</option>
                  {text.platforms.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label className="block font-sans text-sm font-semibold text-[#00104D] sm:col-span-2">
                {text.message}
                <textarea className={`${field} min-h-16 resize-none`} value={form.message} placeholder={text.messagePh} onChange={(event) => setField('message', event.target.value)} />
              </label>
              {error && <p className="font-sans text-sm text-[#FF1E8F] sm:col-span-2">{error}</p>}
              <div className="sm:col-span-2 sm:text-right">
                <button type="submit" className="w-full rounded-full bg-[#FF1E8F] px-8 py-3 font-sans text-sm font-semibold text-white sm:w-auto">
                  {text.send}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
