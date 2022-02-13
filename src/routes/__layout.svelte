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
		--app-color-1: #131929;
		--app-color-2: #171d2e;
		--app-color-3: #2a3144;
		--app-primary-color: #ed5639;
		--app-text-color: #ffffff;
		--app-link-color: #58a6ff;
		--app-font-family: 'Syne', sans-serif;

		&.light {
			--app-background-color: #ffffff;
			--app-color-1: #f1f1f1;
			--app-color-2: #131929;
			--app-color-3: #131929;
			--app-primary-color: #f07e40;
			--app-text-color: #231d43;
			--app-link-color: #0969da;
		}

		transition: background 400ms;
		margin: 0;
		background-color: var(--app-background-color);
		font-family: var(--app-font-family);
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
		padding: 0 16%;

		@media (max-width: 1090px) {
			padding: 0 100px;
		}

		@media (max-width: 880px) {
			padding: 0 23px;
		}

		@media (max-width: 345px) {
			padding: 0 8px;
		}
	}
</style>
