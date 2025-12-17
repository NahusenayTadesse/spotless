<script>
	import { glass } from '$lib/global.svelte';
	import { Phone } from '@lucide/svelte';
	let { lang } = $props()
</script>

<div
	class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 bg-background w-9/10 justify-self-center justify-center items-center text-center rounded-[48px] py-6"
>
	<div
		class="border-r-2 border-white flex lg:flex-row flex-col gap-4 justify-center
          items-center py-4 p-4"
	>
		<div class="rounded-full {glass} lg:p-6 p-3">
			<Phone class="lg:w-16 lg:h-16 w-8 h-8 text-white" />
		</div>
		<div class="flex flex-col gap-4 justify-center items-center">
			<p class="text-white">
				{lang ? 'ለበለጠ መረጃ አግኙን።' : 'Contact Us for Further Information'}
			</p>
			<h4 class="text-white">+251 900 00 0000</h4>
		</div>
	</div>

	<div class="flex flex-col gap-4 justify-center lg:items-start items-center">
		<p class="text-white">{lang ? 'አድራሻ' : 'Location'}</p>
		<h4 class="text-white">
			{lang ? '4 ኪሎ ከቱሪስት ሆቴል ጀርባ' : '4 Kilo behind Tourist Hotel'}
		</h4>
	</div>
</div>
