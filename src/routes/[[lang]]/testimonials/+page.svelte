<script>
	import TopHero from '$lib/components/TopHero.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';

	import { page } from '$app/state';

    let { data } = $props();

    let lang = $derived( page.params.lang === 'am' || data.lang === 'am');

</script>

<svelte:head>
	<title>Testimonials | Spotless</title>
</svelte:head>
<TopHero
	title={lang ? 'ምስክርነቶች' : 'Testimonials'}
	bread={lang ? 'ስፖትለስ > ምስክርነቶች' : 'Spotless > Testimonials'}
	para={lang
		? 'ምስክርነቶች በስፖትለስ ጀነራል ትሬዲንግ ኃ.የተ.የግ.ማ.፣ ስኬታችን የተገነባው በደንበኞቻችን እርካታ እና እምነት ላይ ነው። ከተጠበቀው በላይ የሆኑ አገልግሎቶችን በማቅረብ እንኮራለን - በቋሚነት፣ በሙያዊ እና እንከን የለሽ ውጤቶች። አንዳንድ ውድ አጋሮቻችን እና ደንበኞቻችን ከእኛ ጋር ስለመስራት የሚናገሩት እነሆ።'
		: 'Testimonials At Spotless General Trading Plc, our success is built on the satisfaction and trust of our clients. We take pride in delivering services that exceed expectations — consistently, professionally, and with spotless results. Here’s what some of our valued partners and customers have to say about working with us.'}
/>

<Testimonials />
