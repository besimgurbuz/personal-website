<script lang="ts">
	export let name: string;
	export let imgSrc: string;
	export let type: 'playing' | 'listening';
	export let link = '';

	$: activtyTitle = type === 'playing' ? 'Playing' : 'Listening';
</script>

<div class="activity-badge">
	<img class="activity-img" src={imgSrc} alt={`What I am currently ${type}.`} />
	<div class="activity-texts">
		<p class="activity-text">{activtyTitle}</p>
		{#if link !== ''}
			<a class="activity-link" href={link} title={name} target="_blank" rel="noreferrer">
				<p class="activity-text">{name}</p>
			</a>
		{:else}
			<p class="activity-text" title={name}>{name}</p>
		{/if}
	</div>
</div>

<style>
	.activity-badge {
		display: flex;
		grid-gap: 8px;
	}

	.activity-img {
		width: 42px;
		height: 42px;
		border-radius: 5px;
	}

	.activity-text {
		padding: 0;
		margin: 0;
		color: var(--app-primary-color);
		width: fit-content;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		width: 160px;
	}

	.activity-link > .activity-text {
		color: var(--app-link-color);
	}

	@media (max-width: 900px) {
		.activity-text {
			width: 86px;
		}
	}

	@media (max-width: 1500px) {
		.activity-text {
			width: 100px;
		}
	}
</style>
