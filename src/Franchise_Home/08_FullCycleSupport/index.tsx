import FullCycleSupportDesktop from "./08_FullCycleSupportDesktop";
import FullCycleSupportMobile from "./08_FullCycleSupportMobile";
export default function FullCycleSupport({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <FullCycleSupportMobile /> : <FullCycleSupportDesktop />;
}
