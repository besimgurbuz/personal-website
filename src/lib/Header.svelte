<script lang="ts">
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<nav>
	<div class="main-header">
		<a href="/">Besim Gürbüz</a>
	</div>
	<div class="right-section">
		<a href="/my-skills">My Skills</a>
		<a href="/contact">Contact</a>
		<ThemeSwitcher />
	</div>
</nav>

<style lang="scss">
	nav {
		display: flex;
		justify-content: space-between;
		padding-top: 26px;

		.main-header {
			font-size: 28px;

			a {
				color: var(--app-text-color);
			}
		}

		.right-section {
			align-self: center;
			display: flex;
			gap: 29px;
			font-size: 20px;

			a {
				color: var(--app-text-color);

				&:hover {
					text-decoration: underline;
				}

				&:active {
					text-decoration: underline;
				}
			}
		}
	}
</style>
