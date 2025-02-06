import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function HomeVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent video play/pause
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => setIsLoading(false);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('play', () => setIsPlaying(true));
      video.addEventListener('pause', () => setIsPlaying(false));
      
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('play', () => setIsPlaying(true));
        video.removeEventListener('pause', () => setIsPlaying(false));
      };
    }
  }, []);

  return (
    <div 
      className="relative group w-full rounded-lg overflow-hidden aspect-[3/4] cursor-pointer"
      onClick={togglePlayPause}
    >
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      <video
        ref={videoRef}
        src="https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObt5bHgU0FLUZAnFo5623slQ1WbRfYka4exqrgt"
        preload="metadata"
        autoPlay
        loop
        playsInline
        muted
        className={cn(
          "w-full h-full object-cover",
          isLoading && "opacity-0"
        )}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
        {isPlaying ? (
          <Pause className="text-white text-4xl" />
        ) : (
          <Play className="text-white text-4xl" />
        )}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
        >
          {isMuted ? (
            <VolumeX className="text-white w-5 h-5" />
          ) : (
            <Volume2 className="text-white w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}