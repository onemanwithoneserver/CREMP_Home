import Desktop from './desktop';
import Mobile from './mobile';

export default function SearchResults({ isMobile }: { isMobile?: boolean }) {
  if (isMobile) {
    return <Mobile />;
  }
  return <Desktop />;
}
