<script lang="ts">
	import ForkIcon from '$lib/icons/ForkIcon.svelte';
	import StarIcon from '$lib/icons/StarIcon.svelte';

	export let title: string;
	export let description: string | null;
	export let url: string;
	export let language: string | null;
	export let starsCount: number;
	export let forksCount: number;
</script>

<div class="project card">
	<a href={url} target="_blank" class="project-title">
		{title}
	</a>
	{#if description}
		<div class="description">
			{description}
		</div>
	{/if}
	<div class="bottom">
		{#if language}
			{language}
		{/if}
		<div class="counts">
			<span class="count">
				<StarIcon />
				{starsCount}
			</span>
			<span class="count">
				<ForkIcon />
				{forksCount}
			</span>
		</div>
	</div>
</div>

<style lang="scss">
	.project {
		display: flex;
		flex-direction: column;
		width: 40%;
		grid-gap: 10px;
		height: 140px;

		@media (max-width: 675px) {
			width: 100%;
		}

		.bottom {
			margin-top: auto;
			display: flex;
			justify-content: space-between;

			.counts {
				font-size: 14px;
				display: flex;
				grid-gap: 8px;

				.count {
					display: flex;
					grid-gap: 2px;
				}
			}
		}
	}
</style>
