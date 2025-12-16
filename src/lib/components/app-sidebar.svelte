<script lang="ts">
	import {
		Sidebar,
		SidebarContent,
		SidebarFooter,
		SidebarHeader,
		SidebarRail,
		SidebarGroup,
		SidebarGroupLabel,
		SidebarGroupContent,
		SidebarMenu,
		SidebarMenuItem,
		SidebarMenuButton
	} from '$lib/components/ui/sidebar';
	import {
		NewspaperIcon,
		UsersIcon,
		MailIcon,
		LayoutDashboardIcon,
		ExternalLink
	} from '@lucide/svelte';

	let { currentPage = $bindable('dashboard') } = $props();

	const menuItems = [
		{ id: '/dashboard', label: 'Dashboard', icon: LayoutDashboardIcon },
		{ id: '/dashboard/news', label: 'News & Blogs', icon: NewspaperIcon },
		{ id: '/dashboard/messages', label: 'Contact Messages', icon: MailIcon },
		{ id: '/', label: 'Go Back to Website', icon: ExternalLink }
	];
</script>

<Sidebar collapsible="offcanvas">
	<SidebarHeader class="border-b border-sidebar-border h-14 flex-row items-center px-4">
		<div class="flex items-end gap-2">
			<img src="/favicon.svg" class="w-8 h-8" alt="" />
			<span class="font-bold text-lg">Dashboard</span>
		</div>
	</SidebarHeader>

	<SidebarContent class="bg-white">
		<SidebarGroup>
			<SidebarGroupLabel>Menu</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{#each menuItems as item (item.id)}
						<SidebarMenuItem>
							<SidebarMenuButton isActive={currentPage === item.id} href={item.id}>
								<a href={item.id} class="flex flex-row gap-2">
									<item.icon size={18} />
									<span>{item.label}</span>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					{/each}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	</SidebarContent>

	<SidebarFooter class="border-t border-sidebar-border h-14 flex-row items-center px-4">
		<div class="flex items-center gap-2 text-xs">
			<div
				class="size-8 rounded-full bg-linear-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold"
			>
				A
			</div>
			<div class="flex flex-col">
				<span class="font-semibold">Admin</span>
				<span class="text-muted-foreground">admin@spotlesset.com</span>
			</div>
		</div>
	</SidebarFooter>

	<SidebarRail />
</Sidebar>
