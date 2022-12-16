import { readable, writable } from 'svelte/store';

export type Route = {
	path: string;
	label: string;
};
export type Theme = 'dark' | 'light';

export const theme = writable<Theme>('dark');

export const routes = readable<Route[]>([
	{ path: '/my-skills', label: 'My Skills' },
	{ path: '/contact', label: 'Contact' }
]);

export const dateTimeFormat = readable<Intl.DateTimeFormat>(
	new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	})
);
