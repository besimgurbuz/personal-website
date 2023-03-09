<script lang="ts">
	import Siemens from '$lib/icons/Siemens.svelte';
	import type { BlogPost } from '$lib/models/blog-post';
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

	const getPosts = async (): Promise<BlogPost[]> => {
		const res = await fetch('/api/posts');
		const body = await res.json();

		return body;
	};

	const recentActivitiesPromise = getRecentActivities();
	const postsPromise = getPosts();
</script>

<svelte:head>
	<title>Besim Gürbüz</title>

	<meta name="twitter:title" content="Besim Gürbüz" />
	<meta name="twitter:description" content="Personal website of Besim Gürbüz" />
	<meta name="Description" content="Personal website of Besim Gürbüz" />
</svelte:head>

<section>
	<div class="greeting-container fade-out">
		<ThisIsMe />
		<div class="greeting-inner-container">
			<div class="texts">
				<p class="greeting-text">
					Hello World. I'm Besim!<br /><br />
					I'm a Software Engineer who likes to listen to classical music, play video games, do some amateur
					UI/UX stuff and drink Turkish coffee (a lot..)
				</p>
				<p class="greeting-text">
					I like to create well-thought, tested, and continuously evolved products.
				</p>
				<p class="job-text">
					Currently crafting software products for <a
						href="https://siemens.com"
						target="_blank"
						rel="noreferrer"
						class="company-link"><Siemens /></a
					>
				</p>
			</div>
			<div class="activities">
				<RecentActivities {recentActivitiesPromise} />
			</div>
		</div>
	</div>
	<div class="posts fade-out">
		<h2 class="posts-header">My latest blog posts</h2>
		<PostList {postsPromise} />
	</div>
</section>

<style>
	.greeting-container {
		margin: 110px 40px 0 40px;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	}

	.greeting-inner-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
	}

	.greeting-inner-container .texts {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 1rem;
	}

	.greeting-text,
	.job-text {
		font-size: 20px;
		max-width: 500px;
	}

	.job-text {
		width: 100%;
	}

	.company-link {
		width: 100px;
	}

	.activities {
		margin-top: 32px;
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

	@media (max-width: 1080px) {
		.greeting-container {
			margin: 80px 10px 0 10px;
		}
	}

	@media (max-width: 485px) {
		.greeting-container {
			margin: 60px 0 0 0px;
		}
	}

	@media (max-width: 325px) {
		.greeting-text {
			font-size: 16px;
		}
	}
</style>
