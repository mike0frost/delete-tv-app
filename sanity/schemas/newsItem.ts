import { defineField, defineType } from 'sanity'

export const newsItemSchema = defineType({
  name: 'newsItem',
  title: 'News Item',
  type: 'document',
  fields: [
    defineField({
      name: 'imageUrl',
      title: 'Image URL',
      type: 'url',
      description: 'Uploaded to Sanity’s CDN — replace by re-running the news migration, or paste a new cdn.sanity.io URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional short caption shown on hover/alt text',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers show first in the grid',
      validation: (Rule) => Rule.required().integer(),
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'caption',
      subtitle: 'order',
      media: 'imageUrl',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'News image',
        subtitle: `Order: ${subtitle}`,
      }
    },
  },
})
