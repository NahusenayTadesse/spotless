<script lang="ts">
  import type { SuperValidated, Infer } from 'sveltekit-superforms';
  import { superForm } from 'sveltekit-superforms'
  import type { CategorySchema } from './schemas';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { Loader, Plus } from '@lucide/svelte';

  let { data } : { data : SuperValidated<Infer<CategorySchema>> } = $props();

  const { form, errors, enhance, delayed } = superForm(data);
</script>

{#snippet fe(
	label = '',
	name = '',
	type = '',
	placeholder = '',
	required = false,
    
)}
	<div class="flex w-full flex-col justify-start gap-2">
		<Label for={name}>{label}</Label>
		<Input
			{type}
			{name}
			{placeholder}
			{required}

			bind:value={$form[name]}
			aria-invalid={$errors[name] ? 'true' : undefined}
		/>
		{#if $errors[name]}
			<span class="text-red-500">{$errors[name]}</span>
		{/if}
	</div>
{/snippet}

<form method="POST" action="?/addCategory" id="category" use:enhance class="flex flex-col gap-4"> 
        {@render fe('Name', 'name', 'text', 'Enter name of category', true)}
        {@render fe('Description', 'description', 'text', 'Add Description', true)}
        <Button type="submit" class="mt-4" form="category">
				{#if $delayed}
					<Loader class="animate-spin" />
					Adding Category
				{:else}
					<Plus class="h-4 w-4" />
					Add Category
				{/if}
			</Button>
 </form>