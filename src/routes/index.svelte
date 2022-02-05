<script>
	import Image from '$lib/Image.svelte';
</script>

<svelte:head>
	<title>Besim Gürbüz</title>
</svelte:head>

<div class="welcome-area">
	<Image />
	<div class="details">
		<p class="welcoming-text">
			Hello World. I'm Besim!<br /><br />
			I'm a Software Engineer who likes to listen to classical music, play video games, do some amateur
			UI/UX stuff and drink Turkish coffee (a lot..)
		</p>
	</div>
</div>

<style lang="scss">
	.welcome-area {
		margin: 110px 40px 0 40px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		grid-template-rows: 340px;

		.details {
			display: flex;
			align-items: center;

			.welcoming-text {
				margin: 0;
				font-size: 20px;
				max-width: 500px;

				@media (max-width: 325px) {
					font-size: 16px;
				}
			}
		}

		@media (max-width: 1080px) {
			margin: 80px 10px 0 10px;
		}
	}
</style>
