<script>
	let { data } = $props();
	import * as Card from '$lib/components/ui/card/index.js';
	import { page } from '$app/state';


    let lang = $derived( page.params.lang === 'am' || data.lang === 'am');

</script>

<svelte:head>
	<title>{data.blog.title}</title>
</svelte:head>

<section class="relative w-full lg:h-[80vh] h-[50vh] lg:p-8 p-3">
	<div
		class="h-full rounded-3xl overflow-hidden bg-contain bg-center flex flex-col justify-center items-center gap-4"
		style="background-image: url('/files/{data.blog.featuredImage}');"
	>
		<div class="absolute inset-0 bg-primary/80 rounded-3xl lg:m-8 m-3"></div>

		<h2 class="text-white text-center font-head z-10">
			{lang ? data.blogAmharic.title : data.blog.title}
		</h2>
		<p class="text-white w-lg text-center z-10">
			{lang ? data.blogAmharic.category : data.blog.category}
		</p>
	</div>
</section>

<Card.Root
	class="border-0 lg:w-3/4 w-full justify-self-center shadow-lg shadow-primary/10 bg-linear-to-br from-card to-card/50"
>
	<Card.Header>
		<Card.CardTitle class="text-center">
			{lang ? data.blogAmharic.title : data.blog.title}
		</Card.CardTitle>
		<Card.Description class="text-center w-1/2">
			{lang ? data.blogAmharic.summary : data.blog.summary}
		</Card.Description>
	</Card.Header>

	<Card.Content class="pt-8 pb-8">
		<img src="/files/{data.blog.featuredImage}" class="justify-self-center" alt="" />
		<article class="prose prose-sm dark:prose-invert max-w-none">
			<div class="space-y-6 text-foreground flex justify-center items-center my-4 leading-relaxed">
				{#if lang}
					{@html data.blogAmharic.content}
				{:else}
					{@html data.blog.content}
				{/if}
			</div>
		</article>
	</Card.Content>
</Card.Root>
