<script>
	import { btn, glass } from '$lib/global.svelte';

	let { title = '', bread = '', para = '' } = $props();
</script>

<section class="relative w-screen h-[80vh] lg:p-8 p-3">
	<div
		class="h-full rounded-3xl overflow-hidden bg-[url('/images/hero.webp')] bg-cover bg-center flex flex-col justify-center items-center gap-4"
	>
		<h2 class="text-white text-center font-head">{title}</h2>
		<h3 class="text-white text-center font-light">{bread}</h3>
		<p class="text-white w-lg">{para}</p>
	</div>
</section>
