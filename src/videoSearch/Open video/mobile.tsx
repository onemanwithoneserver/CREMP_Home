import { useRef, useState, useEffect } from 'react';
import { ThumbsUp, ThumbsDown, MessageSquare, Share2, MoreVertical, Volume2, VolumeX, ArrowLeft, Play } from 'lucide-react';
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

  // Touch handling for swipe up/down
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (touchStartY.current - touchEndY.current > 50) {
      // Swiped up
      if (hasNext) onNext();
    } else if (touchEndY.current - touchStartY.current > 50) {
      // Swiped down
      if (hasPrev) onPrev();
    }
  };

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
    <div className="fixed inset-0 z-[100] bg-black flex flex-col h-[100dvh] w-full overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-4 z-[110] flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
        <button onClick={onClose} className="p-2 text-white pointer-events-auto">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="text-white font-semibold">Reels</div>
        <div className="w-10"></div> {/* Spacer for centering */}
      </div>

      <div 
        className="relative flex-1 w-full h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <video
          ref={videoRef}
          src={video.videoUrl}
          className="w-full h-full object-cover"
          loop
          muted={isMuted}
          onClick={togglePlay}
          playsInline
        />
        
        {/* Audio Toggle */}
        <button 
          onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
          className="absolute top-20 right-4 p-2 bg-black/40 rounded-full text-white z-[110]"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>

        {/* Play/Pause Overlay Indicator */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[105]">
            <div className="p-4 bg-black/40 rounded-full text-white">
              <Play className="w-12 h-12 ml-1" fill="currentColor" />
            </div>
          </div>
        )}

        {/* User Info Overlay */}
        <div className="absolute bottom-0 left-0 right-16 p-4 pb-6 z-[105] bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none">
          <div className="flex items-center gap-3 mb-3 pointer-events-auto">
            <img src={video.profilePic} alt={video.username} className="w-9 h-9 rounded-full border border-white/20" />
            <span className="text-white font-semibold text-sm">@{video.username}</span>
            <button className="bg-white text-black font-semibold text-xs px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors ml-1">
              Subscribe
            </button>
          </div>
          <p className="text-white text-sm line-clamp-2">{video.description}</p>
        </div>

        {/* Action Buttons Overlay */}
        <div className="absolute right-2 bottom-8 z-[110] flex flex-col items-center gap-5">
          <button className="flex flex-col items-center gap-1.5 group pointer-events-auto">
            <div className="p-2 rounded-full text-white transition-colors group-hover:bg-white/10">
              <ThumbsUp className="w-7 h-7 drop-shadow-md" fill="currentColor" />
            </div>
            <span className="text-white text-xs font-medium drop-shadow-md">{video.likes}</span>
          </button>
          <button className="flex flex-col items-center gap-1.5 group pointer-events-auto">
            <div className="p-2 rounded-full text-white transition-colors group-hover:bg-white/10">
              <ThumbsDown className="w-7 h-7 drop-shadow-md" />
            </div>
            <span className="text-white text-xs font-medium drop-shadow-md">Dislike</span>
          </button>
          <button className="flex flex-col items-center gap-1.5 group pointer-events-auto">
            <div className="p-2 rounded-full text-white transition-colors group-hover:bg-white/10">
              <MessageSquare className="w-7 h-7 drop-shadow-md" fill="currentColor" />
            </div>
            <span className="text-white text-xs font-medium drop-shadow-md">{video.comments}</span>
          </button>
          <button className="flex flex-col items-center gap-1.5 group pointer-events-auto">
            <div className="p-2 rounded-full text-white transition-colors group-hover:bg-white/10">
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
    </div>
  );
}
