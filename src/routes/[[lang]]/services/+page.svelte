<script>
	import BottomSnippet from '$lib/components/BottomSnippet.svelte';
	import Services from '$lib/components/Services.svelte';
	import TopHero from '$lib/components/TopHero.svelte';
	import Cleaning from './cleaning.svelte';
</script>

<svelte:head>
	<title>Services | Spotless</title>
</svelte:head>
<TopHero
	title="Services"
	bread="Spotless > services"
	para="Spotless General Trading Plc offers a complete range of professional trading and management services designed to meet the needs of corporate, industrial, and institutional clients across Ethiopia."
/>

<Services />
<BottomSnippet />
<Cleaning />
