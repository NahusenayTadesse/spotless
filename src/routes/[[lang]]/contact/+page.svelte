<script>
	import TopHero from '$lib/components/TopHero.svelte';
	import { Button } from '$lib/components/ui/button/index';
	import { glass } from '$lib/global.svelte';
	import { Facebook, Instagram, Mail, Phone, Plus, Loader, ChevronRight } from '@lucide/svelte';
	import { superForm } from 'sveltekit-superforms';
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import { Input } from '$lib/components/ui/input/index';
	import { Textarea } from '$lib/components/ui/textarea/index';
	import { schema } from './schema';
	import Errors from '$lib/components/Errors.svelte';

	let Telegram = '/images/Telegram.svg';

	let contacts = [
		{ icon: Phone, contact: '0988190000 / 0908111213', link: 'tel:0908111213' },
		{ icon: Mail, contact: 'info@spotlesset.com', link: 'mailto:info@spotlesset.com' },
		{ icon: Facebook, contact: 'Facebook', link: 'https://www.facebook.com/profile.php?id=61581375164092' },
		{ icon: Instagram, contact: 'Instagram', link: 'https://familycenter.instagram.com/invite/t/UQ2I-KmV0yLxRanygN30cu8f7EChwVkU1jyys/?preview_type=brand' },
	];

     let { data } = $props()


		const { form, errors, enhance, delayed, allErrors } = superForm(data.form, {
		resetForm: true,
		validators: zod4Client(schema)
	});

import { page } from '$app/state';
let lang = $derived( page.params.lang === 'am' || data.lang === 'am');


</script>

<svelte:head>
	<title>Contact Us | Spotless</title>

	<meta
		name="description"
		content="Get in touch with Spotless General Trading Plc for inquiries about trading, property, and facility management services in Ethiopia. We're here to assist you."
	/>
	<meta name="robots" content="index, follow" />

	<!-- Canonical -->
	<link rel="canonical" href="https://spotlesset.com/contact" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Contact Us | Spotless General Trading Plc" />
	<meta
		property="og:description"
		content="Reach out to Spotless General Trading Plc for professional support in trading, property, and facility management services in Ethiopia."
	/>
	<meta property="og:url" content="https://spotlesset.com/contact" />
	<meta property="og:site_name" content="Spotless General Trading Plc" />
	<meta property="og:image" content="/favicon.svg" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Contact Us | Spotless General Trading Plc" />
	<meta
		name="twitter:description"
		content="Contact Spotless General Trading Plc for inquiries and professional services in trading, property, and facility management in Ethiopia."
	/>
	<meta name="twitter:image" content="/favicon.svg" />
</svelte:head>
{#snippet fe(
	label = '',
	name = '',
	type = '',
	placeholder = '',
	placeholderAmharic = '',
	required = false,
	min = '',

	max = ''
)}
	<div class="flex lg:w-full w-auto flex-col justify-start gap-2">
		<Input
			{type}
			{name}
			placeholder={lang ? placeholderAmharic : placeholder}
			{required}
			{min}
			{max}
			bind:value={$form[name]}
			class="border-2 border-background
             rounded-[45px] placeholder:text-background placeholder:font-bold p-3"
			aria-invalid={$errors[name] ? 'true' : undefined}
		/>
		{#if $errors[name]}
			<span class="text-red-500">{$errors[name]}</span>
		{/if}
	</div>
{/snippet}
<TopHero
	title={lang ? 'አግኙን' : 'Contact Us'}
	bread={lang ? 'ስፖትለስ > አግኙን' : 'Spotless > contact'}
/>

<section
	class="mt-8 justify-self-center grid lg:grid-cols-2 grid-cols-1 gap-8 lg:px-0 px-4 justify-center items-center"
>
	<form
		action="?/addMessage"
		method="post"
		id="main"
		use:enhance
		class="flex flex-col gap-4 lg:w-md w-full"
	>
		<Errors allErrors={$allErrors} />

		{@render fe('Your Name', 'name', 'text', 'Your Name', 'የእርስዎ ስም', true)}
		{@render fe('Your Name', 'phone', 'tel', '+251 XXXXXXXX', '+251 XXXXXXXX', true)}
		{@render fe('Your Name', 'email', 'email', 'Your Email', 'የእርስዎ ኢሜይል', true)}
		{@render fe('Your Name', 'subject', 'text', 'Subject', 'ጉዳይ', true)}

		<Textarea
			name="message"
			id=""
			bind:value={$form.message}
			aria-invalid={$errors.message ? 'true' : undefined}
			placeholder={lang ? 'መልእክት ጻፍ' : 'Write Message'}
			class="border-2 border-background
             rounded-xl h-48 placeholder:text-background placeholder:font-bold p-3"
		/>
		{#if $errors.message}
			<span class="text-red-500">{$errors.message}</span>
		{/if}

		<Button type="submit" class="mt-4" form="main">
			{#if $delayed}
				{lang ? 'መልእክት በመላክ ላይ' : 'Sending Message'}
				<Loader class="animate-spin" />
			{:else}
				{lang ? 'መልእክት ላክ' : 'Send Message'}
				<ChevronRight class="w-6 h-6" />
			{/if}
		</Button>
	</form>
	<div class=" bg-white/40 rounded-lg flex flex-col gap-4 justify-center items-center">
		<h2 class="text-extrabold text-background text-5xl!">{lang ? 'አግኙን' : 'Contacts Us'}</h2>

		<div
			class="flex flex-col gap-8 bg-background p-8 justify-start items-start text-white rounded-lg lg:w-lg w-full"
		>
			<p class="text-light">{lang ? 'አድራሻ' : 'Location'}:</p>
			<h3>
				{lang ? '4 ኪሎ፣ ከቱሪስት ሆቴል ጀርባ፣ አዲስ አበባ' : 'Arat Kilo, Behind Tourist Hotel, Addis Ababa'}
			</h3>

			<div class="flex flex-col gap-2 px-4">
				{#each contacts as contact}
					<a
						href={contact.link}
						target="_blank"
						class="flex flex-row gap-8 justify-start items-center"
					>
						<div class="{glass} rounded-full p-3">
							<contact.icon class="text-white" />
						</div>
						<p class="text-white">{contact.contact}</p>
					</a>
				{/each}

				<a
					href="https://t.me/spotless177"
					targete="_blank"
					class="flex flex-row gap-8 justify-start w-full items-center"
				>
					<img src={Telegram} alt="" class="{glass} w-12 h-12 rounded-full p-3" />
					<p class="text-white">Telegram</p>
				</a>
			</div>
		</div>
	</div>
</section>

<section class="lg:w-9/10 lg:h-[90vh] h-[50vh] w-full relative justify-self-center mt-16">
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12876.291170726457!2d38.723687896939715!3d9.034765769682997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s4%20kilo!5e0!3m2!1sen!2set!4v1762566576513!5m2!1sen!2set"
		style="border:0;"
		class="w-full h-full rounded-3xl"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
		title="Map"
	></iframe>
</section>
