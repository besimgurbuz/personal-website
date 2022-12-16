<script lang="ts">
	import type { Tool } from '$lib/models/tool';
	import SkillSkeleton from './SkillSkeleton.svelte';
	import ToolList from './ToolList.svelte';

	export let toolsPromise: Promise<Tool[]>;
</script>

{#await toolsPromise}
	<div class="skills-skeleton">
		<SkillSkeleton />
		<SkillSkeleton />
		<SkillSkeleton />
		<SkillSkeleton />
		<SkillSkeleton />
	</div>
{:then tools}
	<ToolList {tools} />
{/await}

<style>
	.skills-skeleton {
		display: flex;
		flex-wrap: wrap;
		grid-gap: 20px 32px;
	}

	@media (max-width: 520px) {
		.skills-skeleton {
			grid-gap: 15px;
		}
	}
</style>
