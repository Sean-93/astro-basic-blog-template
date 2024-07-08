import { z, defineCollection } from "astro:content";

const archiveCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.date(),
			ogImage: image(),
			author: z.string(),
		}),
});

export const collections = {
	archive: archiveCollection,
};