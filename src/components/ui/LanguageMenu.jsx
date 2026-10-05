import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useParams } from 'react-router-dom'
import ID from 'country-flag-icons/react/3x2/ID'
import GB from 'country-flag-icons/react/3x2/GB'
import { LANGS, localizePath } from '@/lib/locale'
import { slideTo } from '@/lib/pageSlide'

const FLAGS = { id: ID, en: GB }

function useLang() {
  const { lang } = useParams()
  const { i18n } = useTranslation()
  if (lang === 'id' || lang === 'en') return lang
  return (i18n.language || 'id').split('-')[0] === 'en' ? 'en' : 'id'
}

function Flag({ code }) {
  const Icon = FLAGS[code]
  return <Icon aria-hidden="true" className="block h-3.5 w-5 shrink-0" />
}

function Chevron({ open }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
      <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const LABEL = { id: 'ID', en: 'EN' }
const NAME = { id: 'Bahasa Indonesia', en: 'English' }

export function LanguageMenu({ onPick, solid = false, layout = 'menu' }) {
  const location = useLocation()
  const lang = useLang()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return undefined
    function onDoc(event) {
      if (!event.target.closest('[data-lang-menu]')) setOpen(false)
    }
    function onKey(event) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  function pick(code) {
    slideTo(`${localizePath(location.pathname, code)}${location.search}${location.hash}`)
    setOpen(false)
    onPick?.()
  }

  if (layout === 'pair') {
    return (
      <div className="grid grid-cols-2" role="group" aria-label="Language">
        {LANGS.map((code) => {
          const on = code === lang
          return (
            <button
              key={code}
              type="button"
              aria-pressed={on}
              aria-label={NAME[code]}
              onClick={() => pick(code)}
              className={`flex items-center justify-center gap-2 border py-3 font-sans text-sm font-medium ${on ? 'border-[#00104D]/30 text-[#00104D]' : 'border-[#00104D]/10 text-[#00104D]/40'} ${code === 'id' ? 'border-r-0' : ''}`}
            >
              <Flag code={code} />
              <span>{LABEL[code]}</span>
            </button>
          )
        })}
      </div>
    )
  }

  return (
    <div data-lang-menu className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={NAME[lang]}
        onClick={() => setOpen((value) => !value)}
        className={`flex items-center gap-2 border px-4 py-3 font-montserrat text-[12px] font-bold uppercase tracking-widest ${solid ? 'border-[#00104D]/15 bg-white text-[#00104D]' : 'border-white/35 bg-white/10 text-white'}`}
      >
        <Flag code={lang} />
        <span>{LABEL[lang]}</span>
        <Chevron open={open} />
      </button>
      {open && (
        <div role="listbox" className="absolute right-0 top-full z-50 mt-2 min-w-full border border-[#00104D]/10 bg-white py-1">
          {LANGS.map((code) => (
            <button
              key={code}
              type="button"
              role="option"
              aria-selected={code === lang}
              aria-label={NAME[code]}
              onClick={() => pick(code)}
              className={`flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left font-montserrat text-[12px] font-bold uppercase tracking-widest transition-colors hover:bg-brand-50 ${code === lang ? 'text-brand-600' : 'text-[#00104D]'}`}
            >
              <Flag code={code} />
              <span>{LABEL[code]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export { useLang }
