<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import type { Snapshot } from '@sveltejs/kit';

	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import DatePicker from '$lib/components/DatePicker.svelte';

	import * as Card from '$lib/components/ui/card/index.js';
	import { Plus, Loader } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import { schema } from './schema';
	import { superForm } from 'sveltekit-superforms/client';
	import Errors from '$lib/components/Errors.svelte';
	import SelectComp from '$lib/components/SelectComp.svelte';
	import FileUpload from '$lib/components/FileUpload.svelte';
	import DialogComp from '$lib/components/DialogComp.svelte';
	import Category from './category.svelte';
	import RichTextEditor from '$lib/components/RichTextEditor.svelte';

	let { data } = $props();

	const { form, errors, enhance, delayed, capture, restore, allErrors } = superForm(data.form, {
		taintedMessage: () => {
			return new Promise((resolve) => {
				resolve(window.confirm('Do you want to leave?\nChanges you made may not be saved.'));
			});
		},

		validators: zod4Client(schema)
	});

	export const snapshot: Snapshot = { capture, restore };
</script>

<svelte:head>
	<title>Add News</title>
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

{#snippet selects(name = '', items)}
	<div class="flex w-full flex-col justify-start gap-2">
		<Label for={name} class="capitalize">{name.replace(/([a-z])([A-Z])/g, '$1 $2')}:</Label>

		<SelectComp {name} bind:value={$form[name]} {items} />
		{#if $errors[name]}<span class="text-red-500">{$errors[name]}</span>{/if}
	</div>
{/snippet}

<DialogComp title="+ Add New Category">
	<Category data={data.catForm} />
</DialogComp>

<Card.Root class="flex w-full mt-4 flex-col gap-4 lg:w-xl">
	<Card.Header>
		<Card.Title class="text-2xl">Add a News Article</Card.Title>
	</Card.Header>
	<Card.Content>
		<form
			use:enhance
			action="?/addNews"
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
			{@render fe('Content Amharic', 'contentAmharic', 'hidden', '', true)}

			<RichTextEditor
				bind:value={$form.contentAmharic}
				placeholder="Enter the whole content of the news in Amharic"
			/>
			<FileUpload name="featuredImage" {form} {errors} />
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
					Adding Article
				{:else}
					<Plus class="h-4 w-4" />
					Add Article
				{/if}
			</Button>
		</form>
	</Card.Content>
</Card.Root>
