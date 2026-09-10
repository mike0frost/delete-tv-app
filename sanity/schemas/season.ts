import { defineField, defineType } from 'sanity'

export const seasonSchema = defineType({
  name: 'season',
  title: 'Season',
  type: 'document',
  fields: [
    defineField({
      name: 'number',
      title: 'Season Number',
      type: 'number',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: 'code',
      title: 'Code',
      type: 'string',
      description: 'Display code, e.g. [S 12]',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'string',
      description: 'URL slug, e.g. season-12 — never change once live',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Short title, e.g. Season 12',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fullTitle',
      title: 'Full Title',
      type: 'string',
      description: 'e.g. Season 12 Collection 2026',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Year',
      type: 'string',
      description: 'Broadcast year, e.g. 2026',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'Shown on archive grid cards — keep short',
    }),
    defineField({
      name: 'artists',
      title: 'Artists',
      type: 'text',
      rows: 4,
      description: 'Comma-separated: Name (Country), Name (Country). Shown only on detail page.',
    }),
    defineField({
      name: 'coverUrl',
      title: 'Cover Image URL',
      type: 'url',
      validation: (Rule) => Rule.uri({ allowRelative: true, scheme: ['http', 'https'] }),
      description: 'URL of the cover image (first/oldest broadcast). Can be /public path or Wixstatic URL.',
    }),
    defineField({
      name: 'wixUrl',
      title: 'Wix Post URL',
      type: 'url',
      description: 'Legacy link to original Wix post (optional)',
    }),
    defineField({
      name: 'imageUrls',
      title: 'Broadcast Image URLs',
      type: 'array',
      of: [{ type: 'url', validation: (Rule) => Rule.uri({ allowRelative: true, scheme: ['http', 'https'] }) }],
      description: 'All broadcast images for the gallery lightbox',
    }),
  ],
  orderings: [
    {
      title: 'Season Number, Newest First',
      name: 'numberDesc',
      by: [{ field: 'number', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'fullTitle',
      subtitle: 'date',
    },
  },
})
