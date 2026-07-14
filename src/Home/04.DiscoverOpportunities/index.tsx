import DesktopDiscover from './DesktopDiscover'
import MobileDiscover from './MobileDiscover'

interface DiscoverProps {
  isMobile: boolean
}

export default function DiscoverOpportunities({ isMobile }: DiscoverProps) {
  return isMobile ? <MobileDiscover /> : <DesktopDiscover />
}
