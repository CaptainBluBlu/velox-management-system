import { ColorScheme } from '@mantine/core';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ConfigStore {
	colorScheme: ColorScheme;
	setColorScheme: (colorScheme: ColorScheme) => void;
}

export const useConfigStore = create<ConfigStore>()(
	persist(
		set => ({
			colorScheme: 'light',
			setColorScheme: (colorScheme: ColorScheme) => set({ colorScheme }),
		}),
		{ name: 'config-storage' }
	)
);
