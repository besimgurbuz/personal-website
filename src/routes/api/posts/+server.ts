import { POSTS_API_URL, POSTS_USERNAME } from '$env/static/private';
import type { RequestHandler } from './$types';

export const GET = (async ({ fetch }) => {
	const res = await fetch(`${POSTS_API_URL}@${POSTS_USERNAME}`);
	const text = await res.text();

	return new Response(text, { status: 200, headers: { 'Content-Type': 'application/xml' } });
}) satisfies RequestHandler;
