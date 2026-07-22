import { seasons } from './data/seasons';

export default function sitemap() {
  const base = 'https://delete-tv.com';

  const seasonUrls = seasons.map((s) => ({
    url: `${base}/broadcast/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...seasonUrls,
  ];
}
