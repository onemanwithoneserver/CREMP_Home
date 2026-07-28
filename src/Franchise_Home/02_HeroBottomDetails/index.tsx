import HeroBottomDetailsDesktop from "./02_HeroBottomDetailsDesktop";
import HeroBottomDetailsMobile from "./02_HeroBottomDetailsMobile";

export default function HeroBottomDetails({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <HeroBottomDetailsMobile /> : <HeroBottomDetailsDesktop />;
}
