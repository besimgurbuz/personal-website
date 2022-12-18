<script lang="ts">
	import type { BlogPost } from '$lib/models/blog-post';
	import Post from './Post.svelte';
	import PostSkeleton from './PostSkeleton.svelte';

	export let postsPromise: Promise<BlogPost[]>;
</script>

<div class="blog-posts">
	{#await postsPromise}
		<div class="card">
			<PostSkeleton />
		</div>
		<div class="card">
			<PostSkeleton />
		</div>
		<div class="card">
			<PostSkeleton />
		</div>
	{:then posts}
		{#if posts.length === 0}
			<div class="card">
				<p>There are no blog posts yet. I'm writing on great topics, try again later.</p>
			</div>
		{/if}
		{#each posts as item}
			<Post
				title={item.title}
				categories={item.categories}
				url={item.link}
				publishDate={item.pubDate}
			/>
		{/each}
	{:catch error}
		<div class="card">
			<p>An error occurred while trying to fetch my latest blog posts. Please try again later</p>
		</div>
	{/await}
</div>

<style>
	.blog-posts {
		display: flex;
		flex-direction: column;
		grid-gap: 20px;
	}
</style>
