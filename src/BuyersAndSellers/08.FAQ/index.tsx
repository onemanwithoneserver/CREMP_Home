import DesktopFAQ from './DesktopFAQ'
import MobileFAQ from './MobileFAQ'

export default function BuyersAndSellersFAQ({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <MobileFAQ /> : <DesktopFAQ />
}
