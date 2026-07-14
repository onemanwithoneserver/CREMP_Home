import DesktopYourBrand from './DesktopYourBrand'
import MobileYourBrand from './MobileYourBrand'

export default function FranchiseYourBrand({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <MobileYourBrand /> : <DesktopYourBrand />
}
