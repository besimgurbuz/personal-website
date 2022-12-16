export interface GithubRepoResponse {
	name: string;
	html_url: string;
	description: string;
	fork: boolean;
	created_at: string;
	stargazers_count: number;
	forks_count: number;
	language: string;
	license: RepoLicence | null;
	topics: string[];
}

export interface RepoLicence {
	name: string;
}
