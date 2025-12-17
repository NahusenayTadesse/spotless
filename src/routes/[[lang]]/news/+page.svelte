<script>
	import BlogGrid from '$lib/components/BlogGrid.svelte';
	import BottomSnippet from '$lib/components/BottomSnippet.svelte';
	import TopHero from '$lib/components/TopHero.svelte';

	let { data } = $props();

	import { page } from '$app/state';


    let lang = $derived( page.params.lang === 'am' || data.lang === 'am');
</script>

<svelte:head>
	<title>News & Updates | Spotless</title>
</svelte:head>
<TopHero
	title={lang ? 'ዜና እና ዝመናዎች' : 'News & Updates'}
	bread={lang ? 'ስፖትለስ > ዜና' : 'Spotless > news'}
/>
<div class="lg:p-0 p-4">
	<BlogGrid posts={data.blogs} {lang} />
</div>

<BottomSnippet {lang} />
