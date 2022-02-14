<script lang="ts">
	export let name: string;
	export let imgSrc: string;
	export let type: 'playing' | 'listening';

	$: activtyTitle = type === 'playing' ? 'Playing' : 'Listening';
</script>

<div class="activity-badge">
	<img src={imgSrc} alt={`What I am currently ${type}.`} />
	<div class="activity-texts">
		<p>{activtyTitle}</p>
		<p title={name}>{name}</p>
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
				width: 86px;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	}
</style>
