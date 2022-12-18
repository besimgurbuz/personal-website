<script lang="ts">
	import Skeleton from './Skeleton.svelte';
</script>

<div class="blog-post-skeleton">
	<div class="header">
		<Skeleton width="40%" height="18px" />
		<Skeleton width="12%" height="18px" />
	</div>
	<Skeleton width="80%" height="18px" />
</div>

<style>
	.blog-post-skeleton {
		display: flex;
		flex-direction: column;
		justify-content: center;
		grid-gap: 4px;
	}
	.header {
		display: flex;
		justify-content: space-between;
	}
</style>
