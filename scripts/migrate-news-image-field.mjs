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

// e.g. https://cdn.sanity.io/images/a9m3szg7/production/57e321e6...-1254x1254.png
// -> asset _id: image-57e321e6...-1254x1254-png
function urlToAssetId(url) {
  const match = url.match(/\/([a-f0-9]+)-(\d+x\d+)\.(\w+)$/)
  if (!match) throw new Error(`Could not parse asset id from: ${url}`)
  const [, hash, dims, format] = match
  return `image-${hash}-${dims}-${format}`
}

async function migrate() {
  const items = await client.fetch(`*[_type == "newsItem"]{ _id, imageUrl }`)
  console.log(`Found ${items.length} news items to convert.\n`)

  for (const item of items) {
    const assetId = urlToAssetId(item.imageUrl)
    await client
      .patch(item._id)
      .set({ image: { _type: 'image', asset: { _type: 'reference', _ref: assetId } } })
      .unset(['imageUrl'])
      .commit()
    console.log(`✅ ${item._id} -> ${assetId}`)
  }

  console.log('\n✅ All news items converted to native image field.')
}

migrate().catch((err) => {
  console.error('Migration failed:', err.message)
  process.exit(1)
})
