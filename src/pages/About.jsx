import { HeroAbout } from '@/components/about/HeroAbout'
import { TeamSection } from '@/components/about/TeamSection'
import { ServiceList } from '@/components/about/ServiceList'
import { HowWeWork } from '@/components/about/HowWeWork'
import { Logos } from '@/components/sections/Logos'
import { Faq } from '@/components/sections/Faq'

export function About() {
  return (
    <main className="w-full min-h-screen overflow-hidden">
      <HeroAbout />
      <TeamSection />
      <ServiceList />
      <HowWeWork />
      <Logos />
      <Faq />
    </main>
  )
}
