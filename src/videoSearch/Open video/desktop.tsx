import { useRef, useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import {
  Share2,
  MoreVertical,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  Bookmark,
  Play,
  Volume2,
  VolumeX,
} from 'lucide-react';
import type { ReelData } from './data';
interface DesktopProps {
  video: ReelData;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}
export default function DesktopOpenVideo({ video, onClose, onNext, onPrev, hasNext, hasPrev }: DesktopProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
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
      className="fixed inset-0 z-[100000] bg-white flex overflow-hidden select-none"
      style={{ height: '100dvh' }}
      onMouseMove={resetControlsTimeout}
      onClick={resetControlsTimeout}
    >
      {}
      <div className={`w-[320px] flex flex-col p-6 shrink-0 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {}
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 hover:text-black hover:bg-gray-200 active:scale-90 transition-all duration-300 mb-8"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        {}
        <div className="flex items-center gap-3 mb-4">
          <div className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-br from-[#d4af37] via-[#f59e0b] to-[#ec4899] shrink-0">
            <div className="w-full h-full rounded-full border-[2px] border-white overflow-hidden bg-gray-100">
              <img src={video.profilePic} alt={video.username} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-black text-[16px] font-bold">
              {video.username}
            </span>
            <svg className="w-4 h-4 text-[#60a5fa] shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48z"/>
            </svg>
          </div>
        </div>
        {}
        <p className="text-gray-700 text-[14px] font-medium leading-snug">
          {video.description}
        </p>
      </div>
      {}
      <div className="flex-1 flex items-center justify-center h-full py-4">
        {}
        <div
          className="relative rounded-lg overflow-hidden shadow-2xl bg-black"
          style={{
            height: 'calc(100dvh - 32px)',
            aspectRatio: '9/16',
          }}
        >
          <video
            ref={videoRef}
            src={video.videoUrl}
            className="w-full h-full object-cover cursor-pointer"
            loop
            muted={isMuted}
            onClick={togglePlay}
            playsInline
          />
          {}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[110]">
              <div className="w-16 h-16 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg">
                <Play className="w-7 h-7 ml-1 text-black" fill="currentColor" />
              </div>
            </div>
          )}
          {}
          <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 z-[115] transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
            <div
              className="h-full bg-white transition-[width] duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        {}
        <div className={`flex flex-col items-center gap-5 ml-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {}
          <div className="flex flex-col bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              className={`p-3 transition-all duration-200 ${
                hasPrev
                  ? 'text-gray-700 hover:text-black hover:bg-gray-200'
                  : 'text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronUp className="w-5 h-5" />
            </button>
            <div className="h-px bg-gray-200" />
            <button
              onClick={onNext}
              disabled={!hasNext}
              className={`p-3 transition-all duration-200 ${
                hasNext
                  ? 'text-gray-700 hover:text-black hover:bg-gray-200'
                  : 'text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
          {}
          <button className="flex flex-col items-center gap-1.5 group">
            <div className="w-11 h-11 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 group-hover:text-black group-hover:bg-gray-200 active:scale-90 transition-all duration-200">
              <Share2 className="w-[18px] h-[18px]" />
            </div>
            <span className="text-[11px] font-semibold text-gray-600 group-hover:text-black transition-colors">Share</span>
          </button>
          {}
          <button className="flex flex-col items-center gap-1.5 group">
            <div className="w-11 h-11 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 group-hover:text-black group-hover:bg-gray-200 active:scale-90 transition-all duration-200">
              <Bookmark className="w-[18px] h-[18px]" />
            </div>
            <span className="text-[11px] font-semibold text-gray-600 group-hover:text-black transition-colors">Save</span>
          </button>
          {}
          <button className="w-11 h-11 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 hover:text-black hover:bg-gray-200 active:scale-90 transition-all duration-200">
            <MoreVertical className="w-[18px] h-[18px]" />
          </button>
          {}
          <button
            onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
            className="w-11 h-11 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 hover:text-black hover:bg-gray-200 active:scale-90 transition-all duration-200 mt-2"
          >
            {isMuted ? <VolumeX className="w-[18px] h-[18px]" /> : <Volume2 className="w-[18px] h-[18px]" />}
          </button>
        </div>
      </div>
    </div>
  );
  return createPortal(content, document.body);
}