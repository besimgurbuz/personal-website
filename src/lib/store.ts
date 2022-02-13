import { readable, writable } from 'svelte/store';
import type { Theme } from './models/theme';

export const theme = writable<Theme>('dark');

export const dateTimeFormat = readable<Intl.DateTimeFormat>(
	new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	})
);
