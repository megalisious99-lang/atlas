import { MetadataRoute } from 'next';

// Metadata routes must be explicitly static when using `output: 'export'`.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: 'https://atlas-cleaning.com/sitemap.xml'
  };
}
