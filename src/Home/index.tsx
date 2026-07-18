import Header from './01_header';
import Onboarding from './02_Onboarding';
import StakeHolders from './03_StakeHolders';
import Footer from './04_footer';

interface HomeProps {
  isMobile: boolean;
}

export default function Home({ isMobile }: HomeProps) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header isMobile={isMobile} />
      <Onboarding isMobile={isMobile} />
      <StakeHolders isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </div>
  );
}
