<script>
	import { page } from '$app/state';
import { btn, glass } from '$lib/global.svelte';


</script>

<section class="relative lg:h-screen h-[80vh] lg:p-8 p-3">
	<div
		class="h-full rounded-3xl overflow-hidden bg-[url('/images/hero.webp')] bg-cover bg-center flex flex-col justify-center items-center gap-4"
	>
		<h1 class="text-white text-center">
			{page.params.lang === 'am' ? 'ስፖትለስ ጀነራል ትሬዲንግ' : 'Spotless General Trading P.L.C.'}
		</h1>
		<h3 class="text-white text-center font-light">
			{page.params.lang === 'am' ? 'የእርስዎ እርካታ የእኛ ስኬት ነው።' : 'Your Satisfaction Is Our Success'}
		</h3>

		<div
			class="flex flex-row items-center justify-center gap-1 {glass} rounded-2xl p-6 text-center
     absolute lg:bottom-12 bottom-36 lg:left-12 left-4"
		>
			<h3 class="text-white font-bold">62+</h3>
			<h4 class="text-white">{page.params.lang === 'am' ? 'ደንበኞች' : 'Customers'}</h4>
		</div>

		<div
			class="rounded-2xl rounded-b-none rounded-r-none bg-white absolute lg:right-8 right-4 lg:bottom-8 bottom-4 p-4 pt-8"
		>
			<a href="/services" class={btn}> {page.params.lang === 'am' ? 'አገልግሎቶች' : 'Services'}</a>
		</div>
	</div>
</section>
