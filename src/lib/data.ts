// src/lib/data.ts
// --- Vite Asset Handling ---
// Use import.meta.glob to find all .webp and .jpg files within src/albums
// eager: true loads them immediately. import: 'default' gets the URL string.
const processedThumbnails: Record<string, string> = import.meta.glob(
    '/src/albums/**/*.{webp,jpg,jpeg,JPG,JPEG}',
    { eager: true, import: 'default' }
);

// Helper function to safely get the processed URL from the glob result
function getProcessedThumbnailUrl(absolutePathFromRoot: string): string {
  const processedUrl = processedThumbnails[absolutePathFromRoot];
  if (!processedUrl) {
    console.warn(`[data.ts] Thumbnail not found or processed for path: ${absolutePathFromRoot}. Check file exists & glob pattern.`);
    // Return a default placeholder or handle the error appropriately
    return '/vite.svg'; // Example: Vite's default public asset
  }
  return processedUrl;
}
// --- End Vite Asset Handling ---


// IMPORTANT: The keys for getProcessedThumbnailUrl MUST match the absolute path
// from the project root as recognized by import.meta.glob.

export const albums = [
  {
    id: "events",
    title: "EVENTS",
    description: "Professional coverage for corporate events, parties, and special occasions.",
    photos: [
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtTuQHB6rEUHqbjVpkDQeuWBXo4gaP2w7KisZO",
        thumbnailUrl: getProcessedThumbnailUrl('/src/albums/events/E1.webp')
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtiZhQwGJwIOGXME23B8ZD0yrVUfFYKLHmNs6b",
        thumbnailUrl: getProcessedThumbnailUrl('/src/albums/events/E2.webp')
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtk3P9ocdWb5xtNJBmZvef0dM9laQDqUuoh37H",
        thumbnailUrl: getProcessedThumbnailUrl('/src/albums/events/E3.webp')
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObt1Ij0d1jQC81R39YBeupvMSjAhOyLbl6fosZG",
        thumbnailUrl: getProcessedThumbnailUrl('/src/albums/events/E4.webp')
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtNm7l7pgx4Wd91icMRehJaKugQpSUtAymIHGf",
        thumbnailUrl: getProcessedThumbnailUrl('/src/albums/events/E5.webp')
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtRFFP906pe1OjBu86Gb4JKVs7RIUQ32gkcrn5",
        thumbnailUrl: getProcessedThumbnailUrl('/src/albums/events/E6.webp'),
        objectPosition: "left"
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtmdUi1qhdlQ0AhjSDy7xoWbGJavsFw29Ou4TE",
        thumbnailUrl: getProcessedThumbnailUrl('/src/albums/events/E7.webp'),
        objectPosition: "top" // Added object-position to show the top of the image
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtHqTIkk0rQEXVUmc8h7jCqnks1FHYwePRoliz",
        thumbnailUrl: getProcessedThumbnailUrl('/src/albums/events/E8.webp')
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtFbZoE2lCtAguTsGL8fpmNYUJjowqi76H2zWZ",
        thumbnailUrl: getProcessedThumbnailUrl('/src/albums/events/E9.webp'),
        objectPosition: "top" // Added object-position to show the top of the image
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObt1a89ULQC81R39YBeupvMSjAhOyLbl6fosZGP",
        thumbnailUrl: getProcessedThumbnailUrl('/src/albums/events/E10.webp')
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtJpnf1kNeDoGuFYmw38p6CfJibscUO5vBMgxh",
        thumbnailUrl: getProcessedThumbnailUrl('/src/albums/events/E11.webp')
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtsbHIUOCBD1P5g8eCwkJ0rx6LNVn7Wmu9hyUa",
        thumbnailUrl: getProcessedThumbnailUrl('/src/albums/events/E12.webp')
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtsPwcLkBD1P5g8eCwkJ0rx6LNVn7Wmu9hyUa2",
        thumbnailUrl: getProcessedThumbnailUrl('/src/albums/events/E13.webp')
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObt5cV2DNFLUZAnFo5623slQ1WbRfYka4exqrgt",
        thumbnailUrl: getProcessedThumbnailUrl('/src/albums/events/E14.webp')
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtrYOk0v32pLhcDK9Ago0PrZO1QlRwtMUfdSBX",
        thumbnailUrl: getProcessedThumbnailUrl('/src/albums/events/E15.webp')
      }
    ]
  },
  {
    id: "portraits",
    title: "PORTRAITS",
    description: "Beautiful and timeless portraits for individuals, couples, and families.",
    photos: [
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObt12NHzVQC81R39YBeupvMSjAhOyLbl6fosZGP",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/portraits/P1.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtsETSAGBD1P5g8eCwkJ0rx6LNVn7Wmu9hyUa2",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/portraits/P2.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtm8MPoShdlQ0AhjSDy7xoWbGJavsFw29Ou4TE",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/portraits/P3.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObt8GzaLOoJ72F3x8vQARUNGMo46iOYez9plwbV",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/portraits/P4.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtrFNgCL32pLhcDK9Ago0PrZO1QlRwtMUfdSBX",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/portraits/P5.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtJy481GrNeDoGuFYmw38p6CfJibscUO5vBMgx",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/portraits/P6.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtfAsJuKmkMuELpAk3YIcXC4myegKUOjbxqFon",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/portraits/P7.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtZV3aTdbtVI0ksQ1jHZS5rFehTdlqnCuRPB7O",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/portraits/P8.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtJAMqMFNeDoGuFYmw38p6CfJibscUO5vBMgxh",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/portraits/P9.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtft9ZWAkMuELpAk3YIcXC4myegKUOjbxqFont",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/portraits/P10.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtJ9pfqSNeDoGuFYmw38p6CfJibscUO5vBMgxh",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/portraits/P11.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObta1t05yVqnFQWoPp9r2HjYwvhEtTemOJgAV5B",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/portraits/P12.webp"),
        objectPosition: "top" // Added object-position to show the top of the image
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtLIwV2dTbY25qZVQTtmn6pDPcCdx793orNzEl",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/portraits/P13.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtsvg9TTBD1P5g8eCwkJ0rx6LNVn7Wmu9hyUa2",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/portraits/P14.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtyrCQiQLryqupfEZLBMiOVAQcs36YT2dWtGwa",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/portraits/P15.webp"),
        objectPosition: "top" // Added object-position to show the top of the image
      },
    ]
  },
  {
    id: "engagements",
    title: "ENGAGEMENTS",
    description: "Celebrate your love with a beautiful engagement session.",
    photos: [
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtFJ5zVslCtAguTsGL8fpmNYUJjowqi76H2zWZ",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/engagements/EN1.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObt5HhTbdFLUZAnFo5623slQ1WbRfYka4exqrgt",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/engagements/EN2.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtPCOtQuYkzKpgcaRf7FBbn6TS1GuwM43YCsrD",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/engagements/EN3.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObteYaX95rtiZgUjbRpV5I01LGBPw63xXfAlS4O",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/engagements/EN4.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtwfEYr3b2bfpYtHZUTPq9AcinKWoNSxQvRlsk",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/engagements/EN5.webp"),
        objectPosition: "top"
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObt8YIe0goJ72F3x8vQARUNGMo46iOYez9plwbV",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/engagements/EN6.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtiguLptJwIOGXME23B8ZD0yrVUfFYKLHmNs6b",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/engagements/EN7.webp")
      },
    ]
  },
  {
    id: "graduations",
    title: "GRADUATIONS",
    description: "Capture the excitement and joy of your graduation day.",
    photos: [
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObt5i9j03hFLUZAnFo5623slQ1WbRfYka4exqrg",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/graduations/G1.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtZtOU8wDbtVI0ksQ1jHZS5rFehTdlqnCuRPB7",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/graduations/G2.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtGVuakawkdBCSxcX1oOpJ3QZH9ag6RrihW4Dq",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/graduations/G3.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtZttQqZXbtVI0ksQ1jHZS5rFehTdlqnCuRPB7",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/graduations/G4.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtY7Wgb6RSLaeNIvJoZQy5Oig3Tjr4tfVP918H",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/graduations/G5.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtHxvYyy0rQEXVUmc8h7jCqnks1FHYwePRoliz",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/graduations/G6.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtyEKJDJLryqupfEZLBMiOVAQcs36YT2dWtGwa",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/graduations/G7.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtG9f9kqnwkdBCSxcX1oOpJ3QZH9ag6RrihW4D",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/graduations/G8.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtyrWc5abLryqupfEZLBMiOVAQcs36YT2dWtGw",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/graduations/G9.webp")
      },
    ]
  },
  {
    id: "aerial",
    title: "AERIAL",
    description: "Stunning drone photography and videography for a unique perspective.",
    photos: [
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtmply4LbhdlQ0AhjSDy7xoWbGJavsFw29Ou4T",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/aerials/A1.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtigwFHMEJwIOGXME23B8ZD0yrVUfFYKLHmNs6",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/aerials/A2.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObttgYuwqPxR1hHoUONG4XmF8ATb9Cn06yP7lpE",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/aerials/A3.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtelh70EtiZgUjbRpV5I01LGBPw63xXfAlS4Or",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/aerials/A4.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObt83cyI0oJ72F3x8vQARUNGMo46iOYez9plwbV",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/aerials/A5.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObt0wcjWunKJp7TOtRVi5yXwB3aZqjQ2eo8AfFM",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/aerials/A6.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtNW2rBNgx4Wd91icMRehJaKugQpSUtAymIHGf",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/aerials/A7.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtyrTc3bQLryqupfEZLBMiOVAQcs36YT2dWtGw",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/aerials/A8.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtYDhmFDRSLaeNIvJoZQy5Oig3Tjr4tfVP918H",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/aerials/A9.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtZRxwF3btVI0ksQ1jHZS5rFehTdlqnCuRPB7O",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/aerials/A10.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtmplacCYhdlQ0AhjSDy7xoWbGJavsFw29Ou4T",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/aerials/A11.webp")
      },
    ]
  },
  {
    id: "cafes",
    title: "CAFES",
    description: "Beautiful and inviting photos of your cafe, bakery. restaurant, or bar.",
    photos: [
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObt6xXZ3paKdLZjIlryBeiT4MVthwo9HXOGs0qU",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/cafes/C1.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtyrdbFJELryqupfEZLBMiOVAQcs36YT2dWtGw",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/cafes/C2.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtOrJz4JxNckmwyK85oZvRAQpz3uXi2Ueb0qgV",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/cafes/C3.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtihyNLzJwIOGXME23B8ZD0yrVUfFYKLHmNs6b",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/cafes/C4.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtNerQsLgx4Wd91icMRehJaKugQpSUtAymIHGf",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/cafes/C5.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtFVfhTLlCtAguTsGL8fpmNYUJjowqi76H2zWZ",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/cafes/C6.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtnvi6jrOv2M4fJ7NFirqWk9bPlTnsZEpH1eOQ",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/cafes/C7.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtkDGTHfdWb5xtNJBmZvef0dM9laQDqUuoh37H",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/cafes/C8.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtVnm1ON4HrMkKSNzho0XPTBUg1O84xF9aDJGQ",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/cafes/C9.webp")
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtg4ugp9ym4LZd8PHEXocRfehzpwrJ3ATuySGj",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/cafes/C10.webp"),
        objectPosition: "left"
      },
      {
        url: "https://vb44myhm6t.ufs.sh/f/I9fYjfqZTObtnNZ1y9Ov2M4fJ7NFirqWk9bPlTnsZEpH1eOQ",
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/cafes/C11.webp")
      },
    ]
  },
  {
    id: "proposals",
    title: "PROPOSALS",
    description: "Capturing the moment you say 'yes'.",
    photos: [
      {
        url: getProcessedThumbnailUrl("/src/albums/proposals/P1.webp"), // Placeholder - Replace with actual high-res URL
        thumbnailUrl: getProcessedThumbnailUrl("/src/albums/proposals/P1.webp")
      },
      // Add other proposal photos here following the same pattern
    ]
  },
  {
    id: "weddings",
    title: "WEDDINGS",
    description: "Capturing the magic, emotion, and intimate moments of your special day.",
    photos: [
      // NOTE: Using Unsplash URLs for both high-res and thumbnails here as no local .webp files were provided for weddings.
      // If you add local webp files for weddings under /src/albums/weddings/, update thumbnailUrl accordingly:
      // thumbnailUrl: getProcessedThumbnailUrl("/src/albums/weddings/wedding1.webp")
      {
        url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200",
        thumbnailUrl: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=400"
      },
      {
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200",
        thumbnailUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=400"
      },
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200",
        thumbnailUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400"
      },
      {
        url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200",
        thumbnailUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=400"
      },
      {
        url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200",
        thumbnailUrl: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=400"
      },
      {
        url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200",
        thumbnailUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400"
      },
      {
        url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200",
        thumbnailUrl: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=400"
      },
      {
        url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200",
        thumbnailUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=400"
      },
      {
        url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200",
        thumbnailUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400"
      },
    ]
  },
];

