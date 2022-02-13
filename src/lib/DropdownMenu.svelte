<script lang="ts">
	import { page } from '$app/stores';
	import ThemeSwitcher from '$lib/ThemeSwitcher.svelte';
	import { slide } from 'svelte/transition';
	import { clickOutside } from './clickOutside';
	import MenuIcon from './icons/MenuIcon.svelte';
	import { routes } from './store';

	$: activeRoute = $page.url.pathname;

	let opened = false;

	let button: HTMLButtonElement;
</script>

<div class="dropdown-menu">
	<button bind:this={button} class="dropdown-menu-button" on:click={() => (opened = !opened)}>
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
				<a href={route.path} class:active={route.path === activeRoute}>
					{route.label}
				</a>
			{/each}
			<div class="theme-switch">
				<ThemeSwitcher />
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.dropdown-menu {
		position: relative;

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
			gap: 20px;
			padding: 18px;

			a {
				width: fit-content;
				color: var(--app-text-color);

				&.active {
					text-decoration: underline;
				}
			}

			.theme-switch {
				position: absolute;
				bottom: 18px;
				right: 18px;
			}
		}
	}
</style>
