export interface MediumFeed {
	status: string;
	feed: Feed;
	items: Item[];
}

export interface Feed {
	url: string;
	title: string;
	link: string;
	author: string;
	description: string;
	image: string;
}

export interface Item {
	title: string;
	link: string;
	guid: string;
	author: string;
	thumbnail: string;
	description: string;
	categories: string[];
	pubDate: string;
}
