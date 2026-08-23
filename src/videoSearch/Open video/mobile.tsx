import { useRef, useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  Share2,
  MoreVertical,
  Volume2,
  VolumeX,
  ChevronLeft,
  Play,
  Bookmark,
  Maximize2,
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

  const toggleFullscreen = useCallback(() => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen?.();
      }
    }
  }, []);

  const content = (
    <div
      className="fixed inset-0 z-[100000] bg-black flex flex-col overflow-hidden"
      style={{ height: '100dvh' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <video
        ref={videoRef}
        src={video.videoUrl}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted={isMuted}
        onClick={togglePlay}
        playsInline
      />

      <div className="absolute top-0 left-0 right-0 px-4 pt-[env(safe-area-inset-top,12px)] pb-2 z-[120] flex items-center justify-between pointer-events-none">
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white pointer-events-auto active:scale-90 transition-transform"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
          className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white pointer-events-auto active:scale-90 transition-transform"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[110]">
          <div className="w-20 h-20 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center">
            <Play className="w-10 h-10 ml-1.5 text-white" fill="currentColor" />
          </div>
        </div>
      )}

      <div className="absolute right-3 bottom-[180px] z-[120] flex flex-col items-center gap-6">
        <button className="flex flex-col items-center gap-1.5 active:scale-90 transition-transform">
          <div className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white">
            <Share2 className="w-[22px] h-[22px]" />
          </div>
          <span className="text-white text-[11px] font-bold drop-shadow-lg">Share</span>
        </button>
        <button className="flex flex-col items-center gap-1.5 active:scale-90 transition-transform">
          <div className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white">
            <Bookmark className="w-[22px] h-[22px]" />
          </div>
          <span className="text-white text-[11px] font-bold drop-shadow-lg">Save</span>
        </button>
      </div>

      <div className="absolute right-3 bottom-[90px] z-[120] flex flex-col items-center gap-4">
        <button className="w-11 h-11 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white active:scale-90 transition-transform">
          <MoreVertical className="w-5 h-5" />
        </button>
        <button
          onClick={toggleFullscreen}
          className="w-11 h-11 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white active:scale-90 transition-transform"
        >
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 pb-[calc(env(safe-area-inset-bottom,8px)+12px)] z-[115] bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
        <div className="flex items-center gap-3 mb-2">
          <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-[#6366f1] via-[#a855f7] to-[#ec4899] shrink-0">
            <div className="w-full h-full rounded-full border-[2px] border-black overflow-hidden bg-gray-800">
              <img src={video.profilePic} alt={video.username} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-white text-[15px] font-extrabold drop-shadow-md">
                {video.username}
              </span>
              <svg className="w-4 h-4 text-[#60a5fa] shrink-0 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48z"/>
              </svg>
            </div>
            <span className="text-white/60 text-[11px] font-semibold drop-shadow-md">
              {video.likes} views
            </span>
          </div>
        </div>

        <p className="text-white text-[13px] font-semibold leading-snug drop-shadow-md pr-16">
          {video.description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 z-[125]">
        <div
          className="h-full bg-white rounded-r-full shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-[width] duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
