<script>
	import Contacts from '$lib/components/Contacts.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import { btn } from '$lib/global.svelte';
	import { ArrowRight } from '@lucide/svelte';
</script>

<Hero />
<section
	class="mt-16 grid h-full lg:grid-cols-2 grid-cols-1 w-9/10 gap-8 justify-self-center items-center"
>
	<div class="flex flex-col gap-4">
		<h2 class="font-bold text-background">ABOUT US</h2>
		<p>
			Established to redefine service quality and reliability in Ethiopia, Spotless General Trading
			Plc offers a full range of trading, property, and facility management services. We take pride
			in our experienced team, strict supervision, and client-first approach — ensuring every
			project is completed on time, on standard, and with total professionalism.
		</p>

		<a href="/about" class="{btn} flex flex-row gap-2">
			Learn More
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
			<h4 class="text-white">Sites</h4>
		</div>
	</div>
</section>

<Services />
<Testimonials />
<Contacts />
