<script>
	import { page } from '$app/stores';
	// we don't want to use <svelte:window bind:online> here, because we only care about the online
	// state when the page first loads
	let online = typeof navigator !== 'undefined' ? navigator.onLine : true;
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<div class="error-container">
	{#if $page.status === 404}
		<h1>404</h1>
		<h2><span class="not-found-route">{$page.url.pathname}</span> not found!</h2>
	{:else}
		<h2>It looks like you're offline</h2>

		<p>Come back later once you've found the internet.</p>
	{/if}
</div>

<style>
	.error-container {
		display: flex;
		grid-gap: 2em;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		min-height: 300px;
	}

	h1 {
		font-size: 56px;
	}

	.not-found-route {
		border: 1px solid var(--app-color-2);
		background-color: var(--app-color-3);
		padding: 3px 6px;
		border-radius: 5px;
	}
</style>
