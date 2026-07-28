import ProvenPlaybookDesktop from "./12_ProvenPlaybookDesktop";
import ProvenPlaybookMobile from "./12_ProvenPlaybookMobile";

export default function ProvenPlaybook({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <ProvenPlaybookMobile /> : <ProvenPlaybookDesktop />;
}
