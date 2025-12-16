<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { glass, isMobile } from '$lib/global.svelte';
	import { TextAlignJustify, X, Languages, ChevronDown } from '@lucide/svelte';
	import { fly, slide } from 'svelte/transition';
	import { page } from '$app/state';

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

	let style = `hover:bg-white/30! border hover:scale-110 transform transition ease-in-out duration-300 p-2 rounded-[48px]
                 flex flex-col justify-center items-center text-white`;

  import { goto, invalidate } from '$app/navigation';
	import Button from './ui/button/button.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';



  let currentLang = $state(page.params.lang);
  const langs = ['en', 'am'];

  function switchLang(newLang: string) {
    if (newLang === currentLang) return;

    const pathname = page.url.pathname;
    const cleanPath = pathname.replace(
      new RegExp(`^/(${langs.join('|')})(/|$)`),
      '/'
    );

    goto(`/${newLang}${cleanPath === '/' ? '' : cleanPath}`, {
      invalidateAll: true
    });
  }


    $effect(() => {
      currentLang = page.params.lang;
    });


    let langDrop = $state(false)

</script>

{#snippet lang()}
	<DropdownMenu.Root>
		<DropdownMenu.Trigger
			class="bg-white/60 text-black lg:rounded-full rounded-lg
		 p-2 flex lg:justify-center justify-start lg:items-center items-start w-full lg:w-10 lg:h-10"
		>
			{#if isMobile()}
				Change Language <ChevronDown />
			{:else}
				<Languages class="" />
			{/if}
		</DropdownMenu.Trigger>
		<DropdownMenu.Content>
			{#each langs as l}
				<DropdownMenu.Item>
					<button
						class:active={l === currentLang}
						class="{l === page.params.lang
							? 'bg-background text-white'
							: 'bg-white/60 text-black'} w-full rounded-lg"
						onclick={() => switchLang(l)}
					>
						{l.toUpperCase()}
					</button>
				</DropdownMenu.Item>
			{/each}
		</DropdownMenu.Content>
	</DropdownMenu.Root>
{/snippet}

<nav class="p-12 hidden lg:block absolute top-6 z-50 w-full">
	<div class="flex flex-row gap-8 justify-around items-center">
		<div class="flex flex-row gap-4 items-center">
			<img src="/logomain.svg" alt="Logo" />

			<ul class="grid grid-cols-5 gap-2 self-center">
				{#each menu as { name, href } (href)}
					<li
						class="{glass} {page.url.pathname === href ? 'bg-white/30' : 'bg-transparent'} {style}"
					>
						<a {href}>{name}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="flex flex-col gap-2">
			<ul class="grid grid-cols-3 gap-2">
				{#each faq as { name, href } (href)}
					<li
						class="{glass} {page.url.pathname === href ? 'bg-white/30' : 'bg-transparent'}  {style}"
					>
						<a {href}>{name}</a>
					</li>
				{/each}
				<!-- <DropdownMenu.Root>
					<DropdownMenu.Trigger
						class="bg-white/60 text-black rounded-full p-2 flex justify-center items-center w-10 h-10"
					>
						<Languages class="" />
					</DropdownMenu.Trigger>
					<DropdownMenu.Content>
						{#each langs as l}
							<DropdownMenu.Item>
								<button
									class:active={l === currentLang}
									class="{l === page.params.lang
										? 'bg-black text-white'
										: 'bg-white/60 text-black'} w-full"
									onclick={() => switchLang(l)}
								>
									{l.toUpperCase()}
								</button>
							</DropdownMenu.Item>
						{/each}
					</DropdownMenu.Content>
				</DropdownMenu.Root> -->
				{@render lang()}
			</ul>
		</div>
	</div>
</nav>

<nav
	class="flex lg:hidden flex-row justify-between items-center p-4 px-8 fixed w-full top-0 z-50 {scrolled
		? 'backdrop-blur-lg bg-white/45'
		: 'bg-transparent'} space-x-4"
>
	<a href="/">
		<img
			src={scrolled ? '/logomain.svg' : '/logomain.svg'}
			alt="Spotless Logo"
			class="w-37.5 h-15"
		/>
	</a>
	<div class="flex flex-row gap-3">
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
				{@render lang()}
			</ul>
		{/if}
	</div>
</nav>
