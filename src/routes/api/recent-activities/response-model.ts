export interface SpotifyResponse {
	items: Song[];
}

export interface Song {
	track: Track;
}

export interface Track {
	album: Album;
}

export interface Album {
	name: string;
	artists: { name: string }[];
	images: { height: number; url: string; width: number }[];
	external_urls: {
		spotify: string;
	};
}

export interface SpotifyTokenResponse {
	access_token: string;
	refresh_token: string;
}

export interface SteamResponse {
	response: {
		total_count: number;
		games: Game[];
	};
}

export interface Game {
	appid: number;
	name: string;
	img_icon_url: string;
}
