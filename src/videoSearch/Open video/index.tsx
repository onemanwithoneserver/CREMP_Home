import { useState, useEffect } from 'react';
import DesktopOpenVideo from './desktop';
import MobileOpenVideo from './mobile';
import { reelsData, getReelData } from './data';

interface OpenVideoProps {
  onClose: () => void;
  initialVideoId?: string;
}

export default function OpenVideo({ onClose, initialVideoId }: OpenVideoProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (initialVideoId) {
      // Try to find the exact index in our dummy reelsData
      const index = reelsData.findIndex(r => r.id === initialVideoId);
      if (index !== -1) {
        setCurrentIndex(index);
      } else {
        // If it's a random video, we just show it as the first one or at index 0
        setCurrentIndex(0);
      }
    }
  }, [initialVideoId]);

  const handleNext = () => {
    if (currentIndex < reelsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Use the specific ID if it's not found in the array and we are at index 0
  const currentVideo = (currentIndex === 0 && initialVideoId && !reelsData.find(r => r.id === initialVideoId)) 
    ? getReelData(initialVideoId)
    : reelsData[currentIndex] || reelsData[0];

  if (isMobile) {
    return (
      <MobileOpenVideo 
        video={currentVideo} 
        onClose={onClose} 
        onNext={handleNext} 
        onPrev={handlePrev} 
        hasNext={currentIndex < reelsData.length - 1}
        hasPrev={currentIndex > 0}
      />
    );
  }

  return (
    <DesktopOpenVideo 
      video={currentVideo} 
      onClose={onClose} 
      onNext={handleNext} 
      onPrev={handlePrev}
      hasNext={currentIndex < reelsData.length - 1}
      hasPrev={currentIndex > 0}
    />
  );
}
