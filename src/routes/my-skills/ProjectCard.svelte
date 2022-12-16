<script lang="ts">
	import ForkIcon from '$lib/icons/ForkIcon.svelte';
	import StarIcon from '$lib/icons/StarIcon.svelte';
	import WipIcon from '$lib/icons/WipIcon.svelte';
	import type { Project } from '$lib/models/project';
	import { dateTimeFormat } from '../store';

	export let project: Project;
	$: topicsString = project.topics?.map((topic) => `#${topic}`).join(' ');
	$: createdAt = $dateTimeFormat.format(new Date(project.createdAt as string));
</script>

<div class="card project">
	<div class="project-head">
		<a
			href={project.url || project.sourceUrl}
			class="project-link project-header"
			target="_blank"
			rel="noreferrer"
		>
			{project.name}
		</a>
		{#if project.topics?.length}
			<p class="project-topics">
				{topicsString}
			</p>
		{/if}
		<p class="project-created-at">
			{createdAt}
		</p>
	</div>
	{#if project.description}
		<p class="project-description">{project.description}</p>
	{/if}
	<div class="project-bottom">
		<p class="project-language">
			{project.language}
		</p>
		<div class="counts">
			<span class="count">
				<StarIcon />
				{project.starCount}
			</span>
			<span class="count">
				<ForkIcon />
				{project.forkCount}
			</span>
		</div>
	</div>
	{#if project.inProgress}
		<WipIcon color="var(--app-primary-color)" />
	{/if}
</div>

<style>
	.project {
		display: flex;
		flex-direction: column;
		grid-gap: 1rem;
		position: relative;
	}

	.project-head {
		position: relative;
	}

	.project-created-at {
		position: absolute;
		top: 0;
		right: 0;
		color: #797979;
	}

	.project-header {
		font-size: large;
	}

	.project-topics {
		color: #797979;
		font-size: smaller;
	}

	.project-description {
		font-size: medium;
	}

	.project-bottom {
		display: flex;
		justify-content: space-between;
	}

	.project-language {
		font-size: smaller;
	}
</style>
