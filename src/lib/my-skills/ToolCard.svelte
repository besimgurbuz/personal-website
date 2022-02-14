<script lang="ts">
	export let icon: string;
	export let label: string;
</script>

<span class="card tool">
	<img src={icon} alt="{label} icon" />
	<p>{label}</p>
</span>

<style lang="scss">
	.tool {
		display: flex;
		grid-gap: 8px;
		height: 42px;
		align-items: center;

		img {
			width: 42px;
			height: 42px;

			@media (max-width: 520px) {
				width: 30px;
				height: 30px;
			}
		}

		p {
			margin: 0;

			@media (max-width: 520px) {
				font-size: 14px;
			}
		}
	}
</style>
