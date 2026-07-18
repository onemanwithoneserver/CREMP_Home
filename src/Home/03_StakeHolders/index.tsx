import Desktop from './Desktop';
import Mobile from './Mobile';

export default function StakeHolders({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <Mobile /> : <Desktop />;
}
