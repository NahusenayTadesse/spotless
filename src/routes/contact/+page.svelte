<script>
	import TopHero from '$lib/components/TopHero.svelte';
	import { glass } from '$lib/global.svelte';
	import { Facebook, Instagram, Mail, Phone } from '@lucide/svelte';

	let Telegram = '/images/Telegram.svg';

	let contacts = [
		{ icon: Phone, contact: '0988190000 / 0908111213' },
		{ icon: Mail, contact: 'info@spotlesset.com' },
		{ icon: Facebook, contact: 'Facebook' },
		{ icon: Instagram, contact: 'Instagram' }
	];
</script>

<TopHero title="Contact Us" bread="Spotless > contact" />

<section
	class="mt-8 w-4/5 justify-self-center grid lg:grid-cols-2 grid-cols-1 gap-8 justify-center items-center"
>
	<form action="" class="flex flex-col gap-4 w-md">
		<input
			type="text"
			name=""
			id=""
			placeholder="Your Name"
			class="border-2 border-background
             rounded-[45px] placeholder:text-background placeholder:font-bold p-3"
		/>

		<input
			type="email"
			name=""
			id=""
			placeholder="Email Address"
			class="border-2 border-background
             rounded-[45px] placeholder:text-background placeholder:font-bold p-3"
		/>

		<input
			type="text"
			name=""
			id=""
			placeholder="Subject"
			class="border-2 border-background
             rounded-[45px] placeholder:text-background placeholder:font-bold p-3"
		/>

		<textarea
			name=""
			rows="6"
			id=""
			placeholder="Write Message"
			class="border-2 border-background
             rounded-xl placeholder:text-background placeholder:font-bold p-3"
		></textarea>
	</form>
	<div class=" bg-white/40 rounded-lg flex flex-col gap-4 justify-center items-center">
		<h2 class="text-extrabold text-background text-5xl!">Contacts Us</h2>

		<div
			class="flex flex-col gap-8 bg-background p-8 justify-start items-start text-white rounded-lg w-lg"
		>
			<p class="text-light">Location:</p>
			<h3>Arat Kilo, Behind Tourist Hotel, Addis Ababa</h3>

			<div class="flex flex-col gap-2 px-4">
				{#each contacts as contact}
					<div class="flex flex-row gap-8 justify-start w-full items-center">
						<div class="{glass} rounded-full p-3">
							<contact.icon class="text-white" />
						</div>
						<p class="text-white">{contact.contact}</p>
					</div>
				{/each}

				<div class="flex flex-row gap-8 justify-start w-full items-center">
					<img src={Telegram} alt="" class="{glass} w-12 h-12 rounded-full p-3" />
					<p class="text-white">Telegram</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="w-9/10 h-[90vh] relative justify-self-center mt-16">
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12876.291170726457!2d38.723687896939715!3d9.034765769682997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s4%20kilo!5e0!3m2!1sen!2set!4v1762566576513!5m2!1sen!2set"
		style="border:0;"
		class="w-full h-full rounded-3xl"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
		title="Map"
	></iframe>
</section>
