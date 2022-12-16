import type { BlogPost } from '$lib/models/blog-post';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch('/api/posts');
	const data = (await res.json()) as BlogPost[];

	return {
		posts: data
	};
}) satisfies PageLoad;
