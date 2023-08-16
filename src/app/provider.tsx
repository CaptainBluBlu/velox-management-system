'use client';

import { useGlobalTheme } from '@/styles/theme';
import {
	ColorScheme,
	ColorSchemeProvider,
	MantineProvider,
} from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useConfigStore } from '@/stores/config';
import { Analytics } from '@/components/Analytics/Analytics';

const queryClient = new QueryClient();

export function AppProvider({ children }: { children: React.ReactNode }) {
	const { colorScheme, setColorScheme } = useConfigStore();
	const theme = useGlobalTheme({ colorScheme });

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	return (
		<QueryClientProvider client={queryClient}>
			{/* <RootStyleRegistry> */}
				<ColorSchemeProvider
					colorScheme={colorScheme}
					toggleColorScheme={toggleColorScheme}
				>
					<MantineProvider
						withGlobalStyles
						withNormalizeCSS
						theme={{ ...theme }}
					>
						<ModalsProvider>{children}</ModalsProvider>
						<Notifications />
						<Analytics />
					</MantineProvider>
				</ColorSchemeProvider>
			{/* </RootStyleRegistry> */}
			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>
	);
}
