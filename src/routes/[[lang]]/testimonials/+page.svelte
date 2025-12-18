<script>
	import TopHero from '$lib/components/TopHero.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';

	import { page } from '$app/state';

    let { data } = $props();

    let lang = $derived( page.params.lang === 'am' || data.lang === 'am');

</script>

<svelte:head>
	<title>Testimonials | Spotless</title>
	<meta
		name="description"
		content="Read client testimonials about Spotless General Trading Plc and discover why we are trusted for trading, property, and facility management services in Ethiopia."
	/>
	<meta name="robots" content="index, follow" />

	<!-- Canonical -->
	<link rel="canonical" href="https://spotlesset.com/testimonials" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Testimonials | Spotless General Trading Plc" />
	<meta
		property="og:description"
		content="Hear from our clients about their experiences with Spotless General Trading Plc's professional services in Ethiopia."
	/>
	<meta property="og:url" content="https://spotlesset.com/testimonials" />
	<meta property="og:site_name" content="Spotless General Trading Plc" />
	<meta property="og:image" content="/favicon.svg" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Testimonials | Spotless General Trading Plc" />
	<meta
		name="twitter:description"
		content="Discover why clients trust Spotless General Trading Plc for trading, property, and facility management services in Ethiopia."
	/>
	<meta name="twitter:image" content="/favicon.svg" />
</svelte:head>
<TopHero
	title={lang ? 'ምስክርነቶች' : 'Testimonials'}
	bread={lang ? 'ስፖትለስ > ምስክርነቶች' : 'Spotless > Testimonials'}
	para={lang
		? 'ምስክርነቶች በስፖትለስ ጀነራል ትሬዲንግ ኃ.የተ.የግ.ማ.፣ ስኬታችን የተገነባው በደንበኞቻችን እርካታ እና እምነት ላይ ነው። '
		: 'Testimonials At Spotless General Trading Plc, our success is built on the satisfaction and trust of our clients. '}
/>

<Testimonials />
