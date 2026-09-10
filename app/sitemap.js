import { client } from '../sanity/lib/client';
import { allSlugsQuery } from '../sanity/lib/queries';

export default async function sitemap() {
  const base = 'https://delete-tv.com';

  const seasons = await client.fetch(allSlugsQuery);
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
