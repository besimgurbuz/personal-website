<script lang="ts">
	import ActivityBadge from './ActivityBadge.svelte';
	import ActivitySkeleton from './ActivitySkeleton.svelte';
	import LatelyIcon from './icons/LatelyIcon.svelte';

	async function getRecentActivity() {
		const response = await fetch('http://localhost:8080/api/v1/recent');
		const body = await response.json();

		if (response.ok) {
			return body;
		} else {
			throw new Error("Couldn't fetched recent activity.");
		}
	}

	const promise = getRecentActivity();
</script>

<div class="lately-activity">
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
	{/await}
</div>

<style lang="scss">
	.lately-activity {
		position: relative;
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		align-items: center;
		padding: 14px 18px;
		width: 300px;
		align-self: flex-end;
		background-color: var(--app-color-1);
		border-radius: 5px;
		color: var(--app-text-color);

		@media (max-width: 500px) {
			width: 270px;
			gap: 0.3rem;
		}
	}
</style>
