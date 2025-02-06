import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { albums } from '@/lib/data';
import { PhotoGrid } from '@/components/PhotoGrid';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AlbumPage() {
  const { albumId } = useParams();
  const album = albums.find(a => a?.id === albumId);

  if (!album) {
    return <div>Album not found</div>;
  }

  return (
    <div className="pt-32 px-6 min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <Button
          variant="ghost"
          asChild
          className="mb-6"
        >
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-light"
        >
          {album.title}
        </motion.h1>
        {album.description && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mt-4"
          >
            {album.description}
          </motion.p>
        )}

        <PhotoGrid photos={album.photos} />
      </div>
    </div>
  );
}