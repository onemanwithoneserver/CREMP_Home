import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'

export default function Navbar({ isMobile, activeTab = 'home' }: { isMobile: boolean, activeTab?: 'home' | 'franchise' }) {
  return isMobile ? <MobileNavbar activeTab={activeTab} /> : <DesktopNavbar activeTab={activeTab} />
}
