<script>
	import { theme } from './store';

	$: arrowSource = `this_is_${$theme}_arrow.svg`;
</script>

<div class="this-is-me">
	<div class="this-is-me-inner">
		<img src="this_is_me.jpeg" alt="Besim Gürbüz's photograph" />
		<img id="this-is-me-arrow" src={arrowSource} alt="This is me arrow" />
	</div>
</div>

<style lang="scss">
	.this-is-me {
		display: flex;
		align-items: center;
		justify-content: center;

		.this-is-me-inner {
			position: relative;

			img {
				width: 314px;
				border-radius: 13px;
				position: relative;
			}

			#this-is-me-arrow {
				position: absolute;
				top: -50px;
				right: -240px;
				display: inline-block;
				transform: rotateZ(-6deg);
				color: var(--app-primary-color);
				width: 350px;
			}
		}
	}
</style>
