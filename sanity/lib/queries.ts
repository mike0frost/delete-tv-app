import { groq } from 'next-sanity'

export const allSeasonsQuery = groq`
  *[_type == "season"] | order(number desc) {
    number, code, slug, title, fullTitle, desc, artists, date,
    "coverUrl": coverUrl,
    "imageUrls": imageUrls,
    wixUrl,
  }
`

export const seasonBySlugQuery = groq`
  *[_type == "season" && slug == $slug][0] {
    number, code, slug, title, fullTitle, desc, artists, date,
    "coverUrl": coverUrl,
    "imageUrls": imageUrls,
    wixUrl,
  }
`

export const allSlugsQuery = groq`*[_type == "season"] { slug }`

export const filmsBySeasonQuery = groq`
  *[_type == "film" && season._ref == $seasonId && status == "accepted"] | order(director asc) {
    _id, title, director, directorCountry, synopsis, runtime, productionYear, category, vimeoUrl, directorBio,
  }
`

export const newsItemsQuery = groq`
  *[_type == "newsItem"] | order(order asc) {
    _id, imageUrl, caption,
  }
`

export const allFilmsQuery = groq`
  *[_type == "film" && status == "accepted"] | order(season->number desc, director asc) {
    _id, title, director, directorCountry, synopsis, runtime, productionYear, category,
    "seasonCode": season->code,
    "seasonNumber": season->number,
    "seasonSlug": season->slug,
  }
`
