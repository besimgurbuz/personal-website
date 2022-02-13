<script>
	import Skeleton from './primitives/Skeleton.svelte';
</script>

<div class="activity-skeleton">
	<Skeleton width="42px" height="42px" borderRadius="50%" />
	<div class="activity-skeleton-texts">
		<Skeleton width="46px" height="17px" />
		<Skeleton width="74px" height="17px" />
	</div>
</div>

<style lang="scss">
	.activity-skeleton {
		display: flex;
		gap: 8px;

		.activity-skeleton-texts {
			display: flex;
			flex-direction: column;
			gap: 5px;
		}
	}
</style>
