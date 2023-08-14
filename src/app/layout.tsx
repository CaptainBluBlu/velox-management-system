/* eslint-disable @next/next/no-page-custom-font */
import { AppProvider } from './provider';

export const metadata = {
	metadataBase: new URL('https://velox-managment-system.vercel.app/'),
	title: { default: 'Velox Admin', template: '%s | Mantine Admin' },
	description: 'Velox Mangement Software. Licensed under MIT',
	authors: [
		{
			name: 'Glenn',
		},
	],
	creator: 'CaptainBluBlu',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en-US">
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Quicksand:wght@200;300;400;500;600;700;800&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	);
}
