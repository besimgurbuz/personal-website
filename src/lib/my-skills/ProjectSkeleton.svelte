<script lang="ts">
	import Skeleton from '$lib/primitives/Skeleton.svelte';
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

<style lang="scss">
	.project-skeleton {
		display: flex;
		flex-direction: column;
		gap: 10px;
		width: 425px;
		height: 140px;

		.description {
			display: flex;
			flex-direction: column;
			gap: 8px;
		}

		.bottom {
			margin-top: auto;
			display: flex;
			justify-content: space-between;

			.counts {
				width: 20%;
				display: flex;
				gap: 8px;
			}
		}
	}
</style>
