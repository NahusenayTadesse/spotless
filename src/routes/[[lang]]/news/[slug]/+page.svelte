<script>
	let { data } = $props();
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<svelte:head>
	<title>{data.blog.title}</title>
</svelte:head>

<section class="relative w-full h-[80vh] lg:p-8 p-3">
	<div
		class="h-full rounded-3xl overflow-hidden bg-contain bg-center flex flex-col justify-center items-center gap-4"
		style="background-image: url('/files/{data.blog.featuredImage}');"
	>
		<div class="absolute inset-0 bg-primary/80 rounded-3xl lg:m-8 m-3"></div>

		<h2 class="text-white text-center font-head z-10">{data.blog.title}</h2>
		<p class="text-white w-lg text-center z-10">{data.blog.category}</p>
	</div>
</section>

<Card.Root
	class="border-0 w-3/4 justify-self-center shadow-lg shadow-primary/10 bg-linear-to-br from-card to-card/50"
>
	<Card.Header>
		<Card.CardTitle class="text-center">
			{data.blog.title}
		</Card.CardTitle>
		<Card.Description class="text-center w-1/2">
			{data.blog.summary}
		</Card.Description>
	</Card.Header>

	<Card.Content class="pt-8 pb-8">
		<img src="/files/{data.blog.featuredImage}" class="justify-self-center" alt="" />
		<article class="prose prose-sm dark:prose-invert max-w-none">
			<div class="space-y-6 text-foreground flex justify-center items-center my-4 leading-relaxed">
				{@html data.blog.content}
			</div>
		</article>
	</Card.Content>
</Card.Root>
