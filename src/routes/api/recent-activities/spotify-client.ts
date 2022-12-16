import type { RequestEvent } from './$types';
import type { SpotifyResponse, SpotifyTokenResponse } from './response-model';

const { VITE_SPOTIFY_CLIENT_ID, VITE_SPOTIFY_CLIENT_SECRET } = import.meta.env;
const SPOTIFY_RECENTLY_PLAYED_URL = 'https://api.spotify.com/v1/me/player/recently-played';
const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';

export const spotifyClient = (
	accessToken: string,
	refreshToken: string
): ((fetch: RequestEvent['fetch']) => Promise<SpotifyResponse>) => {
	let _accessToken = accessToken;
	let _refreshToken = refreshToken;

	return async function fetchSpotifyResponse(
		fetch: RequestEvent['fetch']
	): Promise<SpotifyResponse> {
		const headers = new Headers();
		headers.append('Accept', 'application/json');
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', `Bearer ${_accessToken}`);
		const res = await fetch(SPOTIFY_RECENTLY_PLAYED_URL, {
			headers
		});

		if (res.status === 401) {
			const { access_token, refresh_token } = await refreshSpotifyToken(fetch, _refreshToken);
			_accessToken = access_token;
			_refreshToken = refresh_token;
			return fetchSpotifyResponse(fetch);
		}

		return res.json();
	};
};

const refreshSpotifyToken = async (
	fetch: RequestEvent['fetch'],
	refreshToken: string
): Promise<SpotifyTokenResponse> => {
	const formData = new URLSearchParams();
	const headers = new Headers();
	const basicToken = Buffer.from(
		`${VITE_SPOTIFY_CLIENT_ID}:${VITE_SPOTIFY_CLIENT_SECRET}`
	).toString('base64');
	formData.append('grant_type', 'refresh_token');
	formData.append('refresh_token', refreshToken);
	headers.set('Authorization', `Basic ${basicToken}`);
	headers.set('Content-Type', 'application/x-www-form-urlencoded');

	const res = await fetch(SPOTIFY_TOKEN_URL, {
		method: 'POST',
		body: formData.toString(),
		headers
	});
	const body = (await res.json()) as SpotifyTokenResponse;

	return body;
};
