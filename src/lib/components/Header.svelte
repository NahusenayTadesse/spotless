<script>
	import { afterNavigate } from '$app/navigation';
	import { glass } from '$lib/global.svelte';
	import { TextAlignJustify, X } from '@lucide/svelte';
	import { slide } from 'svelte/transition';
	import { resolve } from '$app/paths';

	let menu = [
		{ name: 'Home', href: '/' },
		{ name: 'About Us', href: '/about' },
		{ name: 'Services', href: '/services' },
		{ name: 'News', href: '/news' },
		{ name: 'Testimonials', href: '/testimonials' }
	];

	let faq = [
		{ name: 'FAQ', href: '/faq' },
		{ name: 'Contact Us', href: '/contact' }
	];

	let mobileSections = [
		{ name: 'Home', href: '/' },
		{ name: 'About Us', href: '/about' },
		{ name: 'Services', href: '/services' },
		{ name: 'News', href: '/news' },
		{ name: 'Testimonials', href: '/testimonials' },
		{ name: 'FAQ', href: '/faq' },
		{ name: 'Contact Us', href: '/contact' }
	];

	let open = $state(false);

	function onclick() {
		if (open === true) return (open = false);
		else return (open = true);
	}

	let Menuicon = $derived(open ? X : TextAlignJustify);
	let { scrolled = false } = $props();

	let visible = $state(false);
	let duration = $state(600);

	afterNavigate(({ from }) => {
		duration = from === null ? 600 : 0;
		visible = true;
	});

	let style = `hover:bg-white/30! border hover:scale-110 transform transition ease-in-out duration-300 bg-transparent p-2 rounded-[48px]
                 flex flex-col justify-center items-center text-white`;
</script>

<nav class="p-12 hidden lg:block absolute top-6 z-50 w-full">
	<div class="flex flex-row gap-8 justify-around items-center">
		<div class="flex flex-row gap-4">
			<img src="/logomain.svg" alt="Logo" />

			<ul class="grid grid-cols-5 gap-0">
				{#each menu as { name, href } (href)}
					<li class="{glass} {style}">
						<a {href}>{name}</a>
					</li>
				{/each}}
			</ul>
		</div>

		<ul class="grid grid-cols-2 gap-0">
			{#each faq as { name, href } (href)}
				<li class="{glass} {style}">
					<a {href}>{name}</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<nav
	class="flex lg:hidden flex-row justify-between items-center p-4 fixed w-full top-0 z-50 {scrolled
		? 'backdrop-blur-lg bg-white/30'
		: 'bg-transparent'} space-x-4"
>
	<a href={resolve('/')}>
		<img
			src={scrolled ? '/logomain.svg' : '/logomain.svg'}
			alt="Spotless Logo"
			class="w-37.5 h-15"
		/>
	</a>
	<div>
		<button {onclick}>
			<Menuicon class={scrolled ? 'text-foreground' : 'text-white'} />
		</button>
		{#if open}
			<ul
				class="flex flex-col w-full absolute top-16 p-2 right-0
         z-100 gap-2 {glass} justify-center items-start pl-4 bg-background/20!"
			>
				{#each mobileSections as { name, href } (href)}
					<li transition:slide|global>
						<a
							{href}
							title={name}
							class="text-white transition-transform duration-300 ease-in-out hover:scale-125"
							{onclick}
						>
							{name}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</nav>
