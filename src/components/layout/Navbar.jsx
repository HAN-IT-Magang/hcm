import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import logoHanWhite from '@/assets/4-bg.transparant.png'
import { siteConfig } from '@/config/site'

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
  const [scrolled, setScrolled] = useState(false)

  const nav = t('nav', { returnObjects: true })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#00104D] shadow-md border-b border-white/10' : 'bg-transparent border-b border-transparent'}`}>
      <nav className="mx-auto flex h-[72px] lg:h-[80px] w-full max-w-[1400px] items-center justify-between px-4 lg:px-8">

        {/* Left: Logo & Brand Name */}
        <div className="flex shrink-0 items-center gap-4">
          <Link to="/" className="flex items-center gap-4 group" aria-label="HAN Creative Marketing - Home">
            <img
              src={logoHanWhite}
              alt="HAN Creative Marketing (HCM)"
              className="h-8 lg:h-10 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <div className="hidden sm:flex items-center gap-4">
              <span className="h-8 w-px bg-white/30"></span>
              <div className="flex flex-col">
                <span className="font-sans text-[13px] font-bold text-white tracking-wide uppercase leading-tight">HAN Creative Marketing</span>
                <span className="font-sans text-[11px] font-medium text-white/70 tracking-widest uppercase leading-tight">Your Growth Partner</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-8 px-4">
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
                  className="flex items-center gap-1.5 py-2 font-montserrat text-[13px] font-bold uppercase tracking-wider text-white/90 transition-colors hover:text-white"
                >
                  {item.label}
                  <Chevron open={openDrop === item.label} />
                </button>
                {openDrop === item.label && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="min-w-[200px] rounded-lg border border-white/10 bg-[#00104D] p-2 shadow-xl">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setOpenDrop(null)}
                          className="block rounded-md px-4 py-2.5 font-montserrat text-xs font-bold uppercase tracking-wider text-white/80 transition-colors hover:bg-white/10 hover:text-white"
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
                className="py-2 font-montserrat text-[13px] font-bold uppercase tracking-wider text-white/90 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ),
          )}
        </div>

        {/* Right: CTA & Language */}
        <div className="hidden lg:flex shrink-0 items-center gap-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => i18n.changeLanguage('id')}
              className={`font-montserrat text-[12px] font-bold uppercase tracking-wider transition-colors ${!isEn ? 'text-white' : 'text-white/40 hover:text-white/80'
                }`}
            >
              ID
            </button>
            <span className="text-white/20">/</span>
            <button
              onClick={() => i18n.changeLanguage('en')}
              className={`font-montserrat text-[12px] font-bold uppercase tracking-wider transition-colors ${isEn ? 'text-white' : 'text-white/40 hover:text-white/80'
                }`}
            >
              EN
            </button>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#FF1E8F] px-6 py-3 font-montserrat text-[12px] font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
          >
            {isEn ? 'Scale Your Brand' : 'Scale Your Brand'}
            <span className="text-lg leading-none font-black text-white">+</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/20 text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute inset-x-0 top-full border-t border-white/10 bg-[#00104D] px-4 py-4 lg:hidden shadow-xl">
          <div className="flex flex-col">
            {Array.isArray(nav) && nav.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-white/10 last:border-0">
                  <button
                    onClick={() => setMobileExpanded((v) => (v === item.label ? null : item.label))}
                    className="flex w-full items-center justify-between py-4 font-montserrat text-sm font-bold uppercase tracking-wider text-white"
                  >
                    {item.label}
                    <Chevron open={mobileExpanded === item.label} />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="pb-4 pl-4">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 font-montserrat text-xs font-bold uppercase tracking-wider text-white/70 transition-colors hover:text-white"
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
                  className="border-b border-white/10 py-4 font-montserrat text-sm font-bold uppercase tracking-wider text-white transition-colors hover:text-white last:border-0"
                >
                  {item.label}
                </a>
              ),
            )}

            <div className="mt-6 flex flex-col gap-6">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center gap-3 bg-[#FF1E8F] py-3.5 text-center font-montserrat text-sm font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
              >
                {isEn ? 'Scale Your Brand' : 'Scale Your Brand'}
                <span className="text-xl leading-none font-black text-white">+</span>
              </a>

              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => { i18n.changeLanguage('id'); setMobileOpen(false); }}
                  className={`font-montserrat text-[13px] font-bold uppercase tracking-wider transition-colors ${!isEn ? 'text-white' : 'text-white/40'
                    }`}
                >
                  ID
                </button>
                <span className="text-white/20">/</span>
                <button
                  onClick={() => { i18n.changeLanguage('en'); setMobileOpen(false); }}
                  className={`font-montserrat text-[13px] font-bold uppercase tracking-wider transition-colors ${isEn ? 'text-white' : 'text-white/40'
                    }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
