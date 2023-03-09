import type { RecentActivity, SpotifyActivity, SteamActitivy } from '$lib/models/recent-activity';
import type { RequestHandler } from './$types';
import type { SpotifyResponse, SteamResponse } from './response-model';
import { spotifyClient } from './spotify-client';
import { steamClient } from './steam-client';

const {
	VITE_STEAM_AUTH_KEY,
	VITE_STEAM_USER_ID,
	VITE_SPOTIFIY_ACCESS_TOKEN,
	VITE_SPOTIFIY_REFRESH_TOKEN
} = import.meta.env;
const fetchSteamResponse = steamClient(VITE_STEAM_AUTH_KEY, VITE_STEAM_USER_ID);
const fetchSpotifyResponse = spotifyClient(VITE_SPOTIFIY_ACCESS_TOKEN, VITE_SPOTIFIY_REFRESH_TOKEN);

export const GET = (async ({ fetch }) => {
	const recentActivities = await Promise.all([
		fetchSpotifyResponse(fetch),
		fetchSteamResponse(fetch)
	]);
	const spotify = createSpotifyActivityResponse(recentActivities[0]);
	const steam = createSteamActivityResponse(recentActivities[1]);

	return new Response(
		JSON.stringify({
			spotify,
			steam
		} as RecentActivity)
	);
}) satisfies RequestHandler;

const createSpotifyActivityResponse = (response: SpotifyResponse): SpotifyActivity | undefined => {
	if (!response || !response.items || response.items.length === 0) return undefined;
	const latestSong = response.items[0];
	return {
		artistName: latestSong.track.album.artists.map((artist) => artist.name).join(', '),
		albumName: latestSong.track.album.name,
		image: latestSong.track.album.images[2],
		url: latestSong.track.album.external_urls.spotify
	};
};

const createSteamActivityResponse = ({ response }: SteamResponse): SteamActitivy | undefined => {
	if (!response || !response?.games || response?.games?.length === 0) return undefined;
	const latestGame = response.games[0];
	return {
		gameName: latestGame.name,
		iconUrl: `https://media.steampowered.com/steamcommunity/public/images/apps/${latestGame.appid}/${latestGame.img_icon_url}.jpg`,
		storeUrl: `https://store.steampowered.com/app/${latestGame.appid}`
	};
};
