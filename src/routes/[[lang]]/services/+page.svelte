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
