<script lang="ts">
	import '$lib/fonts/syne-family.css';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import { theme } from './store';
	import './styles.css';

	$: light = $theme === 'light';

	const printLogMessage = () => {
		console.log('%cHello there!', "color: #ed5639; font-size: 2em;'");
		console.log('Welcome to my website!');
		console.log('If you are seeing this messages. You might also want to check out the code!');
		console.log('Here is the github link: https://github.com/besimgurbuz/personal-website');
		console.log('Have fun!');
	};

	printLogMessage();
</script>

<svelte:head>
	<meta name="theme-color" content={light ? '#ffffff' : '#0c101c'} />
</svelte:head>

<div class="app" class:light>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.app {
		--app-background-color: #0c101c;
		--app-color-1: #131929;
		--app-color-2: #1d2335;
		--app-color-3: #2a3144;
		--app-primary-color: #ed5639;
		--app-text-color: #ffffff;
		--app-link-color: #58a6ff;
		--app-font-family: 'Syne', sans-serif;

		transition: background 400ms;
		margin: 0;
		background-color: var(--app-background-color);
		font-family: var(--app-font-family);
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
		padding: 0 16%;
		color: var(--app-text-color);
	}

	.app.light {
		--app-background-color: #ffffff;
		--app-color-1: #f1f1f1;
		--app-color-2: #d8d2d2;
		--app-color-3: #ece6e6;
		--app-primary-color: #f07e40;
		--app-text-color: #231d43;
		--app-link-color: #0969da;
	}

	.app::selection {
		background-color: var(--app-primary-color);
	}

	@media (max-width: 1090px) {
		.app {
			padding: 0 100px;
		}
	}

	@media (max-width: 880px) {
		.app {
			padding: 0 23px;
		}
	}

	@media (max-width: 345px) {
		.app {
			padding: 0 8px;
		}
	}
</style>
