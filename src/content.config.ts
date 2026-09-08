import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
export const collections = {
  posts: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
    schema: z.object({
      title: z.string(), date: z.coerce.date(), tags: z.array(z.string()).default([]),
      category: z.enum(['research', 'news']), slug: z.string(), description: z.string().optional(),
    }),
  }),
};
