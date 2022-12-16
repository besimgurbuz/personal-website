<script lang="ts">
	import closedLamp from '$lib/images/lamp_closed.svg';
	import openedLamp from '$lib/images/lamp_opened.svg';
	import { theme } from './store';

	$: isLightTheme = $theme === 'light';
	$: iconSource = isLightTheme ? openedLamp : closedLamp;
</script>

<button on:click={() => theme.set(isLightTheme ? 'dark' : 'light')}>
	<img src={iconSource} alt="Theme switcher" />
</button>

<style>
	button {
		display: flex;
		justify-content: flex-end;
		width: 28px;
		height: 28px;
		cursor: pointer;
		padding: 2px;
		border: none;
		padding: 0;
		background-color: transparent;
	}
	button > img {
		transition: 30000ms;
	}
</style>
