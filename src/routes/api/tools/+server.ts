import type { Tool } from '$lib/models/tool';
import type { RequestHandler } from './$types';

const TOOLS: Tool[] = [
	{
		label: 'TypeScript',
		types: ['frontend', 'backend'],
		iconUrl:
			'./typescript-icon.png'
	},
	{
		label: 'JavaScript',
		types: ['frontend', 'backend'],
		iconUrl:
			'./javascript-icon.png'
	},
	{
		label: 'Angular',
		types: ['frontend'],
		iconUrl:
			'./angular-icon.png'
	},
	{
		label: 'Svelte',
		types: ['frontend'],
		iconUrl:
			'./svelte-icon.png'
	},
	{
		label: 'Node.js',
		types: ['backend'],
		iconUrl:
			'./nodejs-icon.png'
	},
	{
		label: 'Sass',
		types: ['frontend'],
		iconUrl:
			'./sass-icon.png'
	},
	{
		label: 'Java',
		types: ['backend'],
		iconUrl:
			'./java-icon.png'
	},
	{
		label: 'Spring Boot',
		types: ['backend'],
		iconUrl:
			'./spring-boot-icon.png'
	},
	{
		label: 'PostgreSQL',
		types: ['backend', 'database'],
		iconUrl:
			'./postgres-icon.png'
	},
	{
		label: 'Go',
		types: ['backend', 'system_programming'],
		iconUrl:
			'./go-icon.png',
		inProgress: true
	},
	{
		label: 'Rust',
		types: ['backend', 'system_programming'],
		iconUrl:
			'./rust-icon.png',
		inProgress: true
	},
	{
		label: 'Tailwind',
		types: ['frontend'],
		iconUrl: './tailwind-icon.png'
	}
];

export const GET = (async () => {
	TOOLS.sort((toolA, toolB) => toolA.label.localeCompare(toolB.label)).sort((toolA, toolB) => {
		if (toolA.inProgress && !toolB.inProgress) {
			return 1;
		}
		if (!toolA.inProgress && toolB.inProgress) {
			return -1;
		}
		return 0;
	});
	return new Response(JSON.stringify(TOOLS));
}) satisfies RequestHandler;
