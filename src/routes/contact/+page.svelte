<script lang="ts">
	import GithubIcon from '$lib/icons/GithubIcon.svelte';
	import InstagramIcon from '$lib/icons/InstagramIcon.svelte';
	import LinkedinIcon from '$lib/icons/LinkedinIcon.svelte';
	import StackoverflowIcon from '$lib/icons/StackoverflowIcon.svelte';
	import TwitterIcon from '$lib/icons/TwitterIcon.svelte';
</script>

<svelte:head>
	<title>Besim Gürbüz • Contact</title>

	<meta name="twitter:title" content="Besim Gürbüz" />
	<meta name="twitter:description" content="Besim Gürbüz • Contact" />
	<meta name="Description" content="Besim Gürbüz • Contact" />
</svelte:head>

<div class="contact fade-out">
	<h1>
		<a href="mailto:contact@besimgurbuz.dev?subject=Mail from besimgurbuz.dev"
			>contact@besimgurbuz.dev</a
		>
	</h1>
	<div class="socials">
		<a href="https://github.com/besimgurbuz" target="_blank" rel="noreferrer">
			<GithubIcon />
		</a>
		<a href="https://www.linkedin.com/in/besimgurbuz/" target="_blank" rel="noreferrer">
			<LinkedinIcon />
		</a>
		<a href="https://stackoverflow.com/users/10831796/besimgurbuz" target="_blank" rel="noreferrer">
			<StackoverflowIcon />
		</a>
		<a href="https://twitter.com/besimdev" target="_blank" rel="noreferrer">
			<TwitterIcon />
		</a>
		<a href="https://www.instagram.com/besimgurbuz.dev/" target="_blank" rel="noreferrer">
			<InstagramIcon />
		</a>
	</div>
</div>

<style>
	.contact {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 240px;
		grid-gap: 90px;
	}

	.contact a {
		color: var(--app-primary-color);
	}

	.contact a:hover {
		text-decoration: underline;
	}

	.contact h1 {
		font-size: 42px;
	}

	.socials {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		grid-gap: 70px;
	}

	.socials a {
		width: 32px;
		height: 32px;
	}

	@media (max-width: 880px) {
		.contact {
			grid-gap: 60px;
		}

		.contact h1 {
			font-size: 32px;
		}

		.socials a {
			width: 24px;
			height: 24px;
		}
	}

	@media (max-width: 615px) {
		.contact {
			grid-gap: 40px;
		}

		.contact h1 {
			font-size: 24px;
		}

		.socials {
			grid-gap: 50px;
		}
	}

	@media (max-width: 450px) {
		.contact {
			grid-gap: 20px;
		}

		.contact h1 {
			font-size: 18px;
		}

		.socials {
			grid-gap: 20px;
		}

		.socials a {
			width: 18px;
			height: 18px;
		}
	}
</style>
