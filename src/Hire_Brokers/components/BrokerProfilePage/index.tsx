

import type { Broker } from '../../types/broker.types';
import { ProfileHeader } from './ProfileHeader';
import { StatsBar } from './StatsBar';
import { CommercialExpertise } from './CommercialExpertise';
import { DealSection } from './DealSection';
import { AboutSection } from './AboutSection';
import { ServiceableLocationsSection } from './ServiceableLocations';
import { TestimonialsSection } from './Testimonials';
import { RecentTransactionsSection } from './RecentTransactions';
import { RERASection } from './RERASection';
import { BottomCTABar } from './BottomCTABar';

interface BrokerProfilePageProps {
  broker: Broker;
  isDesktop: boolean;
}

export default function BrokerProfilePage({ broker, isDesktop }: BrokerProfilePageProps) {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden relative bg-[#f5f6fa]" style={{ fontFamily: 'Outfit, sans-serif' }}>

      
      <div className="flex-1 min-h-0 overflow-y-auto cb-scroll-thin">
        <ProfileHeader broker={broker} isDesktop={isDesktop} />
        <StatsBar broker={broker} isDesktop={isDesktop} />
        <CommercialExpertise broker={broker} isDesktop={isDesktop} />

        
        <DealSection broker={broker} isDesktop={isDesktop} />

        
        {(broker.serviceableLocations?.length ?? 0) > 0 && (
          <ServiceableLocationsSection broker={broker} isDesktop={isDesktop} />
        )}

        
        <AboutSection broker={broker} isDesktop={isDesktop} />

        
        <TestimonialsSection broker={broker} isDesktop={isDesktop} />

        
        <RecentTransactionsSection broker={broker} isDesktop={isDesktop} />

        
        <RERASection broker={broker} isDesktop={isDesktop} />

        <div className="h-2" />
      </div>

      
      <BottomCTABar broker={broker} isDesktop={isDesktop} />
    </div>
  );
}
