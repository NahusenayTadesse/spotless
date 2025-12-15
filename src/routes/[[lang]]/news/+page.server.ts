import { db } from '$lib/server/db';
import { news, newsCategories } from '$lib/server/db/schema';
import { eq, desc } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const blogs = await db
		.select({
			title: news.title,
			slug: news.slug,
			featuredImage: news.featuredImage,
			category: newsCategories.name,
			summary: news.summary
		})
		.from(news)
		.leftJoin(newsCategories, eq(newsCategories.id, news.category))
		.orderBy(desc(news.createdAt));

	return {
		blogs
	};
};
