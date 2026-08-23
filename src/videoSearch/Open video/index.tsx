import { useState, useEffect } from 'react';
import DesktopOpenVideo from './desktop';
import MobileOpenVideo from './mobile';
import { reelsData, getReelData } from './data';

interface OpenVideoProps {
  onClose: () => void;
  initialVideoId?: string;
  isMobile?: boolean;
}

export default function OpenVideo({ onClose, initialVideoId, isMobile: isMobileProp }: OpenVideoProps) {
  const [isMobileWindow, setIsMobileWindow] = useState(window.innerWidth < 768);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobileWindow(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = isMobileProp !== undefined ? isMobileProp : isMobileWindow;

  useEffect(() => {
    if (initialVideoId) {
      const index = reelsData.findIndex(r => r.id === initialVideoId);
      setCurrentIndex(index !== -1 ? index : 0);
    }
  }, [initialVideoId]);

  const handleNext = () => {
    if (currentIndex < reelsData.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const currentVideo = (currentIndex === 0 && initialVideoId && !reelsData.find(r => r.id === initialVideoId)) 
    ? getReelData(initialVideoId)
    : reelsData[currentIndex] || reelsData[0];

  const SharedProps = {
    video: currentVideo,
    onClose,
    onNext: handleNext,
    onPrev: handlePrev,
    hasNext: currentIndex < reelsData.length - 1,
    hasPrev: currentIndex > 0,
  };

  if (isMobile) {
    return <MobileOpenVideo {...SharedProps} />;
  }

  return <DesktopOpenVideo {...SharedProps} />;
}
