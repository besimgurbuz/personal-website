<script lang="ts">
	import type { BlogPost } from '$lib/models/blog-post';
	import Post from './Post.svelte';

	export let posts: BlogPost[];
</script>

<div class="blog-posts">
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
</div>

<style>
	.blog-posts {
		display: flex;
		flex-direction: column;
		grid-gap: 20px;
	}
</style>
