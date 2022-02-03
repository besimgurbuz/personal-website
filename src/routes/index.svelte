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
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 340px;

		.details {
			display: flex;
			align-items: center;

			.welcoming-text {
				margin: 0;
				font-size: 20px;
				max-width: 500px;
			}
		}
	}
</style>
