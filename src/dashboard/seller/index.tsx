import SellerDashboardMobile from "./mobile";
import SellerDashboardDesktop from "./desktop";
import { useEffect, useState } from "react";

export default function SellerDashboard() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <SellerDashboardMobile /> : <SellerDashboardDesktop />;
}
