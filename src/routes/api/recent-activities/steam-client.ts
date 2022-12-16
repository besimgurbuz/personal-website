import type { RequestEvent } from './$types';
import type { SteamResponse } from './response-model';

export const steamClient = (
	authKey: string,
	userId: string
): ((fetch: RequestEvent['fetch']) => Promise<SteamResponse>) => {
	const steamRecentlyPlayedUrl = `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001?key=${authKey}&steamid=${userId}&format=json`;

	return async (fetch: RequestEvent['fetch']): Promise<SteamResponse> => {
		const res = await fetch(steamRecentlyPlayedUrl);
		return res.json();
	};
};
