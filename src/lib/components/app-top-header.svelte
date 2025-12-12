<script lang="ts">
	import { useSidebar } from "$lib/components/ui/sidebar";
	import { Button } from "$lib/components/ui/button";
	import { PanelLeftIcon, SunIcon, MoonIcon, BellIcon } from "@lucide/svelte";

	const sidebar = useSidebar();
</script>

<header class="sticky top-0 z-50 flex items-center justify-between px-6 gap-4 border-b h-14 bg-white backdrop-blur-sm">
	<Button size="icon" variant="ghost" class="size-8" onclick={() => sidebar.toggle()}>
		<PanelLeftIcon size={18} />
	</Button>

	<div class="flex items-center gap-2">
		<Button size="icon" variant="ghost" class="size-8 relative">
			<BellIcon size={18} />
			<span class="absolute top-1 right-1 size-2 bg-primary rounded-full"></span>
		</Button>

	</div>
</header>
