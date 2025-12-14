<script>
	let { data } = $props();
</script>

<div class="flex flex-col gap-6">
	<div class="flex flex-col gap-2">
		<h1 class="text-3xl font-bold">Dashboard</h1>
		<p class="text-muted-foreground">Welcome back! Here's an overview of your system</p>
	</div>
	<div class="grid gap-4 md:grid-cols-4">
		{#each [{ label: 'Total Articles', value: data.newsNum }, { label: 'Total Views On Articles', value: data.totalViews }, { label: 'Messages', value: data.messageNum }] as stat (stat.label)}
			<div class="bg-card border rounded-lg p-6 hover:shadow-lg-lg transition-all duration-300">
				<p class="text-sm text-muted-foreground mb-2">{stat.label}</p>
				<p class="text-2xl font-bold mb-2">{stat.value}</p>
			</div>
		{/each}
	</div>
</div>
