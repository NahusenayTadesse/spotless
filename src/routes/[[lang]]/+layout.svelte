<script lang="ts">
	import './layout.css';
     import { Toaster } from "$lib/components/ui/sonner/index.js";
     import { onMount } from 'svelte';

	import Header from '$lib/components/Header.svelte';

	import Footer from '$lib/components/Footer.svelte';
	import { getFlash } from 'sveltekit-flash-message';
		import { toast } from 'svelte-sonner';


	import { page } from '$app/state';

	let { children } = $props();
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

</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
</svelte:head>
<Toaster richColors closeButton />
{#if !page.url.pathname.startsWith('/dashboard')}
	<Header {scrolled} />
{/if}

{@render children()}
{#if !page.url.pathname.startsWith('/dashboard')}
	<Footer />
{/if}
