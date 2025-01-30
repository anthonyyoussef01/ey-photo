import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { OptimizedImage } from "@/components/ui/optimized-image";

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

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        {photos.map((photo, index) => (
          <motion.div
            key={photo.url}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="cursor-pointer group"
            onClick={() => setSelectedPhoto(photo.url)}
          >
            <AspectRatio ratio={1}>
              <OptimizedImage
                src={photo.url}
                alt={`Photo ${index + 1}`}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                placeholderSrc={photo.placeholderSrc}
              />
            </AspectRatio>
          </motion.div>
        ))}
      </motion.div>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-screen-lg">
          <img
            src={selectedPhoto!}
            alt="Selected photo"
            className="w-full h-auto"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}