<script lang="ts">
	import { Card } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { ArrowRightIcon } from '@lucide/svelte';
	import type { Snippet } from 'svelte';

	interface BlogPost {
	    title: string;
		titleAmharic: string;
		slug: string;
		featuredImage: string;
		category: string;
		categoryAmharic: string;
		summary: string;
		summaryAmharic: string;
	}

	const { posts, children, lang }: { posts: BlogPost[]; children?: Snippet, lang: boolean } = $props();

	// Determine card size based on index for bento grid effect
	const getCardSize = (index: number) => {
		const pattern = [1, 2, 1, 1, 2, 1];
		return pattern[index % pattern.length];
	};
</script>

<div class="w-full lg:px-[7%]">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
		{#each posts as post, index (post.slug)}
			{@const isLarge = getCardSize(index) === 2}
			<div class={isLarge ? 'md:col-span-2 lg:col-span-2' : ''}>
				<a href={`/news/${post.slug}`} class="group block h-full">
					<Card
						class="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg-lg-lg-lg-xl hover:shadow-lg-lg-lg-lg-primary/10 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30"
					>
						<!-- Featured Image -->
						<div
							class={`relative overflow-hidden bg-linear-to-br from-primary/20 to-accent/20 ${isLarge ? 'h-64' : 'h-48'}`}
						>
							<img
								src="/files/{post.featuredImage}"
								alt={lang ? post.titleAmharic : post.title}
								class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
							<div
								class="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
							></div>
						</div>

						<!-- Content -->
						<div class="flex flex-col flex-1 p-6 gap-3">
							<!-- Category Badge -->
							<div class="flex items-start justify-between gap-2">
								<Badge variant="secondary" class="text-xs font-semibold">
									{lang ? post.categoryAmharic : post.category}
								</Badge>
								<ArrowRightIcon
									class="size-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
								/>
							</div>

							<!-- Title -->
							<h3
								class={`font-bold text-foreground transition-colors duration-300 group-hover:text-primary line-clamp-2 ${isLarge ? 'text-xl' : 'text-lg'}`}
							>
								{lang ? post.titleAmharic : post.title}
							</h3>

							<!-- Summary -->
							<p
								class="text-sm text-muted-foreground flex-1 line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300"
							>
								{lang ? post.summaryAmharic : post.summary}
							</p>

							<!-- Read More Link -->
							<div
								class="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
							>
								<span>{lang ? 'አንቀፅ ያንብቡ' : 'Read Article'}</span>
								<ArrowRightIcon class="size-4" />
							</div>
						</div>
					</Card>
				</a>
			</div>
		{/each}
	</div>

	{#if children}
		<div class="mt-12">
			{@render children()}
		</div>
	{/if}
</div>
