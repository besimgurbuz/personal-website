<script lang="ts">
	import angularIcon from '$lib/assets/angular-icon.png';
	import goIcon from '$lib/assets/go-icon.png';
	import javaIcon from '$lib/assets/java-icon.png';
	import javaScriptIcon from '$lib/assets/javascript-icon.png';
	import nodejsIcon from '$lib/assets/nodejs-icon.png';
	import postgresIcon from '$lib/assets/postgres-icon.png';
	import sassIcon from '$lib/assets/sass-icon.png';
	import springBootIcon from '$lib/assets/spring-boot-icon.png';
	import svelteIcon from '$lib/assets/svelte-icon.png';
	import typeScriptIcon from '$lib/assets/typescript-icon.png';
	import ToolCard from './ToolCard.svelte';

	const tools: { icon: string; label: string }[] = [
		{ icon: typeScriptIcon, label: 'TypeScript' },
		{ icon: javaScriptIcon, label: 'JavaScript' },
		{ icon: angularIcon, label: 'Angular' },
		{ icon: svelteIcon, label: 'Svelte' },
		{ icon: nodejsIcon, label: 'Node.js' },
		{ icon: sassIcon, label: 'Sass' },
		{ icon: javaIcon, label: 'Java' },
		{ icon: springBootIcon, label: 'Spring Boot' },
		{ icon: postgresIcon, label: 'PostgreSQL' },
		{ icon: goIcon, label: 'Go' }
	];
</script>

<div class="tools">
	{#each tools as tool}
		<ToolCard icon={tool.icon} label={tool.label} />
	{/each}
</div>

<style lang="scss">
	.tools {
		display: flex;
		flex-wrap: wrap;
		grid-gap: 20px 32px;

		@media (max-width: 520px) {
			grid-gap: 15px;
		}
	}
</style>
