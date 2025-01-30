import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  placeholderSrc?: string;
}

export function OptimizedImage({ 
  src, 
  alt, 
  className, 
  width, 
  height,
  placeholderSrc 
}: OptimizedImageProps) {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="blur"
      width={width}
      height={height}
      placeholderSrc={placeholderSrc}
      className={cn("transition-opacity duration-300", className)}
      wrapperClassName="w-full h-full"
    />
  );
}
