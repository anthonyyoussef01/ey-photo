// src/components/PhotoAlbum.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';
import { Skeleton } from "@/components/ui/skeleton";

interface Photo {
  url: string; // High-res URL (e.g., Uploadthing)
  thumbnailUrl: string; // Processed low-res WebP URL (from Vite import)
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
  const [selectedPhotoUrl, setSelectedPhotoUrl] = useState<string | null>(null); // Store the high-res URL
  const [loadedThumbnails, setLoadedThumbnails] = useState<Set<string>>(new Set());

  const handleThumbnailLoad = (thumbnailUrl: string) => {
    setLoadedThumbnails(prev => new Set(prev).add(thumbnailUrl));
  };

  // Handler to set the HIGH-RES url when a thumbnail is clicked
  const handlePhotoClick = (highResUrl: string) => {
    setSelectedPhotoUrl(highResUrl);
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
            {(preview ? photos.slice(0, 6) : photos).map((photo, index) => (
                <motion.div
                    key={photo.url} // Using high-res URL for key stability assuming it's unique
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative group cursor-pointer"
                    onClick={() => handlePhotoClick(photo.url)} // Pass the HIGH-RES url to the handler
                >
                  <AspectRatio ratio={1}>
                    <div className="relative w-full h-full overflow-hidden">
                      {/* Show skeleton until the THUMBNAIL is loaded */}
                      {!loadedThumbnails.has(photo.thumbnailUrl) && (
                          <Skeleton className="absolute inset-0 w-full h-full" />
                      )}
                      <img
                          src={photo.thumbnailUrl} // Use the THUMBNAIL URL (now processed by Vite)
                          alt={`${title} ${index + 1}`}
                          loading="lazy" // Add native lazy loading
                          className={cn(
                              "absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
                              !loadedThumbnails.has(photo.thumbnailUrl) && "opacity-0" // Hide until THUMBNAIL loaded
                          )}
                          onLoad={() => handleThumbnailLoad(photo.thumbnailUrl)} // Track THUMBNAIL load state
                          onError={(e) => console.error("Thumbnail load error:", photo.thumbnailUrl, e)} // Added error handler
                      />
                    </div>
                  </AspectRatio>
                </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dialog still uses the selected HIGH-RES URL */}
        <Dialog open={!!selectedPhotoUrl} onOpenChange={() => setSelectedPhotoUrl(null)}>
          <DialogContent className="max-w-screen-lg">
            {/* Consider adding loading state for the high-res image too */}
            <img
                src={selectedPhotoUrl!}
                alt="Selected photo"
                className="w-full h-auto max-h-[90vh] object-contain"
            />
          </DialogContent>
        </Dialog>
      </>
  );
}