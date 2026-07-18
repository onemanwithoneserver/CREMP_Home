import Desktop from './Desktop';
import Mobile from './Mobile';

export default function header({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <Mobile /> : <Desktop />;
}
