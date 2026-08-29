import { useRef, useState, useEffect, useCallback, Suspense } from 'react';
import { createPortal } from 'react-dom';
import { Share2, MoreVertical, ChevronUp, ChevronDown, ChevronLeft, Bookmark, Play, Volume2, VolumeX, ExternalLink, X } from 'lucide-react';
import FranchiseHome from '../../Franchise_Home';
import LandBox from '../../LandBox';
import AllBuildingBox from '../../AllBuildingBox';
import BuildingBox from '../../BuildingBox';
import type { ReelData } from './data';

interface DesktopProps { video: ReelData; onClose: () => void; onNext: () => void; onPrev: () => void; hasNext: boolean; hasPrev: boolean; }

export default function DesktopOpenVideo({ video, onClose, onNext, onPrev, hasNext, hasPrev }: DesktopProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
      setIsPlaying(true);
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [video]);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const onTime = () => { if (vid.duration) setProgress((vid.currentTime / vid.duration) * 100); };
    vid.addEventListener('timeupdate', onTime);
    return () => vid.removeEventListener('timeupdate', onTime);
  }, [video]);

  const resetControlsTimeout = useCallback(() => {
    setShowControls(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (isPlaying) timeoutRef.current = setTimeout(() => setShowControls(false), 3000);
  }, [isPlaying]);

  useEffect(() => {
    resetControlsTimeout();
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [isPlaying, resetControlsTimeout]);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTo = parseFloat(e.target.value);
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = (seekTo / 100) * videoRef.current.duration;
      setProgress(seekTo);
    }
  };

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

  const getRightPanelComponent = (category?: string) => {
    const cat = (category || "").toLowerCase();
    if (cat.includes("franchise") || cat.includes("running")) {
      return <FranchiseHome isMobile={true} />;
    }
    if (cat.includes("land") || cat.includes("investment")) {
      return <LandBox viewModeProp="mobile" />;
    }
    if (cat.includes("pre-leased") || cat.includes("fractional")) {
      return <AllBuildingBox viewModeProp="mobile" />;
    }
    return <BuildingBox viewModeProp="mobile" />;
  };

  const content = (
    <div className="fixed inset-0 z-[100000] bg-gray-50 flex overflow-hidden select-none transition-colors duration-500">
      <div className={`h-full flex items-center justify-center relative shrink-0 transition-all duration-500 ease-in-out ${activePopup ? 'w-[65%]' : 'w-full'}`}>
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#d4af37]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "8s" }} />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#c69a54]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "12s", animationDelay: "2s" }} />
        </div>
        
        <div className="relative z-10 w-full max-w-5xl h-[85vh] max-h-[850px] flex justify-center gap-6 py-2 px-8">
          <div className="relative z-10 w-[280px] h-[85vh] max-h-[850px] flex flex-col justify-between py-2">
            <button onClick={onClose} className="relative z-10 flex items-center gap-2 px-5 py-2.5 w-fit rounded-[8px] bg-white/70 backdrop-blur-xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-white text-[#0a1128] font-bold text-xs uppercase tracking-widest hover:border-[#d4af37]/50 hover:bg-white hover:shadow-[0_8px_25px_rgba(212,175,55,0.15)] transition-all duration-300 group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300 text-[#d4af37]" /> Back
        </button>

        <div className="relative z-10 bg-white/60 backdrop-blur-2xl p-6 rounded-[8px] shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white flex flex-col gap-4 group hover:border-[#d4af37]/40 transition-colors duration-500">
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full ring-2 ring-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.4)] p-[2px] shrink-0 bg-white">
              <img src={video.profilePic} alt={video.username} className="w-full h-full rounded-full object-cover" />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[#0a1128] text-base font-extrabold truncate tracking-wide">{video.username}</span>
                <svg className="w-4 h-4 text-[#d4af37] shrink-0 drop-shadow-[0_0_4px_rgba(212,175,55,0.5)]" viewBox="0 0 24 24" fill="currentColor"><path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48z"/></svg>
              </div>
              <span className="text-[#d4af37] text-[10px] font-bold uppercase tracking-wider mt-0.5">Top Contributor</span>
            </div>
          </div>
          
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          
          <p className="text-gray-600 text-sm leading-relaxed break-words line-clamp-4 font-medium">{video.description}</p>
        </div>
      </div>

      <div className="relative z-10 h-[85vh] max-h-[850px] aspect-[9/16] rounded-[8px] overflow-hidden bg-black shadow-[0_16px_40px_rgba(0,0,0,0.15)] border border-white/50 group" onMouseMove={resetControlsTimeout} onClick={resetControlsTimeout}>
        <video ref={videoRef} src={video.videoUrl} className="w-full h-full object-cover cursor-pointer" loop muted={isMuted} onClick={togglePlay} playsInline />

        <div className="absolute top-4 right-4 z-50 flex items-center gap-3">
          {!activePopup && (() => {
            const config = getPopupConfig(video.category);
            return (
              <button 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  setActivePopup(config.id); 
                }}
                className="h-8 px-3 rounded-[4px] backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.2)] border border-white/20 flex items-center justify-center gap-1.5 text-white hover:scale-105 active:scale-95 transition-all bg-[#0b1b42]"
              >
                <span className="text-xs font-bold">View</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            );
          })()}
          <button onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }} className={`w-10 h-10 rounded-full bg-black/40 backdrop-blur-xl flex items-center justify-center text-white hover:bg-[#d4af37]/40 border border-white/30 hover:border-[#d4af37]/80 shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-105 ${showControls ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 bg-black/40 backdrop-blur-[2px]">
            <div className="w-20 h-20 bg-[#0b1b42]/80 backdrop-blur-md rounded-full border border-[#d4af37]/40 shadow-[0_8px_32px_rgba(212,175,55,0.2)] flex items-center justify-center animate-pulse"><Play className="w-10 h-10 ml-1.5 text-[#d4af37]" fill="currentColor" /></div>
          </div>
        )}

        <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gray-200/40 z-20 transition-all duration-300 hover:h-2 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#bf953f] via-[#d4af37] to-[#b38728] rounded-r-full pointer-events-none shadow-[0_0_12px_rgba(212,175,55,0.6)]" style={{ width: `${progress}%` }} />
          <input type="range" min="0" max="100" value={progress || 0} onChange={handleSeek} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30" />
        </div>
      </div>

      <div className="relative z-10 w-[280px] h-[85vh] max-h-[850px] flex flex-col justify-center items-start">
        <div className="w-[60px] flex flex-col items-center gap-5">
          <div className="flex flex-col bg-white/70 backdrop-blur-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] rounded-[8px] overflow-hidden border border-white relative group hover:border-[#d4af37]/40 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/0 via-[#d4af37]/5 to-[#d4af37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <button onClick={onPrev} disabled={!hasPrev} className={`p-3.5 relative z-10 transition-all duration-300 ${hasPrev ? 'text-[#0a1128] hover:text-[#d4af37] hover:bg-white/90' : 'text-gray-400 cursor-not-allowed'}`}><ChevronUp className="w-6 h-6" /></button>
            <div className="h-px w-8 mx-auto bg-gray-200" />
            <button onClick={onNext} disabled={!hasNext} className={`p-3.5 relative z-10 transition-all duration-300 ${hasNext ? 'text-[#0a1128] hover:text-[#d4af37] hover:bg-white/90' : 'text-gray-400 cursor-not-allowed'}`}><ChevronDown className="w-6 h-6" /></button>
          </div>

          <button className="flex flex-col items-center gap-1.5 group">
            <div className="w-12 h-12 rounded-[8px] bg-white/70 backdrop-blur-2xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-white flex items-center justify-center text-[#0a1128] group-hover:border-[#d4af37]/50 group-hover:text-[#d4af37] group-hover:bg-white group-hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/0 via-[#d4af37]/10 to-[#d4af37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <Share2 className="w-5 h-5 relative z-10" />
            </div>
            <span className="text-[10px] font-bold text-gray-500 group-hover:text-[#d4af37] transition-colors tracking-widest uppercase">Share</span>
          </button>

          <button onClick={() => setIsSaved(!isSaved)} className="flex flex-col items-center gap-1.5 group">
            <div className={`w-12 h-12 rounded-[8px] backdrop-blur-2xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] border flex items-center justify-center group-hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${isSaved ? 'bg-[#0a1128]/95 border-[#d4af37]/50 text-[#d4af37] shadow-[0_4px_20px_rgba(212,175,55,0.2)]' : 'bg-white/70 border-white text-[#0a1128] group-hover:border-[#d4af37]/50 group-hover:text-[#d4af37] group-hover:bg-white'}`}>
               <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/0 via-[#d4af37]/10 to-[#d4af37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <Bookmark className="w-5 h-5 relative z-10" fill={isSaved ? "currentColor" : "none"} />
            </div>
            <span className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${isSaved ? 'text-[#d4af37]' : 'text-gray-500 group-hover:text-[#d4af37]'}`}>{isSaved ? 'Saved' : 'Save'}</span>
          </button>

          <button className="w-12 h-12 mt-1 rounded-[8px] bg-white/70 backdrop-blur-2xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-white flex items-center justify-center text-[#0a1128] hover:text-[#d4af37] hover:border-[#d4af37]/40 hover:bg-white transition-all duration-300">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>
        </div>
      </div>

      {activePopup && (
        <div className="w-[35%] h-full bg-white dark:bg-[#0b1b42] overflow-y-auto relative z-[100] shadow-[-8px_0_30px_rgba(0,0,0,0.1)] shrink-0 select-auto border-l border-[#0b1b42]/10">
          <div className="sticky top-4 z-[200] flex justify-start w-full h-0 pointer-events-none">
            <button 
              onClick={() => setActivePopup(null)} 
              className="pointer-events-auto ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-white dark:bg-[#132254] shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-gray-200 dark:border-white/10 text-gray-500 hover:text-red-500 hover:bg-gray-50 dark:hover:bg-[#1a2d72] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <Suspense fallback={<div className="flex items-center justify-center h-full text-gray-500 font-medium">Loading...</div>}>
            {getRightPanelComponent(video.category)}
          </Suspense>
        </div>
      )}

    </div>
  );

  return createPortal(content, document.body);
}