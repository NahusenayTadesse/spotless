<script lang="ts">
	import './layout.css';
     import { Toaster } from "$lib/components/ui/sonner/index.js";

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

</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
</svelte:head>
<Toaster richColors closeButton />
 {#if  !page.url.pathname.startsWith('/dashboard')}
	
<Header />
{/if}

{@render children()}
 {#if  !page.url.pathname.startsWith('/dashboard')}

<Footer />

{/if}
