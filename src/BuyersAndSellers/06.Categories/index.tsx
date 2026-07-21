import DesktopCategories from './DesktopCategories'
import MobileCategories from './MobileCategories'

export default function BuyersAndSellersCategories({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <MobileCategories /> : <DesktopCategories />
}
