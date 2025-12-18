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

	<meta
		name="description"
		content="Stay updated with the latest news and insights from Spotless General Trading Plc — covering trading, property, and facility management developments in Ethiopia."
	/>
	<meta name="robots" content="index, follow" />

	<!-- Canonical -->
	<link rel="canonical" href="https://spotlesset.com/news" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="News | Spotless General Trading Plc" />
	<meta
		property="og:description"
		content="Get the latest updates, articles, and insights about trading, property, and facility management services in Ethiopia."
	/>
	<meta property="og:url" content="https://spotlesset.com/news" />
	<meta property="og:site_name" content="Spotless General Trading Plc" />
	<meta property="og:image" content="/favicon.svg" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="News | Spotless General Trading Plc" />
	<meta
		name="twitter:description"
		content="Catch the latest news, insights, and updates from Spotless General Trading Plc in Ethiopia."
	/>
	<meta name="twitter:image" content="/favicon.svg" />
</svelte:head>
<TopHero
	title={lang ? 'ዜና እና ዝመናዎች' : 'News & Updates'}
	bread={lang ? 'ስፖትለስ > ዜና' : 'Spotless > news'}
/>
<div class="lg:p-0 p-4">
	<BlogGrid posts={data.blogs} {lang} />
</div>

<BottomSnippet {lang} />
