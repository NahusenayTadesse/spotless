<script>
	import Contacts from '$lib/components/Contacts.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import { btn } from '$lib/global.svelte';
	import { ArrowRight } from '@lucide/svelte';
	import { page } from '$app/state';

    let { data } = $props();

    let lang = $derived( page.params.lang === 'am' || data.lang === 'am');


</script>

<svelte:head>
	<title>Spotless General Trading P.L.C.</title>
	<meta
		name="description"
		content="Spotless General Trading P.L.C. offers a full range of trading, property,
	and facility management services."
	/>
	<meta
		name="keywords"
		content="Spotless, General Trading, Ethiopia, Trading, Property, Facility Management, Services"
	/>
</svelte:head>
<Hero current={data.lang} />
<section
	class="mt-16 grid h-full lg:grid-cols-2 grid-cols-1 w-9/10 gap-8 justify-self-center items-center"
>
	<div class="flex flex-col gap-4">
		<h2 class="font-bold text-background">
			{lang ? 'ስለ እኛ' : 'ABOUT US'}
		</h2>
		<p>
			{lang
				? 'በኢትዮጵያ የአገልግሎት ጥራትና አስተማማኝነትን ለማሻሻል የተቋቋመው ስፖትለስ ጄኔራል ትሬዲንግ ኃ.የተ.የግ.ማ. ሙሉ የንግድ፣ የንብረት እና የፋሲሊቲ አስተዳደር አገልግሎቶችን ይሰጣል። በተሞክሮ ቡድናችን፣ ጥብቅ ቁጥጥር እና ደንበኛ-የመጀመሪያ አቀራረብ እንኮራለን - እያንዳንዱ ፕሮጀክት በጊዜ፣ በስታንዳርድ እና በጠቅላላ ሙያዊ ብቃት መጠናቀቁን ማረጋገጥ።'
				: `
			Established to redefine service quality and reliability in Ethiopia, Spotless General Trading
			Plc offers a full range of trading, property, and facility management services. We take pride
			in our experienced team, strict supervision, and client-first approach — ensuring every
			project is completed on time, on standard, and with total professionalism.`}
		</p>

		<a href="/about" class="{btn} flex flex-row gap-2">
			{lang ? 'ተጨማሪ መረጃ ይመልከቱ' : 'Learn More'}
			<ArrowRight class="w-8 h-8" />
		</a>
	</div>

	<div class="flex flex-col gap-4 justify-center items-center relative">
		<img src="/images/divided.webp" alt="" />

		<div
			class="bg-background p-6 flex flex-col items-center justify-center rounded-lg
        absolute bottom-1 left-8 z-10"
		>
			<h3 class="text-white font-bold">30+</h3>
			<h4 class="text-white">{lang ? 'ጣቢያዎች' : 'Sites'}</h4>
		</div>
	</div>
</section>

<Services {lang} />
<Testimonials {lang} />
<Contacts {lang} />
