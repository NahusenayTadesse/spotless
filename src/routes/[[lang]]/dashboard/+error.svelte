<script>
	import { page } from '$app/state';
	import TopHero from '$lib/components/TopHero.svelte';
</script>

<TopHero
	title={String(page.status)}
	para={page.error?.message}
	button="Go Back Dashboard"
	href="/dashboard"
/>
