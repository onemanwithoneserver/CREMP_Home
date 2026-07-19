import Hero from './01.Hero'
import Ecosystem from './02.Ecosystem'
import YourBrand from './03.YourBrand'
import YourInvestors from './04.YourInvestors'
import YourMarkets from './05.YourMarkets'
import FoundingPartner from './06.FoundingPartner'
import Categories from './07.Categories'
import FAQ from './08.FAQ'

// Reusing Header, Footer, and ThemeContext from the Home section
import Header from '../Home/01_header'
import Footer from '../Home/04_footer'
import { ThemeProvider } from '../Home/ThemeContext'

interface FranchiseProps {
  isMobile: boolean
}

export default function Franchise({ isMobile }: FranchiseProps) {
  return (
    <ThemeProvider>
      <div className="w-full min-h-screen flex flex-col bg-gray-50 dark:bg-[#050C17] text-gray-900 dark:text-white transition-colors duration-300">
        <Header isMobile={isMobile} />
        
        <div className="flex-1 flex flex-col">
          <Hero isMobile={isMobile} />
          <Ecosystem isMobile={isMobile} />
          <YourBrand isMobile={isMobile} />
          <YourInvestors isMobile={isMobile} />
          <YourMarkets isMobile={isMobile} />
          <FoundingPartner isMobile={isMobile} />
          <Categories isMobile={isMobile} />
          <FAQ isMobile={isMobile} />
        </div>

        <Footer isMobile={isMobile} />
      </div>
    </ThemeProvider>
  )
}
