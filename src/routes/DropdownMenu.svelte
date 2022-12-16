<script lang="ts">
	import { page } from '$app/stores';
	import { clickOutside } from '$lib/actions/click-outside';
	import MenuIcon from '$lib/icons/MenuIcon.svelte';
	import { slide } from 'svelte/transition';
	import { routes } from './store';
	import ThemeSwitcher from './ThemeSwitcher.svelte';

	$: activeRoute = $page.url.pathname;

	let opened = false;

	let button: HTMLButtonElement;
</script>

<div class="dropdown-menu">
	<button
		bind:this={button}
		class="dropdown-menu-button"
		on:click={() => (opened = !opened)}
		aria-label="Dropdown open/close button"
	>
		<MenuIcon switchToClose={opened} color="var(--app-text-color)" />
	</button>
	{#if opened}
		<div
			class="sidebar-menu"
			use:clickOutside={button}
			on:click_outside={() => (opened = false)}
			transition:slide={{ duration: 100 }}
		>
			{#each $routes as route}
				<a href={route.path} class:active={route.path === activeRoute} class="sidebar-menu-link">
					{route.label}
				</a>
			{/each}
			<div class="theme-switch">
				<ThemeSwitcher />
			</div>
		</div>
	{/if}
</div>

<style>
	.dropdown-menu {
		position: relative;
	}

	.dropdown-menu-button {
		background: transparent;
		border: none;
		cursor: pointer;
	}

	.sidebar-menu {
		position: relative;
		background-color: var(--app-color-2);
		border-radius: 5px;
		z-index: 9;
		width: 200px;
		position: absolute;
		top: 40px;
		right: 0;
		display: flex;
		flex-direction: column;
		grid-gap: 20px;
		padding: 18px;
	}

	.sidebar-menu-link {
		width: fit-content;
		color: var(--app-text-color);
	}

	.sidebar-menu-link.active {
		text-decoration: underline;
	}

	.theme-switch {
		position: absolute;
		bottom: 18px;
		right: 18px;
	}
</style>
