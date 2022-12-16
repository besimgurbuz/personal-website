<script lang="ts">
	import { page } from '$app/stores';
	import DropdownMenu from './DropdownMenu.svelte';
	import { routes } from './store';
	import ThemeSwitcher from './ThemeSwitcher.svelte';

	$: activeRoute = $page.url.pathname;
</script>

<nav>
	<div class="main-header fade-in">
		<a href="/" class="header-link header-banner">Besim Gürbüz</a>
	</div>
	<div class="routes-container">
		<div class="routes">
			{#each $routes as route}
				<a
					href={route.path}
					class:active={route.path === activeRoute}
					class="header-link underline fade-in">{route.label}</a
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

<style>
	nav {
		display: flex;
		justify-content: space-between;
		padding-top: 26px;
	}

	.main-header {
		font-size: 28px;
	}

	.header-link {
		color: var(--app-text-color);
	}

	.routes-container {
		align-self: center;
		display: flex;
		grid-gap: 29px;
		font-size: 20px;
	}

	.routes {
		align-self: center;
		display: none;
		grid-gap: 29px;
	}

	.dropdown {
		display: none;
	}

	.underline:hover {
		text-decoration: underline;
	}

	.underline.active {
		text-decoration: underline;
	}

	@media (min-width: 500px) {
		.routes {
			display: flex;
		}
	}

	@media (max-width: 499px) {
		.dropdown {
			display: flex;
		}
	}

	@media (max-width: 325px) {
		.header-banner {
			font-size: 25px;
		}
	}
</style>
