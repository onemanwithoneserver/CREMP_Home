import InvestmentSnapshotDesktop from "./04_InvestmentSnapshotDesktop";
import InvestmentSnapshotMobile from "./04_InvestmentSnapshotMobile";

export default function InvestmentSnapshot({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <InvestmentSnapshotMobile /> : <InvestmentSnapshotDesktop />;
}
