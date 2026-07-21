import DesktopHowItWorks from './DesktopHowItWorks'
import MobileHowItWorks from './MobileHowItWorks'

export default function BuyersAndSellersHowItWorks({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <MobileHowItWorks /> : <DesktopHowItWorks />
}
