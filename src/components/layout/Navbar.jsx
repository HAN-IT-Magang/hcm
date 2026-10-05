import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import logoHanWhite from '@/assets/4-bg.transparant.png'
import { siteConfig } from '@/config/site'
import { services } from '@/data/services'
import { localizePath } from '@/lib/locale'
import { LanguageMenu, useLang } from '@/components/ui/LanguageMenu'
import { playGsapIn } from '@/hooks/useGsapReveal'

function NavAnchor({ href, className, onClick, children, ...rest }) {
  const lang = useLang()
  const location = useLocation()
  if (!href.startsWith('/')) {
    return (
      <a href={href} className={className} onClick={onClick} {...rest}>
        {children}
      </a>
    )
  }
  const to = localizePath(href, lang)
  const current = location.pathname === to
  return (
    <Link to={to} reloadDocument className={className} onClick={onClick} aria-current={current ? 'page' : undefined} {...rest}>
      {children}
    </Link>
  )
}

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
  const { t } = useTranslation()
  const location = useLocation()
  const lang = useLang()
  const isEn = lang === 'en'
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef(null)
  const subRef = useRef(null)
  const [openDrop, setOpenDrop] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const solid = scrolled

  const rawNav = t('nav', { returnObjects: true })
  const nav = (Array.isArray(rawNav) ? rawNav : []).map((item) => {
    if (item.href !== '/layanan') return item
    return {
      ...item,
      children: services.map((svc) => ({
        label: svc.title[lang],
        href: `/layanan/${svc.slug}`,
      })),
    }
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenDrop(null)
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    setOpenDrop(null)
    setMobileOpen(false)
    setMobileExpanded(null)
  }, [location.pathname])

  useLayoutEffect(() => {
    if (!mobileOpen) return undefined
    return playGsapIn(menuRef.current)
  }, [mobileOpen])

  useLayoutEffect(() => {
    if (!mobileOpen || !mobileExpanded) return undefined
    return playGsapIn(subRef.current)
  }, [mobileOpen, mobileExpanded])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const waMessage = isEn
    ? 'Hello HCM, I want to scale my e-commerce brand.'
    : 'Halo HCM, saya mau konsultasi scale brand e-commerce saya.'
  const waUrl = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(waMessage)}`

  return (
    <header className={`fixed inset-x-0 top-0 z-[80] transition-all duration-300 ${mobileOpen ? 'border-b border-[#00104D]/10 bg-white' : solid ? 'border-b border-[#00104D]/10 bg-white/90 shadow-sm backdrop-blur-md' : 'border-b border-transparent bg-transparent'}`}>
      <nav className="mx-auto flex h-[72px] lg:h-[80px] w-full max-w-[1400px] items-center justify-between px-4 lg:px-8">

        {/* Left: Logo & Brand Name */}
        <div className="flex shrink-0 items-center gap-4">
          <Link to={localizePath('/', lang)} reloadDocument className="flex items-center gap-4 group" aria-label="HAN Creative Marketing - Home">
            <img
              src={logoHanWhite}
              alt="HAN Creative Marketing (HCM)"
              className={`h-8 lg:h-10 w-auto object-contain opacity-90 transition-opacity group-hover:opacity-100 ${mobileOpen || solid ? 'brightness-0' : 'brightness-0 invert'}`}
            />
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
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) setOpenDrop(null)
                }}
              >
                <button
                  type="button"
                  aria-expanded={openDrop === item.label}
                  aria-haspopup="true"
                  onClick={() => setOpenDrop(item.label)}
                  className={`flex items-center gap-1.5 py-2 font-montserrat text-[13px] font-bold uppercase tracking-wider transition-colors ${solid ? 'text-[#00104D]/80 hover:text-[#00104D]' : 'text-white/90 hover:text-white'}`}
                >
                  {item.label}
                  <Chevron open={openDrop === item.label} />
                </button>
                {openDrop === item.label && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className={`max-h-[calc(100dvh-6rem)] min-w-[240px] overflow-y-auto rounded-lg border p-2 shadow-xl ${solid ? 'border-[#00104D]/10 bg-white' : 'border-white/10 bg-[#00104D]'}`}>
                      {item.children.map((child) => {
                        const current = location.pathname === localizePath(child.href, lang)
                        const itemClass = solid
                          ? current
                            ? 'bg-brand-50 text-brand-600'
                            : 'text-[#00104D]/80 hover:bg-brand-50 hover:text-brand-600'
                          : current
                            ? 'bg-white/10 text-white'
                            : 'text-white/80 hover:bg-white/10 hover:text-white'
                        return (
                          <NavAnchor
                            key={child.href}
                            href={child.href}
                            current={current}
                            onClick={() => setOpenDrop(null)}
                            className={`block whitespace-nowrap rounded-md px-4 py-2.5 font-montserrat text-xs font-bold uppercase tracking-wider transition-colors ${itemClass}`}
                          >
                            {child.label}
                          </NavAnchor>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavAnchor
                key={item.label}
                href={item.href}
                className={`py-2 font-montserrat text-[13px] font-bold uppercase tracking-wider transition-colors ${solid ? 'text-[#00104D]/80 hover:text-[#00104D]' : 'text-white/90 hover:text-white'}`}
              >
                {item.label}
              </NavAnchor>
            ),
          )}
        </div>

        {/* Right: CTA & Language */}
        <div className="hidden lg:flex shrink-0 items-center gap-3">
          <LanguageMenu solid={solid} />

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#FF1E8F] px-6 py-3 font-montserrat text-[12px] font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
          >
            {isEn ? 'Scale Your Brand' : 'Scale Brand Kamu'}
            <span className="text-lg leading-none font-black text-white">+</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`flex h-10 w-10 shrink-0 items-center justify-center border lg:hidden ${mobileOpen || solid ? 'border-[#00104D]/20 text-[#00104D]' : 'rounded-md border-white/20 text-white'} ${mobileOpen ? '' : 'rounded-md'}`}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div ref={menuRef} className="fixed inset-x-0 top-[72px] bottom-0 z-50 flex flex-col overflow-hidden bg-white lg:hidden">
          <div className="relative flex-1 overflow-y-auto overscroll-contain px-6 pt-8">
            <p data-gsap="fade" className="font-sans text-xs font-medium text-ink-500">{isEn ? 'Your Growth Partner' : 'Mitra Pertumbuhan'}</p>
            <div data-gsap-group="alternate" data-gsap-stagger="0.08" className="mt-6">
              {Array.isArray(nav) && nav.map((item, index) => {
                const current = item.children
                  ? location.pathname.startsWith(localizePath('/layanan', lang))
                  : location.pathname === localizePath(item.href, lang)
                const indexLabel = String(index + 1).padStart(2, '0')
                const row = (
                  <>
                    <span className="w-8 shrink-0 font-sans text-xs font-normal text-[#00104D]/35">{indexLabel}</span>
                    <span className={`min-w-0 flex-1 text-left font-sans text-base font-medium ${current ? 'text-[#00104D]' : 'text-[#00104D]/60'}`}>
                      {item.label}
                    </span>
                  </>
                )
                if (item.children) {
                  const open = mobileExpanded === item.label
                  return (
                    <div key={item.label} data-gsap-item="auto">
                      <button
                        type="button"
                        aria-expanded={open}
                        onClick={() => setMobileExpanded((value) => (value === item.label ? null : item.label))}
                        className="flex w-full items-center py-3.5 text-[#00104D]/50"
                      >
                        {row}
                        <Chevron open={open} />
                      </button>
                      {open && (
                        <ol ref={subRef} data-gsap-own data-gsap-group="stagger" data-gsap-stagger="0.04" className="mb-2 ml-8">
                          {item.children.map((child, childIndex) => {
                            const childCurrent = location.pathname === localizePath(child.href, lang)
                            return (
                              <li key={child.href} data-gsap-item="zoom">
                                <NavAnchor
                                  href={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="grid grid-cols-[1.75rem_1fr] items-center py-2"
                                >
                                  <span className="font-sans text-xs font-normal text-[#00104D]/30">
                                    {String(childIndex + 1).padStart(2, '0')}
                                  </span>
                                  <span className={`font-sans text-sm font-normal ${childCurrent ? 'text-[#00104D]' : 'text-[#00104D]/55'}`}>
                                    {child.label}
                                  </span>
                                </NavAnchor>
                              </li>
                            )
                          })}
                        </ol>
                      )}
                    </div>
                  )
                }
                return (
                  <NavAnchor
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    data-gsap-item="auto"
                    className="flex items-center py-3.5"
                  >
                    {row}
                  </NavAnchor>
                )
              })}
            </div>
          </div>

          <div className="relative shrink-0 px-6 pb-6 pt-4">
            <a
              data-gsap="pop"
              data-gsap-delay="0.2"
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-2 bg-[#FF1E8F] py-3.5 font-sans text-sm font-medium text-white"
            >
              {isEn ? 'Scale Your Brand' : 'Scale Brand Kamu'}
              <span className="text-base leading-none font-medium text-white">+</span>
            </a>
            <div data-gsap="zoom" data-gsap-delay="0.28" className="mt-3">
              <LanguageMenu layout="pair" onPick={() => setMobileOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
