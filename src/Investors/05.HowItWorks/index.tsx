import DesktopHowItWorks from './DesktopHowItWorks'
import MobileHowItWorks from './MobileHowItWorks'

export default function InvestorsHowItWorks({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <MobileHowItWorks /> : <DesktopHowItWorks />
}
