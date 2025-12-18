<script>
import BottomSnippet from '$lib/components/BottomSnippet.svelte';
	import Services from '$lib/components/Services.svelte';
	import TopHero from '$lib/components/TopHero.svelte';
	import Cleaning from './cleaning.svelte';

	import { page } from '$app/state';

    let { data } = $props();

    let lang = $derived( page.params.lang === 'am' || data.lang === 'am');

</script>

<svelte:head>
	<title>Services | Spotless</title>
	<meta
		name="description"
		content="Explore Spotless General Trading Plc's professional trading, property, and facility management services in Ethiopia — tailored to meet your needs with reliability and care."
	/>
	<meta name="robots" content="index, follow" />

	<!-- Canonical -->
	<link rel="canonical" href="https://spotlesset.com/services" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Our Services | Spotless General Trading Plc" />
	<meta
		property="og:description"
		content="Professional trading, property, and facility management services in Ethiopia designed to meet your business and personal needs efficiently."
	/>
	<meta property="og:url" content="https://spotlesset.com/services" />
	<meta property="og:site_name" content="Spotless General Trading Plc" />
	<meta property="og:image" content="/favicon.svg" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Our Services | Spotless General Trading Plc" />
	<meta
		name="twitter:description"
		content="Reliable trading, property, and facility management services in Ethiopia delivered with professionalism and care."
	/>
	<meta name="twitter:image" content="/favicon.svg" />
</svelte:head>
<TopHero
	title={lang ? 'አገልግሎቶች' : 'Services'}
	bread={lang ? 'ስፖትለስ > አገልግሎቶች' : 'Spotless > services'}
	para={lang
		? 'ስፖትለስ ጀነራል ትሬዲንግ ኃ/የተ/የግ/ማህበር በመላው ኢትዮጵያ የድርጅት፣ የኢንዱስትሪ እና ተቋማዊ ደንበኞችን ፍላጎት ለማሟላት የተነደፉ የተሟላ ሙያዊ የንግድ እና አስተዳደር አገልግሎቶችን ይሰጣል።'
		: 'Spotless General Trading Plc offers a complete range of professional trading and management services designed to meet the needs of corporate, industrial, and institutional clients across Ethiopia.'}
/>

<Services {lang} />
<BottomSnippet {lang} />
<Cleaning {lang} />
