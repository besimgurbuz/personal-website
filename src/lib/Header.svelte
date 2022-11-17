<script lang="ts">
	import { page } from '$app/stores';
	import DropdownMenu from './DropdownMenu.svelte';
	import { routes } from './store';
	import ThemeSwitcher from './ThemeSwitcher.svelte';

	$: activeRoute = $page.url.pathname;
</script>

<nav>
	<div class="main-header fade-in">
		<a href="/">Besim Gürbüz</a>
	</div>
	<div class="right-section">
		<div class="routes">
			{#each $routes as route}
				<a href={route.path} class:active={route.path === activeRoute} class="fade-in"
					>{route.label}</a
				>
			{/each}
			<div class="fade-in">
				<ThemeSwitcher />
			</div>
		</div>
		<div class="dropdown">
			<DropdownMenu />
		</div>
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

			.routes {
				align-self: center;
				display: none;
				grid-gap: 29px;

				@media (min-width: 500px) {
					display: flex;
				}
			}

			.dropdown {
				display: none;

				@media (max-width: 499px) {
					display: flex;
				}
			}
		}
	}
</style>
