<script lang="ts">
	import { dateTimeFormat } from '../store';

	export let title: string;
	export let url: string;
	export let categories: string[];
	export let publishDate: string;

	$: date = $dateTimeFormat.format(new Date(publishDate));
	$: subText = categories.map((category) => `#${category}`).join(', ');
</script>

<a href={url} target="_blank">
	<div class="card post">
		<div class="header">
			<p class="title" {title}>{title}</p>
			<p class="publish-date" title={publishDate.toString()}>{date}</p>
		</div>
		<div class="subText" title={subText}>{subText}</div>
	</div>
</a>

<style lang="scss">
	.post {
		cursor: pointer;
		display: flex;
		font-size: 18px;
		flex-direction: column;

		.header {
			display: flex;
			justify-content: space-between;
			gap: 1rem;

			.title {
				margin: 0;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.publish-date {
				margin: 0;
				font-size: 16px;
				color: #797979;
				white-space: nowrap;
			}
		}

		.subText {
			font-size: 16px;
			color: #797979;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
</style>
