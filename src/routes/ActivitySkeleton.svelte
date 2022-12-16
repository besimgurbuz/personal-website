<script>
	import Skeleton from './Skeleton.svelte';
</script>

<div class="activity-skeleton">
	<Skeleton width="42px" height="42px" borderRadius="10%" />
	<div class="activity-skeleton-texts">
		<Skeleton width="46px" height="17px" />
		<Skeleton width="74px" height="17px" />
	</div>
</div>

<style>
	.activity-skeleton {
		display: flex;
		grid-gap: 8px;
	}

	.activity-skeleton-texts {
		display: flex;
		flex-direction: column;
		grid-gap: 5px;
	}
</style>
