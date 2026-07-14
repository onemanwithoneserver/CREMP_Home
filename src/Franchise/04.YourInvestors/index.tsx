import DesktopYourInvestors from './DesktopYourInvestors'
import MobileYourInvestors from './MobileYourInvestors'

export default function FranchiseYourInvestors({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <MobileYourInvestors /> : <DesktopYourInvestors />
}
