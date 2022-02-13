export interface GithubRepository {
	id: number;
	name: string;
	description: null | string;
	language: null | string;
	topics: string[];
	html_url: string;
	stargazers_count: number;
	forks_count: number;
	archived: boolean;
	disabled: boolean;
}
