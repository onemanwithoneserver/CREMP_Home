import DesktopBuyersAndSellersProfile from './DesktopBuyersAndSellersProfile'
import MobileBuyersAndSellersProfile from './MobileBuyersAndSellersProfile'

export default function BuyersAndSellersProfile({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <MobileBuyersAndSellersProfile /> : <DesktopBuyersAndSellersProfile />
}
