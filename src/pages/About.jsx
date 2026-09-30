import { HeroAbout } from '@/components/about/HeroAbout'
import { TeamSection } from '@/components/about/TeamSection'
import { ServiceList } from '@/components/about/ServiceList'
import { Logos } from '@/components/sections/Logos'

export function About() {
  return (
    <main className="w-full min-h-screen overflow-hidden">
      <HeroAbout />
      <TeamSection />
      <ServiceList />
      <Logos />
    </main>
  )
}
