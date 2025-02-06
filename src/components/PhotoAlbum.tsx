import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';
import { Skeleton } from "@/components/ui/skeleton";

interface Photo {
  url: string;
  width?: number;
  height?: number;
}

interface PhotoAlbumProps {
  albumId: string;
  title: string;
  photos: Photo[];
  className?: string;
  preview?: boolean;
}

export function PhotoAlbum({ albumId, title, photos, className, preview = false }: PhotoAlbumProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (url: string) => {
    setLoadedImages(prev => new Set(prev).add(url));
  };

  return (
    <>
      <div className={cn("overflow-hidden", className)}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-light">{title}</h2>
          {preview && (
            <Link 
              to={`/album/${albumId}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all →
            </Link>
          )}
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-1"
        >
          {photos.slice(0, 3).map((photo, index) => (
            <motion.div
              key={photo.url}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedPhoto(photo.url)}
            >
              <AspectRatio ratio={1}>
                <div className="relative w-full h-full overflow-hidden">
                  {!loadedImages.has(photo.url) && (
                    <Skeleton className="absolute inset-0 w-full h-full" />
                  )}
                  <img
                    src={photo.url}
                    alt={`${title} ${index + 1}`}
                    className={cn(
                      "absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
                      !loadedImages.has(photo.url) && "opacity-0"
                    )}
                    onLoad={() => handleImageLoad(photo.url)}
                  />
                </div>
              </AspectRatio>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-screen-lg">
          <img
            src={selectedPhoto!}
            alt="Selected photo"
            className="w-full h-auto max-h-[90vh] object-contain"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}