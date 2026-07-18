import Desktop from './Desktop';
import Mobile from './Mobile';

export default function Onboarding({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <Mobile /> : <Desktop />;
}
