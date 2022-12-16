<script lang="ts">
	import type { Project } from '$lib/models/project';
	import ProjectCard from './ProjectCard.svelte';
	import ProjectSkeleton from './ProjectSkeleton.svelte';

	export let projectsPromise: Promise<Project[]>;
</script>

<div class="project-list">
	{#await projectsPromise}
		<ProjectSkeleton />
		<ProjectSkeleton />
		<ProjectSkeleton />
	{:then projects}
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	{:catch error}
		<div>{error}</div>
	{/await}
</div>

<style>
	.project-list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		grid-gap: 1rem;
	}
</style>
