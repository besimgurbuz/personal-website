<script>
	import BlogPostFeed from '$lib/landing/BlogPostFeed.svelte';
	import Image from '$lib/landing/Image.svelte';
	import RecentActivity from '$lib/landing/RecentActivity.svelte';
</script>

<svelte:head>
	<title>Besim Gürbüz</title>
</svelte:head>

<div class="welcome-area fade-out">
	<Image />
	<div class="details">
		<p class="welcoming-text">
			Hello World. I'm Besim!<br /><br />
			I'm a Software Engineer who likes to listen to classical music, play video games, do some amateur
			UI/UX stuff and drink Turkish coffee (a lot..)
		</p>
		<p class="welcoming-text">
			I like to create well-thought, tested, and continuously evolved products.
		</p>
		<div class="activities">
			<RecentActivity />
		</div>
	</div>
</div>
<div class="latest-blog-posts fade-out">
	<h2>My latest blog posts</h2>
	<BlogPostFeed />
</div>

<style lang="scss">
	.welcome-area {
		margin: 110px 40px 0 40px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));

		.details {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			grid-gap: 1rem;

			.welcoming-text {
				margin: 0;
				font-size: 20px;
				max-width: 500px;

				@media (max-width: 325px) {
					font-size: 16px;
				}
			}

			.activities {
				margin-top: 48px;
			}
		}

		@media (max-width: 1080px) {
			margin: 80px 10px 0 10px;
		}
	}
	.latest-blog-posts {
		display: flex;
		flex-direction: column;
		grid-gap: 20px;
		margin-top: 90px;

		h2 {
			margin: 0;
			font-size: 20px;
		}
	}
</style>
