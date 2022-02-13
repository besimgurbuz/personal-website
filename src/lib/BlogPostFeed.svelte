<script lang="ts">
	import BlogPostSkeleton from './BlogPostSkeleton.svelte';
	import Post from './Post.svelte';

	async function getBlogPostFeed() {
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
		<div class="card post">
			<BlogPostSkeleton />
		</div>
		<div class="card post">
			<BlogPostSkeleton />
		</div>
		<div class="card post">
			<BlogPostSkeleton />
		</div>
		<div class="card post">
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
	{/await}
</div>

<style lang="scss">
	.blog-posts {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
