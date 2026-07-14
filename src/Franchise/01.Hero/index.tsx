import DesktopHero from './DesktopHero'
import MobileHero from './MobileHero'

export default function FranchiseHero({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <MobileHero /> : <DesktopHero />
}
