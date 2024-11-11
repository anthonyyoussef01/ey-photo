import { PhotoAlbum } from "@/components/PhotoAlbum";
import { CalendlyButton } from "@/components/CalendlyButton";
import { albums } from "@/lib/data";
import { Helmet } from 'react-helmet-async';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>EY Photo & Video</title>
        <meta name="description" content="EY Photo & Video is a wedding photography and videography service based in Rockland County, NY." />
        <meta name="keywords" content="photos, videos, engagement, coptic, orthodox, arab, egyptian, drone, documentary, cinematic, Hudson Valley, New York, New Jersey, New City" />
      </Helmet>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-light leading-tight mb-6">
                A Wedding Experience Centred Around Your Favourite Moments With Your Favourite People.
              </h1>
              <p className="text-neutral-600 mb-8">
                Wedding photography is about so much more than just delivering a beautiful gallery. It's about connecting with people, understanding their unique story, and capturing it authentically. We're confident in our ability to bring your vision to life, and the experiences of our past couples speak for themselves.
              </p>
              <CalendlyButton />
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200"
                alt="Wedding moment"
                className="w-full rounded-lg object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galleries" className="py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="space-y-16">
            {albums.map((album) => (
              <PhotoAlbum 
                key={album.id}
                albumId={album.id}
                title={album.title}
                photos={album.photos.slice(0, 6)}
                preview
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-neutral-50">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">Let's Create Something Beautiful</h2>
          <p className="text-neutral-600 mb-8">
            Available for weddings, events, and aerial photography worldwide
          </p>
          <CalendlyButton />
        </div>
      </section>
    </>
  );
}