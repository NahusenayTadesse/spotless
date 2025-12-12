<script lang="ts">
	import './layout.css';
     import { Toaster } from "$lib/components/ui/sonner/index.js";

	import Header from '$lib/components/Header.svelte';
	
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/state';

	let { children } = $props();
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
