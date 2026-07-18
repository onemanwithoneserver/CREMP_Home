import Desktop from './Desktop';
import Mobile from './Mobile';

export default function footer({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <Mobile /> : <Desktop />;
}
