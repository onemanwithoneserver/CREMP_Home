import DesktopGrowth from './DesktopGrowth'
import MobileGrowth from './MobileGrowth'

export default function GrowthJourney({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <MobileGrowth /> : <DesktopGrowth />
}
