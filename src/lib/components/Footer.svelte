<script>
	import { btn, glass } from '$lib/global.svelte';
	import { Facebook, Instagram, Mail, Phone } from '@lucide/svelte';

	let menu = [
		{ name: 'Home', href: '/' },
		{ name: 'About Us', href: '/about' },
		{ name: 'Services', href: '/services' },
		{ name: 'News', href: '/news' },
		{ name: 'Testimonials', href: '/testimonials' },
		{ name: 'Contact', href: '/contact' }
	];

	let socials = [Phone, Mail, Facebook, Instagram];
</script>

<footer
	class="flex flex-col gap-8 justify-center items-center p-8 py-16 bg-background w-full mt-16 h-1/2 text-white"
>
	<div class="flex flex-col gap-4 justify-center items-center justify-self-center">
		<h3 class="font-head! text-6xl!">Request More Information</h3>
		<p>The Best Trading & Property Services in Ethiopia</p>

		<a href="/contact" class="{btn} text-foreground! bg-white! mt-4">Contact Us</a>
	</div>

	<div
		class="flex w-full mt-8 pt-8 lg:flex-row flex-col justify-between items-center border-t border-white p-4"
	>
		<a href="/" class="hover:scale-105 transition transform duration-300 ease-in-out">
			<img src="/logomain.svg" alt="logo" />
		</a>

		<div class="flex lg:flex-row flex-col gap-3">
			{#each menu as menu (menu.name)}
				<a href={menu.href} class="hover:scale-105 transition transform">{menu.name}</a>
			{/each}
		</div>

		<div class="flex lg:flex-row flex-col gap-3">
			{#each socials as Social}
				<div class="p-3 {glass} rounded-full text-white">
					<Social class="w-5 h-5" />
				</div>
			{/each}
		</div>
	</div>
</footer>
