<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import '../app.css';
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

<Header />
<main>
	<slot />
</main>
<Footer />
