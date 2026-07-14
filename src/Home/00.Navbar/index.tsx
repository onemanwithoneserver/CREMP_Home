import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'

export default function Navbar({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <MobileNavbar /> : <DesktopNavbar />
}
