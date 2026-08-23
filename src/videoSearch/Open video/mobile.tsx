import { useRef, useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  Share2,
  MoreVertical,
  Volume2,
  VolumeX,
  ArrowLeft,
  Play,
  Bookmark,
  MessageSquare,
  Heart,
} from 'lucide-react';
import type { ReelData } from './data';
interface MobileProps {
  video: ReelData;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}
export default function MobileOpenVideo({ video, onClose, onNext, onPrev, hasNext, hasPrev }: MobileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = () => {
    const delta = touchStartY.current - touchEndY.current;
    if (delta > 60) {
      if (hasNext) onNext();
    } else if (delta < -60) {
      if (hasPrev) onPrev();
    }
  };
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
      setIsPlaying(true);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [video]);
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const onTime = () => {
      if (vid.duration) setProgress((vid.currentTime / vid.duration) * 100);
    };
    vid.addEventListener('timeupdate', onTime);
    return () => vid.removeEventListener('timeupdate', onTime);
  }, [video]);
  const resetControlsTimeout = useCallback(() => {
    setShowControls(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (isPlaying) {
      timeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  }, [isPlaying]);
  useEffect(() => {
    resetControlsTimeout();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isPlaying, resetControlsTimeout]);
  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);
  const content = (
    <div
      className="fixed inset-0 z-[100000] bg-white flex flex-col overflow-hidden"
      style={{ height: '100dvh' }}
      onTouchStart={(e) => {
        handleTouchStart(e);
        resetControlsTimeout();
      }}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={resetControlsTimeout}
    >
      {}
      <div className="absolute inset-0 bg-black flex items-center justify-center">
        <video
          ref={videoRef}
          src={video.videoUrl}
          className="w-full h-full object-contain"
          loop
          muted={isMuted}
          onClick={togglePlay}
          playsInline
        />
      </div>
      {}
      <div className={`absolute top-0 left-0 right-0 px-4 py-4 z-[120] flex items-center justify-between pointer-events-none transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        {}
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-white flex items-center justify-center text-black pointer-events-auto active:scale-90 transition-transform shadow-md"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        {}
        <button
          onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
          className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-white flex items-center justify-center text-black pointer-events-auto active:scale-90 transition-transform shadow-md"
        >
          {isMuted ? <VolumeX className="w-[18px] h-[18px]" /> : <Volume2 className="w-[18px] h-[18px]" />}
        </button>
      </div>
      {}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[110]">
          <div className="w-16 h-16 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
            <Play className="w-8 h-8 ml-1 text-black" fill="currentColor" />
          </div>
        </div>
      )}
      {}
      <div className={`absolute bottom-0 left-0 right-16 p-4 pb-6 z-[115] bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        {}
        <div className="flex items-center gap-3 mb-2.5 pointer-events-auto">
          <div className="relative w-10 h-10 rounded-full p-[2px] bg-gradient-to-br from-[#d4af37] via-[#f59e0b] to-[#ec4899] shrink-0">
            <div className="w-full h-full rounded-full border-[2px] border-white overflow-hidden bg-gray-100">
              <img src={video.profilePic} alt={video.username} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-white text-[14px] font-bold drop-shadow-md">
              {video.username}
            </span>
            <svg className="w-3.5 h-3.5 text-[#60a5fa] shrink-0 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
              <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48z"/>
            </svg>
          </div>
          <button className="ml-2 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold rounded-full border border-white/40 pointer-events-auto active:scale-95 transition-transform uppercase tracking-wider">
            Follow
          </button>
        </div>
        {}
        <p className="text-white text-[13px] font-medium leading-snug drop-shadow-md">
          {video.description}
        </p>
      </div>
      {}
      <div className={`absolute right-3 bottom-24 z-[120] flex flex-col items-center gap-5 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button className="flex flex-col items-center gap-1 active:scale-90 transition-transform">
          <div className="w-11 h-11 rounded-full bg-white/70 backdrop-blur-md border border-white flex items-center justify-center text-black shadow-md">
            <Heart className="w-5 h-5" fill="none" />
          </div>
          <span className="text-white text-[10px] font-bold drop-shadow-md">{video.likes}</span>
        </button>
        <button className="flex flex-col items-center gap-1 active:scale-90 transition-transform">
          <div className="w-11 h-11 rounded-full bg-white/70 backdrop-blur-md border border-white flex items-center justify-center text-black shadow-md">
            <MessageSquare className="w-5 h-5" />
          </div>
          <span className="text-white text-[10px] font-bold drop-shadow-md">{video.comments}</span>
        </button>
        <button className="flex flex-col items-center gap-1 active:scale-90 transition-transform">
          <div className="w-11 h-11 rounded-full bg-white/70 backdrop-blur-md border border-white flex items-center justify-center text-black shadow-md">
            <Share2 className="w-5 h-5" />
          </div>
          <span className="text-white text-[10px] font-bold drop-shadow-md">{video.shares}</span>
        </button>
        <button className="flex flex-col items-center gap-1 active:scale-90 transition-transform">
          <div className="w-11 h-11 rounded-full bg-white/70 backdrop-blur-md border border-white flex items-center justify-center text-black shadow-md">
            <Bookmark className="w-5 h-5" />
          </div>
          <span className="text-white text-[10px] font-bold drop-shadow-md">Save</span>
        </button>
        <button className="w-11 h-11 rounded-full bg-white/70 backdrop-blur-md border border-white flex items-center justify-center text-black shadow-md active:scale-90 transition-transform">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
      {}
      <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 z-[120] transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <div
          className="h-full bg-white transition-[width] duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
  return createPortal(content, document.body);
}
