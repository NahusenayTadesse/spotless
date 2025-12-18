<script lang="ts">
	import { glass } from '$lib/global.svelte';
	import { fade, fly } from 'svelte/transition';

	let servicesEnglish = $state([
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


	let listEnglish = $state([
		{ src: '/images/teams.svg', name: 'Experienced Team' },
		{ src: '/images/shake.svg', name: 'Reliable Service' },
		{ src: '/images/eye.svg', name: 'Strong Supervision' },
		{ src: '/images/focus.svg', name: 'Customer Focused' }
	]);

	let listAmharic = $state([
		{ src: '/images/teams.svg', name: 'ልምድ ያለው ቡድን' },
		{ src: '/images/shake.svg', name: 'አስተማማኝ አገልግሎት' },
		{ src: '/images/eye.svg', name: 'ጠንካራ ቁጥጥር' },
		{ src: '/images/focus.svg', name: 'የደንበኛ ትኩረት' }
	]);



	let servicesLongerEnglish = $state([
		{
			title: 'Cleaning',
			description: `At Spotless General Trading, we specialize in delivering professional cleaning solutions that keep your spaces spotless, comfortable, and ready for use. From quick one-time cleanups to full-scale janitorial management, our services are designed to meet every need with reliability, efficiency, and care. Backed by advanced cleaning equipment and quality-tested products, we ensure every surface shines — while maintaining the safety and integrity of your environment.`,
			btnNum: '200+',
			butStr: 'Employees',
			image: '/images/service1.webp'
		},

		{
			title: 'Security',
			description: `At Spotless General Trading, we provide dependable and professional security solutions designed to protect people, property, and assets. Our trained security personnel are carefully selected and equipped to manage a wide range of environments, including residential, commercial, and industrial spaces. With flexible scheduling and customized security plans, we ensure constant vigilance, rapid response, and complete peace of mind — allowing you to focus on what matters most.`,
			btnNum: '150+',
			butStr: 'Employees',
			image: '/images/service2.webp'
		},

		{
			title: 'Training and Consultancy Service',
			description: `At Spotless General Trading, we offer specialized training and consultancy services to elevate operational efficiency and cleanliness standards. Our solutions include comprehensive janitorial training, cleaning process consultancy, and continuous operational monitoring tailored to your organization’s needs. By combining industry best practices with hands-on guidance, we help teams improve performance, maintain compliance, and achieve consistently high service quality.`,
			btnNum: '40+',
			butStr: 'Trainers & Consultants',
			image: '/images/service3.webp'
		},

		{
			title: 'Property Management',
			description: `At Spotless General Trading, we support property owners and facility managers with reliable property management solutions focused on hygiene, maintenance, and sustainability. We supply high-quality cleaning materials and sanitary products to ensure safe, well-maintained environments. With fair pricing, dependable service, and close attention to detail, we help protect your property’s value while creating comfortable, hygienic spaces for occupants.`,
			btnNum: '50+',
			butStr: 'Employees',
			image: '/images/service4.webp'
		}
]);


	let servicesLongerAmharic = $state([
		{
			title: 'ጽዳት',
			description: `በስፖትለስ ጀነራል ትሬዲንግ፣ ቦታዎችዎን እንከን የለሽ፣ ምቹ እና ለአገልግሎት ዝግጁ የሚያደርጉ ሙያዊ የጽዳት መፍትሄዎችን በማቅረብ ላይ እንጠቀማለን። ከፈጣን የአንድ ጊዜ ጽዳት እስከ ሙሉ የጽዳት አስተዳደር፣ አገልግሎታችን ሁሉንም ፍላጎቶች በአስተማማኝ፣ በቅልጥፍና እና በእንክብካቤ ለማሟላት የተነደፈ ነው። በላቁ የጽዳት መሳሪያዎች እና በጥራት በተፈተኑ ምርቶች በመታገዝ የአካባቢዎን ደህንነት እና ታማኝነት እየጠበቅን እያንዳንዱን ገጽ የሚያበራ መሆኑን እናረጋግጣለን።`,
			btnNum: '200+',
			butStr: 'ሰራተኞች',
			image: '/images/service1.webp'
		},

		{
			title: 'ጥበቃ',
			description: `በስፖትለስ አጠቃላይ ትሬዲንግ ሰዎችን፣ንብረትን እና ንብረቶችን ለመጠበቅ የተነደፉ አስተማማኝ እና ሙያዊ የደህንነት መፍትሄዎችን እናቀርባለን። የሰለጠኑ የደህንነት ሰራተኞቻችን የመኖሪያ፣ የንግድ እና የኢንዱስትሪ ቦታዎችን ጨምሮ የተለያዩ አካባቢዎችን ለማስተናገድ በጥንቃቄ የተመረጡ እና የታጠቁ ናቸው። በተለዋዋጭ መርሐግብር እና ብጁ የደህንነት ዕቅዶች፣ የማያቋርጥ ንቃት፣ ፈጣን ምላሽ እና የአእምሮ ሰላም እናረጋግጣለን - በጣም አስፈላጊ በሆኑት ላይ እንዲያተኩሩ ያስችልዎታል።`,
			btnNum: '150+',
			butStr: 'ሰራተኞች',
			image: '/images/service2.webp'
		},

		{
			title: 'የስልጠና እና የምክር አገልግሎት',
			description: `በስፖትለስ ጀነራል ትሬዲንግ ልዩ የሥልጠና እና የማማከር አገልግሎት እናቀርባለን። ፕሮግራሞቻችን የፅዳት ማሰልጠኛ፣ የጽዳት ሂደት ማማከር እና ለድርጅትዎ ፍላጎቶች የተዘጋጀ ቀጣይነት ያለው የአሰራር ክትትል ያካትታሉ። የኢንዱስትሪ ምርጥ ልምዶችን ከእጅ-ተኮር መመሪያ ጋር በማጣመር ቡድኖች አፈጻጸምን እንዲያሻሽሉ፣ ተገዢነታቸውን እንዲጠብቁ እና በቋሚነት ከፍተኛ የአገልግሎት ጥራት እንዲያገኙ እንረዳቸዋለን።`,
			btnNum: '150+',
			butStr: 'ሰራተኞች',
			image: '/images/service2.webp'
		},

		{
			title: 'የንብረት አስተዳደር',
			description: `በስፖትለስ አጠቃላይ ትሬዲንግ የንብረት ባለቤቶችን እና የፋሲሊቲ አስተዳዳሪዎችን በንፅህና፣ ጥገና እና ዘላቂነት ላይ ያተኮሩ አስተማማኝ የንብረት አስተዳደር መፍትሄዎችን እንደግፋለን። ከፍተኛ ጥራት ያላቸውን የጽዳት እቃዎች እና የንፅህና መጠበቂያ ምርቶችን እናቀርባለን, ደህንነቱ የተጠበቀ እና በደንብ የተጠበቁ አካባቢዎችን ለማረጋገጥ. በተመጣጣኝ ዋጋ፣ አስተማማኝ አገልግሎት እና ለዝርዝር ትኩረት በመስጠት ለተሳፋሪዎች ምቹ እና ንጽህና ያላቸው ቦታዎችን በመፍጠር የንብረትዎን ዋጋ ለመጠበቅ እንረዳለን።
`,
			btnNum: '50+',
			butStr: 'ሰራተኞች',
			image: '/images/service2.webp'
		}
]);






	let { lang=false } = $props();



	let services = $derived(lang ? servicesAmharic : servicesEnglish);
	let servicesLonger = $derived(lang ? servicesLongerAmharic : servicesLongerEnglish);
	let	 list = $derived(lang ? listAmharic : listEnglish);


   let selectedService = $state(0)

</script>

<section class="grid lg:grid-cols-4 grid-cols-1 gap-4 w-9/10 justify-self-center mt-16">
	{#each services as { title, description, btnNum, butStr, image }, index}
		<button
			onclick={() => (selectedService = index)}
			class="roudned-xl rounded-4xl
     bg-cover bg-center flex flex-col justify-between items-start p-8 {selectedService === index
				? 'shadow-lg shadow-background ring-2 ring-background'
				: ''} hover:scale-105 transition-all duration-300 ease-in-out"
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
		</button>
	{/each}
</section>

<section class="grid lg:grid-cols-2 grid-cols-1 gap-16 lg:px-[7%] px-4 py-24">
	<div class="flex flex-col items-start justify-center gap-8">
		<h2
			class="text-background font-bold! transition-all duration-300 ease-in-out"
			transition:fly={{ x: -100, duration: 300, delay: 100 }}
		>
			{servicesLonger[selectedService].title}
		</h2>
		<p transition:fade={{ duration: 300, delay: 100 }}>
			{servicesLonger[selectedService].description}
		</p>
	</div>

	<!-- <div>
		<img src="/images/mopblue.webp" alt="Cleaning Mop and bucket" />
	</div> -->
	<div class="flex flex-col gap-4 justify-center items-center relative">
		<img src="/images/mopblue.webp" alt="" class="w-full h-auto" />

		<div
			class="bg-background p-8 flex flex-col items-center justify-center rounded-lg
        absolute -bottom-4 left-24 z-10"
		>
			<h3 class="text-white font-bold" transition:fade={{ duration: 300, delay: 100 }}>
				{servicesLonger[selectedService].btnNum}
			</h3>
			<h4 class="text-white" transition:fade={{ duration: 300, delay: 100 }}>
				{servicesLonger[selectedService].butStr}
			</h4>
		</div>
	</div>
</section>
<section class="flex flex-col w-full mt-16 gap-8 justify-center items-center">
	<h2 class="text-center font-bold text-background">
		{lang ? 'ለምን እኛን ይመርጣሉ' : 'Why Choose Us'}
	</h2>

	<div
		class="grid lg:grid-cols-4 grid-cols-1 bg-background w-4/5 justify-self-center text-center rounded-[48px] py-6"
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
