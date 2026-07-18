import Desktop from './03_StakeHoldersDesktop';
import Mobile from './03_StakeHoldersMobile';

export default function StakeHolders({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <Mobile /> : <Desktop />;
}
