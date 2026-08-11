import DesktopWhyInvest from "./DesktopWhyInvest";
import MobileWhyInvest from "./MobileWhyInvest";

export default function DeveloperAndOwnerWhyInvest({
  isMobile,
}: {
  isMobile: boolean;
}) {
  return isMobile ? <MobileWhyInvest /> : <DesktopWhyInvest />;
}
