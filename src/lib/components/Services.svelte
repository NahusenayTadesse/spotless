<script>
	import { glass } from '$lib/global.svelte';

	let services = [
		{
			title: 'Cleaning',
			description:
				'Lorem ipsum dolor sit amet, consectetuer elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer elit, sed diam nonummy nibh',
			btnNum: '200+',
			butStr: 'Employees',
			image: '/images/service1.webp'
		},

		{
			title: 'Security',
			description:
				'Lorem ipsum dolor sit amet, consectetuer elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer elit, sed diam nonummy nibh',
			btnNum: '150+',
			butStr: 'Employees',
			image: '/images/service2.webp'
		},
		{
			title: 'Property Management',
			description:
				'Lorem ipsum dolor sit amet, consectetuer elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer elit, sed diam nonummy nibh',
			btnNum: '50+',
			butStr: 'Employees',
			image: '/images/service2.webp'
		}
	];

	let list = [
		{ src: '/images/teams.svg', name: 'Experienced Team' },
		{ src: '/images/shake.svg', name: 'Reliable Service' },
		{ src: '/images/eye.svg', name: 'Strong Supervision' },
		{ src: '/images/focus.svg', name: 'Customer Focused' }
	];
</script>

<section class="grid lg:grid-cols-4 grid-cols-1 gap-4 w-9/10 justify-self-center mt-16">
	{#each services as { title, description, btnNum, butStr, image }, index}
		<div
			class="roudned-xl {index === 0 ? 'lg:col-span-2 col-span-1' : ''} rounded-4xl
     bg-cover bg-center flex flex-col justify-between items-start p-8"
			style:background-image="url('{image}')"
		>
			<div class="flex flex-col gap-4 justify-start items-start">
				<h3 class="font-medium text-white">{title}</h3>

				<p class="text-white font-light">{description}</p>
			</div>

			<div class="flex flex-row gap-2 p-6 {glass} rounded-[48px]">
				<h3 class="text-white font-bold">
					{btnNum}
				</h3>
				<h4 class="text-white">
					{butStr}
				</h4>
			</div>
		</div>
	{/each}
</section>

<section class="flex flex-col mt-16 gap-8 justify-center items-center">
	<h2 class="text-center font-bold text-background">Why Choose Us</h2>

	<div
		class="grid lg:grid-cols-4 grid-cols-2 bg-background w-4/5 justify-self-center text-center rounded-[48px] py-6"
	>
		{#each list as { src, name }}
			<div
				class="border-r-2 border-white flex flex-col gap-4 justify-center
          items-center py-4 p-4"
			>
				<img {src} alt={name} class="w-20 h-20" />
				<h4 class="text-white">{name}</h4>
			</div>
		{/each}
	</div>
</section>
