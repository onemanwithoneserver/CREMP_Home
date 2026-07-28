import Header from "./01_header";
import Onboarding from "./02_Onboarding";
import StakeHolders from "./03_StakeHolder1";
import Footer from "./04_footer";

interface HomeProps {
  isMobile: boolean;
}

export default function Home({ isMobile }: HomeProps) {
  return (
          <div className="w-full min-h-screen flex flex-col bg-gray-50 dark:bg-[#0a1128] text-[#0a1128] dark:text-white transition-colors duration-300">
        <Header isMobile={isMobile} />
        <Onboarding isMobile={isMobile} />
        <StakeHolders isMobile={isMobile} />
        <Footer isMobile={isMobile} />
      </div>
      );
}
