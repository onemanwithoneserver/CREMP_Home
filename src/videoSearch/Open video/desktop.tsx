import { useRef, useState, useEffect } from 'react';
import { ThumbsUp, ThumbsDown, MessageSquare, Share2, MoreVertical, ChevronUp, ChevronDown, X, Volume2, VolumeX, Play } from 'lucide-react';
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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
      setIsPlaying(true);
    }
  }, [video]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm">
      <button onClick={onClose} className="absolute top-6 left-6 p-2 text-white hover:bg-white/10 rounded-full transition-colors z-[110]">
        <X className="w-8 h-8" />
      </button>

      <div className="relative flex h-[90vh] max-w-6xl w-full items-center justify-center gap-8">
        {/* Video Container */}
        <div className="relative h-full aspect-[9/16] bg-black rounded-xl overflow-hidden group shadow-2xl">
          <video
            ref={videoRef}
            src={video.videoUrl}
            className="w-full h-full object-cover cursor-pointer"
            loop
            muted={isMuted}
            onClick={togglePlay}
            playsInline
          />
          
          {/* Audio Toggle */}
          <button 
            onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
            className="absolute top-6 left-6 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors z-[110]"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          
          {/* Play/Pause Overlay Indicator (optional, could show briefly) */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[105]">
              <div className="p-4 bg-black/40 rounded-full text-white">
                <Play className="w-10 h-10 ml-1" fill="currentColor" />
              </div>
            </div>
          )}

          {/* User Info Overlay */}
          <div className="absolute bottom-0 left-0 right-16 p-4 pt-16 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-[110]">
            <div className="flex items-center gap-3 mb-3 pointer-events-auto">
              <img src={video.profilePic} alt={video.username} className="w-9 h-9 rounded-full border border-white/20" />
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold text-sm">@{video.username}</span>
                <button className="bg-white text-black font-semibold text-xs px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors ml-1">
                  Subscribe
                </button>
              </div>
            </div>
            <p className="text-white text-sm line-clamp-2">{video.description}</p>
          </div>

          {/* Action Buttons Overlay */}
          <div className="absolute right-3 bottom-6 flex flex-col items-center gap-5 z-[110]">
            <button className="flex flex-col items-center gap-1.5 group/btn pointer-events-auto">
              <div className="p-2 rounded-full text-white transition-colors group-hover/btn:bg-white/10">
                <ThumbsUp className="w-7 h-7 drop-shadow-md" fill="currentColor" />
              </div>
              <span className="text-white text-xs font-medium drop-shadow-md">{video.likes}</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 group/btn pointer-events-auto">
              <div className="p-2 rounded-full text-white transition-colors group-hover/btn:bg-white/10">
                <ThumbsDown className="w-7 h-7 drop-shadow-md" />
              </div>
              <span className="text-white text-xs font-medium drop-shadow-md">Dislike</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 group/btn pointer-events-auto">
              <div className="p-2 rounded-full text-white transition-colors group-hover/btn:bg-white/10">
                <MessageSquare className="w-7 h-7 drop-shadow-md" fill="currentColor" />
              </div>
              <span className="text-white text-xs font-medium drop-shadow-md">{video.comments}</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 group/btn pointer-events-auto">
              <div className="p-2 rounded-full text-white transition-colors group-hover/btn:bg-white/10">
                <Share2 className="w-7 h-7 drop-shadow-md" />
              </div>
              <span className="text-white text-xs font-medium drop-shadow-md">{video.shares}</span>
            </button>
            <button className="p-2 rounded-full text-white transition-colors hover:bg-white/10 mt-1 pointer-events-auto">
              <MoreVertical className="w-6 h-6 drop-shadow-md" />
            </button>
          </div>

          {/* Progress Bar (Mock) */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-[110]">
            <div className="h-full bg-red-600 w-1/3"></div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex flex-col gap-4">
          <button 
            onClick={onPrev}
            disabled={!hasPrev}
            className={`p-4 rounded-full transition-all ${hasPrev ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-white/5 text-white/30 cursor-not-allowed'}`}
          >
            <ChevronUp className="w-8 h-8" />
          </button>
          <button 
            onClick={onNext}
            disabled={!hasNext}
            className={`p-4 rounded-full transition-all ${hasNext ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-white/5 text-white/30 cursor-not-allowed'}`}
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
