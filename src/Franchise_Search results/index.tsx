import { motion } from "framer-motion";
import Desktop from "./desktop";
import Mobile from "./mobile";
import SiteHeader from "../components/commonfiles/Header/headerdesktop";
import SiteFooter from "../components/commonfiles/Footer/footerdesktop";
export default function FranchiseSearchResults({ isMobile }: { isMobile?: boolean }) {
  if (isMobile) {
    return (
      <div className="flex flex-col w-full bg-white dark:bg-[#0b1b42] min-h-screen relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <SiteHeader isMobile={isMobile} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 relative flex flex-col w-full"
        >
          <Mobile />
        </motion.div>
      </div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#f8f9fc]">
      <SiteHeader />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex-1 flex flex-col"
      >
        <Desktop />
      </motion.div>
      <SiteFooter />
    </div>
  );
}
