import type { Metadata } from 'next'
import { NextStudio, metadata as studioMetadata } from 'next-sanity/studio'
import config from '../../../sanity.config'

export const dynamic = 'force-static'
export { viewport } from 'next-sanity/studio'

export const metadata: Metadata = {
  ...studioMetadata,
  title: 'DELETE TV Studio',
  alternates: { canonical: null },
}

export default function StudioPage() {
  return <NextStudio config={config} />
}
