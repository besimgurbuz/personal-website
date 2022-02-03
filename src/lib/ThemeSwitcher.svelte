<script lang="ts">
	import { theme } from './store';

	$: isLightTheme = $theme === 'light';
	$: iconSource = `lamp_${isLightTheme ? 'opened' : 'closed'}.svg`;
</script>

<button on:click={() => theme.set(isLightTheme ? 'dark' : 'light')}>
	<img src={iconSource} alt="Theme switcher" />
</button>

<style lang="scss">
	button {
		cursor: pointer;
		padding: 2px;
		border: none;
		padding: 0;
		background-color: transparent;

		img {
			transition: 30000ms;
		}
	}
</style>
