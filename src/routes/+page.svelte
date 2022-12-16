<script lang="ts">
	import { page } from '$app/stores';
	import type { RecentActivity } from '$lib/models/recent-activity';
	import PostList from './PostList.svelte';
	import RecentActivities from './RecentActivities.svelte';
	import ThisIsMe from './ThisIsMe.svelte';

	const getRecentActivities = async (): Promise<RecentActivity> => {
		const res = await fetch('/api/recent-activities');
		const body = (await res.json()) as RecentActivity;

		if (res.ok) {
			return body;
		} else {
			throw new Error("Couldn't fetched recent activitiy.");
		}
	};

	const recentActivitiesPromise = getRecentActivities();
</script>

<svelte:head>
	<title>Besim Gürbüz</title>
	<meta name="description" content="The personal website of Besim Gürbüz" />
</svelte:head>

<section>
	<div class="greeting-container fade-out">
		<ThisIsMe />
		<div class="greeting-inner-container">
			<p class="greeting-text">
				Hello World. I'm Besim!<br /><br />
				I'm a Software Engineer who likes to listen to classical music, play video games, do some amateur
				UI/UX stuff and drink Turkish coffee (a lot..)
			</p>
			<p class="greeting-text">
				I like to create well-thought, tested, and continuously evolved products.
			</p>
			<div class="activities">
				<RecentActivities {recentActivitiesPromise} />
			</div>
		</div>
	</div>
	<div class="posts fade-out">
		<h2 class="posts-header">My latest blog posts</h2>
		<PostList posts={$page.data.posts} />
	</div>
</section>

<style>
	.greeting-container {
		margin: 110px 40px 0 40px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
	}

	.greeting-inner-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		grid-gap: 1rem;
	}

	.greeting-text {
		font-size: 20px;
		max-width: 500px;
	}

	.activities {
		margin-top: 48px;
	}

	.posts {
		display: flex;
		flex-direction: column;
		grid-gap: 20px;
		margin-top: 90px;
	}

	.posts-header {
		font-size: 20px;
	}

	@media (max-width: 325px) {
		.greeting-text {
			font-size: 16px;
		}
	}

	@media (max-widht: 1080px) {
		.greeting-container {
			margin: 80px 10px 0 10px;
		}
	}
</style>
