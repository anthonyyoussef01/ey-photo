import { getPlaiceholder } from 'plaiceholder';
import fs from 'fs/promises';
import path from 'path';

async function generateBlurPlaceholders() {
  const albums = // ... load your albums data
  
  for (const album of albums) {
    for (const photo of album.photos) {
      const { base64 } = await getPlaiceholder(photo.url);
      photo.blurDataUrl = base64;
    }
  }

  await fs.writeFile(
    path.join(process.cwd(), 'src/lib/data.ts'),
    `export const albums = ${JSON.stringify(albums, null, 2)}`
  );
}

generateBlurPlaceholders();
