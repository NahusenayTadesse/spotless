CREATE TABLE `contact_messages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(50) NOT NULL,
	`phone` varchar(50) NOT NULL,
	`email` varchar(50) NOT NULL,
	`subject` varchar(100) NOT NULL,
	`message` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contact_messages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `news` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(50) NOT NULL,
	`title_amharic` varchar(50) NOT NULL,
	`category` int NOT NULL,
	`slug` varchar(120) NOT NULL,
	`summary` varchar(255),
	`summary_amharic` varchar(255),
	`content` text NOT NULL,
	`content_amharic` text NOT NULL,
	`author_id` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` datetime,
	`published_at` datetime,
	`is_published` boolean NOT NULL DEFAULT false,
	`featured_image` varchar(255),
	`views` int NOT NULL,
	CONSTRAINT `news_id` PRIMARY KEY(`id`),
	CONSTRAINT `news_title_unique` UNIQUE(`title`),
	CONSTRAINT `news_title_amharic_unique` UNIQUE(`title_amharic`),
	CONSTRAINT `news_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `news_categories` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(50) NOT NULL,
	`name_amharic` varchar(50) NOT NULL,
	`description` varchar(255),
	`description_amharic` varchar(255),
	CONSTRAINT `news_categories_id` PRIMARY KEY(`id`),
	CONSTRAINT `news_categories_name_unique` UNIQUE(`name`),
	CONSTRAINT `news_categories_name_amharic_unique` UNIQUE(`name_amharic`)
);
--> statement-breakpoint
CREATE TABLE `session` (
	`id` varchar(255) NOT NULL,
	`user_id` varchar(255) NOT NULL,
	`expires_at` datetime NOT NULL,
	CONSTRAINT `session_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` varchar(255) NOT NULL,
	`username` varchar(32) NOT NULL,
	`name` varchar(50) NOT NULL,
	`email` varchar(50) NOT NULL,
	`password_hash` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_username_unique` UNIQUE(`username`),
	CONSTRAINT `user_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `news` ADD CONSTRAINT `news_category_news_categories_id_fk` FOREIGN KEY (`category`) REFERENCES `news_categories`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `news` ADD CONSTRAINT `news_author_id_user_id_fk` FOREIGN KEY (`author_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `session` ADD CONSTRAINT `session_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE no action ON UPDATE no action;