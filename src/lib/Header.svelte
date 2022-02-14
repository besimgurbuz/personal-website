<script lang="ts">
	import { page } from '$app/stores';
	import { onDestroy, onMount } from 'svelte';
	import DropdownMenu from './DropdownMenu.svelte';
	import { routes } from './store';
	import ThemeSwitcher from './ThemeSwitcher.svelte';

	let navbarElement: HTMLElement;
	let resizeObserver: ResizeObserver;
	let displayInDropdown = false;

	$: activeRoute = $page.url.pathname;

	onMount(() => {
		resizeObserver = new ResizeObserver(([resizeEntry]) => {
			const { contentRect } = resizeEntry;

			if (contentRect.width <= 480) {
				displayInDropdown = true;
			} else {
				displayInDropdown = false;
			}
		});
		resizeObserver.observe(navbarElement);
	});

	onDestroy(() => {
		resizeObserver?.disconnect();
	});
</script>

<nav bind:this={navbarElement}>
	<div class="main-header">
		<a href="/">Besim Gürbüz</a>
	</div>
	<div class="right-section">
		{#if !displayInDropdown}
			{#each $routes as route}
				<a href={route.path} class:active={route.path === activeRoute}>{route.label}</a>
			{/each}
			<ThemeSwitcher />
		{:else}
			<DropdownMenu />
		{/if}
	</div>
</nav>

<style lang="scss">
	nav {
		display: flex;
		justify-content: space-between;
		padding-top: 26px;

		.main-header {
			font-size: 28px;

			a {
				color: var(--app-text-color);
			}

			@media (max-width: 325px) {
				font-size: 25px;
			}
		}

		.right-section {
			align-self: center;
			display: flex;
			grid-gap: 29px;
			font-size: 20px;

			a {
				color: var(--app-text-color);

				&:hover {
					text-decoration: underline;
				}

				&.active {
					text-decoration: underline;
				}
			}
		}
	}
</style>
