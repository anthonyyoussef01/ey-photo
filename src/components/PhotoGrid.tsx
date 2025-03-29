// src/components/PhotoGrid.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface Photo {
    url: string; // High-res URL (e.g., Uploadthing)
    thumbnailUrl: string; // Processed low-res WebP URL (from Vite import)
    width?: number;
    height?: number;
}

interface PhotoGridProps {
    photos: Photo[];
}

export function PhotoGrid({ photos }: PhotoGridProps) {
    const [selectedPhotoUrl, setSelectedPhotoUrl] = useState<string | null>(null); // Store the high-res URL
    const [loadedThumbnails, setLoadedThumbnails] = useState<Set<string>>(new Set());
    const [loadedLightboxImage, setLoadedLightboxImage] = useState(false);

    const handleThumbnailLoad = (thumbnailUrl: string) => {
        setLoadedThumbnails(prev => new Set(prev).add(thumbnailUrl));
    };

    const handleLightboxImageLoad = () => {
        setLoadedLightboxImage(true);
    };

    // Handler to set the HIGH-RES url when a thumbnail is clicked
    const handlePhotoClick = (highResUrl: string) => {
        setSelectedPhotoUrl(highResUrl);
        setLoadedLightboxImage(false); // Reset lightbox loading state
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-12 pb-12"
            >
                {photos.map((photo, index) => (
                    <motion.div
                        key={photo.url} // Using high-res URL for key stability assuming it's unique
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="cursor-pointer group"
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
                                    alt={`Photo ${index + 1}`}
                                    loading="lazy" // Add native lazy loading
                                    className={cn(
                                        "object-cover w-full h-full transition-transform duration-300 group-hover:scale-105",
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

            {/* Dialog still uses the selected HIGH-RES URL */}
            <Dialog open={!!selectedPhotoUrl} onOpenChange={() => setSelectedPhotoUrl(null)}>
                <DialogContent className="max-w-screen-lg">
                    {!loadedLightboxImage && (
                        <Skeleton className="w-full aspect-[3/2] max-h-[90vh]" /> // Skeleton for lightbox
                    )}
                    <img
                        src={selectedPhotoUrl!} // Load the HIGH-RES image here
                        alt="Selected photo"
                        className={cn(
                            "w-full h-auto max-h-[90vh] object-contain",
                            !loadedLightboxImage && "opacity-0" // Hide until HIGH-RES loaded
                        )}
                        onLoad={handleLightboxImageLoad} // Track HIGH-RES load state
                    />
                </DialogContent>
            </Dialog>
        </>
    );
}