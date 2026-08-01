import IdealPartnerDesktop from "./07_IdealPartnerDesktop";
import IdealPartnerMobile from "./07_IdealPartnerMobile";

export default function IdealPartner({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <IdealPartnerMobile /> : <IdealPartnerDesktop />;
}
