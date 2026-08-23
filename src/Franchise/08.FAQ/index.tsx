import DesktopFAQ from "./DesktopFAQ";
import MobileFAQ from "./MobileFAQ";
export default function FranchiseFAQ({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <MobileFAQ /> : <DesktopFAQ />;
}
