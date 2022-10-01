<script lang="ts">
	import WipIcon from '$lib/icons/WipIcon.svelte';

	export let icon: string;
	export let label: string;
	export let inProgress = false;
</script>

<span class="card tool">
	<img class="icon" src={icon} alt="{label} icon" />
	<p>{label}</p>
	{#if inProgress}
		<WipIcon color="var(--app-primary-color)" />
	{/if}
</span>

<style lang="scss">
	.tool {
		display: flex;
		grid-gap: 8px;
		height: 42px;
		align-items: center;
		position: relative;

		.icon {
			width: 42px;
			height: 42px;

			@media (max-width: 520px) {
				width: 30px;
				height: 30px;
			}
		}

		p {
			margin: 0;

			@media (max-width: 520px) {
				font-size: 14px;
			}
		}
	}
</style>
