<script>
	import thisIsMeSrc from '$lib/assets/this_is_me.png';
	import ThisIsMeArrow from '../icons/ThisIsMeArrow.svelte';
</script>

<div class="this-is-me">
	<img id="photo" width="312" height="330" src={thisIsMeSrc} alt="Besim Gürbüz's photograph" />
	<ThisIsMeArrow color="var(--app-primary-color)" />
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
	}
</style>
