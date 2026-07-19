import Desktop from './04_footerDesktop';
import Mobile from './04_footerMobile';

export default function footer({ isMobile, hideCTA = false }: { isMobile: boolean, hideCTA?: boolean }) {
  return isMobile ? <Mobile hideCTA={hideCTA} /> : <Desktop hideCTA={hideCTA} />;
}
