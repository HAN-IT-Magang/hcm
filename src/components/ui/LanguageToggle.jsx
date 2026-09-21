import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/cn'

const LANGS = [
  { code: 'id', label: 'ID' },
  { code: 'en', label: 'EN' },
]

export function LanguageToggle({ className }) {
  const { i18n } = useTranslation()
  const active = (i18n.language || 'id').split('-')[0]

  return (
    <div
      role="group"
      aria-label="Language / Bahasa"
      className={cn('flex items-center rounded-[999px] border-[3px] border-[#00104D] bg-[#FFFFFF] p-1 shadow-[4px_4px_0_0_#00104D]', className)}
    >
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          aria-pressed={active === l.code}
          onClick={() => i18n.changeLanguage(l.code)}
          className={cn(
            'rounded-[999px] px-3 py-1.5 text-xs font-montserrat font-bold uppercase transition-all',
            active === l.code ? 'bg-[#00104D] text-[#FFFFFF]' : 'text-[#00104D]/60 hover:text-[#00104D]',
          )}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
