import FranchiseNetworkDesktop from "./16_FranchiseNetworkDesktop";
import FranchiseNetworkMobile from "./16_FranchiseNetworkMobile";
export default function FranchiseNetwork({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <FranchiseNetworkMobile /> : <FranchiseNetworkDesktop />;
}
