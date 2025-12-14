<script>
	import BlogGrid from '$lib/components/BlogGrid.svelte';
	import BottomSnippet from '$lib/components/BottomSnippet.svelte';
	import TopHero from '$lib/components/TopHero.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>News & Updates | Spotless</title>
</svelte:head>
<TopHero title="News & Updates" bread="Spotless > news & updates" />
<BlogGrid posts={data.blogs} />
<BottomSnippet />
