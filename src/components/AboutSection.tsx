import { CameraIcon, HeartIcon, UsersIcon } from "lucide-react";

export function AboutSection() {
  return (
    <section className="bg-neutral-100 dark:bg-zinc-900">
      <div id="about" className="container px-7 py-20 lg:py-28">
        <div className="max-w-2xl mx-auto">
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold lg:text-4xl">Our Approach</h2>
              <p className="mt-3 text-muted-foreground">
                Every love story is unique and deserves to be told in its own special way. 
                We believe in creating authentic, timeless imagery that captures not just 
                how your day looked, but how it felt. Our approach combines artistic vision 
                with genuine connection to ensure your memories are preserved exactly as you 
                remember them.
              </p>
            </div>
            <div className="space-y-6 lg:space-y-10">
              <div className="flex">
                <CameraIcon className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Artistic Excellence
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Our imagery combines timeless elegance with modern creativity. 
                    We use top-of-the-line equipment and advanced techniques to 
                    ensure every moment is captured in stunning detail.
                  </p>
                </div>
              </div>

              <div className="flex">
                <UsersIcon className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Personal Connection
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    We believe great photos come from genuine relationships. 
                    We take time to know our couples, understanding their story 
                    and vision to capture authentic moments that matter most.
                  </p>
                </div>
              </div>

              <div className="flex">
                <HeartIcon className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Seamless Experience
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    From the first consultation to final delivery, we make the entire 
                    process smooth and enjoyable. Our organized approach and clear 
                    communication ensure you can focus on enjoying your special day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}