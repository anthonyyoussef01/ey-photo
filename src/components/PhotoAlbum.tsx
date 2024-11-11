import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';

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
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <>
      <motion.div
        layout
        className={cn("cursor-pointer overflow-hidden", className)}
        onClick={() => preview ? setIsExpanded(!isExpanded) : null}
      >
        <motion.div className="flex items-center justify-between mb-4">
          <motion.h3
            layout="position"
            className="text-2xl font-light"
          >
            {title}
          </motion.h3>
          {preview && (
            <Link
              to={`/album/${albumId}`}
              className="text-sm text-neutral-600 hover:text-black transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              View All
            </Link>
          )}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 gap-1"
        >
          {photos.slice(0, preview && !isExpanded ? 3 : undefined).map((photo, index) => (
            <motion.div
              key={photo.url}
              layout
              initial={!isExpanded ? { opacity: 0 } : false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative group"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhoto(photo.url);
              }}
            >
              <AspectRatio ratio={1}>
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={photo.url}
                    alt={`${title} ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </AspectRatio>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

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