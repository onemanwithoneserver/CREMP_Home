import DesktopFinal from './DesktopFinal'
import MobileFinal from './MobileFinal'

export default function FinalPlatformFooter({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <MobileFinal /> : <DesktopFinal />
}
