import Header from './01_header';
import Onboarding from './02_Onboarding';
import StakeHolders from './03_StakeHolders';
import Footer from './04_footer';
import Connect from './05_connect';
import { ThemeProvider } from './ThemeContext';

interface HomeProps {
  isMobile: boolean;
}

export default function Home({ isMobile }: HomeProps) {
  return (
    <ThemeProvider>
      <div className="w-full min-h-screen flex flex-col bg-gray-50 dark:bg-[#050C17] text-[#050C17] dark:text-white transition-colors duration-300">
        <Header isMobile={isMobile} />
        <Onboarding isMobile={isMobile} />
        <StakeHolders isMobile={isMobile} />
        <Footer isMobile={isMobile} />
        <Connect isMobile={isMobile} />
      </div>
    </ThemeProvider>
  );
}
