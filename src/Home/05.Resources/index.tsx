import DesktopResources from './DesktopResources'
import MobileResources from './MobileResources'

interface ResourcesProps {
  isMobile: boolean
}

export default function Resources({ isMobile }: ResourcesProps) {
  return isMobile ? <MobileResources /> : <DesktopResources />
}
