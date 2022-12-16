export interface RecentActivity {
	spotify?: SpotifyActivity;
	steam?: SteamActitivy;
}

export interface SpotifyActivity {
	artistName: string;
	albumName: string;
	image: {
		height: number;
		url: string;
		width: number;
	};
	url: string;
}

export interface SteamActitivy {
	gameName: string;
	iconUrl: string;
	storeUrl: string;
}
