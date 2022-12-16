<script lang="ts">
	import WipIcon from '$lib/icons/WipIcon.svelte';

	export let icon: string;
	export let label: string;
	export let inProgress = false;
</script>

<span class="card tool">
	<img class="tool-icon" src={icon} alt="{label} icon" />
	<p class="tool-label">{label}</p>
	{#if inProgress}
		<WipIcon color="var(--app-primary-color)" />
	{/if}
</span>

<style>
	.tool {
		display: flex;
		grid-gap: 8px;
		height: 42px;
		align-items: center;
		position: relative;
	}

	.tool-icon {
		width: 42px;
		height: 42px;
	}

	.tool-label {
		margin: 0;
	}

	@media (max-width: 520px) {
		.tool-icon {
			width: 30px;
			height: 30px;
		}

		.tool-label {
			font-size: 14px;
		}
	}
</style>
