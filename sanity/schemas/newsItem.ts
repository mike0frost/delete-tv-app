import { defineField, defineType } from 'sanity'

export const newsItemSchema = defineType({
  name: 'newsItem',
  title: 'News Item',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
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
      description: 'Higher numbers show first. To add a new item as the newest, use a number one higher than the current highest.',
      validation: (Rule) => Rule.required().integer(),
    }),
  ],
  orderings: [
    {
      title: 'Display Order, Newest First',
      name: 'orderDesc',
      by: [{ field: 'order', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'caption',
      subtitle: 'order',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'News image',
        subtitle: `Order: ${subtitle}`,
        media,
      }
    },
  },
})
