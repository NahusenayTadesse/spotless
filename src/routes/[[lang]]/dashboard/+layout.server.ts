import { db } from '$lib/server/db';
import { contactMessages, news } from '$lib/server/db/schema';
import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

import { sql } from 'drizzle-orm';
export const load: LayoutServerLoad = async ({ locals }) => {
	if (!locals.user) {
		redirect(302, '/login');
	}

	const [[newsStats], [messageStats]] = await Promise.all([
		db
			.select({
				newsCount: sql<number>`COUNT(*)`,
				totalViews: sql<number>`COALESCE(SUM(${news.views}), 0)`
			})
			.from(news),

		db
			.select({
				messageCount: sql<number>`COUNT(*)`
			})
			.from(contactMessages)
	]);

	return {
		newsNum: newsStats.newsCount,
		totalViews: newsStats.totalViews,
		messageNum: messageStats.messageCount
	};
};
