import { Footer } from '@/components/Footer'
import { PartnersMarquee } from '@/components/PartnersMarquee'
import { FinalCTA } from '@/sections/FinalCTA'
import { Hero } from '@/sections/Hero'
import { Process } from '@/sections/Process'
import { SelectedWork } from '@/sections/SelectedWork'
import { Services } from '@/sections/Services'

export function Home() {
  return (
    <>
      <Hero />
      <PartnersMarquee />
      <Process />
      <Services />
      <SelectedWork />
      <FinalCTA />
      <Footer />
    </>
  )
}
