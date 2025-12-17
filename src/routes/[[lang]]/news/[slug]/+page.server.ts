import { db } from '$lib/server/db';
import { news, newsCategories } from '$lib/server/db/schema';
import { eq, sql } from 'drizzle-orm';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const blog = await db
		.select({
			title: news.title,
			slug: news.slug,
			featuredImage: news.featuredImage,
			category: newsCategories.name,
			summary: news.summary,
			content: news.content,
		})
		.from(news)
		.leftJoin(newsCategories, eq(newsCategories.id, news.category))
		.where(eq(news.slug, slug))
		.then((rows) => rows[0]);

	const blogAmharic = await db
		.select({
			title: news.titleAmharic,
			slug: news.slug,
			featuredImage: news.featuredImage,
			category: newsCategories.nameAmharic,
			summary: news.summaryAmharic,
			content: news.contentAmharic,
		})
		.from(news)
		.leftJoin(newsCategories, eq(newsCategories.id, news.category))
		.where(eq(news.slug, slug))
		.then((rows) => rows[0]);

	if (!blog || !blogAmharic) {
		error(404, 'No News With this name found');
	}

	await db
		.update(news)
		.set({
			views: sql`${news.views} + 1`
		})
		.where(eq(news.slug, slug));

	return {
		blog,
		blogAmharic
	};
};
