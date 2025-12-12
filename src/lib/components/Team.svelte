<script>
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    // 1. Import the onMount function
    import { onMount } from 'svelte';
	import Button from "./ui/button/button.svelte";
	import { btn } from "$lib/global.svelte";
	import { Expand } from "@lucide/svelte";

  let team = $state([ 
    { 
        name: 'Tsedinya Shimlse', 
        position: 'Marketing', 
        src: '/images/team (3).webp',
        shortDescription: 'Drives brand growth and client communication.',
        longDescription: 'Tsedinya leads the company’s marketing initiatives, ensuring strong visibility, effective communication, and consistent brand presentation. Her creative strategies help Spotless General Trading Plc stay competitive and client-focused.'
    },

    { 
        name: 'Abel Tadesse', 
        position: 'Operations Manager', 
        src: '/images/team (2).webp',
        shortDescription: 'Oversees daily operations and quality control.',
        longDescription: 'Abel manages day-to-day operations with an emphasis on coordination, safety, and timely delivery. His leadership ensures every project meets the company’s standards for reliability and exceptional service.'
    },

    { 
        name: 'Erahel Eshitu', 
        position: 'Finance Manager', 
        src: '/images/team (4).webp',
        shortDescription: 'Manages budgeting and financial planning.',
        longDescription: 'Erahel maintains the financial stability of the company through accurate budgeting, reporting, and cost management. Her strategic financial insights support informed decision-making and sustainable growth.'
    },

    { 
        name: 'Kasechi Admasu', 
        position: 'General Manager', 
        src: '/images/team (1).webp',
        shortDescription: 'Leads overall strategy and company performance.',
        longDescription: 'Kasechi drives the strategic direction of Spotless General Trading Plc, overseeing operations, client relations, and long-term growth. His leadership ensures the company consistently delivers high-quality, dependable service.'
    },
])


    // 2. State for the initial fade-in
    let isMounted = $state(false);

    // 3. Set the state after the component is mounted
    onMount(() => {
        isMounted = true;
    });

</script>

<section class="py-16 px-[7%] flex flex-col gap-12">

  <h2 class="text-center font-bold! text-background"> Our Team Members</h2>

<div 
    class="grid grid-cols-1 lg:grid-cols-4 gap-4 transition-opacity duration-700 ease-out" 
    class:opacity-100={isMounted} 
    class:opacity-0={!isMounted}
>  

    {#each team as t}

        <Dialog.Root >
            <Dialog.Trigger class="w-auto px-0" >
                
                <Card.Root 
                    class="
                        w-full max-w-sm 
                        transition-all duration-300 ease-in-out 
                        hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/20 
                        cursor-pointer
                    "
                >
                    <Card.Header>
                        <Card.Title>{t.name}</Card.Title>
                        <Card.Description>{t.position}</Card.Description> 
                    </Card.Header>
                    <Card.Content class="flex flex-col gap-4">
                        <img 
                            src={t.src} 
                            class="w-full h-96 rounded-lg transition-all duration-300 object-cover hover:filter-none filter drop-shadow-lg brightness-50 hover:scale-[1.01]" 
                            alt="{t.name} picture"
                        >
                        <p>{t.shortDescription}</p>
                        <Button size="icon-lg" class="{btn} w-full text-sm! py-4! text-white!"> See More <Expand /></Button>
                    </Card.Content>
                </Card.Root>

            </Dialog.Trigger>
            
            <Dialog.Content 
                class="
                    w-full bg-white 
                    data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 
                    data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 
                    data-[state=closed]:duration-200 data-[state=open]:duration-300
                "
            >
                <Dialog.Header>
                    <Dialog.Title>{t.name}</Dialog.Title>
                    <Dialog.Description>
                        {t.position}
                    </Dialog.Description>
                </Dialog.Header> 
                <img src={t.src} class="w-full h-96 object-cover" alt="{t.name} picture">
                <p class="pt-4 text-gray-700">{t.longDescription}</p>
            </Dialog.Content>
        </Dialog.Root>

    {/each}

</div>

</section>