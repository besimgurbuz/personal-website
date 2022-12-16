<script lang="ts">
	import Skeleton from '../Skeleton.svelte';
</script>

<div class="card project-skeleton">
	<Skeleton width="40%" height="18px" />
	<div class="description">
		<Skeleton width="60%" height="18px" />
		<Skeleton width="80%" height="18px" />
	</div>
	<div class="bottom">
		<Skeleton width="20%" height="18px" />
		<div class="counts">
			<Skeleton width="50%" height="18px" />
			<Skeleton width="50%" height="18px" />
		</div>
	</div>
</div>

<style>
	.project-skeleton {
		display: flex;
		flex-direction: column;
		grid-gap: 10px;
	}

	.description {
		display: flex;
		flex-direction: column;
		grid-gap: 8px;
	}

	.bottom {
		margin-top: auto;
		display: flex;
		justify-content: space-between;
	}

	.counts {
		width: 20%;
		display: flex;
		grid-gap: 8px;
	}
</style>
