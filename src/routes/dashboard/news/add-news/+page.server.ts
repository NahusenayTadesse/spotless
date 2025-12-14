import { superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { schema, categorySchema } from './schema';

import { db } from '$lib/server/db';
import { news, newsCategories } from '$lib/server/db/schema';
import { fail } from 'sveltekit-superforms';
import { setFlash } from 'sveltekit-flash-message/server';
import type { Actions, PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod4(schema));
	const catForm = await superValidate(zod4(categorySchema));

	const categories = await db
		.select({
			value: newsCategories.id,
			name: newsCategories.name
		})
		.from(newsCategories);

	return {
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

const FILES_DIR: string = env.FILES_DIR ?? '.tempFiles';

if (!fs.existsSync(FILES_DIR)) {
	fs.mkdirSync(FILES_DIR, { recursive: true });
}

export const actions: Actions = {
	addNews: async ({ request, cookies, locals }) => {
		console.log('Connected');

		const form = await superValidate(request, zod4(schema));

		if (!form.valid) {
			// Stay on the same page and set a flash message
			setFlash({ type: 'error', message: 'Please check your form data.' }, cookies);

			return fail(400, { form });
		}

		const {
			title,
			category,
			summary,
			content,

			isPublished,
            featuredImage
		} = form.data;

		console.log(form)

		try {
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

			await db.insert(news).values({
                 title,
                 slug: title.trim()
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
            });

			delete form?.data?.featuredImage;

			// Stay on the same page and set a flash message
			setFlash({ type: 'success', message: 'News Successuflly Added' }, cookies);
			return {
				form
			};
		} catch (err) {
			setFlash(
				{ type: 'error', message: 'An Error occured while adding News' + err.message },
				cookies
			);

			console.error('Error' + err.message);
		}
	},

    addCategory: async({request, cookies})=>{
         
         		const form = await superValidate(request, zod4(categorySchema));

                if (!form.valid) {
			// Stay on the same page and set a flash message
			setFlash({ type: 'error', message: 'Please check your form data.' }, cookies);

			return fail(400, { form });
		}

         const { name, description } = form.data
       try {
         await db.insert(newsCategories).values({
             name,
             description
         }); 

         			setFlash({ type: 'success', message: 'Category Successuflly Added' }, cookies);

        } catch(err) {
            setFlash(
				{ type: 'error', message: 'An Error occured while adding Category' + err.message },
				cookies
			);

			console.error('Error' + err.message);
		}
        }
    };

