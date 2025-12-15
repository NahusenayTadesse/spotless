<script>
	import { btn, glass } from '$lib/global.svelte';
	import { ArrowRight } from '@lucide/svelte';
	import TopHero from '$lib/components/TopHero.svelte';
	import Counter from '$lib/components/Counter.svelte';
	import Team from '$lib/components/Team.svelte';
	import { Button } from '$lib/components/ui/button';
	import { fade, fly } from 'svelte/transition';

	let list = $state([
		{ src: '/images/teams.svg', name: 62, small: 'Customers' },
		{ src: '/images/teams.svg', name: 15, small: 'Team Members' },
		{ src: '/images/teams.svg', name: 300, small: 'Current Employees' },
		{ src: '/images/teams.svg', name: 15, small: 'Years of Experience' }
	]);

	let values = [
		{
			title: 'Integrity',
			description: 'We operate with transparency, honesty, and accountability in every transaction.'
		},
		{
			title: 'Quality',
			description:
				'We uphold strict standards to ensure spotless performance and long-term client trust.'
		},
		{
			title: 'Efficiency',
			description: 'We focus on delivering results on time, within budget, and above expectations.'
		},
		{
			title: 'Respect',
			description: 'Every client, employee, and partner is treated with fairness and dignity.'
		},
		{
			title: 'Improvement',
			description: 'We continuously seek better ways to serve, manage, and deliver.'
		}
	];

	let mission = $state(true);

	function onclick(){
		 mission = !mission
	}
</script>

<svelte:head>
	<title>About Us | Spotless</title>
</svelte:head>

<TopHero title="About Us" bread="Spotless > about us" />

<section
	class="mt-16 grid h-full lg:grid-cols-2 grid-cols-1 w-9/10 gap-16 justify-self-center justify-between items-start"
>
	<div class="flex flex-col gap-4 justify-center items-center relative">
		<img src="/images/about.webp" alt="" />
	</div>
	<div class="flex flex-col gap-4">
		<h2 class="font-bold text-background">Our Story</h2>
		<p>
			Spotless General Trading Plc is an Ethiopian-based private limited company established with a
			clear purpose — to deliver organized, dependable, and high-quality trading and facility
			solutions for organizations across all sectors. We serve corporations, NGOs, embassies,
			factories, hospitals, and investors by providing professional procurement, management, and
			support services under one trusted name: Spotless.
		</p>

		<a href="/services" class="{btn} flex flex-row gap-2">
			Services
			<ArrowRight class="w-8 h-8" />
		</a>
	</div>
</section>

<section class="flex flex-col mt-16 pt-8 gap-8 justify-center items-center">
	<div
		class="grid lg:grid-cols-4 grid-cols-2 gap-2 bg-background w-9/10 justify-self-center text-center rounded-[48px] py-6"
	>
		{#each list as { src, name, small }}
			<div
				class=" flex flex-row gap-4 justify-center
          items-center py-4 p-4"
			>
				<img {src} alt={String(name)} class="w-24 h-24 bg-white/30 p-2 rounded-full" />
				<div>
					<h2 class="text-white text-extrabold">
						<Counter value={name}
							duration={1000}
							format={(num) => {
								
								return Math.floor(num).toLocaleString();
							}} />+</h2>
					<p class="text-white">{small}</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<section class="grid lg:grid-cols-2 grid-cols-1 mt-16 justify-self-center w-9/10">
	<div class="flex flex-col gap-4">
		<h4 class="text-background">
			Our main goal is to satisfy clients and provide quality through excellence and supervision
		</h4>
		<div class="flex flex-row gap-4 justify-start items-center">
			<Button  variant={mission ? 'default' : 'outline' } {onclick}> Our Mission </Button>
			<Button  variant={mission ? 'outline' : 'default' } {onclick}> Our Vision </Button>
		</div>
		{#if mission}
		<p transition:fly={{y:-200, duration: 500}} class="w-full lg:w-124 transition-all duration-300 ease-in-out">
			Our priority is to make our customers satisfied with our services by doing work focused on the
			needs of our customers.
		</p>
		{:else}
		<p transition:fly={{y:-200, duration: 500}} class="w-full lg:w-124	transition-call duration-300 ease-in-out">
			To be the most trusted and innovative service provider in our industry, recognized for consistently exceeding customer expectations and setting new standards of quality, reliability, and customer-focused solutions.
		</p>
		{/if}
	</div>

	<img src="/images/about2.webp" alt="" />
</section>

<section class="flex flex-col mt-16 gap-8 justify-center items-center">
	<h2 class="text-center font-bold text-background">Our Values</h2>

	<div
		class="grid sm:grid-cols-2 grid-cols-5 bg-background w-9/10 justify-self-center text-center rounded-[48px] py-6"
	>
		{#each values as { title, description }}
			<div
				class="border-r-2 border-white flex flex-col gap-4 justify-center
          items-center py-4 p-4"
			>
				<h4 class="text-white">{title}</h4>
				<p class="text-white">{description}</p>
			</div>
		{/each}
	</div>
</section>

<section
	class="mt-16 grid h-full lg:grid-cols-2 grid-cols-1 w-9/10 gap-16 justify-self-center justify-between items-start"
>
	<div class="flex flex-col gap-4 justify-center items-center relative">
		<img src="/images/about3.webp" alt="" />
	</div>
	<div class="flex flex-col gap-4">
		<h3 class="font-bold text-background">Leadership Message</h3>
		<p>
			At Spotless, our goal is simple — to bring excellence and order to every service we deliver.
			Our customers’ trust drives us, and our organized supervision ensures we never compromise on
			quality.
		</p>
		<span class="font-bold! italic!"> — Kasech Ademasu, General Manager </span>
	</div>
</section>

<Team />

