<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import { glass } from '$lib/global.svelte';

	let testimonials = [
		{
			image: '/images/placeholder.webp',
			name: 'Samrawit Tesfaye',
			title: 'Lorem ipsum',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipis cing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation'
		},
		{
			image: '/images/placeholder.webp',
			name: 'Samrawit Tesfaye',
			title: 'Lorem ipsum',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipis cing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation'
		},
		{
			image: '/images/placeholder.webp',
			name: 'Samrawit Tesfaye',
			title: 'Lorem ipsum',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipis cing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation'
		},
		{
			image: '/images/placeholder.webp',
			name: 'Samrawit Tesfaye',
			title: 'Lorem ipsum',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipis cing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation'
		}
	];
</script>

<Carousel.Root class="w-[90%] my-16 px-[7%] flex flex-col justify-center items-end">
	<Carousel.Content class="mt-16 ">
		{#each testimonials as { image, name, title, description }}
			<Carousel.Item class="lg:basis-1/3">
				<div
					class="relative shadow-2xl p-4 flex flex-col gap-4 justify-end items-start rounded-3xl"
				>
					<img src={image} alt={name} class="absolute left-3 -top-8" />

					<p class="mt-24">{description}</p>

					<div
						class="border-t border-foreground flex flex-col gap-4 justify-start w-full pt-2 items-start"
					>
						<p class="font-medium text-lg! text-background">{name}</p>
						<p>{title}</p>
					</div>
				</div></Carousel.Item
			>
		{/each}
	</Carousel.Content>

	<Carousel.Previous class={glass} />
	<Carousel.Next class={glass} />
</Carousel.Root>
