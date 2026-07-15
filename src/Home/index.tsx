import Navbar from './00.Navbar'
import Hero from './01.Hero'
import Platform from './03.Platform'
import HowItWorks from './04.HowItWorks'
import Benefits from './05.Benefits'
import Metrics from './06.Metrics'
import Roles from './07.Roles'
import Testimonials from './07b.Testimonials'
import FAQ from './08.FAQ'
import CTA from './09.CTA'
import Footer from './10.Footer'

interface HomeProps {
  isMobile: boolean
}

export default function Home({ isMobile }: HomeProps) {
  return (
    <div className="w-full min-h-screen">
      <Navbar isMobile={isMobile} />
      <Hero isMobile={isMobile} />
      <Platform isMobile={isMobile} />
      <HowItWorks isMobile={isMobile} />
      <Benefits isMobile={isMobile} />
      <Metrics isMobile={isMobile} />
      <Roles isMobile={isMobile} />
      <Testimonials isMobile={isMobile} />
      <FAQ isMobile={isMobile} />
      <CTA isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </div>
  )
}
