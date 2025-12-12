<script lang="ts">
	import AppSidebar from "$lib/components/app-sidebar.svelte";
	import AppTopHeader from "$lib/components/app-top-header.svelte";

	import { SidebarInset, SidebarProvider } from "$lib/components/ui/sidebar";

    

	// Set app hook
 
	let currentPage = $state("dashboard");

	const pages: Record<string, any> = {
		dashboard: '/dashboard',
		news: '/dashboard/news',
		messages: '/dashboard/messages',
	};

    let { data, children } = $props()
</script>


<SidebarProvider>
	<AppSidebar bind:currentPage />
	<SidebarInset>
		<AppTopHeader />
		<main class="flex-1 overflow-auto bg-white">
			<div class="p-6 max-w-7xl mx-auto">
			
					{@render children?.()}
			
			</div>
		</main>
	</SidebarInset>
</SidebarProvider>