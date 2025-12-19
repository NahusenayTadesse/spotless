<script>
	import { glass } from '$lib/global.svelte';
	import { Facebook, Instagram, Mail, Phone } from '@lucide/svelte';

	let { lang = false } = $props();


	let Telegram = '/images/Telegram.svg';

	let contacts = [
		{ icon: Phone, contact: '0988190000 / 0908111213', link: 'tel:0908111213' },
		{ icon: Mail, contact: 'info@spotlesset.com', link: 'mailto:info@spotlesset.com' },
		{ icon: Facebook, contact: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61581375164092' },
		{ icon: Instagram, contact: 'Instagram', link: 'https://familycenter.instagram.com/invite/t/UQ2I-KmV0yLxRanygN30cu8f7EChwVkU1jyys/?preview_type=brand' },
	];
</script>

<section class="lg:w-9/10 w-full h-[90vh] relative justify-self-center my-16">
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12876.291170726457!2d38.723687896939715!3d9.034765769682997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s4%20kilo!5e0!3m2!1sen!2set!4v1762566576513!5m2!1sen!2set"
		style="border:0;"
		class="w-full h-full rounded-3xl"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
		title="Map"
	></iframe>

	<div
		class="lg:absolute lg:left-4 bg-background mx-4 lg:bg-white/40 rounded-lg top-2 flex flex-col gap-4 justify-center items-center"
	>
		<h2 class="text-extrabold lg:text-background text-white text-5xl!">
			{lang ? 'አግኙን' : 'Contacts Us'}
		</h2>

		<div
			class="flex flex-col gap-8 bg-background p-8 justify-start items-start text-white rounded-lg lg:w-lg w-full"
		>
			<p class="text-light">{lang ? 'አድራሻ' : 'Location'}:</p>
			<h3>
				{lang ? '4 ኪሎ፣ ከቱሪስት ሆቴል ጀርባ፣ አዲስ አበባ' : 'Arat Kilo, Behind Tourist Hotel, Addis Ababa'}
			</h3>

			<div class="flex flex-col gap-2 px-4">
				{#each contacts as contact (contact.contact)}
					<a href={contact.link} class="flex flex-row gap-8 justify-start w-full items-center">
						<div class="{glass} rounded-full p-3">
							<contact.icon class="text-white" />
						</div>
						<p class="text-white">{contact.contact}</p>
					</a>
				{/each}

				<a
					href="https://t.me/spotless177"
					target="_blank"
					class="flex flex-row gap-8 justify-start w-full items-center"
				>
					<img src={Telegram} alt="" class="{glass} w-12 h-12 rounded-full p-3" />
					<p class="text-white">Telegram</p>
				</a>
			</div>
		</div>
	</div>
</section>
