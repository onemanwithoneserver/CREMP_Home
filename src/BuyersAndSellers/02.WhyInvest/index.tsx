import DesktopWhyInvest from "./DesktopWhyInvest";
import MobileWhyInvest from "./MobileWhyInvest";

export default function BuyersAndSellersWhyInvest({
    isMobile,
}: {
    isMobile: boolean;
}) {
    return isMobile ? <MobileWhyInvest /> : <DesktopWhyInvest />;
}
