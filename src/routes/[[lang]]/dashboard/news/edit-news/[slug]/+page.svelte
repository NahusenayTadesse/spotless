<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import type { Snapshot } from '@sveltejs/kit';

	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import DatePicker from '$lib/components/DatePicker.svelte';

	import * as Card from '$lib/components/ui/card/index.js';
	import { Loader, Pen, X, Trash } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import { schema } from './schema.js';
	import { superForm } from 'sveltekit-superforms/client';
	import Errors from '$lib/components/Errors.svelte';
	import SelectComp from '$lib/components/SelectComp.svelte';
	import FileUpload from '$lib/components/FileUpload.svelte';
	import DialogComp from '$lib/components/DialogComp.svelte';
	import RichTextEditor from '$lib/components/RichTextEditor.svelte';
	import { goto } from '$app/navigation';

	let { data } = $props();

	import { enhance as deleteEnhance } from '$app/forms';

	const { form, errors, enhance, delayed, capture, restore, allErrors } = superForm(data.form, {
		resetForm: false,
		validators: zod4Client(schema)
	});

	export const snapshot: Snapshot = { capture, restore };

	$form.title = data.blog?.title;
	$form.titleAmharic = data.blog?.titleAmharic;
	$form.summary = data.blog?.summary;
	$form.summaryAmharic = data.blog?.summaryAmharic;
	$form.content = data.blog?.content;
	$form.contentAmharic = data.blog?.contentAmharic;
	$form.category = data.blog?.categoryId;

	import * as Dialog from '$lib/components/ui/dialog/index.js';
	let deleting = $state(false);
</script>

<svelte:head>
	<title>Edit {data.blog.title}</title>
</svelte:head>

{#snippet fe(
	label = '',
	name = '',
	type = '',
	placeholder = '',
	required = false,
	min = '',

	max = ''
)}
	<div class="flex w-full flex-col justify-start gap-2">
		<Label for={name}>{label}</Label>
		<Input
			{type}
			{name}
			{placeholder}
			{required}
			{min}
			{max}
			bind:value={$form[name]}
			aria-invalid={$errors[name] ? 'true' : undefined}
		/>
		{#if $errors[name]}
			<span class="text-red-500">{$errors[name]}</span>
		{/if}
	</div>
{/snippet}

{#snippet date(name, title)}
	<Label for={name} class="capitalize">{title}</Label>

	<DatePicker bind:data={$form[name]} oldDays={true} />
	<input type="hidden" {name} bind:value={$form[name]} />
	{#if $errors[name]}<span class="text-red-500">{$errors[name]}</span>{/if}
{/snippet}

{#snippet textarea(label = '', name = '', placeholder = '', required = false, rows = 5)}
	<div class="flex w-full flex-col justify-start gap-2">
		<Label for="reason">{label}</Label>

		<Textarea
			{name}
			{placeholder}
			{required}
			{rows}
			bind:value={$form[name]}
			aria-invalid={$errors[name] ? 'true' : undefined}
		/>

		{#if $errors[name]}<span class="text-red-500">{$errors[name]}</span>{/if}
	</div>
{/snippet}

{#snippet selects(name = '', items = [{ value: '', name: '' }])}
	<div class="flex w-full flex-col justify-start gap-2">
		<Label for={name} class="capitalize">{name.replace(/([a-z])([A-Z])/g, '$1 $2')}:</Label>

		<SelectComp {name} bind:value={$form[name]} {items} />
		{#if $errors[name]}<span class="text-red-500">{$errors[name]}</span>{/if}
	</div>
{/snippet}

<DialogComp title="Delete Article" variant="destructive">
	Are you sure you want to delete, this action is not reversable?

	<form
		action="?/delete"
		method="post"
		use:deleteEnhance={() => {
			deleting = true; // 1. start spinner

			return async ({ result, update }) => {
				await update(); // 2. apply action result to page
				deleting = false; // 3. stop spinner

				if (result.type === 'success') {
					await goto('/dashboard/news'); // 4. navigate on success
				}
			};
		}}
		class="flex flex-row justify-between"
	>
		<Button type="submit" variant="destructive" size="sm" class="border-0">
			<Trash /> Delete {data.blog.title}
		</Button>
		<Dialog.Close type="button">
			<Button type="button" size="sm" class="border-0"><X />Close</Button>
		</Dialog.Close>
	</form>
</DialogComp>

<Card.Root class="flex w-full mt-4 flex-col gap-4 lg:w-xl">
	<Card.Header>
		<Card.Title class="text-2xl">Edit {data.blog.title}</Card.Title>
	</Card.Header>
	<Card.Content>
		<form
			use:enhance
			action="?/editNews"
			id="main"
			class="flex flex-col gap-4"
			method="post"
			enctype="multipart/form-data"
		>
			<Errors allErrors={$allErrors} />

			{@render fe('Title', 'title', 'text', 'Enter the Title of the News', true)}
			{@render fe(
				'Title in Amharic',
				'titleAmharic',
				'text',
				'Enter the Title of the News in Amharic',
				true
			)}

			{@render selects('category', data?.categories)}

			{@render textarea('Summary', 'summary', 'Enter the summary of the news', true, 5)}
			{@render textarea(
				'Summary Amharic',
				'summaryAmharic',
				'Enter the summary of the news in Amharic',
				true,
				5
			)}

			{@render fe('Content', 'content', 'hidden', '', true)}
			<RichTextEditor
				bind:value={$form.content}
				placeholder="Enter the whole content of the news"
			/>

			{@render fe('Content in Amharic', 'contentAmharic', 'hidden', '', true)}
			<RichTextEditor
				bind:value={$form.contentAmharic}
				placeholder="Enter the whole content of the news in Amharic"
			/>

			<input type="hidden" bind:value={$form.edit} name="edit" />

			{#if $form.edit}
				<FileUpload name="featuredImage" {form} {errors} title="Upload the new image" />
				<Button onclick={() => ($form.edit = false)}><X /></Button>
			{:else}
				<Button onclick={() => ($form.edit = true)}><Pen /> Change Image</Button>
				<img src="/files/{data.blog.featuredImage}" alt={data.blog.title} />
			{/if}
			{@render selects('isPublished', [
				{
					value: true,
					name: 'Publish'
				},
				{
					value: false,
					name: "Don't Publish"
				}
			])}

			<Button type="submit" class="mt-4" form="main">
				{#if $delayed}
					<Loader class="animate-spin" />
					Saving Edited Article
				{:else}
					<Pen class="h-4 w-4" />
					Save Edited Article
				{/if}
			</Button>
		</form>
	</Card.Content>
</Card.Root>
