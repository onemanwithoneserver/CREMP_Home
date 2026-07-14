import Navbar from './00.Navbar'
import Hero from './01.Hero'
import CreateOpportunities from './02.CreateOpportunities'
import EnableGrowth from './03.EnableGrowth'
import DiscoverOpportunities from './04.DiscoverOpportunities'
import Resources from './05.Resources'
import Footer from './06.Footer'
import GrowthJourney from './07.GrowthJourney'
import FinalPlatformFooter from './08.FinalPlatformFooter'

interface HomeProps {
  isMobile: boolean
}

export default function Home({ isMobile }: HomeProps) {
  return (
    <div className="w-full min-h-screen">
      <Navbar isMobile={isMobile} />
      <Hero isMobile={isMobile} />
      <CreateOpportunities isMobile={isMobile} />
      <EnableGrowth isMobile={isMobile} />
      <DiscoverOpportunities isMobile={isMobile} />
      <Resources isMobile={isMobile} />
      <Footer isMobile={isMobile} />
      <GrowthJourney isMobile={isMobile} />
      <FinalPlatformFooter isMobile={isMobile} />
    </div>
  )
}
