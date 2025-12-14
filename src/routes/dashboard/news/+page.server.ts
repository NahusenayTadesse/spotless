import { db } from '$lib/server/db';
import { news, newsCategories, user } from '$lib/server/db/schema';

import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const messages = await db
		.select({
			id: news.id,
			category: newsCategories.name,
			title: news.title,
			slug: news.slug,
			summary: news.summary,
			content: news.content,
			author: user.name,
			date: news.publishedAt,
			views: news.views,
			featured: news.featuredImage
		})
		.from(news)
		.leftJoin(newsCategories, eq(news.category, newsCategories.id))
		.leftJoin(user, eq(news.authorId, user.id));

	return {
		messages
	};
};
