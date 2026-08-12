import { MetadataRoute } from 'next';

// `new Date()` makes this metadata route dynamic by default. GitHub Pages
// needs a completely static export, so tell Next.js to generate it at build time.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://atlas-cleaning.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    }
  ];
}
