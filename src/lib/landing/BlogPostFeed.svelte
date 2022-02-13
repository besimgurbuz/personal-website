<script lang="ts">
	import type { MediumFeed } from '$lib/models/medium-feed';
	import BlogPostSkeleton from './BlogPostSkeleton.svelte';
	import Post from './Post.svelte';

	async function getBlogPostFeed(): Promise<MediumFeed> {
		const response = await fetch('http://localhost:8080/api/v1/blog');

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
