import { db } from '$lib/server/db';
import { news, newsCategories } from '$lib/server/db/schema';
import { eq, desc } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const blogs = await db
		.select({
			title: news.title,
			titleAmharic: news.titleAmharic,
			slug: news.slug,
			featuredImage: news.featuredImage,
			category: newsCategories.name,
			categoryAmharic: newsCategories.nameAmharic,
			summary: news.summary,
			summaryAmharic: news.summaryAmharic
		})
		.from(news)
		.leftJoin(newsCategories, eq(newsCategories.id, news.category))
		.where(eq(news.isPublished, true))
		.orderBy(desc(news.createdAt));

	return {
		blogs
	};
};
