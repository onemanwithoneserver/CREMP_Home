import DesktopFoundingPartner from "./DesktopFoundingPartner";
import MobileFoundingPartner from "./MobileFoundingPartner";

export default function FranchiseFoundingPartner({
  isMobile,
}: {
  isMobile: boolean;
}) {
  return isMobile ? <MobileFoundingPartner /> : <DesktopFoundingPartner />;
}
