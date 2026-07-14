import DesktopEnable from './DesktopEnable'
import MobileEnable from './MobileEnable'

interface EnableProps {
  isMobile: boolean
}

export default function EnableGrowth({ isMobile }: EnableProps) {
  return isMobile ? <MobileEnable /> : <DesktopEnable />
}
