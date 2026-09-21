import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import logoHan from '@/assets/2-bg.transparant.png'
import { siteConfig } from '@/config/site'
import { LanguageToggle } from '../ui/LanguageToggle'

function Chevron({ open }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <path d="M2 3.5 5 6.5 8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Navbar() {
  const { t, i18n } = useTranslation()
  const isEn = i18n.language === 'en'
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDrop, setOpenDrop] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)

  const nav = t('nav', { returnObjects: true })

  // Close desktop dropdown with Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenDrop(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const waMessage = isEn
    ? 'Hello HCM, I want to scale my e-commerce brand.'
    : 'Halo HCM, saya mau konsultasi scale brand e-commerce saya.'
  const waUrl = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(waMessage)}`

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-[#00104D] bg-[#FFFFFF]">
      <nav className="mx-auto flex h-20 sm:h-[88px] w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">

        {/* Brand Logo with User's Official Asset */}
        <Link to="/" className="flex shrink-0 items-center gap-3 hover:-rotate-2 hover:scale-105 transition-all duration-300 origin-left" aria-label="HAN Creative Marketing - Home">
          <img
            src={logoHan}
            alt="HAN Creative Marketing (HCM)"
            className="h-10 sm:h-14 lg:h-16 w-auto object-contain drop-shadow-sm"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-7 lg:flex">
          {Array.isArray(nav) && nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDrop(item.label)}
                onMouseLeave={() => setOpenDrop(null)}
              >
                <button
                  onClick={() => setOpenDrop((v) => (v === item.label ? null : item.label))}
                  aria-expanded={openDrop === item.label}
                  className="group relative flex items-center gap-1.5 py-2 font-montserrat font-bold text-sm text-[#00104D] uppercase tracking-wider transition-colors hover:text-[#0030FF] cursor-pointer"
                >
                  {item.label}
                  <Chevron open={openDrop === item.label} />
                  <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#0030FF] transition-all duration-300 group-hover:w-full"></span>
                </button>
                {openDrop === item.label && (
                  <div className="absolute left-0 top-full w-64 pt-2">
                    <div className="overflow-hidden rounded-xl border-[3px] border-[#00104D] bg-[#FFFFFF] p-2 shadow-[6px_6px_0_0_#00104D]">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setOpenDrop(null)}
                          className="block rounded-lg px-4 py-2.5 font-montserrat font-bold text-xs text-[#00104D] uppercase tracking-wide transition-all duration-200 hover:bg-[#EAF0FF] hover:text-[#0030FF] hover:translate-x-1"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="group relative py-2 font-montserrat font-bold text-sm text-[#00104D] uppercase tracking-wider transition-colors hover:text-[#FF2E93]"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#FF2E93] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ),
          )}
        </div>

        {/* Right Actions: CTA button + ID/EN Toggle */}
        <div className="hidden shrink-0 items-center gap-6 lg:flex">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-[999px] bg-[#FFD600] border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#00104D] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none px-6 py-2.5 font-montserrat font-bold text-sm text-[#00104D] uppercase tracking-wide transition-all duration-200 cursor-pointer overflow-hidden relative"
          >
            {/* Shimmer effect on hover */}
            <span className="absolute inset-0 -translate-x-full bg-white/40 skew-x-[30deg] transition-transform duration-500 group-hover:translate-x-[150%]"></span>

            <span className="relative z-10">{isEn ? 'Scale Your Brand' : 'Mulai Scale Brand'}</span>
            <svg className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          </a>
          <LanguageToggle />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-lg lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div className="border-t border-black/[0.06] bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col">
            {Array.isArray(nav) && nav.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-black/5 last:border-0">
                  <button
                    onClick={() => setMobileExpanded((v) => (v === item.label ? null : item.label))}
                    aria-expanded={mobileExpanded === item.label}
                    className="flex w-full items-center justify-between py-3 text-sm font-semibold text-neutral-900"
                  >
                    {item.label}
                    <Chevron open={mobileExpanded === item.label} />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="pb-3 pl-3">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-sm text-neutral-600 hover:text-[#0030ff]"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-black/5 py-3 text-sm font-semibold text-neutral-900 hover:text-[#0030ff] last:border-0"
                >
                  {item.label}
                </a>
              ),
            )}
            <div className="flex items-center gap-4 pt-6 pb-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex-1 rounded-[999px] bg-[#FFD600] border-[3px] border-[#00104D] shadow-[4px_4px_0_0_#00104D] active:translate-y-1 active:shadow-none px-5 py-3 text-center font-montserrat font-bold text-sm text-[#00104D] uppercase tracking-wide transition-all"
              >
                {isEn ? 'Scale Your Brand' : 'Mulai Scale Brand'}
              </a>
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
