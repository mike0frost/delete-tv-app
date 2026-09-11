import { createClient } from '@sanity/client'
import { readFileSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')

const envPath = join(rootDir, '.env.local')
const env = readFileSync(envPath, 'utf8')
  .split('\n')
  .filter((l) => l.includes('='))
  .reduce((acc, line) => {
    const [key, ...val] = line.split('=')
    acc[key.trim()] = val.join('=').trim()
    return acc
  }, {})

const client = createClient({
  projectId: env['NEXT_PUBLIC_SANITY_PROJECT_ID'],
  dataset: env['NEXT_PUBLIC_SANITY_DATASET'] ?? 'production',
  apiVersion: '2024-01-01',
  token: env['SANITY_API_TOKEN'],
  useCdn: false,
})

// Same order as the hardcoded newsImages array in app/page.jsx (newest first)
const newsImages = [
  '/DeleteTV_Winner_26_news.png',
  '/Submissions_open_news.png',
  '/News_season_2026.png',
  '/August_News.png',
  '/July_News.png',
  '/June_2026_news.png',
  '/news_may_2026_square.png',
  'https://static.wixstatic.com/media/4fafd8_76a8afdb11ec42629dc885e135107786~mv2.png',
  'https://static.wixstatic.com/media/4fafd8_394305b7e88742a29ae5fbccfa02571b~mv2.png',
]

async function uploadImage(source) {
  let buffer, filename

  if (source.startsWith('http')) {
    const res = await fetch(source)
    if (!res.ok) throw new Error(`Fetch failed (${res.status}): ${source}`)
    buffer = Buffer.from(await res.arrayBuffer())
    filename = source.split('/').pop().split('~')[0]
  } else {
    const filePath = join(rootDir, 'public', source)
    if (!existsSync(filePath)) throw new Error(`Local file not found: ${filePath}`)
    buffer = readFileSync(filePath)
    filename = source.replace(/^\//, '')
  }

  const asset = await client.assets.upload('image', buffer, { filename })
  return asset.url
}

async function migrate() {
  console.log(`Migrating ${newsImages.length} news images to Sanity...\n`)

  for (let i = 0; i < newsImages.length; i++) {
    const source = newsImages[i]
    const imageUrl = await uploadImage(source)

    await client.createOrReplace({
      _type: 'newsItem',
      _id: `news-item-${i + 1}`,
      imageUrl,
      order: i + 1,
    })

    console.log(`✅ News item ${i + 1}: ${source} -> ${imageUrl}`)
  }

  console.log('\n✅ All news images migrated to Sanity.')
}

migrate().catch((err) => {
  console.error('Migration failed:', err.message)
  process.exit(1)
})
