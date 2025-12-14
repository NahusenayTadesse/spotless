import { z } from "zod/v4";

// Max image size (10MB)
const MAX_IMAGE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/jpg"];

export const schema = z.object({

	title: z.string('Title is required').max(50),

	category: z.coerce.number('Category is required').int(),


	summary: z.string().max(255).optional(),

	content: z.string('Content is required'),

	isPublished: z.boolean().default(false),


	// ------ Featured Image Validation ------
	featuredImage: z
		.any()
		.optional()
		.refine(
			(file) => {
				if (!file) return true;
				return file instanceof File;
			},
			{ message: "Featured image must be a valid file upload." }
		)
		.refine(
			(file) => {
				if (!file) return true;
				return ACCEPTED_IMAGE_TYPES.includes(file.type);
			},
			{ message: "Image must be JPEG, PNG, or WebP." }
		)
		.refine(
			(file) => {
				if (!file) return true;
				return file.size <= MAX_IMAGE_SIZE;
			},
			{ message: "Image must be under 10MB." }
		),
});

export const categorySchema = z.object({

	name: z.string('Name is Required'),
	description: z.string().optional()
})


export type Schema = z.infer<typeof schema>;
export type CategorySchema = z.infer<typeof categorySchema>;