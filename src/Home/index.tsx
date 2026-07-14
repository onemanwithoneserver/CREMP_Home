import Hero from './01.Hero'
import CreateOpportunities from './02.CreateOpportunities'
import EnableGrowth from './03.EnableGrowth'
import DiscoverOpportunities from './04.DiscoverOpportunities'

interface HomeProps {
  isMobile: boolean
}

export default function Home({ isMobile }: HomeProps) {
  return (
    <div className="w-full min-h-screen bg-white">
      <Hero isMobile={isMobile} />
      <CreateOpportunities isMobile={isMobile} />
      <EnableGrowth isMobile={isMobile} />
      <DiscoverOpportunities isMobile={isMobile} />
    </div>
  )
}
