import Hero from './01.Hero'
import WhyInvest from './02.WhyInvest'
import Opportunities from './03.Opportunities'
import InvestorProfile from './04.InvestorProfile'
import HowItWorks from './05.HowItWorks'
import Categories from './06.Categories'
import Testimonials from './07.Testimonials'
import FAQ from './08.FAQ'

// Reusing Header, Footer, and ThemeContext from the Home section
import Header from '../Home/01_header'
import Footer from '../Home/04_footer'
import { ThemeProvider } from '../Home/ThemeContext'

interface InvestorsProps {
  isMobile: boolean
}

export default function Investors({ isMobile }: InvestorsProps) {
  return (
    <ThemeProvider>
      <div className="w-full min-h-screen flex flex-col bg-gray-50 dark:bg-[#0a1128] text-gray-900 dark:text-white transition-colors duration-300">
        <Header isMobile={isMobile} />
        
        <div className="flex-1 flex flex-col">
          <Hero isMobile={isMobile} />
          <WhyInvest isMobile={isMobile} />
          <Opportunities isMobile={isMobile} />
          <InvestorProfile isMobile={isMobile} />
          <HowItWorks isMobile={isMobile} />
          <Categories isMobile={isMobile} />
          <Testimonials isMobile={isMobile} />
          <FAQ isMobile={isMobile} />
        </div>

        <Footer isMobile={isMobile} hideCTA={true} />
      </div>
    </ThemeProvider>
  )
}
