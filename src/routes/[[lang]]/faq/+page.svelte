<script>
	import BottomSnippet from '$lib/components/BottomSnippet.svelte';
	import TopHero from '$lib/components/TopHero.svelte';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import { page } from '$app/state';

    let { data } = $props();

    let lang = $derived( page.params.lang === 'am' || data.lang === 'am');
	let generalEnglish = $state([
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
	]);

	let generalAmharic = $state([
		{
			q: 'ስፖትለስ ጀነራል ትሬዲንግ ምን አይነት አገልግሎቶችን ይሰጣል?',
			a: 'የንግድ እና የመኖሪያ ቤት ጽዳት ፣ ጥልቅ ጽዳት እና ፀረ-ተባይ ፣ የወለል እና ምንጣፍ እንክብካቤ ፣ የመስኮት ማጠቢያ ፣ ከግንባታ በኋላ ጽዳት እና አጠቃላይ የሕንፃ ጥገና እናቀርባለን።'
		},
		{
			q: 'የት ነው የሚገኙት?',
			a: 'እኛ ዋና መሥሪያ ቤት በአገር ውስጥ ነን እና በዙሪያው ባለው የሜትሮፖሊታን አካባቢ እና ክልል ውስጥ ደንበኞችን እናገለግላለን። ለትክክለኛው አድራሻ እና የአገልግሎት ቦታ እባክዎን የእውቂያ ገጻችንን ይመልከቱ.'
		},
		{
			q: 'የእርስዎ የተለመዱ ደንበኞች እነማን ናቸው?',
			a: 'ደንበኞቻችን የንብረት አስተዳዳሪዎችን፣ የንግድ ቢሮዎችን፣ የችርቻሮ መሸጫ ቦታዎችን፣ የእንግዳ ተቀባይነት ንግዶችን፣ የመኖሪያ ሕንፃዎችን፣ የግንባታ ድርጅቶችን እና የኢንዱስትሪ ተቋማትን ያካትታሉ።'
		}
	]);

	let general = $derived(lang ? generalAmharic : generalEnglish);

	let serviceEnglish =$state([
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
	]);

	let serviceAmharic =$state([
		{
			q: 'ሁለቱንም ትናንሽ እና ትላልቅ ፕሮጀክቶችን ትይዛላችሁ?',
			a: 'አዎ። የነጠላ ጣቢያ ስራዎችን እና ትላልቅ የባለብዙ ቦታ ኮንትራቶችን የምንመራው ቡድኖችን እና የፕሮጀክት አስተዳደርን ከስፋቱ ጋር በማጣጣም ነው።'
		},
		{
			q: 'ብጁ የአገልግሎት ፓኬጆችን ይሰጣሉ?',
			a: 'አዎ። ከአማራጭ ተጨማሪ አገልግሎቶች ጋር በጣቢያ መስፈርቶች፣ ድግግሞሽ እና በጀት ላይ በመመስረት የተበጁ ፓኬጆችን እንፈጥራለን።'
		},
		{
			q: 'በመካሄድ ላይ ያሉ የንብረት ጥገና ኮንትራቶችን ማስተዳደር ይችላሉ?',
			a: 'አዎ። እንደ ቀጣይ ኮንትራቶች አካል የታቀዱ የጥገና እቅዶችን፣ መደበኛ ምርመራዎችን እና ፈጣን ምላሽ አገልግሎቶችን እናቀርባለን።'
		}
	]);

	let service = $derived(lang ? serviceAmharic : serviceEnglish);



 let comEnglish = $state([
		{
			q: 'How can we get a quotation or proposal?',
			a: 'Use the website contact form, email, or phone to request a quote. We can arrange a site visit and will deliver a written proposal and estimate.'
		},
		{
			q: 'What is the best way to communicate with your team?',
			a: 'For initial enquiries use email or the contact form. Ongoing contracts receive an assigned account manager reachable by phone and email.'
		}
	]);

	let comAmharic = $state([
		{
			q: 'ጥቅስ ወይም ፕሮፖዛል እንዴት ማግኘት እንችላለን?',
			a: 'ዋጋ ለመጠየቅ የድረ-ገጹን አድራሻ፣ ኢሜይል ወይም ስልክ ይጠቀሙ። የድረ-ገጽ ጉብኝት አዘጋጅተን የጽሁፍ ፕሮፖዛል እና ግምት እናቀርባለን።'
		},
		{
			q: 'ከቡድንዎ ጋር ለመነጋገር ምርጡ መንገድ ምንድነው?',
			a: 'ለመጀመሪያ ጥያቄዎች ኢሜል ወይም የእውቂያ ቅጹን ይጠቀሙ። በመካሄድ ላይ ያሉ ውሎች በስልክ እና በኢሜል ሊደረስባቸው የሚችሉ የተመደበ የሂሳብ አስተዳዳሪ ይቀበላሉ.'
		}
	]);

	let com = $derived(lang ? comAmharic : comEnglish);
	let techEnglish = $state([
		{
			q: 'Can I download your company profile?',
			a: 'Yes. A downloadable PDF of our company profile is available on the website. If you need a tailored version, request it by email.'
		},
		{
			q: 'Do you have a Google Business Profile or social media pages?',
			a: 'Yes. Links to our Google Business Profile and social media are in the website footer — follow or message us on Facebook, Instagram or LinkedIn.'
		}
	]);

	let techAmharic = $state([
		{
			q: 'የኩባንያዎን መገለጫ ማውረድ እችላለሁ?',
			a: 'አዎ። የኩባንያችን መገለጫ ሊወርድ የሚችል ፒዲኤፍ በድር ጣቢያው ላይ ይገኛል። የተበጀ ስሪት ከፈለጉ በኢሜል ይጠይቁት።'
		},
		{
			q: 'ጎግል ቢዝነስ ፕሮፋይል ወይም የማህበራዊ ሚዲያ ገፆች አለህ?',
			a: 'አዎ። ወደ ጉግል ቢዝነስ ፕሮፋይላችን እና ማህበራዊ ሚዲያ አገናኞች በድረ-ገፁ ግርጌ ላይ ይገኛሉ - በፌስቡክ፣ ኢንስታግራም ወይም ሊንክድድ ተከተሉን ወይም መልእክት ይላኩልን።'
		}
	]);

	let tech = $derived(lang ? techAmharic : techEnglish)
