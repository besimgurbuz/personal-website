export interface RecentActivityResponse {
	spotify: SpotifyActivity;
	steam: SteamActivity;
}

export interface SpotifyActivity {
	artistName: string;
	albumName: string;
	image: {
		height: number;
		url: string;
		width: 64;
	};
	url: string;
}

export interface SteamActivity {
	gameName: string;
	iconUrl: string;
}
