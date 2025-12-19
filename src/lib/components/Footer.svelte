<script>
	import { btn, glass } from '$lib/global.svelte';
	import { Facebook, Instagram, Mail, Phone } from '@lucide/svelte';

	let menuEnglish = $state([
		{ name: 'Home', href: '/' },
		{ name: 'About Us', href: '/about' },
		{ name: 'Services', href: '/services' },
		{ name: 'News', href: '/news' },
		{ name: 'Testimonials', href: '/testimonials' },
		{ name: 'Contact', href: '/contact' }
	]);

	let menuAmharic = $state([
		{ name: 'ዋና', href: '/' },
		{ name: 'ስለ እኛ', href: '/about' },
		{ name: 'አገልግሎቶች', href: '/services' },
		{ name: 'ዜና', href: '/news' },
		{ name: 'ምስክርነቶች', href: '/testimonials' },
		{ name: 'አግኙን', href: '/contact' }
	]);



	let { lang=false } = $props();
    let menu = $derived(lang ? menuAmharic : menuEnglish);

   	let socials = [
		{ icon: Phone, contact: '0988190000 / 0908111213', link: 'tel:0908111213' },
		{ icon: Mail, contact: 'info@spotlesset.com', link: 'mailto:info@spotlesset.com' },
		{ icon: Facebook, contact: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61581375164092' },
		{ icon: Instagram, contact: 'Instagram', link: 'https://familycenter.instagram.com/invite/t/UQ2I-KmV0yLxRanygN30cu8f7EChwVkU1jyys/?preview_type=brand' },
	];
</script>

<footer
	class="flex flex-col gap-8 lg:justify-center justify-start lg:items-center items-start p-8 py-16 bg-background w-full mt-16 h-1/2 text-white"
>
	<div class="flex flex-col gap-4 justify-center items-center justify-self-center">
		<h3 class="font-head! text-center">
			{lang ? 'ተጨማሪ መረጃ ይጠይቁ' : 'Request More Information'}
		</h3>
		<p>
			{lang
				? 'በኢትዮጵያ ውስጥ ምርጡ የንግድ እና ንብረት አገልግሎቶች አቅራቢ'
				: 'The Best Trading & Property Services in Ethiopia'}
		</p>

		<a href="/contact" class="{btn} text-foreground! bg-white! mt-4"
			>{lang ? 'አግኙን' : 'Contact Us'}</a
		>
	</div>

	<div
		class="flex w-full mt-8 pt-8 lg:flex-row flex-col gap-4 lg:justify-between justify-start lg:items-center items-start border-t border-white p-4"
	>
		<a href="/" class="hover:scale-105 transition transform duration-300 ease-in-out">
			<img src="/logomain.svg" alt="logo" />
		</a>

		<div class="flex lg:flex-row flex-col justify-start gap-3">
			{#each menu as menu (menu.name)}
				<a href={menu.href} class="hover:scale-105 transition transform">{menu.name}</a>
			{/each}
		</div>

		<div class="flex flex-row flex-wrap items-start gap-3">
			{#each socials as social}
				<a
					href={social.link}
					target="_blank"
					class="p-3 {glass} rounded-full text-white
				 hover:scale-105 duration-300 transition-all ease-in-out"
				>
					<social.icon class="w-5 h-5" />
				</a>
			{/each}
		</div>
	</div>

	<div class="flex flex-col gap-4 justify-center items-center justify-self-center">
		<h5 class="font-head! text-center">
			{lang ? 'የቅጂ መብት' : 'Copyright'} © {lang
				? 'ሁሉም መብቶች የተጠበቁ ናቸው። ስፖትለስ'
				: 'All Rights Reserved Spotless'}
			{new Date().getFullYear()}
		</h5>
		<p class="text-[12px]!">
			{lang ? 'የተገነባው በ' : 'Powered By'}
			<a href="https://pulsedataet.com" target="_blank">{lang ? 'ፐልስ ዳታ' : 'Pulse Data'}</a>
		</p>
	</div>
</footer>
