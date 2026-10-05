import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { localizePath } from '@/lib/locale'
import { useLang } from '@/components/ui/LanguageMenu'
import { useTranslation } from 'react-i18next'
import { Zap } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/config/site'
import { PlayMark, categoryLabel, portfolioWorks } from '@/components/sections/Portfolio'
import { serviceBySlug, services } from '@/data/services'
import { NotFound } from '@/pages/NotFound'
import starIcon from '@/assets/Icon.webp'

export function ServicePage() {
  const { slug } = useParams()
  const { t } = useTranslation()
  const lang = useLang()
  const isEn = lang === 'en'
  const service = serviceBySlug(slug)

  const steps = t('process.steps', { returnObjects: true })
  const stepList = Array.isArray(steps) ? steps : []
  const videos = portfolioWorks.filter((work) => work.type === 'video').slice(0, 4)
  const otherServices = services
    .filter((item) => item.slug !== slug)
    .map((item, index) => ({
      ...item,
      image: portfolioWorks[index % portfolioWorks.length].image,
    }))
  const railRef = useRef(null)
  const [openFaq, setOpenFaq] = useState(-1)

  useEffect(() => {
    window.scrollTo(0, 0)
    setOpenFaq(-1)
  }, [slug])

  function slideRail(direction) {
    const rail = railRef.current
    if (!rail) return
    rail.scrollBy({ left: direction * 300, behavior: 'smooth' })
  }

  const waMessage = isEn
    ? `Hello HCM, I want to ask about ${service?.title.en}.`
    : `Halo HCM, saya mau tanya tentang ${service?.title.id}.`
  const waUrl = `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(waMessage)}`

  if (!service) return <NotFound />

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-accent-cyan pt-[72px] lg:pt-[80px]">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-1/3 top-1/4 h-[420px] w-[720px] -translate-x-1/2 bg-white/10 blur-[110px]" />
        </div>
        <Container className="relative z-10 px-6 py-14 md:py-20">
          <nav data-gsap="zoom" aria-label="Breadcrumb" className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1.5 font-sans text-xs font-medium text-white/85 md:text-sm">
            <Link to={localizePath('/', lang)} reloadDocument className="transition-colors hover:text-white">{isEn ? 'Home' : 'Beranda'}</Link>
            <span aria-hidden="true" className="font-bold text-white">»</span>
            <span className="text-white">{isEn ? 'Services' : 'Layanan'}</span>
          </nav>

          <h1 className="font-sans leading-[0.95] tracking-tight">
            <span className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
              <span data-gsap="clip-left" className="max-w-full text-[clamp(1.85rem,8vw,3.75rem)] font-extrabold text-white">{service.lead[lang]}</span>
              <span data-gsap="pop" data-gsap-delay="0.1" className="relative inline-block max-w-full">
                <img src={starIcon} alt="" aria-hidden="true" className="absolute right-1 top-1 h-7 w-7 animate-float min-[360px]:-right-4 min-[360px]:-top-9 min-[360px]:h-12 min-[360px]:w-12 sm:-right-10 sm:-top-10 sm:h-20 sm:w-20 md:-right-14 md:-top-14 md:h-28 md:w-28" />
                <span className="relative block max-w-full bg-accent-yellow px-4 py-2 pr-9 font-sans text-[clamp(1.45rem,6vw,3rem)] font-extrabold tracking-tight text-ink-900 min-[360px]:pr-6 sm:px-5 sm:pr-5 md:px-8">
                  {service.highlight[lang]}
                </span>
              </span>
            </span>
            <span className="mt-4 flex flex-wrap items-center gap-4 md:mt-6 md:gap-6">
              <span data-gsap="zoom" data-gsap-delay="0.15" className="inline-flex h-auto min-h-12 max-w-full flex-wrap items-center gap-2 rounded-full bg-[#CEFE4A] px-4 py-2 font-sans text-xs font-black uppercase tracking-widest text-ink-900 sm:min-h-14 sm:px-5 sm:text-sm md:px-6">
                <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-accent-magenta" />
                {service.pill[lang]}
                <Zap className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
              </span>
            </span>
            <span className="mt-6 grid items-end gap-6 xl:grid-cols-[1fr_auto] xl:gap-10">
              <span data-gsap="zoom" data-gsap-delay="0.2" className="type-body max-w-xl font-sans text-white/85">
                {service.summary[lang]}
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

      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="grid items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <div data-gsap="clip-left">
              <p className="type-caption inline-flex border border-brand-600 px-3 py-1 font-sans text-brand-600">
                {isEn ? 'Service' : 'Layanan'}
              </p>
              <h2 className="type-h2 mt-4 max-w-sm font-sans text-[#00104D]">
                {service.title[lang]}
              </h2>
            </div>

            <div data-gsap="clip-right">
              <p className="type-body font-sans text-ink-700">{service.summary[lang]}</p>

              <h3 className="type-h3 mt-8 font-sans text-[#00104D]">
                {isEn ? 'What we do' : 'Apa yang kami lakukan'}
              </h3>
              <ul data-gsap-group="stagger" data-gsap-stagger="0.06" className="mt-4 space-y-4">
                {service.points[lang].map((point) => (
                  <li key={point} data-gsap-item="zoom" className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-600 text-brand-600" aria-hidden="true">
                      <span className="text-xs font-bold leading-none">+</span>
                    </span>
                    <span className="type-body font-sans text-[#00104D]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-50 py-16 md:py-20">
        <Container>
          <h2 data-gsap="clip-left" className="type-h2 max-w-md font-sans text-[#00104D]">
            {t('process.title')}
          </h2>

          <div data-gsap-group="stagger" data-gsap-stagger="0.08" className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stepList.map((step) => (
              <article key={step.no} data-gsap-item="zoom">
                <span className="inline-flex bg-brand-600 px-2 py-1 font-sans text-xs font-bold text-white">
                  {step.no}
                </span>
                <h3 className="type-h3 mt-4 font-sans text-[#00104D]">{step.title}</h3>
                <p className="type-small mt-2 font-sans text-ink-700">{step.desc}</p>
              </article>
            ))}
          </div>

          <div data-gsap-group="stagger" data-gsap-stagger="0.06" className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {videos.map((work) => {
              const category = categoryLabel[work.category]
              const categoryName = isEn ? category.en : category.id
              return (
                <article key={work.id} data-gsap-item="zoom">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-white">
                    <img src={work.image} alt={work.brand} className="h-full w-full object-cover" />
                    <PlayMark />
                  </div>
                  <p className="type-small mt-2 font-sans font-semibold text-[#00104D]">{work.brand}</p>
                  <p className="mt-0.5 font-sans text-xs text-ink-500">{categoryName}</p>
                </article>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="bg-brand-600 py-16 md:py-20">
        <Container className="max-w-3xl">
          <p data-gsap="fade" className="type-caption font-sans text-accent-yellow">FAQ</p>
          <h2 data-gsap="clip-left" className="type-h2 mt-3 font-sans text-white">
            {isEn ? `Questions about ${service.title.en}` : `Pertanyaan seputar ${service.title.id}`}
          </h2>
          <div data-gsap-group="stagger" data-gsap-stagger="0.06" className="mt-8 border-t border-white/20">
            {(service.faq || []).map((item, index) => {
              const open = openFaq === index
              return (
                <div key={item.q.id} data-gsap-item="zoom" className="border-b border-white/20">
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left"
                  >
                    <span className="type-body font-sans text-white">{item.q[lang]}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white text-accent-yellow" aria-hidden="true">
                      <span className={`text-sm font-bold leading-none transition-transform ${open ? 'rotate-45' : ''}`}>+</span>
                    </span>
                  </button>
                  {open && (
                    <p className="type-small pb-4 font-sans text-white/85">{item.a[lang]}</p>
                  )}
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <h2 data-gsap="clip-left" className="type-h2 min-w-0 font-sans text-[#00104D]">
              {isEn ? 'Other services' : 'Layanan lainnya'}
            </h2>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => slideRail(-1)}
                aria-label={isEn ? 'Previous services' : 'Layanan sebelumnya'}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-600/20 bg-white text-brand-600 transition-colors hover:bg-brand-600 hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M15 6 9 12l6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => slideRail(1)}
                aria-label={isEn ? 'Next services' : 'Layanan berikutnya'}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white transition-colors hover:bg-brand-700"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </Container>

        <div
          ref={railRef}
          className="mt-8 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div data-gsap-group="stagger" data-gsap-stagger="0.06" className="flex w-max gap-4 pl-[max(1.25rem,calc((100%-80rem)/2+2rem))] pr-8 sm:pl-[max(2rem,calc((100%-80rem)/2+2rem))]">
            {otherServices.map((item) => (
                <article key={item.slug} data-gsap-item="zoom" className="w-[240px] shrink-0 overflow-hidden rounded-2xl sm:w-[260px]">
                  <div className="aspect-[4/3] overflow-hidden bg-brand-50">
                    <img src={item.image} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div className="bg-brand-600 px-4 py-5 text-white">
                    <h3 className="font-sans text-sm font-bold text-white">{item.title[lang]}</h3>
                    <p className="type-small mt-2 font-sans text-white/85">
                      {item.summary[lang]}
                    </p>
                    <Link
                      reloadDocument
                      to={localizePath(`/layanan/${item.slug}`, lang)}
                      className="mt-4 inline-block font-sans text-xs font-semibold underline underline-offset-4 md:text-sm"
                    >
                      {isEn ? 'View more' : 'Selengkapnya'}
                    </Link>
                  </div>
                </article>
            ))}
          </div>
        </div>

      </section>
    </main>
  )
}
