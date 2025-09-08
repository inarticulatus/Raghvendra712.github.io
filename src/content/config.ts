import { glob } from "astro/loaders";
import { z, reference, defineCollection } from "astro:content";

const articles = defineCollection({
    loader: glob({ pattern: ["**/*.md", "**/*.mdx"], base: "./src/content/articles" }),
    schema: ({ image }) => z.object({
        cover: image().optional(),
        // coverAlt: z.string(),
        title: z.string().optional(),
        // slug: z.string(),
        snippet: z.string().optional(),
        category: z.string().optional(),
        pubDate: z.coerce.date(),
        // readingDuration: z.number(),
        // originalLink: z.string().url(),
        portfolio: z.boolean().default(false),
        author: z.string().default('Raghvendra Singh'),
    }),
});

export const collections = { articles };