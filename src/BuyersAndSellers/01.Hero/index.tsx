import DesktopHero from './DesktopHero'
import MobileHero from './MobileHero'

export default function BuyersAndSellersHero({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <MobileHero /> : <DesktopHero />
}
