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
      className="fixed inset-0 z-[100000] bg-[#FAFAFA] flex items-center justify-center overflow-hidden select-none gap-6 md:gap-12"
      style={{ height: '100dvh' }}
    >
      
      {/* ─── LEFT COLUMN: Navigation & Info ─── */}
      <div className="h-[calc(100dvh-64px)] w-[300px] flex flex-col justify-between py-2">
        
        {/* Top: Back Button */}
        <div>
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 text-gray-700 font-semibold text-sm hover:shadow-[0_4px_15px_rgba(0,0,0,0.08)] active:scale-95 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Search
          </button>
        </div>

        {/* Bottom: Profile & Description Card */}
        <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            {/* Avatar with Gradient Border */}
            <div className="relative w-14 h-14 rounded-full p-[2.5px] bg-gradient-to-tr from-[#d4af37] via-[#f59e0b] to-[#ec4899] shrink-0 shadow-sm">
              <div className="w-full h-full rounded-full border-[2.5px] border-white overflow-hidden bg-gray-100">
                <img src={video.profilePic} alt={video.username} className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Name & Badge */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5">
                <span className="text-gray-900 text-[17px] font-extrabold tracking-tight">
                  {video.username}
                </span>
                <svg className="w-[18px] h-[18px] text-blue-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48z"/>
                </svg>
              </div>
              <span className="text-gray-400 text-[12px] font-medium mt-0.5">Top Contributor</span>
            </div>
          </div>
          
          <div className="h-px w-full bg-gray-100/80 my-1" />

          {/* Description */}
          <p className="text-gray-600 text-[14px] font-medium leading-relaxed">
            {video.description}
          </p>
        </div>
      </div>

      {/* ─── CENTER COLUMN: Portrait Video ─── */}
      <div
        className="relative h-[calc(100dvh-64px)] aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-black ring-1 ring-white/10"
        onMouseMove={resetControlsTimeout}
        onClick={resetControlsTimeout}
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

        {/* Play/Pause Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[110] bg-black/10 transition-colors">
            <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl">
              <Play className="w-9 h-9 ml-1.5 text-white drop-shadow-md" fill="currentColor" />
            </div>
          </div>
        )}

        {/* Progress Bar */}
        <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-white/20 z-[115] transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          <div
            className="h-full bg-white transition-[width] duration-200 rounded-r-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* ─── RIGHT COLUMN: Actions ─── */}
      <div className="h-[calc(100dvh-64px)] w-[70px] flex flex-col justify-center items-start gap-5">
        
        {/* Navigation Pill */}
        <div className="flex flex-col bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] rounded-full overflow-hidden border border-gray-100">
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className={`p-3.5 transition-all duration-300 active:scale-90 ${
              hasPrev ? 'text-gray-700 hover:bg-gray-50' : 'text-gray-300 cursor-not-allowed'
            }`}
          >
            <ChevronUp className="w-[22px] h-[22px]" />
          </button>
          <div className="h-[1px] w-8 mx-auto bg-gray-100" />
          <button
            onClick={onNext}
            disabled={!hasNext}
            className={`p-3.5 transition-all duration-300 active:scale-90 ${
              hasNext ? 'text-gray-700 hover:bg-gray-50' : 'text-gray-300 cursor-not-allowed'
            }`}
          >
            <ChevronDown className="w-[22px] h-[22px]" />
          </button>
        </div>

        {/* Share */}
        <button className="flex flex-col items-center gap-1.5 group transition-transform duration-300 active:scale-90">
          <div className="w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-gray-50 transition-colors">
            <Share2 className="w-[20px] h-[20px]" />
          </div>
          <span className="text-[11px] font-bold text-gray-500">Share</span>
        </button>

        {/* Save */}
        <button className="flex flex-col items-center gap-1.5 group transition-transform duration-300 active:scale-90">
          <div className="w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-gray-50 transition-colors">
            <Bookmark className="w-[20px] h-[20px]" />
          </div>
          <span className="text-[11px] font-bold text-gray-500">Save</span>
        </button>

        {/* More */}
        <button className="w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center text-gray-700 transition-all duration-300 active:scale-90 hover:bg-gray-50 mt-1">
          <MoreVertical className="w-[20px] h-[20px]" />
        </button>
        
        {/* Volume Toggle */}
        <button
          onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
          className="w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center text-gray-700 transition-all duration-300 active:scale-90 hover:bg-gray-50 mt-3"
        >
          {isMuted ? <VolumeX className="w-[20px] h-[20px]" /> : <Volume2 className="w-[20px] h-[20px]" />}
        </button>
      </div>

    </div>
  );
  return createPortal(content, document.body);
}
