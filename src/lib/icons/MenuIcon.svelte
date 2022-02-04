<script lang="ts">
	export let color: string;
	export let switchToClose: boolean = false;

	const width: number = 24;
</script>

<svg {width} height="24" viewBox="0 0 24 11" fill="none" xmlns="http://www.w3.org/2000/svg">
	<!-- <rect x="1" width="24" height="2" rx="1" transform="rotate(30 1 0)" fill={color} /> -->
	<rect
		{width}
		x={switchToClose ? 1 : null}
		transform={switchToClose ? 'rotate(30 1 0)' : null}
		fill={color}
		height="2"
		rx="1"
	/>
	<rect
		y={switchToClose ? 12 : 13}
		transform={switchToClose ? 'rotate(-30 0 12)' : null}
		{width}
		height="2"
		rx="1"
		fill={color}
	/>
	<rect class:hidden={switchToClose} y="6" width={width / 2} height="2" rx="1" fill={color} />
</svg>

<style lang="scss">
	.hidden {
		display: none;
	}

	svg {
		rect {
			transition: transform 200ms;
		}
	}
</style>
