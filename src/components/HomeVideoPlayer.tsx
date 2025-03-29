import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function HomeVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent video play/pause

    if (!document.fullscreenElement) {
      // Enter fullscreen
      if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen()
          .then(() => setIsFullscreen(true))
          .catch(err => console.error(`Error attempting to enable fullscreen: ${err.message}`));
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen()
          .then(() => setIsFullscreen(false))
          .catch(err => console.error(`Error attempting to exit fullscreen: ${err.message}`));
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => setIsLoading(false);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('play', () => setIsPlaying(true));
      video.addEventListener('pause', () => setIsPlaying(false));

      // Listen for fullscreen changes
      const handleFullscreenChange = () => {
        setIsFullscreen(!!document.fullscreenElement);
      };
      document.addEventListener('fullscreenchange', handleFullscreenChange);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('play', () => setIsPlaying(true));
        video.removeEventListener('pause', () => setIsPlaying(false));
        document.removeEventListener('fullscreenchange', handleFullscreenChange);
      };
    }
  }, []);

  // Handle click outside video in fullscreen mode
  const handleContainerClick = (e: React.MouseEvent) => {
    if (isFullscreen && e.target === containerRef.current) {
      // If we're in fullscreen and clicked on the container (not the video)
      document.exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch(err => console.error(`Error attempting to exit fullscreen: ${err.message}`));
    } else {
      // Normal play/pause toggle when not in fullscreen or clicked on video
      togglePlayPause();
    }
  };

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative group rounded-lg overflow-hidden cursor-pointer",
        isFullscreen 
          ? "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md" 
          : "w-full aspect-[3/4]"
      )}
      onClick={handleContainerClick}
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
          isFullscreen 
            ? "h-screen max-h-full w-auto object-contain" 
            : "w-full h-full object-cover",
          isLoading && "opacity-0"
        )}
      />
      <div className={cn(
        "absolute inset-0 flex items-center justify-center transition-opacity",
        isFullscreen 
          ? "bg-transparent" 
          : "bg-black/30 opacity-0 group-hover:opacity-100"
      )}>
        {isPlaying ? (
          <Pause className="text-white text-4xl" />
        ) : (
          <Play className="text-white text-4xl" />
        )}
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button
            onClick={toggleMute}
            className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          >
            {isMuted ? (
              <VolumeX className="text-white w-5 h-5" />
            ) : (
              <Volume2 className="text-white w-5 h-5" />
            )}
          </button>
          <button
              onClick={toggleFullscreen}
              className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          >
            {isFullscreen ? (
                <Minimize className="text-white w-5 h-5" />
            ) : (
                <Maximize className="text-white w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
