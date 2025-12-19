<script lang="ts">
	import './layout.css';
     import { Toaster } from "$lib/components/ui/sonner/index.js";
     import { onMount } from 'svelte';

	import Header from '$lib/components/Header.svelte';

	import { Loader } from '@lucide/svelte'

	import Footer from '$lib/components/Footer.svelte';
	import { getFlash } from 'sveltekit-flash-message';
		import { toast } from 'svelte-sonner';


	import { page, navigating } from '$app/state';

	let { children, data } = $props();
	const flash = getFlash(page, { clearAfterMs: 5000 });
	 $effect(() => {
  if (!$flash) return;
  if(page.data.flash?.type === 'success')
   toast.success($flash.message)
  if(page.data.flash?.type === 'error')
   toast.error($flash?.message)
   $flash = undefined;
});

		let scrolled = $state(false);
		onMount(() => {
    const onScroll = () => {
      scrolled = window.scrollY > 150;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  });


		import { browser } from '$app/environment';

if (browser) {
  const LANG_COOKIE = 'app-lang';
  const saved = localStorage.getItem(LANG_COOKIE);
  if (saved) {
    // send it to the server as a cookie so layout.server.ts can see it
    document.cookie = `${LANG_COOKIE}=${saved}; path=/; max-age=31536000`; // 1 year
  }
}



   let lang = $derived( page.params.lang === 'am' || data.lang === 'am');
</script>

<svelte:head>
	<!-- Primary Meta -->

	<!-- Favicon -->
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
</svelte:head>
{#if navigating.to}
	<div
		class="fixed z-1 flex flex-col justify-center top-0.5 bottom-0.5 left-0.5 right-0.5 w-auto items-center"
	>
		<div class="flex flex-row gap-2 items-center">
			<Loader class="animate-spin w-8 h-8" />
			<h2 class="animate-pulse capitalize">
				Loading {navigating.to.url.pathname.split('/').pop()}...
			</h2>
		</div>
	</div>
{/if}
<Toaster richColors closeButton />
{#if !page.url.pathname.startsWith('/dashboard')}
	<Header {scrolled} currentLanguage={lang} data={data.lang} />
{/if}

{@render children()}
{#if !page.url.pathname.startsWith('/dashboard')}
	<Footer {lang} />
{/if}
