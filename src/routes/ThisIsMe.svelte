<script>
	import ThisIsMeArrow from '$lib/icons/ThisIsMeArrow.svelte';
	import thisIsMeSrc from '$lib/images/this_is_me.jpg';
</script>

<div class="this-is-me-container">
	<img width="312" height="330" src={thisIsMeSrc} alt="Besim Gürbüz's photograph" />
	<ThisIsMeArrow color="var(--app-primary-color)" />
</div>

<style>
	.this-is-me-container {
		display: flex;
		padding: 3rem;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.this-is-me-container img {
		object-fit: cover;
		border-radius: 13px;
		position: relative;
	}

	@media (max-width: 1250px) {
		.this-is-me-container img {
			height: 280px;
		}
	}

	@media (max-width: 325px) {
		.this-is-me-container {
			padding: 3rem 3rem 3rem 0;
		}

		.this-is-me-container img {
			min-width: 0;
			width: 200px;
		}
	}
</style>
