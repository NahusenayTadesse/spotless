import {
	mysqlTable,
	varchar,
	datetime,
	int,
	timestamp,
	boolean,
	text
} from 'drizzle-orm/mysql-core';

export const user = mysqlTable('user', {
	id: varchar('id', { length: 255 }).primaryKey(),
	username: varchar('username', { length: 32 }).notNull().unique(),
	name: varchar('name', { length: 50 }).notNull(),
	email: varchar('email', { length: 50 }).notNull().unique(),
	passwordHash: varchar('password_hash', { length: 255 }).notNull(),
	createdAt: timestamp('created_at').notNull().defaultNow()
});

export const session = mysqlTable('session', {
	id: varchar('id', { length: 255 }).primaryKey(),
	userId: varchar('user_id', { length: 255 })
		.notNull()
		.references(() => user.id),
	expiresAt: datetime('expires_at').notNull()
});

export const newsCategories = mysqlTable('news_categories', {
	id: int('id').autoincrement().primaryKey(),
	name: varchar('name', { length: 50 }).notNull().unique(),
	nameAmharic: varchar('name_amharic', { length: 50 }).notNull().unique(),
	description: varchar('description', { length: 255 }),
	descriptionAmharic: varchar('description_amharic', { length: 255 })
});

export const news = mysqlTable('news', {
	id: int('id').autoincrement().primaryKey(),
	title: varchar('title', { length: 50 }).notNull().unique(),
	titleAmharic: varchar('title_amharic', { length: 50 }).notNull().unique(),
	category: int('category')
		.references(() => newsCategories.id)
		.notNull(),
	slug: varchar('slug', { length: 120 }).notNull().unique(),
	summary: varchar('summary', { length: 255 }),
	summaryAmharic: varchar('summary_amharic', { length: 255 }),
	content: text('content').notNull(),
	contentAmharic: text('content_amharic').notNull(),
	authorId: varchar('author_id', { length: 255 })
		.notNull()
		.references(() => user.id),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	updatedAt: datetime('updated_at'),
	publishedAt: datetime('published_at'),
	isPublished: boolean('is_published').notNull().default(false),
	featuredImage: varchar('featured_image', { length: 255 }),
	views: int('views').notNull()
});

export const contactMessages = mysqlTable('contact_messages', {
	id: int('id').autoincrement().primaryKey(),
	name: varchar('name', { length: 50 }).notNull(),
	phone: varchar('phone', { length: 50 }).notNull(),
	email: varchar('email', { length: 50 }).notNull(),
	subject: varchar('subject', { length: 100 }).notNull(),
	message: text('message'),
	createdAt: timestamp('created_at').notNull().defaultNow()
});

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;
