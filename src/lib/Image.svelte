<script>
	import { theme } from './store';

	$: arrowSource = `this_is_${$theme}_arrow.svg`;
</script>

<div class="this-is-me">
	<img id="photo" src="this_is_me.jpeg" alt="Besim Gürbüz's photograph" />
	<img id="this-is-me-arrow" src={arrowSource} alt="This is me arrow" />
</div>

<style lang="scss">
	.this-is-me {
		display: flex;
		padding: 3rem;
		align-items: center;
		justify-content: center;
		position: relative;

		@media (max-width: 325px) {
			padding: 3rem 3rem 3rem 0;
		}

		#photo {
			min-width: 100%;
			height: 330px;
			object-fit: cover;
			border-radius: 13px;
			position: relative;

			@media (max-width: 1250px) {
				height: 280px;
			}

			@media (max-width: 325px) {
				min-width: 0;
				width: 200px;
			}
		}

		#this-is-me-arrow {
			position: absolute;
			top: -120px;
			right: -200px;
			display: inline-block;
			transform: rotateZ(-6deg);
			color: var(--app-primary-color);

			@media (max-width: 1250px) {
				width: 250px;
				top: -70px;
				right: -90px;
			}

			@media (max-width: 620px) {
				right: -45px;
				transform: rotateZ(-12deg);
			}

			@media (max-width: 325px) {
				right: -25px;
				transform: rotateZ(-16deg);
			}
		}
	}
</style>
