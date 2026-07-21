import DesktopFAQ from "./DesktopFAQ";
import MobileFAQ from "./MobileFAQ";

export default function DeveloperAndOwnerFAQ({
  isMobile,
}: {
  isMobile: boolean;
}) {
  return isMobile ? <MobileFAQ /> : <DesktopFAQ />;
}
