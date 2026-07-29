import RevenueROIDesktop from "./06_RevenueROIDesktop";
import RevenueROIMobile from "./06_RevenueROIMobile";

export default function RevenueROI({ isMobile }: { isMobile: boolean }) {
    return isMobile ? <RevenueROIMobile /> : <RevenueROIDesktop />;
}
