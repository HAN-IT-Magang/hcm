import { cn } from '@/lib/cn'
import { Container } from './Container'

export function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-600">
      {children}
    </span>
  )
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'center', dark = false }) {
  return (
    <Container className={cn('mb-10 text-center', align === 'left' && 'text-left')}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={cn('mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl', dark ? 'text-white' : 'text-ink-900')}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mx-auto mt-3 max-w-2xl text-base', dark ? 'text-white/70' : 'text-ink-500', align === 'left' && 'mx-0')}>
          {subtitle}
        </p>
      )}
    </Container>
  )
}
