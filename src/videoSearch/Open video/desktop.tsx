import { useRef, useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Share2, MoreVertical, ChevronUp, ChevronDown, ChevronLeft, Bookmark, Play, Volume2, VolumeX } from 'lucide-react';
import type { ReelData } from './data';

interface DesktopProps { video: ReelData; onClose: () => void; onNext: () => void; onPrev: () => void; hasNext: boolean; hasPrev: boolean; }

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

  const content = (
    <div className="fixed inset-0 z-[100000] bg-gray-50 flex items-center justify-center overflow-hidden select-none gap-6">
      
      <div className="w-[280px] h-[85vh] max-h-[850px] flex flex-col justify-between py-2">
        <button onClick={onClose} className="flex items-center gap-2 px-4 py-2 w-fit rounded-[8px] bg-white shadow-sm border border-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back
        </button>

        <div className="bg-white p-5 rounded-2xl shadow-sm flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full ring-2 ring-blue-500 p-0.5 shrink-0">
              <img src={video.profilePic} alt={video.username} className="w-full h-full rounded-full object-cover" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-gray-900 text-base font-bold truncate">{video.username}</span>
                <svg className="w-4 h-4 text-blue-500 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48z"/></svg>
              </div>
              <span className="text-gray-500 text-xs font-medium">Top Contributor</span>
            </div>
          </div>
          
          <div className="h-px w-full bg-gray-100" />
          
          <p className="text-gray-700 text-sm leading-snug break-words line-clamp-4">{video.description}</p>
        </div>
      </div>

      <div className="relative h-[85vh] max-h-[850px] aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-lg group" onMouseMove={resetControlsTimeout} onClick={resetControlsTimeout}>
        <video ref={videoRef} src={video.videoUrl} className="w-full h-full object-cover cursor-pointer" loop muted={isMuted} onClick={togglePlay} playsInline />

        <button onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }} className={`absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-all duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 bg-black/20">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"><Play className="w-8 h-8 ml-1 text-white" fill="currentColor" /></div>
          </div>
        )}

        <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gray-800/60 z-20 transition-all duration-300 hover:h-2 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-r-full pointer-events-none" style={{ width: `${progress}%` }} />
          <input type="range" min="0" max="100" value={progress || 0} onChange={handleSeek} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-30" />
        </div>
      </div>

      <div className="w-[280px] h-[85vh] max-h-[850px] flex flex-col justify-center items-start">
        <div className="w-[60px] flex flex-col items-center gap-4">
          <div className="flex flex-col bg-white shadow-sm rounded-[4px] overflow-hidden border border-gray-200">
            <button onClick={onPrev} disabled={!hasPrev} className={`p-3 transition-colors ${hasPrev ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-300 cursor-not-allowed'}`}><ChevronUp className="w-5 h-5" /></button>
            <div className="h-px w-8 mx-auto bg-gray-200" />
            <button onClick={onNext} disabled={!hasNext} className={`p-3 transition-colors ${hasNext ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-300 cursor-not-allowed'}`}><ChevronDown className="w-5 h-5" /></button>
          </div>

          <button className="flex flex-col items-center gap-1 group">
            <div className="w-11 h-11 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"><Share2 className="w-5 h-5" /></div>
            <span className="text-[10px] font-semibold text-gray-500">Share</span>
          </button>

          <button className="flex flex-col items-center gap-1 group">
            <div className="w-11 h-11 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"><Bookmark className="w-5 h-5" /></div>
            <span className="text-[10px] font-semibold text-gray-500">Save</span>
          </button>

          <button className="w-11 h-11 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors mt-2"><MoreVertical className="w-5 h-5" /></button>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}