import DesktopHero from './DesktopHero'
import MobileHero from './MobileHero'

interface HeroProps {
  isMobile: boolean
}

export default function Hero({ isMobile }: HeroProps) {
  return isMobile ? <MobileHero /> : <DesktopHero />
}
