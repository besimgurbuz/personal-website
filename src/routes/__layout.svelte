<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import { theme } from '$lib/store';
	import '../app.css';

	$: light = $theme === 'light';
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Zeyada&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="app" class:light>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style lang="scss">
	.app {
		// variables
		--app-background-color: #0c101c;
		--app-primary-color: #ed5639;
		--app-text-color: #ffffff;
		--app-link-color: #58a6ff;
		--app-font-family: 'Syne', sans-serif;

		&.light {
			--app-background-color: #ffffff;
			--app-primary-color: #f07e40;
			--app-text-color: #231d43;
			--app-link-color: #0969da;
		}

		transition: background 400ms;
		margin: 0;
		background-color: var(--app-background-color);
		font-family: var(--app-font-family);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		padding: 0 16%;

		@media (max-width: 1090px) {
			padding: 0 100px;
		}
	}
</style>
