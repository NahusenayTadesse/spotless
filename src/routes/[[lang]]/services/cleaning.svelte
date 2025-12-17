<script lang="ts">
	import { Button } from "$lib/components/ui/button/index";

  let cleaningEnglish = $state([
     { title: 'Immediate Cleaning',
       description: 'Making the House/office/building…etc ready for business or operation. Within this provision, service will be provided for once or periodically once in a week/month/or every three or 4 months as per the customer demand.'
     },
      { title: 'Extended Cleaning Service',
       description: 'Full janitorial Service Management.  Under this provision, the service will be given in permanent bases with all responsibility of cleaning. The service will be render providing all required HR, cleaning equipment or products.  '
     },
     { title: 'Selected Sections Cleaning Service',
       description: `This type of cleaning rendered particularly for particular section for once or periodically demands of customer.
External/internal wall/glass cleaning service
Household/office  item cleaning  : this part of cleaning include carpet , furniture   and the like
Toilette and bathroom ; service on demand for their toilet , bathroom`
     },
     { title: 'Alternative Optional  Service',
       description: `Training and consultancy; it is a kind of service to provide training for janitorial on how they can able to clean their premises and develop cleaning schedule.
 Monitoring and cleaning management  : a service rendered for particular firm as over taking the cleaning management division`
     },

  ])

  let cleaningAmharic = $state([
     { title: 'ወዲያውኑ ጽዳት',
       description: 'ቤቱን/ቢሮውን/ህንጻውን… ወዘተ ለንግድ ወይም ለስራ ዝግጁ ማድረግ። በዚህ አቅርቦት ውስጥ፣ እንደ ደንበኛ ፍላጎት በሳምንት/ወር/ወይም በየሶስት ወይም 4 ወሩ አንድ ጊዜ አገልግሎት ለአንድ ወይም አልፎ አልፎ ይሰጣል።'
     },
      { title: 'የተራዘመ የጽዳት አገልግሎት',
       description: 'ሙሉ የጽዳት አገልግሎት አስተዳደር.  በዚህ አቅርቦት መሰረት አገልግሎቱን የማጽዳት ሃላፊነት ባለው ቋሚ መሰረት ይሰጣል. አገልግሎቱ ሁሉንም አስፈላጊ የሰው ኃይል፣ የጽዳት ዕቃዎችን ወይም ምርቶችን ያቀርባል።'
     },
     { title: 'የተመረጡ ክፍሎች የጽዳት አገልግሎት',
       description: `የዚህ ዓይነቱ ጽዳት በተለይ ለተወሰነ ክፍል ለአንድ ጊዜ ወይም ለደንበኛ ፍላጎቶች የሚቀርበው።
       የውጭ / የውስጥ ግድግዳ / የመስታወት ማጽጃ አገልግሎት
       የቤት/ቢሮ ዕቃዎችን ማፅዳት፡ ይህ የጽዳት ክፍል ምንጣፍ፣ የቤት እቃዎች እና የመሳሰሉትን ያጠቃልላል
       መጸዳጃ ቤት እና መታጠቢያ ቤት; ለመጸዳጃቸው ፣ ለመታጠቢያቸው በፍላጎት አገልግሎት`
     },
     { title: 'አማራጭ አማራጭ  አገልግሎት',
       description: `
       ስልጠና እና ማማከር; ለጽዳትና ንፅህና አጠባበቅ ስልጠና መስጠት እና የጽዳት መርሃ ግብር ማዘጋጀት አንድ አይነት አገልግሎት ነው።
        የክትትልና የጽዳት አስተዳደር፡ የጽዳት አስተዳደር ክፍልን ከመውሰዱ በፊት ለተወሰነ ድርጅት የሚሰጥ አገልግሎት`
     },

  ])

  let { lang=false } = $props();

  let cleaning = $derived(lang ? cleaningAmharic : cleaningEnglish )


</script>

<section class="flex flex-col lg:px-[7%] py-16 px-0">
	<div class=" flex flex-col rounded-lg pb-0 justify-center items-center pt-4">
		<div
			class="pt-16 rounded-t-xl pb-32 w-full bg-background flex flex-col justify-center items-center gap-4"
		>
			<h4 class="text-white text-center">
				{lang ? 'የጽዳት አገልግሎቶች' : 'Cleaning Services'}
			</h4>

			<h3 class="text-white font-bold! text-center">
				{lang ? 'የጽዳት አገልግሎቶች መካከል ይምረጡ' : 'Choose From Our Varieties of Cleaning Services'}
			</h3>
		</div>

		<div class="grid lg:grid-cols-4 grid-cols-1 gap-4 -mt-16">
			{#each cleaning as l}
				<div
					class="p-6 rounded-xl bg-white shadow-2xl flex flex-col justify-start gap-16 items-center"
				>
					<h4 class="text-white p-2 text-center rounded-lg bg-background">{l.title}</h4>
					<p>
						{l.description}
					</p>

					<Button variant="outline" href="/contact" class="mt-auto"
						>{lang ? 'ቀጠሮ ይያዙ' : 'Book a Meeting'}</Button
					>
				</div>
			{/each}
		</div>
	</div>
</section>
