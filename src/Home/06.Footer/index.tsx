import DesktopFooter from './DesktopFooter'
import MobileFooter from './MobileFooter'

interface FooterProps {
  isMobile: boolean
}

export default function Footer({ isMobile }: FooterProps) {
  return isMobile ? <MobileFooter /> : <DesktopFooter />
}
