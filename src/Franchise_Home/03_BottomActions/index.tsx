import BottomActionsDesktop from "./03_BottomActionsDesktop";
import BottomActionsMobile from "./03_BottomActionsMobile";

export default function BottomActions({ isMobile }: { isMobile: boolean }) {
  return isMobile ? <BottomActionsMobile /> : <BottomActionsDesktop />;
}
