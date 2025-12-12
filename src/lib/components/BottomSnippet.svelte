<script>
	import { glass } from '$lib/global.svelte';
	import { Phone } from '@lucide/svelte';
</script>

<div
	class="mt-16 grid sm:grid-cols-2 gap-8 grid-cols-2 bg-background w-9/10 justify-self-center text-center rounded-[48px] py-6"
>
	<div
		class="border-r-2 border-white flex flex-row gap-4 justify-center
          items-center py-4 p-4"
	>
		<div class="rounded-full {glass} p-6">
			<Phone class="w-16 h-16 text-white" />
		</div>
		<div class="flex flex-col gap-4">
			<p class="text-white">Contact Us for Further Information</p>
			<h4 class="text-white">+251 900 00 0000</h4>
		</div>
	</div>

	<div class="flex flex-col gap-4 justify-center items-start">
		<p class="text-white">Location:</p>
		<h4 class="text-white">4 Kilo behind Tourist Hotel</h4>
	</div>
</div>
