<script lang="ts">
	import { glass } from '$lib/global.svelte';
	import { page } from '$app/state';

	let services = $state([
	{
		title: 'Cleaning',
		description: `We provide professional cleaning solutions for homes, offices, and commercial spaces. From one-time cleanups to full janitorial services, we ensure spotless results using modern equipment and safe, effective products.`,
		btnNum: '200+',
		butStr: 'Employees',
		image: '/images/service1.webp'
	},

	{
		title: 'Security',
		description: `We offer trained and reliable security personnel, customized to your schedule and specific protection needs.`,
		btnNum: '150+',
		butStr: 'Employees',
		image: '/images/service2.webp'
	},

	{
		title: 'Training and Consultancy Service',
		description: `We provide janitorial training, cleaning consultancy, and operational monitoring to help organizations improve efficiency and maintain high cleanliness standards.`,
		btnNum: '150+',
		butStr: 'Employees',
		image: '/images/service2.webp'
	},

	{
		title: 'Property Management',
		description: `We supply quality cleaning materials and sanitary products to help maintain safe, hygienic spaces. Our service ensures reliable support, fair pricing, and care for your property and people.`,
		btnNum: '50+',
		butStr: 'Employees',
		image: '/images/service2.webp'
	}
]);

let servicesAmharic = $state([
	{
		title: 'ጽዳት',
		description: `ለቤት፣ ለቢሮ እና ለንግድ ቦታዎች ሙያዊ የጽዳት መፍትሄዎችን እናቀርባለን። ከአንድ ጊዜ ጽዳት ጀምሮ እስከ ሙሉ የጽዳት አገልግሎት፣ ዘመናዊ መሣሪያዎችን እና አስተማማኝ፣ ውጤታማ ምርቶችን በመጠቀም እንከን የለሽ ውጤቶችን እናረጋግጣለን።`,
		btnNum: '200+',
		butStr: 'ሰራተኞች',
		image: '/images/service1.webp'
	},

	{
		title: 'ጥበቃ',
		description: `የሰለጠኑ እና አስተማማኝ የደህንነት ሰራተኞችን እናቀርባለን ፣ለእርስዎ መርሃ ግብር ብጁ እና የተለየ የጥበቃ ፍላጎቶች።`,
		btnNum: '150+',
		butStr: 'ሰራተኞች',
		image: '/images/service2.webp'
	},

	{
		title: 'የስልጠና እና የምክር አገልግሎት',
		description: `ድርጅቶች ቅልጥፍናን እንዲያሻሽሉ እና ከፍተኛ የንፅህና ደረጃዎችን እንዲጠብቁ ለማገዝ የፅዳት ስልጠና፣ የጽዳት አማካሪ እና የአሰራር ክትትል እንሰጣለን።`,
		btnNum: '150+',
		butStr: 'ሰራተኞች',
		image: '/images/service2.webp'
	},

	{
		title: 'የንብረት አስተዳደር',
		description: `ደህንነታቸው የተጠበቀ እና ንጽህና ቦታዎችን ለመጠበቅ እንዲረዳቸው ጥራት ያለው የጽዳት ቁሳቁሶችን እና የንፅህና መጠበቂያ ምርቶችን እናቀርባለን። አገልግሎታችን አስተማማኝ ድጋፍን፣ ፍትሃዊ ዋጋን እና ለንብረትዎ እና ለሰዎችዎ እንክብካቤን ያረጋግጣል።`,
		btnNum: '50+',
		butStr: 'ሰራተኞች',
		image: '/images/service2.webp'
	}
]);


	let list = [
		{ src: '/images/teams.svg', name: 'Experienced Team' },
		{ src: '/images/shake.svg', name: 'Reliable Service' },
		{ src: '/images/eye.svg', name: 'Strong Supervision' },
		{ src: '/images/focus.svg', name: 'Customer Focused' }
	];

	let list2 = [
		{ src: '/images/teams.svg', name: 'ልምድ ያለው ቡድን' },
		{ src: '/images/shake.svg', name: 'አስተማማኝ አገልግሎት' },
		{ src: '/images/eye.svg', name: 'ጠንካራ ቁጥጥር' },
		{ src: '/images/focus.svg', name: 'የደንበኛ ትኩረት' }
	];
	let { current } = $props();

      let lang = $derived( page.params.lang === 'am' || current === 'am');
	// let serviceCurrent:  [{ title: string, description: string, btnNum: string, butStr: string, image: string }] = $state();
	// let listCurrent: [{ src: string, name: string }] = $state();

	  let serviceCurrent = $derived(lang ? servicesAmharic : services);
	let	 listCurrent = $derived(lang ? list2 : list);




</script>

<section class="grid lg:grid-cols-4 grid-cols-1 gap-4 w-9/10 justify-self-center mt-16">
	{#each serviceCurrent as { title, description, btnNum, butStr, image }}
		<div
			class="roudned-xl rounded-4xl
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

<section class="flex flex-col w-full mt-16 gap-8 justify-center items-center">
	<h2 class="text-center font-bold text-background">
		{lang ? 'ለምን እኛን ይመርጣሉ' : 'Why Choose Us'}
	</h2>

	<div
		class="grid lg:grid-cols-4 grid-cols-1 bg-background w-4/5 justify-self-center text-center rounded-[48px] py-6"
	>
		{#each listCurrent as { src, name }}
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

<section class="grid lg:grid-cols-2 grid-cols-1 gap-16 lg:px-[7%] px-4 py-24">
	<div class="flex flex-col items-start justify-center gap-8">
		<h2 class="text-background font-bold!">{page.params.lang === 'am' ? 'ጽዳት' : 'Cleaning'}</h2>
		<p>
			{lang
				? `በስፖትለስ አጠቃላይ ትሬዲንግ፣ ሙያዊ የጽዳት መፍትሄዎችን በማቅረብ ላይ እንጠቀማለን። ቦታዎችዎን እንከን የለሽ፣ ምቹ እና ለአገልግሎት ዝግጁ ያድርጉ። ከፈጣን የአንድ ጊዜ ጽዳት እስከ
የሙሉ መጠን የጽዳት አስተዳደር፣ አገልግሎቶቻችን ሁሉንም ፍላጎቶች ለማሟላት የተነደፉ ናቸው። 	አስተማማኝነት, ቅልጥፍና እና እንክብካቤ. በላቁ የጽዳት መሳሪያዎች የተደገፈ እና በጥራት የተፈተነ
ምርቶች፣ እያንዳንዱ ገጽ እንዲበራ እናረጋግጣለን - የእርስዎን ደህንነት እና ትክክለኛነት እየጠበቅን አካባቢ.`
				: `At Spotless General Trading, we specialize in delivering professional cleaning solutions that
			keep your spaces spotless, comfortable, and ready for use. From quick one-time cleanups to
			full-scale janitorial management, our services are designed to meet every need with
			reliability, efficiency, and care. Backed by advanced cleaning equipment and quality-tested
			products, we ensure every surface shines — while maintaining the safety and integrity of your
			environment.`}
		</p>
	</div>

	<div>
		<img src="/images/mop.webp" alt="Cleaning Mop and bucket" />
	</div>
</section>
