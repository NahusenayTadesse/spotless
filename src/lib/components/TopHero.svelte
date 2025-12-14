<script>
	import { Button } from '$lib/components/ui/button/index.js';
	let { title = '', bread = '', para = '', image = '', button = '', href = '' } = $props();
</script>

<section class="relative w-full h-[80vh] lg:p-8 p-3">
	<div
		class="h-full rounded-3xl overflow-hidden {image === ''
			? "bg-[url('/images/hero.webp')]"
			: `bg-[url('/files/${image}')]`} bg-cover bg-center flex flex-col justify-center items-center gap-4"
	>
		<h2 class="text-white text-center font-head">{title}</h2>
		<h3 class="text-white text-center font-light">{bread}</h3>
		<p class="text-white w-lg text-center">{para}</p>
		{#if button !== ''}
			<Button {href}>{button}</Button>
		{/if}
	</div>
</section>
