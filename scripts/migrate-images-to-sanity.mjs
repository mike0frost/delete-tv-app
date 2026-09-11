import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const envPath = join(dirname(fileURLToPath(import.meta.url)), '../.env.local')
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

const isWixUrl = (url) => typeof url === 'string' && url.includes('static.wixstatic.com')

// Cache so identical Wix URLs (shared between cover + gallery) are only uploaded once
const uploadCache = new Map()

async function uploadWixImage(wixUrl) {
  if (uploadCache.has(wixUrl)) return uploadCache.get(wixUrl)

  const res = await fetch(wixUrl)
  if (!res.ok) throw new Error(`Fetch failed (${res.status}): ${wixUrl}`)
  const buffer = Buffer.from(await res.arrayBuffer())

  const filename = wixUrl.split('/').pop().split('~')[0] || 'image.jpg'
  const asset = await client.assets.upload('image', buffer, { filename })

  uploadCache.set(wixUrl, asset.url)
  return asset.url
}

async function migrate() {
  const seasons = await client.fetch(
    `*[_type == "season"] | order(number asc) { _id, number, coverUrl, imageUrls }`
  )
  console.log(`Found ${seasons.length} seasons. Uploading Wix-hosted images to Sanity...\n`)

  for (const season of seasons) {
    let coverUrl = season.coverUrl
    let changed = false

    if (isWixUrl(coverUrl)) {
      coverUrl = await uploadWixImage(coverUrl)
      changed = true
    }

    const imageUrls = []
    for (const url of season.imageUrls || []) {
      if (isWixUrl(url)) {
        imageUrls.push(await uploadWixImage(url))
        changed = true
      } else {
        imageUrls.push(url)
      }
    }

    if (changed) {
      await client.patch(season._id).set({ coverUrl, imageUrls }).commit()
      console.log(`✅ Season ${season.number}: images moved to Sanity CDN`)
    } else {
      console.log(`— Season ${season.number}: nothing to migrate`)
    }
  }

  console.log(`\n✅ Done. ${uploadCache.size} unique images uploaded to Sanity.`)
}

migrate().catch((err) => {
  console.error('Migration failed:', err.message)
  process.exit(1)
})
