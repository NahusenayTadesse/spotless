<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Card } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { ArrowRightIcon, Pen, Plus } from '@lucide/svelte';

	let { data } = $props();

	let newsData = $derived(data?.messages);
</script>

<svelte:head>
	<title>News and Updates</title>
</svelte:head>

<div class="flex flex-col gap-6">
	<div class="flex flex-col gap-2">
		<h1 class="text-3xl font-bold">News & Blogs</h1>
		<p class="text-muted-foreground">Stay updated with the latest articles and insights</p>
		<Button class="w-48" href="/dashboard/news/add-news"><Plus /> Add News</Button>
	</div>

	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
		{#each newsData as article (article.id)}
			<div in:fade={{ duration: 300 }} class="group">
				<Card
					class="overflow-hidden transition-all duration-300 hover:shadow-lg-lg hover:scale-[1.02] cursor-pointer"
				>
					<div class="flex flex-col md:flex-row gap-4 p-6">
						<img
							src="/files/{article.featured}"
							alt={article.title}
							class="w-full md:w-48 h-32 object-cover rounded-lg shrink-0"
						/>
						<div class="flex flex-col justify-between flex-1 gap-4">
							<div class="flex flex-col gap-3">
								<div class="flex items-center gap-2">
									<Badge variant="outline">{article.category}</Badge>
									<span class="text-xs text-muted-foreground">{article.date}</span>
								</div>
								<div>
									<h3 class="text-xl font-semibold group-hover:text-primary transition-colors">
										{article.title}
									</h3>
									<p class="text-sm text-muted-foreground mt-1">{article.summary}</p>
									<p class="text-sm text-muted-foreground mt-1">Views: {article.views}</p>
								</div>
							</div>
							<div class="flex items-center justify-between">
								<div class="flex items-center gap-2 text-sm text-muted-foreground">
									<span class="font-medium">{article.author}</span>
								</div>

								<Button
									size="sm"
									variant="ghost"
									class="gap-2"
									href="/dashboard/news/edit-news/{article.slug}"
								>
									Edit Article
									<Pen size={16} />
								</Button>
							</div>
						</div>
					</div>
				</Card>
			</div>
		{/each}
	</div>
</div>
