import DesktopHero from "./DesktopHero";
import MobileHero from "./MobileHero";

export default function InvestorsHero({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <MobileHero /> : <DesktopHero />;
}
