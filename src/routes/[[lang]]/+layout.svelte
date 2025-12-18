<script lang="ts">
	import './layout.css';
     import { Toaster } from "$lib/components/ui/sonner/index.js";
     import { onMount } from 'svelte';

	import Header from '$lib/components/Header.svelte';

	import Footer from '$lib/components/Footer.svelte';
	import { getFlash } from 'sveltekit-flash-message';
		import { toast } from 'svelte-sonner';


	import { page } from '$app/state';

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
	<title>Spotless General Trading Plc | Trading, Property & Facility Management</title>
	<meta
		name="description"
		content="Spotless General Trading Plc delivers reliable trading, property, and facility management services in Ethiopia, driven by professionalism, strict supervision, and a client-first approach."
	/>
	<meta name="robots" content="index, follow" />

	<!-- Canonical -->
	<link rel="canonical" href="https://spotlesset.com" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Spotless General Trading Plc" />
	<meta
		property="og:description"
		content="Redefining service quality and reliability in Ethiopia through expert trading, property, and facility management services."
	/>
	<meta property="og:url" content="https://spotless.com.et" />
	<meta property="og:site_name" content="Spotless General Trading Plc" />
	<meta property="og:image" content="/favicon.svg" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Spotless General Trading Plc" />
	<meta
		name="twitter:description"
		content="Reliable trading, property, and facility management services in Ethiopia — delivered with professionalism and care."
	/>
	<meta name="twitter:image" content="/favicon.svg" />

	<!-- Favicon -->
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
</svelte:head>

<Toaster richColors closeButton />
{#if !page.url.pathname.startsWith('/dashboard')}
	<Header {scrolled} currentLanguage={lang} data={data.lang} />
{/if}

{@render children()}
{#if !page.url.pathname.startsWith('/dashboard')}
	<Footer {lang} />
{/if}
