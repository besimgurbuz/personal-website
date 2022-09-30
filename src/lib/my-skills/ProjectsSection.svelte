<script lang="ts">
	import type { GithubRepository } from '$lib/models/github-repository';
	import ProjectCard from './ProjectCard.svelte';
	import ProjectSkeleton from './ProjectSkeleton.svelte';

	async function getRepositories(): Promise<GithubRepository[]> {
		const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/github`);

		if (response.ok) {
			return await response.json();
		} else {
			throw new Error("Couldn't fetched projects.");
		}
	}

	const promise = getRepositories();
</script>

<div class="projects">
	{#await promise}
		<ProjectSkeleton />
		<ProjectSkeleton />
		<ProjectSkeleton />
		<ProjectSkeleton />
	{:then repos}
		{#each repos as repo}
			<ProjectCard
				title={repo.name}
				description={repo.description}
				language={repo.language}
				forksCount={repo.forks_count}
				starsCount={repo.stargazers_count}
				url={repo.html_url}
			/>
		{/each}
		{:catch}
		<p>An error occurred while trying to fetch my projects. Please try again later.</p>
	{/await}
</div>

<style lang="scss">
	.projects {
		display: flex;
		flex-wrap: wrap;
		grid-gap: 20px 50px;
	}
</style>
