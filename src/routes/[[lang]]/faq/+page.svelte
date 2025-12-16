<script>
	import BottomSnippet from '$lib/components/BottomSnippet.svelte';
	import TopHero from '$lib/components/TopHero.svelte';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import { glass } from '$lib/global.svelte';

	let general = [
		{
			q: 'What services does Spotless General Trading Plc provide?',
			a: 'We provide commercial and residential cleaning, deep cleaning and disinfection, floor and carpet care, window washing, post-construction cleanup and general building maintenance.'
		},
		{
			q: 'Where are you located?',
			a: 'We are headquartered locally and serve clients across the surrounding metropolitan area and region. Please see our Contact page for the exact address and service area.'
		},
		{
			q: 'Who are your typical clients?',
			a: 'Our clients include property managers, commercial offices, retail outlets, hospitality businesses, residential complexes, construction firms and industrial facilities.'
		}
	];

	let service = [
		{
			q: 'Do you handle both small and large-scale projects?',
			a: 'Yes. We manage single-site jobs and large multi-site contracts by scaling teams and project management to fit the scope.'
		},
		{
			q: 'Do you offer customized service packages?',
			a: 'Yes. We create tailored packages based on site requirements, frequency, and budget, with optional add-on services.'
		},
		{
			q: 'Can you manage ongoing property maintenance contracts?',
			a: 'Yes. We provide scheduled maintenance plans, routine inspections and rapid-response services as part of ongoing contracts.'
		}
	];

	let com = [
		{
			q: 'How can we get a quotation or proposal?',
			a: 'Use the website contact form, email, or phone to request a quote. We can arrange a site visit and will deliver a written proposal and estimate.'
		},
		{
			q: 'What is the best way to communicate with your team?',
			a: 'For initial enquiries use email or the contact form. Ongoing contracts receive an assigned account manager reachable by phone and email.'
		}
	];

	let tech = [
		{
			q: 'Can I download your company profile?',
			a: 'Yes. A downloadable PDF of our company profile is available on the website. If you need a tailored version, request it by email.'
		},
		{
			q: 'Do you have a Google Business Profile or social media pages?',
			a: 'Yes. Links to our Google Business Profile and social media are in the website footer — follow or message us on Facebook, Instagram or LinkedIn.'
		}
	];
</script>

<svelte:head>
	<title>FAQ | Spotless</title>
</svelte:head>
<TopHero title="Frequently Asked Questions" bread="Spotless > FAQs" />
<div class="lg:p-0 px-6">
	<Accordion.Root
		type="single"
		class="mt-16 w-full gap-2 sm:max-w-[80%] justify-self-center"
		value="item-1"
	>
		<h3 class="text-background text-bold">General Company Questions</h3>
		{#each general as { q, a }, i}
			<Accordion.Item
				value="item-{i + 1}"
				class="px-4 mt-4 items-center shadow-lg justify-center border rounded-[45px]"
			>
				<Accordion.Trigger>{q}</Accordion.Trigger>
				<Accordion.Content class="flex flex-col gap-4 text-balance">
					<p>
						{a}
					</p>
				</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>

	<Accordion.Root
		type="single"
		class="mt-16 w-full gap-2 sm:max-w-[80%] justify-self-center"
		value="item-2"
	>
		<h3 class="text-background text-bold">Service-Related Questions</h3>
		{#each service as { q, a }, i}
			<Accordion.Item
				value="item-{i + 1}"
				class="px-4 mt-4 items-center shadow-lg justify-center border rounded-[45px]"
			>
				<Accordion.Trigger>{q}</Accordion.Trigger>
				<Accordion.Content class="flex flex-col gap-4 text-balance">
					<p>
						{a}
					</p>
				</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>

	<Accordion.Root
		type="single"
		class="mt-16 w-full gap-2 sm:max-w-[80%] justify-self-center"
		value="item-3"
	>
		<h3 class="text-background text-bold">Communication & Logistics</h3>
		{#each com as { q, a }, i}
			<Accordion.Item
				value="item-{i + 1}"
				class="px-4 mt-4 items-center shadow-lg justify-center border rounded-[45px]"
			>
				<Accordion.Trigger>{q}</Accordion.Trigger>
				<Accordion.Content class="flex flex-col gap-4 text-balance">
					<p>
						{a}
					</p>
				</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>

	<Accordion.Root
		type="single"
		class="mt-16 w-full gap-2 sm:max-w-[80%] justify-self-center"
		value="item-4"
	>
		<h3 class="text-background text-bold">Technical & Website Questions</h3>
		{#each tech as { q, a }, i}
			<Accordion.Item
				value="item-{i + 1}"
				class="px-4 mt-4 items-center shadow-lg justify-center border rounded-[45px]"
			>
				<Accordion.Trigger>{q}</Accordion.Trigger>
				<Accordion.Content class="flex flex-col gap-4 text-balance">
					<p>
						{a}
					</p>
				</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>
</div>
<BottomSnippet />
