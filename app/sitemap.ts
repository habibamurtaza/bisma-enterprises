import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://bisma-enterprises.vercel.app'
  return [{ url: `${base}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }]
}
