<nav>
	<div class="main-header">
		<a href="/">Besim Gürbüz</a>
	</div>
	<div class="routes">
		<a href="/my-skills">My Skills</a>
		<a href="/contact">Contact</a>
	</div>
</nav>

<style lang="scss">
	nav {
		display: flex;
		justify-content: space-between;
		padding-top: 23px;

		.main-header {
			font-size: 28px;
		}

		.routes {
			align-self: center;
			display: flex;
			gap: 29px;
			font-size: 20px;
		}

		.main-header > a {
			color: var(--app-text-color);
		}

		.routes > a {
			color: var(--app-text-color);

			&:hover {
				text-decoration: underline;
			}

			&:active {
				text-decoration: underline;
			}
		}
	}
</style>
