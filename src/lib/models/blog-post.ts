export interface BlogFeed {
	items: BlogPost[];
}

export interface BlogPost {
	title: string;
	pubDate: string;
	link: string;
	categories: string[];
}
