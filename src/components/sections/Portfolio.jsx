import { useTranslation } from 'react-i18next'
import { Container } from '../ui/Container'
import takaraImg from '../../assets/portfolio/takara.jpg'
import vitalisImg from '../../assets/portfolio/vitalis.jpg'
import plantyImg from '../../assets/portfolio/planty.jpg'
import benihImg from '../../assets/portfolio/benih.jpg'
import slavinaImg from '../../assets/portfolio/slavina.jpg'
import hbuImg from '../../assets/portfolio/hbu.jpg'
import linkarImg from '../../assets/portfolio/linkar.jpg'
import seedImg from '../../assets/portfolio/seedpearl.jpg'
import landingImg from '../../assets/portfolio/landing.jpg'
import storeImg from '../../assets/portfolio/ecommerce.jpg'

export const categoryLabel = {
  photo: { id: 'Foto & Video Produk', en: 'Product Photo & Video' },
  live: { id: 'Live Commerce', en: 'Live Commerce' },
  social: { id: 'Social Media', en: 'Social Media' },
  design: { id: 'Desain Grafis', en: 'Graphic Design' },
  web: { id: 'Web Development', en: 'Web Development' },
}

// Dummy dulu. Ganti `image` dengan file asli dari folder kategori.
export const portfolioWorks = [
  { id: 'takara', category: 'photo', brand: 'Takara', type: 'image', image: takaraImg },
  { id: 'vitalis', category: 'photo', brand: 'Vitalis', type: 'image', image: vitalisImg },
  { id: 'planty', category: 'live', brand: 'PlantyGrow', type: 'video', image: plantyImg },
  { id: 'benih', category: 'live', brand: 'Benih Seribuan', type: 'video', image: benihImg },
  { id: 'slavina', category: 'social', brand: 'Slavina', type: 'video', image: slavinaImg },
  { id: 'hbu', category: 'social', brand: 'HBU', type: 'video', image: hbuImg },
  { id: 'linkar', category: 'design', brand: 'Linkar', type: 'image', image: linkarImg },
  { id: 'seed', category: 'design', brand: 'SeedPearl', type: 'image', image: seedImg },
  { id: 'landing', category: 'web', brand: 'Landing Page', type: 'image', image: landingImg },
  { id: 'store', category: 'web', brand: 'E-Commerce', type: 'image', image: storeImg },
]

export function PlayMark() {
  return (
    <span
      className="pointer-events-none absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent-yellow"
      aria-hidden="true"
    >
      <span className="block h-0 w-0 translate-x-[2px] border-y-[7px] border-y-transparent border-l-[11px] border-l-ink-900" />
    </span>
  )
}

export function Portfolio() {
  const { i18n } = useTranslation()
  const isEn = i18n.language === 'en'

  return (
    <section id="portfolio" className="relative z-[60] -mt-8 overflow-hidden rounded-t-[2rem] bg-[#0030FF] pt-16 pb-8 md:-mt-14 md:rounded-t-[3.5rem] md:py-24">
      <Container className="max-w-[90rem]">
        <h2 data-gsap="zoom" className="type-h2 mx-auto max-w-2xl text-center font-sans text-white">
          {isEn
            ? 'Creator content for performance driven brands'
            : 'Konten kreator untuk brand berbasis performa'}
        </h2>
      </Container>

      <div data-gsap="fade" className="mt-12 overflow-hidden md:mt-16 motion-reduce:overflow-x-auto">
        <div
          className="flex w-max animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]"
          style={{ animationDuration: '72s' }}
        >
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 gap-10 pr-10">
              {portfolioWorks.map((work) => {
                const category = categoryLabel[work.category]
                const categoryName = isEn ? category.en : category.id
                return (
                  <article
                    key={`${work.id}-${copy}`}
                    className="w-[78vw] shrink-0 sm:w-[420px] md:w-[500px]"
                    aria-hidden={copy === 1 ? true : undefined}
                  >
                  <h3 className="type-h3 mb-4 text-center font-sans text-white">
                    {work.brand}
                  </h3>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-ink-900/5">
                      <img
                        src={work.image}
                        alt={copy === 0 ? work.brand : ''}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      {work.type === 'video' && <PlayMark />}
                    </div>
                    <p className="type-small mt-3 text-center font-sans text-white/85">{categoryName}</p>
                  </article>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
