import Desktop from "./02_OnboardingDesktop";
import Mobile from "./02_OnboardingMobile";
export default function Onboarding({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <Mobile /> : <Desktop />;
}
