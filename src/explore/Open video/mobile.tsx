import { useRef, useState, useEffect, useCallback, Suspense, lazy } from 'react';

const BuildingBox = lazy(() => import('../../BuildingBox'));
const AllBuildingBox = lazy(() => import('../../AllBuildingBox'));
const LandBox = lazy(() => import('../../LandBox'));
const FranchiseHome = lazy(() => import('../../Franchise_Home'));
import {
  Share2,
  Volume2,
  VolumeX,
  ChevronLeft,
  Play,
  Bookmark,
  Maximize2,
  Minimize2,
  ExternalLink,
  MoreVertical,
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

const getPopupConfig = (category?: string) => {
  const lowerCat = category?.toLowerCase() || "";
  if (lowerCat.includes("franchise") || lowerCat.includes("distribution")) {
    return { id: 'franchise' };
  } else if (lowerCat.includes("land") || lowerCat.includes("plot") || lowerCat.includes("farm")) {
    return { id: 'land' };
  } else if (lowerCat.includes("running") || lowerCat.includes("fractional") || lowerCat.includes("pre-leased")) {
    return { id: 'all' };
  }
  return { id: 'commercial' };
};

export default function MobileOpenVideo({ video, onClose, onNext, onPrev, hasNext, hasPrev }: MobileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isClearScreen, setIsClearScreen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [activePopup, setActivePopup] = useState<string | null>(null);
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

  const content = (
    <>
      <div
        className="fixed inset-0 z-[100000] bg-gray-50 flex flex-col overflow-hidden transition-colors duration-500"
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

          {!isClearScreen && (
            <div className="absolute top-0 left-0 right-0 px-4 pt-[env(safe-area-inset-top,12px)] pb-2 z-[120] flex items-center justify-between pointer-events-none">
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-2xl border border-white flex items-center justify-center text-[#0a1128] shadow-[0_4px_12px_rgba(0,0,0,0.1)] pointer-events-auto active:scale-90 active:border-white/80 active:bg-white transition-all hover:text-[#d4af37] shrink-0"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
                className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-2xl border border-white flex items-center justify-center text-[#0a1128] shadow-[0_4px_12px_rgba(0,0,0,0.1)] pointer-events-auto active:scale-90 active:border-white/80 active:bg-white transition-all hover:text-[#d4af37] shrink-0"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>
          )}

        {!isPlaying && !isClearScreen && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[110] bg-white/20 backdrop-blur-[2px]">
            <div className="w-20 h-20 bg-white/70 backdrop-blur-2xl rounded-full border border-white shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center justify-center animate-pulse">
              <Play className="w-10 h-10 ml-1.5 text-[#d4af37]" fill="currentColor" />
            </div>
          </div>
        )}

        <div className="absolute right-3 bottom-[calc(env(safe-area-inset-bottom,8px)+24px)] z-[120] flex flex-col items-center gap-6 pointer-events-none">
          {!isClearScreen && (
            <>
              <button className="flex flex-col items-center gap-1.5 pointer-events-auto active:scale-90 transition-all">
                <Share2 className="w-6 h-6 text-[#0a1128] drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]" />
                <span className="text-[#0a1128] text-[10px] font-bold drop-shadow-sm tracking-widest uppercase">Share</span>
              </button>
              <button onClick={() => setIsSaved(!isSaved)} className="flex flex-col items-center gap-1.5 pointer-events-auto active:scale-90 transition-all">
                <Bookmark className={`w-6 h-6 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] transition-colors ${isSaved ? 'text-[#d4af37]' : 'text-[#0a1128]'}`} fill={isSaved ? "currentColor" : "none"} />
                <span className={`text-[10px] font-bold drop-shadow-sm tracking-widest uppercase transition-colors ${isSaved ? 'text-[#d4af37]' : 'text-[#0a1128]'}`}>{isSaved ? 'Saved' : 'Save'}</span>
              </button>
              <button className="flex flex-col items-center gap-1.5 pointer-events-auto active:scale-90 transition-all">
                <MoreVertical className="w-6 h-6 text-[#0a1128] drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]" />
                <span className="text-[#0a1128] text-[10px] font-bold drop-shadow-sm tracking-widest uppercase">More</span>
              </button>
            </>
          )}

          <button
            onClick={() => setIsClearScreen(!isClearScreen)}
            className="flex flex-col items-center gap-1.5 pointer-events-auto active:scale-90 transition-all mt-2"
          >
            {isClearScreen ? (
              <Minimize2 className="w-6 h-6 text-[#0a1128] drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]" />
            ) : (
              <Maximize2 className="w-6 h-6 text-[#0a1128] drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]" />
            )}
          </button>
        </div>

        {!isClearScreen && (
          <div className="absolute bottom-0 left-0 right-0 p-4 pr-[70px] pb-[calc(env(safe-area-inset-bottom,8px)+24px)] z-[115] bg-gradient-to-t from-white/95 via-white/80 to-transparent pointer-events-none">
            <div className="flex items-center gap-3 mb-2 mt-4">
              <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-[#bf953f] via-[#d4af37] to-[#b38728] shrink-0 shadow-[0_0_12px_rgba(212,175,55,0.4)]">
                <div className="w-full h-full rounded-full border-[2px] border-white overflow-hidden bg-white">
                  <img src={video.profilePic} alt={video.username} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#0a1128] text-[15px] font-extrabold tracking-wide drop-shadow-sm">
                    {video.username}
                  </span>
                  <svg className="w-4 h-4 text-[#d4af37] shrink-0 drop-shadow-[0_0_4px_rgba(212,175,55,0.5)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48z"/>
                  </svg>
                </div>
                <span className="text-[#d4af37] text-[10px] font-bold uppercase tracking-wider mt-0.5">
                  {video.likes} views
                </span>
              </div>
            </div>

            <p className="text-gray-700 text-[13px] font-medium leading-relaxed mb-3">
              {video.description}
            </p>

            {(() => {
              const config = getPopupConfig(video.category);
              return (
                <button
                  onClick={(e) => { e.stopPropagation(); setActivePopup(config.id); }}
                  className="pointer-events-auto h-8 px-3.5 rounded-[4px] backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.2)] border border-white/20 inline-flex items-center justify-center gap-1.5 text-white active:scale-95 transition-all bg-[#0b1b42]"
                >
                  <span className="text-xs font-bold">View</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              );
            })()}
          </div>
        )}

        {!isClearScreen && (
          <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-white/30 z-[130]">
            <div
              className="h-full bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-[width] duration-100 ease-linear flex items-center justify-end"
              style={{ width: `${progress}%` }}
            >
              <div className="w-2.5 h-2.5 bg-white rounded-full shadow-md translate-x-1" />
            </div>
          </div>
        )}
      </div>

      {activePopup && (
        <div className="fixed inset-0 z-[200000] bg-white flex flex-col">
          <div className="absolute top-4 left-4 z-[300000]">
             <button onClick={() => setActivePopup(null)} className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-gray-200 flex items-center justify-center text-[#0a1128] hover:bg-gray-50 transition-colors">
               <ChevronLeft className="w-6 h-6" />
             </button>
          </div>
          <div className="flex-1 w-full h-full relative">
            <Suspense fallback={<div className="flex items-center justify-center h-full text-gray-500 font-medium">Loading...</div>}>
              {activePopup === 'commercial' && <BuildingBox viewModeProp="mobile" />}
              {activePopup === 'all' && <AllBuildingBox viewModeProp="mobile" />}
              {activePopup === 'land' && <LandBox viewModeProp="mobile" />}
              {activePopup === 'franchise' && <FranchiseHome isMobile={true} />}
            </Suspense>
          </div>
        </div>
      )}
    </>
  );

  return content;
}
