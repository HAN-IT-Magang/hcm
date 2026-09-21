import { landingSections } from '@/data/landing'
import { About } from './About'
import { Contact } from './Contact'
import { Cta } from './Cta'
import { Faq } from './Faq'
import { Hero } from './Hero'
import { Logos } from './Logos'
import { Portfolio } from './Portfolio'
import { Pricing } from './Pricing'
import { Process } from './Process'
import { Services } from './Services'
import { Testimonials } from './Testimonials'
import { WhyUs } from './WhyUs'
import { Ratecard } from './Ratecard'

const registry = {
  hero: Hero,
  about: About,
  services: Services,
  whyUs: WhyUs,
  logos: Logos,
  portfolio: Portfolio,
  process: Process,
  testimonials: Testimonials,
  pricing: Pricing,
  ratecard: Ratecard,
  faq: Faq,
  cta: Cta,
  contact: Contact,
}

export function SectionRenderer({ sections = landingSections }) {
  return (
    <>
      {sections
        .filter((s) => s.enabled !== false && registry[s.type])
        .map((s) => {
          const Component = registry[s.type]
          return <Component key={s.id} />
        })}
    </>
  )
}
