import Desktop from './04_footerDesktop';
import Mobile from './04_footerMobile';

export default function footer({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <Mobile /> : <Desktop />;
}
