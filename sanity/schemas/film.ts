import { defineField, defineType } from 'sanity'

export const filmSchema = defineType({
  name: 'film',
  title: 'Film / Submission',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Film Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'director', title: 'Director Name', type: 'string' }),
    defineField({ name: 'directorCountry', title: 'Director Country', type: 'string' }),
    defineField({ name: 'synopsis', title: 'Synopsis / Logline', type: 'text', rows: 4 }),
    defineField({ name: 'runtime', title: 'Runtime (e.g. 4:32)', type: 'string' }),
    defineField({ name: 'productionYear', title: 'Production Year', type: 'string' }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Video Art', value: 'video-art' },
          { title: 'Experimental Film', value: 'experimental' },
          { title: 'AI Cinema', value: 'ai-cinema' },
          { title: 'Short Film', value: 'short-film' },
          { title: 'Animation', value: 'animation' },
        ],
      },
    }),
    defineField({
      name: 'season',
      title: 'Season',
      type: 'reference',
      to: [{ type: 'season' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'vimeoUrl', title: 'Vimeo / Screening URL', type: 'url' }),
    defineField({ name: 'directorBio', title: 'Director Bio', type: 'text', rows: 3 }),
    defineField({ name: 'filmfreewayId', title: 'FilmFreeway Project ID', type: 'string', description: 'For CSV import matching' }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'accepted',
      options: {
        list: [
          { title: 'Accepted / Screened', value: 'accepted' },
          { title: 'Submitted', value: 'submitted' },
          { title: 'Rejected', value: 'rejected' },
          { title: 'Withdrawn', value: 'withdrawn' },
        ],
      },
    }),
  ],
  orderings: [
    { title: 'Season, Newest First', name: 'seasonDesc', by: [{ field: 'season.number', direction: 'desc' }] },
    { title: 'Director A–Z', name: 'directorAsc', by: [{ field: 'director', direction: 'asc' }] },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'director',
      season: 'season.code',
    },
    prepare({ title, subtitle, season }) {
      return { title: title ?? 'Untitled', subtitle: `${season ?? ''} — ${subtitle ?? ''}` }
    },
  },
})
