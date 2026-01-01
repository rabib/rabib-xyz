import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        excerpt: z.string().optional(),
        publishDate: z.date(),
        featured: z.boolean().optional(),
        image: z
            .object({
                src: z.string(),
                alt: z.string().optional()
            })
            .optional()
    })
});

export const collections = { blog };
