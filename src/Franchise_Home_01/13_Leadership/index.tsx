import LeadershipDesktop from "./13_LeadershipDesktop";
import LeadershipMobile from "./13_LeadershipMobile";
export default function Leadership({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <LeadershipMobile /> : <LeadershipDesktop />;
}
