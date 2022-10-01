<script>
	import ProjectsSection from '$lib/my-skills/ProjectsSection.svelte';
	import Skills from '$lib/my-skills/Skills.svelte';
</script>

<svelte:head>
	<title>Besim Gürbüz - My Skills</title>
</svelte:head>

<div class="my-skills-wrapper">
	<p class="passion-text">
		I enjoy creating software products that are well designed with great performance and user
		experience. I like learning new things. Here are my favorite tools in my toolbox;
	</p>
	<Skills />
	<div class="my-projects">
		<h2 class="my-projects-header">My projects</h2>
		<ProjectsSection />
	</div>
</div>

<style lang="scss">
	.my-skills-wrapper {
		margin-top: 110px;

		.passion-text {
			width: 450px;
			font-size: 18px;
			margin-bottom: 48px;

			@media (max-width: 480px) {
				width: 300px;
			}
		}

		.my-projects {
			margin-top: 90px;

			.my-projects-header {
				font-size: 20px;
			}
		}
	}
</style>
