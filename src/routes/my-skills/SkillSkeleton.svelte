<script>
	import Skeleton from '../Skeleton.svelte';
</script>

<span class="card">
	<div class="skill-skeleton">
		<Skeleton width="42px" height="42px" borderRadius="5px" />
		<Skeleton width="75px" height="19px" />
	</div>
</span>

<style>
	.skill-skeleton {
		display: flex;
		grid-gap: 8px;
		height: 42px;
		align-items: center;
	}
</style>
