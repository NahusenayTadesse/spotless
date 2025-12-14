<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Button, type ButtonVariant } from '$lib/components/ui/button/index.js';

	let { title, children, variant }: { title: string; variant: ButtonVariant } = $props();
</script>

<Dialog.Root>
	<Dialog.Trigger class="w-auto px-4 border-0"
		><Button {variant} class="border-0">{title}</Button></Dialog.Trigger
	>
	<Dialog.Content class="w-full bg-white">
		<Dialog.Header>
			<Dialog.Title>{title}</Dialog.Title>
		</Dialog.Header>
		{@render children()}
	</Dialog.Content>
</Dialog.Root>
