<script lang="ts">
	import GithubIcon from '$lib/icons/GithubIcon.svelte';
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
	import LinkedinIcon from '$lib/icons/LinkedinIcon.svelte';
	import StackoverflowIcon from '$lib/icons/StackoverflowIcon.svelte';
	import TwitterIcon from '$lib/icons/TwitterIcon.svelte';
</script>

<svelte:head>
	<title>Besim Gürbüz - Contact</title>
</svelte:head>

<div class="contact">
	<h1>
		<a href="mailto:contact@besimgurbuz.dev?subject=Mail from besimgurbuz.dev"
			>contact@besimgurbuz.dev</a
		>
	</h1>
	<div class="socials">
		<a href="https://github.com/besimgurbuz" target="_blank">
			<GithubIcon />
		</a>
		<a href="https://www.linkedin.com/in/besimgurbuz/" target="_blank">
			<LinkedinIcon />
		</a>
		<a href="https://stackoverflow.com/users/10831796/besimgurbuz" target="_blank">
			<StackoverflowIcon />
		</a>
		<a href="https://twitter.com/besimdev" target="_blank">
			<TwitterIcon />
		</a>
		<a href="https://www.instagram.com/besimgurbuz.dev/" target="_blank">
			<InstagramIcon />
		</a>
	</div>
</div>

<style lang="scss">
	.contact {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 240px;
		grid-gap: 90px;

		a {
			color: var(--app-primary-color);

			&:hover {
				text-decoration: underline;
			}
		}

		h1 {
			font-size: 42px;
		}

		.socials {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			grid-gap: 70px;

			a {
				width: 32px;
				height: 32px;
			}
		}

		@media (max-width: 880px) {
			grid-gap: 60px;

			h1 {
				font-size: 32px;
			}

			.socials {
				a {
					width: 24px;
					height: 24px;
				}
			}
		}

		@media (max-width: 615px) {
			grid-gap: 40px;

			h1 {
				font-size: 24px;
			}

			.socials {
				grid-gap: 50px;
			}
		}

		@media (max-width: 450px) {
			grid-gap: 20px;

			h1 {
				font-size: 18px;
			}

			.socials {
				grid-gap: 20px;

				a {
					width: 18px;
					height: 18px;
				}
			}
		}
	}
</style>
