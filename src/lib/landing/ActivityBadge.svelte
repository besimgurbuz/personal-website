<script lang="ts">
	export let name: string;
	export let imgSrc: string;
	export let type: 'playing' | 'listening';
	export let link = '';

	$: activtyTitle = type === 'playing' ? 'Playing' : 'Listening';
</script>

<div class="activity-badge">
	<img src={imgSrc} alt={`What I am currently ${type}.`} />
	<div class="activity-texts">
		<p>{activtyTitle}</p>
		{#if link !== ''}
			<a href={link} title={name} target="_blank">
				<p>{name}</p>
			</a>
			{:else}
			<p title={name}>{name}</p>
		{/if}
	</div>
</div>

<style lang="scss">
	.activity-badge {
		display: flex;
		grid-gap: 8px;

		img {
			width: 42px;
			height: 42px;
			border-radius: 5px;
		}

		.activity-texts {
			p {
				padding: 0;
				margin: 0;
				width: fit-content;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			a > p {
				color: var(--app-link-color);
			}

			@media (max-width: 900px) {
				p {
					width: 86px;
					overflow: hidden;
				}
			}
		}
	}
</style>
