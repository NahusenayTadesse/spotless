<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { Card, CardHeader, CardTitle, CardContent } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { MailIcon, TrashIcon, X } from '@lucide/svelte';
	import { toast } from 'svelte-sonner';
	import { enhance } from '$app/forms';
	import DialogComp from '$lib/components/DialogComp.svelte';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { page } from '$app/state';

	let { data } = $props();

	let param = page.params;

	let messages = $derived(data.messages);
	let selectedMessage: (typeof messages)[0] | null = $state(null);

	const deleteMessage = (id: number) => {
		messages = messages.filter((m) => m.id !== id);
		selectedMessage = null;
		toast.success('Message deleted successfully');
	};

	const markAsRead = (id: number) => {
		messages = messages.map((m) => (m.id === id ? { ...m, status: 'Read' } : m));
	};
</script>

{#snippet deleteForm(title = 'Delete  Message')}
	<DialogComp {title} variant="destructive">
		<form action="?/delete" method="POST" class="flex flex-row justify-between" use:enhance>
			<input type="hidden" name="id" value={message.id} />
			<Button size="sm" variant="destructive" class="border-0" type="submit">
				<TrashIcon />
				Delete
			</Button>
			<Dialog.Close type="button">
				<Button type="button">
					Close
					<X />
				</Button>
			</Dialog.Close>
		</form>
	</DialogComp>
{/snippet}

<svelte:head>
	<title>Messages</title>
</svelte:head>

<div class="flex flex-col gap-6">
	<div class="flex flex-col gap-2">
		<h1 class="text-3xl font-bold">Contact Messages</h1>
		<p class="text-muted-foreground">View and manage messages from your contacts</p>
	</div>

	<div class="grid gap-6 lg:grid-cols-3">
		<div class="lg:col-span-2 flex flex-col gap-4">
			{#each messages as message (message.id)}
				<button
					in:fade={{ duration: 300 }}
					class="group cursor-pointer"
					onclick={() => {
						selectedMessage = message;
						markAsRead(message.id);
					}}
				>
					<Card
						class={[
							'transition-all duration-300 hover:shadow-lg',
							selectedMessage?.id === message.id && 'ring-2 ring-primary'
						]}
					>
						<CardContent class="pt-6">
							<div class="flex items-start justify-between gap-4">
								<div class="flex-1 min-w-0">
									<div class="flex items-center gap-2 mb-2">
										<h3 class="font-semibold truncate">{message.name}</h3>
										<!-- <Badge variant={message.status === "Unread" ? "default" : "secondary"} class="shrink-0">
											{message.status}
										</Badge>
										<Badge variant={message.priority === "High" ? "destructive" : message.priority === "Normal" ? "outline" : "secondary"} class="shrink-0">
											{message.priority}
										</Badge> -->
									</div>
									<p class="text-sm text-muted-foreground mb-2">{message.email}</p>
									<p class="font-medium text-sm mb-2">{message.subject}</p>
									<p class="text-sm text-muted-foreground line-clamp-2">{message.message}</p>
									<p class="text-xs text-muted-foreground mt-2">{message.date}</p>
								</div>
								<DialogComp title="Delete Message" variant="destructive">
									<form
										action="?/delete"
										method="POST"
										class="flex flex-row justify-between"
										use:enhance
									>
										<input type="hidden" name="id" value={message.id} />
										<Button size="sm" variant="destructive" class="border-0" type="submit">
											<TrashIcon />
											Delete
										</Button>
										<Dialog.Close type="button">
											<Button type="button">
												Close
												<X />
											</Button>
										</Dialog.Close>
									</form>
								</DialogComp>
							</div>
						</CardContent>
					</Card>
				</button>
			{/each}
		</div>

		{#if selectedMessage}
			<div transition:fade={{ duration: 300 }}>
				<Card class="fixed z-100 top-4 h-fit">
					<CardHeader>
						<CardTitle class="text-lg">Message Details</CardTitle>
					</CardHeader>
					<CardContent class="flex flex-col gap-4">
						<div>
							<p class="text-xs font-semibold text-muted-foreground uppercase">From</p>
							<p class="font-medium">{selectedMessage.name}</p>
							<p class="text-sm text-muted-foreground">{selectedMessage.email}</p>
						</div>
						<div>
							<p class="text-xs font-semibold text-muted-foreground uppercase">Subject</p>
							<p class="font-medium">{selectedMessage.subject}</p>
						</div>

						<div>
							<p class="text-xs font-semibold text-muted-foreground uppercase">Date</p>
							<p class="text-sm">{selectedMessage.date}</p>
						</div>
						<div class="border-t pt-4">
							<p class="text-xs font-semibold text-muted-foreground uppercase mb-2">Message</p>
							<p class="text-sm leading-relaxed">{selectedMessage.message}</p>
						</div>
						<div class="flex gap-2 pt-4 border-t">
							<Button
								class="flex-1"
								size="sm"
								href="mailto:{selectedMessage.email}"
								target="_blank"
							>
								<MailIcon size={16} />
								Reply
							</Button>
							<DialogComp title="" variant="destructive">
								<Dialog.Title>Delete Message</Dialog.Title>
								Are you sure you want to delete this message?
								<form
									action="?/delete"
									method="POST"
									class="flex flex-row justify-between"
									use:enhance
								>
									<input type="hidden" name="id" value={selectedMessage.id} />
									<Button size="sm" variant="destructive" class="border-0" type="submit">
										<TrashIcon />
										Delete
									</Button>
									<Dialog.Close type="button">
										<Button type="button">
											Close
											<X />
										</Button>
									</Dialog.Close>
								</form>
							</DialogComp>
						</div>
					</CardContent>
				</Card>
			</div>
		{/if}
	</div>
</div>
