import { PhotoAlbum } from "@/components/PhotoAlbum";
import { CalendlyButton } from "@/components/CalendlyButton";
import { AboutSection } from "@/components/AboutSection";
import { albums } from "@/lib/data";
import { HomeVideoPlayer } from "@/components/HomeVideoPlayer";

export function HomePage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div id='hero' className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-light leading-tight mb-6">
                A Wedding Experience Centred Around Your Favourite Moments With Your Favourite People.
              </h1>
              <p className="text-muted-foreground mb-8">
                Wedding photography is about so much more than just delivering a beautiful gallery. It's about connecting with people, understanding their unique story, and capturing it authentically. We're confident in our ability to bring your vision to life, and the experiences of our past couples speak for themselves.
              </p>
              <CalendlyButton />
            </div>
            <div>
              <HomeVideoPlayer />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galleries" className="py-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="space-y-16">
            {albums.map((album) => {
              if (!album) return null;
              return (
                <PhotoAlbum 
                  key={album.id}
                  albumId={album.id}
                  title={album.title}
                  photos={album.photos.slice(0, 6)}
                  preview
                />
              );
            })}
          </div>
        </div>
      </section>

      <AboutSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-card">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6 text-card-foreground">Let's Create Something Beautiful</h2>
          <p className="text-muted-foreground mb-8">
            Available for weddings, events, and aerial photography worldwide
          </p>
          <CalendlyButton />
        </div>
      </section>
    </div>
  );
}