<script lang="ts">
	import type { Tool } from '$lib/models/tool';
	import { scale } from 'svelte/transition';
	import Chip from '../Chip.svelte';
	import ToolCard from './ToolCard.svelte';

	export let tools: Tool[];

	$: toolTypes = new Set(['all', ...tools.flatMap((skill) => skill.types)]);
	$: filteredTools = tools.filter(
		(skill) => selectedType === 'all' || skill.types.includes(selectedType)
	);
	let selectedType: 'all' | string = 'all';
</script>

<div class="filterable-tools">
	<div class="chips">
		{#each Array.from(toolTypes) as type}
			<Chip label={type} on:click={() => (selectedType = type)} active={selectedType === type} />
		{/each}
	</div>
	<div class="tools">
		{#each filteredTools as skill}
			<div in:scale={{ duration: 100 }}>
				<ToolCard icon={skill.iconUrl} label={skill.label} inProgress={skill.inProgress} />
			</div>
		{/each}
	</div>
</div>

<style>
	.filterable-tools {
		display: flex;
		flex-direction: column;
		row-gap: 0.8em;
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;
		align-self: flex-end;
	}

	.tools {
		display: flex;
		flex-wrap: wrap;
		grid-gap: 20px 32px;
	}

	@media (max-width: 520px) {
		.tools {
			grid-gap: 15px;
		}
	}
</style>
