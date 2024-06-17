import type { BlogPost } from '$lib/models/blog-post';

export function parsePostsRSSFeed(rssFeed: string) {
	const parser = new DOMParser();
	const xmlDoc = parser.parseFromString(rssFeed, 'application/xml');

	const itemElements = xmlDoc.querySelectorAll('item');

	const items: BlogPost[] = [];

	itemElements.forEach((itemElement) => {
		// Extract data from <item> element
		const title = itemElement.querySelector('title')?.textContent?.trim() || '';
		const link = itemElement.querySelector('link')?.textContent?.trim() || '';
		const pubDate = itemElement.querySelector('pubDate')?.textContent?.trim() || '';
		const description = itemElement.querySelector('description')?.textContent?.trim() || '';
		const categories = Array.from(itemElement.querySelectorAll('category')).map(
			(category) => category.textContent?.trim() || ''
		);

		const item = {
			title: title,
			link: link,
			pubDate: pubDate,
			description: description,
			categories
		};

		items.push(item);
	});

	return items;
}
