import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://viridiscodex.com',
      lastModified: new Date(),
    },
  ]
}