<script lang="ts">
	import LatelyIcon from '$lib/icons/LatelyIcon.svelte';
	import type { RecentActivity } from '$lib/models/recent-activity';
	import ActivityBadge from './ActivityBadge.svelte';
	import ActivitySkeleton from './ActivitySkeleton.svelte';

	export let recentActivitiesPromise: Promise<RecentActivity>;
</script>

<div class="card lately-activity">
	<LatelyIcon color="var(--app-primary-color)" />
	{#await recentActivitiesPromise}
		<ActivitySkeleton />
		<ActivitySkeleton />
	{:then recentActivity}
		{#if recentActivity.steam}
			<ActivityBadge
				imgSrc={recentActivity.steam?.iconUrl}
				name={recentActivity.steam?.gameName}
				type="playing"
				link={recentActivity.steam?.storeUrl}
			/>
		{/if}
		{#if recentActivity.spotify}
			<ActivityBadge
				imgSrc={recentActivity.spotify?.image.url}
				name={recentActivity.spotify?.albumName}
				type="listening"
				link={recentActivity.spotify?.url}
			/>
		{/if}
		{#if !recentActivity.steam && !recentActivity.spotify}
			<p>It seems I haven't been listening to music or playing video games lately.</p>
		{/if}
	{:catch}
		<p>An error occurred while trying to fetch my latest activity. Please try again later.</p>
	{/await}
</div>

<style>
	.lately-activity {
		position: relative;
		display: flex;
		grid-gap: 1rem;
		justify-content: space-between;
		align-items: center;
		padding: 14px 18px;
		align-self: flex-end;
	}

	@media (max-width: 500px) {
		.lately-activity {
			grid-gap: 0.3rem;
		}
	}
</style>
