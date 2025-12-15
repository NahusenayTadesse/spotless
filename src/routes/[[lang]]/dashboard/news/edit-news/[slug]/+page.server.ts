import { db } from '$lib/server/db';
import { news, newsCategories } from '$lib/server/db/schema';
import { eq, sql } from 'drizzle-orm';
import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { schema, categorySchema } from './schema';
import { fail } from 'sveltekit-superforms';
import { setFlash } from 'sveltekit-flash-message/server';
import type { Actions, PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;
	const blog = await db
		.select({
			title: news.title,
			slug: news.slug,
			featuredImage: news.featuredImage,
			categoryId: news.category,
			category: newsCategories.name,
			summary: news.summary,
			content: news.content,
			views: news.views
		})
		.from(news)
		.leftJoin(newsCategories, eq(newsCategories.id, news.category))
		.where(eq(news.slug, slug))
		.then((rows) => rows[0]);

	if (!blog) {
		error(404, 'No News With this name found');
	}

	await db
		.update(news)
		.set({
			views: sql`${news.views} + 1`
		})
		.where(eq(news.slug, slug));

	const form = await superValidate(zod4(schema));
	const catForm = await superValidate(zod4(categorySchema));

	const categories = await db
		.select({
			value: newsCategories.id,
			name: newsCategories.name
		})
		.from(newsCategories);

	return {
		blog,
		form,
		catForm,
		categories
	};
};

import fs from 'node:fs';
import path from 'node:path';
import { generateUserId } from '$lib/global.svelte';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';

const FILES_DIR: string = env.FILES_DIR ?? '.tempFiles';

if (!fs.existsSync(FILES_DIR)) {
	fs.mkdirSync(FILES_DIR, { recursive: true });
}

export const actions: Actions = {
	editNews: async ({ request, cookies, locals, params }) => {
		const { slug } = params;

		const form = await superValidate(request, zod4(schema));

		if (!form.valid) {
			// Stay on the same page and set a flash message
			setFlash({ type: 'error', message: 'Please check your form data.' }, cookies);

			return fail(400, { form });
		}

		const { title, category, summary, content, isPublished, featuredImage, edit } = form.data;

		try {
			if (edit) {
				const recieptLink = `${generateUserId()}${path.extname(featuredImage.name)}`;

				const file_path: string = path.normalize(path.join(FILES_DIR, recieptLink));

				const nodejs_wstream = fs.createWriteStream(file_path);
				const web_rstream = featuredImage.stream();
				const nodejs_rstream = Readable.fromWeb(web_rstream);
				await pipeline(nodejs_rstream, nodejs_wstream).catch(() => {
					setFlash(
						{ type: 'error', message: 'An Error occured while adding Salary ' + err.message },
						cookies
					);

					console.error('Error' + err.message);
				});
				await db
					.update(news)
					.set({
						title,
						slug: title
							.trim()
							.toLowerCase()
							.replace(/\s+/g, '-')
							.replace(/[^a-z0-9-]/g, '')
							.replace(/-+/g, '-')
							.replace(/^-+|-+$/g, ''),
						authorId: locals?.user?.id,
						category,
						summary,
						content,
						isPublished,
						featuredImage: recieptLink,
						views: 0
					})
					.where(eq(news.slug, slug));
			} else {
				await db
					.update(news)
					.set({
						title,
						slug: title
							.trim()
							.toLowerCase()
							.replace(/\s+/g, '-')
							.replace(/[^a-z0-9-]/g, '')
							.replace(/-+/g, '-')
							.replace(/^-+|-+$/g, ''),
						authorId: locals?.user?.id,
						category,
						summary,
						content,
						isPublished
					})
					.where(eq(news.slug, slug));
			}

			delete form?.data?.featuredImage;

			// Stay on the same page and set a flash message
			setFlash({ type: 'success', message: 'Edit Saved' }, cookies);
			return {
				form
			};
		} catch (err) {
			setFlash(
				{ type: 'error', message: 'An Error occured while editing News' + err.message },
				cookies
			);

			console.error('Error' + err.message);
		}
	},

	delete: async ({ request, cookies, params }) => {
		try {
			const { slug } = params;
			await db.delete(news).where(eq(news.slug, slug));

			setFlash({ type: 'success', message: 'Delete Successfull' }, cookies);
		} catch (err) {
			setFlash(
				{ type: 'error', message: 'An Error occured while deleting' + err.message },
				cookies
			);

			console.error('Error' + err.message);
		}
	}
};
