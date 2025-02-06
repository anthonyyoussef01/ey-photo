import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface Photo {
  url: string;
  width?: number;
  height?: number;
  placeholderSrc?: string;
}

interface PhotoGridProps {
  photos: Photo[];
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [loadedLightboxImage, setLoadedLightboxImage] = useState(false);

  const handleImageLoad = (url: string) => {
    setLoadedImages(prev => new Set(prev).add(url));
  };

  const handleLightboxImageLoad = () => {
    setLoadedLightboxImage(true);
  };

  const handlePhotoClick = (url: string) => {
    setSelectedPhoto(url);
    setLoadedLightboxImage(false);
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 mt-12"
      >
        {photos.map((photo, index) => (
          <motion.div
            key={photo.url}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="cursor-pointer group"
            onClick={() => handlePhotoClick(photo.url)}
          >
            <AspectRatio ratio={1}>
              <div className="relative w-full h-full overflow-hidden">
                {!loadedImages.has(photo.url) && (
                  <Skeleton className="absolute inset-0 w-full h-full" />
                )}
                <img
                  src={photo.url}
                  alt={`Photo ${index + 1}`}
                  className={cn(
                    "object-cover w-full h-full transition-transform duration-300 group-hover:scale-105",
                    !loadedImages.has(photo.url) && "opacity-0"
                  )}
                  onLoad={() => handleImageLoad(photo.url)}
                />
              </div>
            </AspectRatio>
          </motion.div>
        ))}
      </motion.div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-screen-lg">
          {!loadedLightboxImage && (
            <Skeleton className="w-full aspect-[3/2]" />
          )}
          <img
            src={selectedPhoto!}
            alt="Selected photo"
            className={cn(
              "w-full h-auto max-h-[90vh] object-contain",
              !loadedLightboxImage && "opacity-0"
            )}
            onLoad={handleLightboxImageLoad}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}