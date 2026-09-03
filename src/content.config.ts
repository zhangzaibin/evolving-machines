import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file } from 'astro/loaders';

const projects = defineCollection({
	loader: file('src/data/projects.json'),
	schema: z.object({
		id: z.string(),
		name: z.string(),
		kicker: z.string(),
		tagline: z.string(),
		description: z.string(),
		theme: z.string(),
		world: z.enum(['Digital World', 'Physical World']),
		year: z.number(),
		metrics: z.array(z.string()).default([]),
		links: z.record(z.string(), z.string()).default({}),
		image: z.string().optional(),
		modules: z.array(z.object({
			name: z.string(),
			description: z.string(),
			status: z.enum(['Open Source', 'Coming Soon']),
		})).optional(),
	}),
});

const publications = defineCollection({
	loader: file('src/data/publications.json'),
	schema: z.object({
		id: z.string(),
		title: z.string(),
		authors: z.string(),
		venue: z.string(),
		year: z.number(),
		theme: z.string(),
		abstract: z.string(),
		badge: z.string().optional(),
		links: z.record(z.string(), z.string()).default({}),
	}),
});

const news = defineCollection({
	loader: file('src/data/news.json'),
	schema: z.object({
		id: z.string(),
		date: z.coerce.date(),
		title: z.string(),
		description: z.string(),
		link: z.string().optional(),
	}),
});

export const collections = { projects, publications, news };
