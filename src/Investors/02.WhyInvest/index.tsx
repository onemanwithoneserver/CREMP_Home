import DesktopWhyInvest from "./DesktopWhyInvest";
import MobileWhyInvest from "./MobileWhyInvest";

export default function InvestorsWhyInvest({
    isMobile,
}: {
    isMobile: boolean;
}) {
    return isMobile ? <MobileWhyInvest /> : <DesktopWhyInvest />;
}
