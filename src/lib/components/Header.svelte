<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { glass, isMobile } from '$lib/global.svelte';
	import { TextAlignJustify, X, Languages, ChevronDown } from '@lucide/svelte';
	import { slide, fade } from 'svelte/transition';
	import { page } from '$app/state';
 import * as Sheet from "$lib/components/ui/sheet/index.js";


	let menuEnglish = [
		{ name: 'Home', href: '/' },
		{ name: 'About Us', href: '/about' },
		{ name: 'Services', href: '/services' },
		{ name: 'News', href: '/news' },
		{ name: 'Testimonials', href: '/testimonials' }
	];

	let menuAmharic = $state([
		{ name: 'ዋና', href: '/' },
		{ name: 'ስለ እኛ', href: '/about' },
		{ name: 'አገልግሎቶች', href: '/services' },
		{ name: 'ዜና', href: '/news' },
		{ name: 'ምስክርነቶች', href: '/testimonials' },
	]);



	let faqAmharic = [
		{ name: 'የሚጠየቁ ጥያቄዎች', href: '/faq' },
		{ name: 'እኛን አግኙን', href: '/contact' }
	];
	let faqEnglish = [
		{ name: 'FAQ', href: '/faq' },
		{ name: 'Contact Us', href: '/contact' }
	];

	let mobileSectionsEnglish = [
		{ name: 'Home', href: '/' },
		{ name: 'About Us', href: '/about' },
		{ name: 'Services', href: '/services' },
		{ name: 'News', href: '/news' },
		{ name: 'Testimonials', href: '/testimonials' },
		{ name: 'FAQ', href: '/faq' },
		{ name: 'Contact Us', href: '/contact' }
	];

	let mobileSectionsAmharic = [
	{ name: 'ዋና', href: '/' },
	{ name: 'ስለ እኛ', href: '/about' },
	   { name: 'አገልግሎቶች', href: '/services' },
				{ name: 'ዜና', href: '/news' },
				{ name: 'ምስክርነቶች', href: '/testimonials' },
				{ name: 'ምስክርነቶች', href: '/testimonials' },
				{ name: 'የሚጠየቁ ጥያቄዎች', href: '/faq' },
				{ name: 'እኛን አግኙን', href: '/contact' }
	];

	let open = $state(false);

	function onclick() {
      open = !open;
	}

	let Menuicon = $derived(open ? X : TextAlignJustify);
	let { scrolled = false,  currentLanguage=false, data } = $props();

	let visible = $state(false);
	let duration = $state(600);

	afterNavigate(({ from }) => {
		duration = from === null ? 600 : 0;
		visible = true;
	});

	let style = `hover:bg-white/30! border hover:scale-110 transform transition ease-in-out duration-300 p-2 rounded-[48px]
                 flex flex-col justify-center items-center text-white`;

  import { goto, invalidate } from '$app/navigation';
 import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';



  let currentLang = $state(page.params.lang);
  const langs = ['en', 'am'];
  const LANG_KEY   = 'app-lang';   // key used in localStorage
  const DEFAULT    = 'en';         // fallback if nothing stored

  /* ---------- helper ---------- */
  function stripLangPrefix(path: string) {
    return path.replace(new RegExp(`^/(${langs.join('|')})(/|$)`), '/');
  }

  /* ---------- switcher ---------- */
  function switchLang(newLang: string) {
    if (newLang === currentLang) return;

    /* 1. remember choice */
    localStorage.setItem(LANG_KEY, newLang);

    /* 2. build new url */
    const clean = stripLangPrefix(page.url.pathname);
    const target = (newLang === DEFAULT ? clean : `/${newLang}${clean}`);
    document.cookie = `app-lang=${newLang}; path=/; max-age=31536000; SameSite=Lax`;

    /* 3. go there */
    goto(target, {
      invalidateAll: true
    });


  }



      let menu = $derived(currentLanguage ? menuAmharic : menuEnglish);
      let faq = $derived(currentLanguage ? faqAmharic : faqEnglish);
      let mobileSections = $derived(currentLanguage ? mobileSectionsAmharic : mobileSectionsEnglish);




    $effect(() => {
      currentLang = page.params.lang;
    });

    let test = $state(false)


</script>

{#snippet language()}
	<DropdownMenu.Root>
		<DropdownMenu.Trigger
			class="bg-white/60 text-black lg:rounded-full rounded-lg
		 p-2 flex lg:justify-center justify-start lg:items-center items-start w-full lg:w-10 lg:h-10"
		>
			{#if isMobile()}
				{currentLanguage ? 'ቋንቋ ቀይር' : 'Change Language'} <ChevronDown />
			{:else}
				<Languages class="" />
			{/if}
		</DropdownMenu.Trigger>
		<DropdownMenu.Content>
			{#each langs as l}
				<DropdownMenu.Item>
					<button
						class:active={l === currentLang}
						class="{l === page.params.lang || l === data
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

<nav
	class="p-4 hidden lg:block fixed top-6 z-50 w-full {scrolled
		? 'bg-black/50! top-0! *:' + glass
		: ''}"
>
	<div class="flex flex-row gap-8 justify-around items-center">
		<div class="flex flex-row gap-4 items-center">
			<img src="/logo.webp" alt="Logo" class={scrolled ? 'w-20 h-20' : 'w-20 h-20'} />

			<ul class="grid grid-cols-5 gap-2 self-center">
				{#each menu as { name, href } (href)}
					<a
						{href}
						class="{glass} {page.url.pathname === href ? 'bg-white/30' : 'bg-transparent'} {style}"
					>
						{name}
					</a>
				{/each}
			</ul>
		</div>
		<div class="flex flex-col gap-2">
			<ul class="grid grid-cols-3 gap-2">
				{#each faq as { name, href } (href)}
					<a
						{href}
						class="{glass} {page.url.pathname === href ? 'bg-white/30' : 'bg-transparent'}  {style}"
					>
						{name}
					</a>
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
				{@render language()}
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
		<img src={scrolled ? 'logoStroke.webp' : '/logo.webp'} alt="Spotless Logo" class="w-16 h-16" />
	</a>

	<Sheet.Root bind:open>
		<Sheet.Trigger><Menuicon class={scrolled ? 'text-foreground' : 'text-white'} /></Sheet.Trigger>
		<Sheet.Content side="left" class="bg-white/50! {glass}">
			<Sheet.Header>
				<Sheet.Title
					><a href="/">
						<img src="/logoStroke.webp" alt="Spotless Logo" class="w-20 h-20" />
					</a></Sheet.Title
				>
			</Sheet.Header>

			<ul
				class="flex flex-col w-full
         z-100! gap-2 justify-center items-start pl-4"
			>
				{#each mobileSections as { name, href } (href)}
					<li in:slide|global out:fade>
						<a
							{href}
							title={name}
							class="text-black transition-transform duration-300 ease-in-out hover:scale-125 w-full"
							{onclick}
						>
							{name}
						</a>
					</li>
				{/each}
				{@render language()}
			</ul>
		</Sheet.Content>
	</Sheet.Root>
</nav>
