<script lang="ts">
	import type { RecentActivityResponse } from '$lib/models/recent-activity';
	import LatelyIcon from '../icons/LatelyIcon.svelte';
	import ActivityBadge from './ActivityBadge.svelte';
	import ActivitySkeleton from './ActivitySkeleton.svelte';

	async function getRecentActivity(): Promise<RecentActivityResponse> {
		const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/recent`);
		const body = await response.json();

		if (response.ok) {
			return body;
		} else {
			throw new Error("Couldn't fetched recent activity.");
		}
	}

	const promise = getRecentActivity();
</script>

<div class="card lately-activity">
	<LatelyIcon color="var(--app-primary-color)" />
	{#await promise}
		<ActivitySkeleton />
		<ActivitySkeleton />
	{:then recentActivity}
		<ActivityBadge
			imgSrc={recentActivity.steam.iconUrl}
			name={recentActivity.steam.gameName}
			type="playing"
		/>
		<ActivityBadge
			imgSrc={recentActivity.spotify.image.url}
			name={recentActivity.spotify.albumName}
			type="listening"
		/>
	{:catch}
		<p>An error occurred while trying to fetch my latest activity. Please try again later.</p>
	{/await}
</div>

<style lang="scss">
	.lately-activity {
		position: relative;
		display: flex;
		grid-gap: 1rem;
		justify-content: space-between;
		align-items: center;
		padding: 14px 18px;
		width: 300px;
		align-self: flex-end;

		@media (max-width: 500px) {
			width: 270px;
			grid-gap: 0.3rem;
		}
	}
</style>
