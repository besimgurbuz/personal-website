import type { Project } from '$lib/models/project';
import { error } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from './$types';
import type { GithubRepoResponse } from './response-model';

const GITHUB_REPO_URL = `https://api.github.com/repos/besimgurbuz/`;
const projects: Project[] = [
	{
		name: 'mfloww',
		url: 'https://mfloww.com',
		stack: ['node.js', 'prisma', 'angular', 'tailwind'],
		inProgress: true
	},
	{
		name: 'ng-mat-table-filter',
		url: '',
		stack: ['angular', 'typescript']
	},
	{
		name: 'personal-website',
		url: '',
		stack: ['svelte', 'sveltekit']
	},
	{
		name: 'cms-with-php',
		url: '',
		stack: ['php', 'mysql', 'jquery']
	}
];
const { VITE_GITHUB_ACCESS_TOKEN } = import.meta.env;

export const GET = (async ({ fetch }) => {
	try {
		const promises = projects.map((project) => getProjectRepository(fetch, project.name));
		const responseMap = await Promise.all(promises);
		const projectsResponse = (await Promise.all(
			responseMap.map((res) => res.json())
		)) as GithubRepoResponse[];

		return new Response(JSON.stringify(simplifyResponse(projectsResponse)));
	} catch (err) {
		throw error(500, "couldn't fetched project info");
	}
}) satisfies RequestHandler;

const getProjectRepository = (
	fetch: RequestEvent['fetch'],
	projectName: string
): Promise<Response> => {
	const headers = new Headers();
	headers.append('Authorization', `Bearer ${VITE_GITHUB_ACCESS_TOKEN}`);

	return fetch(`${GITHUB_REPO_URL}${projectName}`, { headers });
};

const simplifyResponse = (repositories: GithubRepoResponse[]): Project[] => {
	return repositories.map((repo, i) => ({
		...projects[i],
		createdAt: repo.created_at,
		description: repo.description,
		language: repo.language,
		license: repo.license?.name,
		starCount: repo.stargazers_count,
		forkCount: repo.forks_count,
		topics: repo.topics,
		sourceUrl: repo.html_url
	}));
};