</script>

<svelte:head>
	<title>{lang ? 'የሚጠየቁ ጥያቄዎች' : 'FAQ'}</title>
	<meta
		name="description"
		content="Find answers to frequently asked questions about Spotless General Trading Plc's trading, property, and facility management services in Ethiopia."
	/>
	<meta name="robots" content="index, follow" />

	<!-- Canonical -->
	<link rel="canonical" href="https://spotlesset.com/faq" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="FAQ | Spotless General Trading Plc" />
	<meta
		property="og:description"
		content="Explore frequently asked questions and get quick answers about Spotless General Trading Plc's professional services in Ethiopia."
	/>
	<meta property="og:url" content="https://spotlesset.com/faq" />
	<meta property="og:site_name" content="Spotless General Trading Plc" />
	<meta property="og:image" content="/favicon.svg" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="FAQ | Spotless General Trading Plc" />
	<meta
		name="twitter:description"
		content="Find answers to common questions about Spotless General Trading Plc's trading, property, and facility management services in Ethiopia."
	/>
	<meta name="twitter:image" content="/favicon.svg" />
</svelte:head>
<TopHero
	title={lang ? 'የሚጠየቁ ጥያቄዎች' : 'Frequently Asked Questions'}
	bread={lang ? 'ስፖትለስ > የሚጠየቁ ጥያቄዎች' : 'Spotless > FAQs'}
/>
<div class="lg:p-0 px-6">
	<Accordion.Root
		type="single"
		class="mt-16 w-full gap-2 sm:max-w-[80%] justify-self-center"
		value="item-1"
	>
		<h3 class="text-background text-bold">
			{lang ? 'አጠቃላይ የኩባንያ ጥያቄዎች' : 'General Company Questions'}
		</h3>
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
		<h3 class="text-background text-bold">
			{lang ? 'ከአገልግሎት ጋር የተያያዙ ጥያቄዎች' : 'Service-Related Questions'}
		</h3>
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
		<h3 class="text-background text-bold">
			{lang ? 'ግንኙነት እና ሎጂስቲክስ' : 'Communication & Logistics'}
		</h3>
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
		<h3 class="text-background text-bold">
			{lang ? 'የቴክኒክ እና የድር ጣቢያ ጥያቄዎች' : 'Technical & Website Questions'}
		</h3>
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
<BottomSnippet {lang} />
