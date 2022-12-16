<script>
	export let width = '100%';
	export let height = '25px';
	export let borderRadius = '4px';
	export let animationLength = '1.2s';
</script>

<div
	class="skeleton"
	style="height: {height}; width: {width}; border-radius: {borderRadius}; --animationLength: {animationLength}"
/>

<style>
	.skeleton {
		background-color: var(--app-color-2);
		background-image: linear-gradient(
			90deg,
			var(--app-color-2),
			var(--app-color-3),
			var(--app-color-2)
		);
		background-size: 200px 100%;
		background-repeat: no-repeat;
		display: inline-block;
		width: 100%;
		animation: loading-animation var(--animationLength) ease-in-out infinite;
	}
	@keyframes loading-animation {
		0% {
			background-position: -200px 0;
		}
		100% {
			background-position: calc(200px + 100%) 0;
		}
	}
</style>
