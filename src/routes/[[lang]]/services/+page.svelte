<script>
	import { page } from '$app/state';
import BottomSnippet from '$lib/components/BottomSnippet.svelte';
	import Services from '$lib/components/Services.svelte';
	import TopHero from '$lib/components/TopHero.svelte';
	import Cleaning from './cleaning.svelte';

</script>

<svelte:head>
	<title>Services | Spotless</title>
</svelte:head>
<TopHero
	title={page.params.lang === 'am' ? 'አገልግሎቶች' : 'Services'}
	bread={page.params.lang === 'am' ? 'ስፖትለስ > አገልግሎቶች' : 'Spotless > services'}
	para={page.params.lang === 'am'
		? 'ስፖትለስ ጀነራል ትሬዲንግ ኃ/የተ/የግ/ማህበር በመላው ኢትዮጵያ የድርጅት፣ የኢንዱስትሪ እና ተቋማዊ ደንበኞችን ፍላጎት ለማሟላት የተነደፉ የተሟላ ሙያዊ የንግድ እና አስተዳደር አገልግሎቶችን ይሰጣል።'
		: 'Spotless General Trading Plc offers a complete range of professional trading and management services designed to meet the needs of corporate, industrial, and institutional clients across Ethiopia.'}
/>

<Services />
<BottomSnippet />
<Cleaning />
