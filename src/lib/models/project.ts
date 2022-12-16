export interface Project {
	name: string;
	url: string;
	sourceUrl?: string;
	description?: string;
	createdAt?: string;
	starCount?: number;
	forkCount?: number;
	language?: string;
	license?: string;
	topics?: string[];
	stack?: string[];
	inProgress?: boolean;
}
