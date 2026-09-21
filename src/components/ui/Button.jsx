import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

const variants = {
  primary: 'bg-ink-900 text-white hover:bg-brand-600 shadow-lg shadow-ink-900/10',
  accent: 'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/25',
  outline: 'border border-ink-900/15 bg-white hover:border-ink-900/40 text-ink-900',
  whatsapp: 'bg-[#25D366] text-white hover:brightness-95 shadow-lg shadow-[#25D366]/30',
}

export function Button({ to, href, variant = 'primary', className, children, ...props }) {
  const cls = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all active:scale-[.98]',
    variants[variant],
    className,
  )
  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>
  if (href) return <a href={href} className={cls} {...props}>{children}</a>
  return <button className={cls} {...props}>{children}</button>
}
