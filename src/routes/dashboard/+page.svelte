<div class="flex flex-col gap-6">
						<div class="flex flex-col gap-2">
							<h1 class="text-3xl font-bold">Dashboard</h1>
							<p class="text-muted-foreground">Welcome back! Here's an overview of your system</p>
						</div>
						<div class="grid gap-4 md:grid-cols-4">
							{#each [{ label: "Total Users", value: "1,234", change: "+12%" }, { label: "Total Articles", value: "456", change: "+8%" }, { label: "Messages", value: "89", change: "+23%" }, { label: "Active Sessions", value: "42", change: "+5%" }] as stat (stat.label)}
								<div class="bg-card border rounded-lg p-6 hover:shadow-lg-lg transition-all duration-300">
									<p class="text-sm text-muted-foreground mb-2">{stat.label}</p>
									<p class="text-2xl font-bold mb-2">{stat.value}</p>
									<p class="text-xs text-primary font-medium">{stat.change} from last month</p>
								</div>
							{/each}
						</div>

        </div>