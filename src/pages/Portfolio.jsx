import { useState } from 'react'
import { Link } from 'react-router-dom'
import { localizePath } from '@/lib/locale'
import { useLang } from '@/components/ui/LanguageMenu'
import { useTranslation } from 'react-i18next'
import { Zap } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/config/site'
import { categoryLabel, PlayMark, portfolioWorks } from '@/components/sections/Portfolio'
import starIcon from '@/assets/Icon.webp'

export function PortfolioPage() {
  const { t, i18n } = useTranslation()
  const isEn = i18n.language === 'en'
  const lang = useLang()
  const [filter, setFilter] = useState('all')
  const filters = [
    { id: 'all', label: isEn ? 'All' : 'Semua' },
    ...Object.entries(categoryLabel).map(([id, label]) => ({
      id,
      label: isEn ? label.en : label.id,
    })),
  ]
  const shown = filter === 'all' ? portfolioWorks : portfolioWorks.filter((item) => item.category === filter)

  const waMessage = isEn
    ? 'Hello HCM, I want to ask about your portfolio.'
    : 'Halo HCM, saya mau tanya tentang portofolio kalian.'
  const waUrl = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(waMessage)}`

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-accent-cyan pt-[72px] lg:pt-[80px]">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-1/3 top-1/4 h-[420px] w-[720px] -translate-x-1/2 bg-white/10 blur-[110px]" />
        </div>

        <Container className="relative z-10 px-6 py-14 md:py-20">
          <nav data-gsap="zoom" aria-label="Breadcrumb" className="mb-8 inline-flex max-w-full items-center gap-2 rounded-full border border-white/40 px-4 py-1.5 font-sans text-xs font-medium text-white/85 md:text-sm">
            <Link to={localizePath('/', lang)} reloadDocument className="transition-colors hover:text-white">{isEn ? 'Home' : 'Beranda'}</Link>
            <span aria-hidden="true" className="font-bold text-white">»</span>
            <span className="text-white">{isEn ? 'Portfolio' : 'Portofolio'}</span>
          </nav>

          <h1 className="font-sans leading-[0.95] tracking-tight">
            <span className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
              <span data-gsap="clip-left" className="max-w-full text-[clamp(1.85rem,8vw,3.75rem)] font-extrabold text-white">
                {isEn ? 'PROVEN' : 'BUKTI'}
              </span>
              <span data-gsap="pop" data-gsap-delay="0.1" className="relative inline-block max-w-full">
                <img src={starIcon} alt="" aria-hidden="true" className="absolute right-1 top-1 h-7 w-7 animate-float min-[360px]:-right-4 min-[360px]:-top-9 min-[360px]:h-12 min-[360px]:w-12 sm:-right-10 sm:-top-10 sm:h-20 sm:w-20 md:-right-14 md:-top-14 md:h-28 md:w-28" />
                <span className="relative block max-w-full bg-accent-yellow px-4 py-2 pr-9 font-sans text-[clamp(1.45rem,6vw,3rem)] font-extrabold tracking-tight text-ink-900 min-[360px]:pr-6 sm:px-5 sm:pr-5 md:px-8">
                  {isEn ? 'Growth' : 'Nyata'}
                </span>
              </span>
            </span>

            <span className="mt-4 flex flex-wrap items-center gap-3 sm:gap-4 md:mt-6 md:gap-6">
              <span data-gsap="clip-left" data-gsap-delay="0.08" className="max-w-full text-[clamp(1.85rem,8vw,3.75rem)] font-extrabold text-white">
                {isEn ? 'METRICS' : 'PERTUMBUHAN'}
              </span>
              <span data-gsap="zoom" data-gsap-delay="0.15" className="inline-flex h-auto min-h-12 max-w-full flex-wrap items-center gap-2 rounded-full bg-[#CEFE4A] px-4 py-2 font-sans text-xs font-black uppercase tracking-widest text-ink-900 sm:min-h-14 sm:px-5 sm:text-sm md:px-6">
                <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-accent-magenta" />
                {t('portfolio.eyebrow')}
                <Zap className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              </span>
            </span>

            <span className="mt-6 grid items-end gap-6 xl:grid-cols-[auto_1fr_auto] xl:gap-10">
              <span data-gsap="clip-left" data-gsap-delay="0.14" className="font-sans text-[clamp(1.85rem,8vw,3.75rem)] font-extrabold tracking-tight text-white">HCM</span>
              <span data-gsap="zoom" data-gsap-delay="0.2" className="type-body max-w-xl font-sans text-white/85">
                {t('portfolio.subtitle')}
              </span>
              <a
                data-gsap="pop"
                data-gsap-delay="0.25"
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center bg-accent-yellow px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-ink-900 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl md:text-base"
              >
                {isEn ? 'Get Started' : 'Mulai Scale'}
                <span className="ml-2 text-lg font-black leading-none">+</span>
              </a>
            </span>
          </h1>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div data-gsap="clip-left">
              <p className="type-caption font-sans text-brand-600">
                {isEn ? 'Clients' : 'Klien'}
              </p>
              <h2 className="type-h2 mt-3 font-sans text-[#00104D]">
                {filter === 'all' ? (isEn ? 'Brand work' : 'Karya brand') : filters.find((item) => item.id === filter)?.label}
              </h2>
            </div>
            <p data-gsap="right" className="font-sans text-sm font-semibold text-ink-700">
              {shown.length} {isEn ? 'works' : 'karya'}
            </p>
          </div>

          <div data-gsap="fade" data-gsap-delay="0.08" className="mt-6 flex flex-wrap gap-2">
            {filters.map((item) => {
              const on = filter === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setFilter(item.id)}
                  className={`shrink-0 whitespace-nowrap rounded-lg border px-3 py-1.5 font-sans text-sm font-semibold transition-colors ${on ? 'border-[#00104D] bg-[#00104D] text-white' : 'border-[#00104D]/20 bg-white text-[#00104D] hover:border-brand-600 hover:text-brand-600'}`}
                >
                  {item.label}
                </button>
              )
            })}
          </div>

          <div data-gsap-group="stagger" data-gsap-stagger="0.06" className="mt-6 grid grid-cols-2 items-start gap-x-3 gap-y-5 lg:grid-cols-4">
            {shown.map((item) => {
              const category = categoryLabel[item.category]
              const portrait = item.type === 'video'
              return (
                <article key={item.id} data-gsap-item="zoom" className="group">
                  <div className={`relative overflow-hidden rounded-xl bg-brand-50 ${portrait ? 'aspect-[9/16]' : 'aspect-video'}`}>
                    <img
                      src={item.image}
                      alt={item.brand}
                      className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
                    />
                    {item.type === 'video' && <PlayMark />}
                  </div>
                  <h3 className="type-h3 mt-3 font-sans text-[#00104D]">{item.brand}</h3>
                  <p className="type-small mt-0.5 font-sans text-brand-600">
                    {isEn ? category.en : category.id}
                  </p>
                </article>
              )
            })}
          </div>
        </Container>
      </section>
    </main>
  )
}
