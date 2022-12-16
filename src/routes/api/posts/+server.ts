import type { BlogFeed } from '$lib/models/blog-post';
import type { RequestHandler } from './$types';
import constants from './constants';

export const GET = (async ({ fetch }) => {
	const res = await fetch(`${constants.FEED_URL}${constants.USERNAME}`);
	const { items } = (await res.json()) as BlogFeed;

	return new Response(JSON.stringify(items), { status: 200 });
}) satisfies RequestHandler;
