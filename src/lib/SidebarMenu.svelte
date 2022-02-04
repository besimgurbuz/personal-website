<script lang="ts">
	import { slide } from 'svelte/transition';
	import MenuIcon from './icons/MenuIcon.svelte';

	let opened = false;
</script>

<div class="dropdown-menu">
	<button class="dropdown-menu-button" on:click={() => (opened = !opened)}>
		<MenuIcon switchToClose={opened} color="var(--app-text-color)" />
	</button>
	{#if opened}
		<div class="sidebar-menu" transition:slide={{ duration: 200 }}>
			<h1>Sidebar</h1>
		</div>
	{/if}
</div>

<style lang="scss">
	.dropdown-menu {
		position: relative;

		.dropdown-menu-button {
			background: transparent;
			border: none;
		}

		.sidebar-menu {
			z-index: 9;
			height: fit-content;
			width: 200px;
			position: absolute;
			top: 30px;
			right: 0;
			border: 1px solid var(--app-primary-color);
		}
	}
</style>
