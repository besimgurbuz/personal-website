<script lang="ts">
	import type { MediumFeed } from '$lib/models/medium-feed';
	import BlogPostSkeleton from './BlogPostSkeleton.svelte';
	import Post from './Post.svelte';

	async function getBlogPostFeed(): Promise<MediumFeed> {
		const response = await fetch('https://besimgurbuz-dev-be.herokuapp.com/api/v1/blog');

		if (response.ok) {
			return await response.json();
		} else {
			throw new Error("Couldn't fetched blog post feed.");
		}
	}

	const promise = getBlogPostFeed();
</script>

<div class="blog-posts">
	{#await promise}
		<div class="card">
			<BlogPostSkeleton />
		</div>
		<div class="card">
			<BlogPostSkeleton />
		</div>
		<div class="card">
			<BlogPostSkeleton />
		</div>
		<div class="card">
			<BlogPostSkeleton />
		</div>
	{:then feed}
		{#if feed.items.length === 0}
			<div class="card">
				<p>There are no blog posts yet. I'm writing on great topics, try again later.</p>
			</div>
		{/if}
		{#each feed.items as item}
			<Post
				title={item.title}
				categories={item.categories}
				url={item.link}
				publishDate={item.pubDate}
			/>
		{/each}
	{:catch}
		<div class="card">
			<p>An error occurred while trying to fetch my latest blog posts. Please try again later</p>
		</div>
	{/await}
</div>

<style lang="scss">
	.blog-posts {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
