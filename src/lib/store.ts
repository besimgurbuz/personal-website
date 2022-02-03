import { writable } from 'svelte/store';
import type { Theme } from './models/theme';

export const theme = writable<Theme>('dark');