// Highlights data for the PhotoHighlights component
export const highlights = [
    {
        url: getProcessedThumbnailUrl('/src/albums/modeling/M5.webp'),
          size: "large"
    },
    {
        url: getProcessedThumbnailUrl('/src/albums/travel/T3.webp'),
        size: "small"
    },
    {
      url: getProcessedThumbnailUrl('/src/albums/travel/T2.webp'),
        size: "small"
    },
    {
      url: getProcessedThumbnailUrl('/src/albums/graduations/G3.webp'),
        size: "medium"
    },
    {
      url: getProcessedThumbnailUrl('/src/albums/modeling/M12.webp'),
      size: "medium"
    }
];

// Keep the services export as it was
export const services = [
  {
    title: "Wedding Photography",
    startingPrice: 2500,
    features: [
      "8 hours of coverage",
      "Second photographer",
      "Online gallery",
      "High-resolution digital files",
      "Engagement session",
      "Wedding day timeline planning"
    ]
  },
  {
    title: "Event Photography",
    startingPrice: 1500,
    features: [
      "4 hours of coverage",
      "Professional editing",
      "Online gallery",
      "High-resolution digital files",
      "Quick turnaround",
      "Commercial usage rights"
    ]
  },
  {
    title: "Aerial Photography",
    startingPrice: 800,
    features: [
      "2 hours of drone coverage",
      "4K video footage",
      "High-resolution photos",
      "FAA licensed pilot",
      "Location scouting",
      "Raw footage included"
    ]
  }
];