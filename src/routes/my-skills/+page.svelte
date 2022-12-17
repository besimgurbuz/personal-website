<script lang="ts">
	import type { Project } from '$lib/models/project';
	import type { Tool } from '$lib/models/tool';
	import ProjectList from './ProjectList.svelte';
	import ToolsSection from './ToolsSection.svelte';

	const fetchTools = async () => {
		const res = await fetch('/api/tools');
		const body = (await res.json()) as Tool[];

		return body;
	};

	const fetchProjects = async () => {
		const res = await fetch('/api/projects');
		const body = (await res.json()) as Project[];

		return body;
	};

	const toolsPromise = fetchTools();
	const projectsPromise = fetchProjects();
</script>

<svelte:head>
	<title>Besim Gürbüz • My Skills</title>

	<meta name="twitter:title" content="Besim Gürbüz" />
	<meta name="twitter:description" content="Besim Gürbüz • My Skills" />
	<meta name="Description" content="Besim Gürbüz • My Skills" />
</svelte:head>

<div class="my-skills-container">
	<p class="passion-text fade-out">
		I enjoy creating software products that are well designed with great performance and user
		experience. I love learning and teaching.
	</p>
	<div class="tools">
		<h2 class="header">My Tools</h2>
		<ToolsSection {toolsPromise} />
	</div>
	<div class="projects">
		<h2 class="header">My Projects</h2>
		<a
			href="https://github.com/besimgurbuz?tab=repositories"
			target="_blank"
			rel="noreferrer"
			class="projects-more-link"
			>See more
		</a>
		<ProjectList {projectsPromise} />
	</div>
</div>

<style>
	.my-skills-container {
		margin-top: 110px;
	}

	.passion-text {
		width: 450px;
		font-size: 18px;
		margin-bottom: 48px;
	}

	.tools {
		display: flex;
		flex-direction: column;
		grid-gap: 1rem;
	}

	.projects {
		margin-top: 90px;
		display: flex;
		flex-direction: column;
		grid-gap: 1rem;
		position: relative;
	}

	.projects-more-link {
		position: absolute;
		right: 0;
		display: flex;
		align-items: center;
	}

	.header {
		font-size: 20px;
	}

	@media (max-width: 480px) {
		.passion-text {
			width: 300px;
		}
	}
</style>
