const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const { redirect } = require('next/dist/server/api-utils');

module.exports = async _phase => {
	/**
	 * @typedef {Promise<{source: string;destination: string;permanent: boolean;}[]>} NewType
	 */

	/** @type {import('next').NextConfig} */

	async function redirects() {
		return [
			{
				source: '/',
				destination: '/login',
				permanent: true,
			},
		];
	}

	const nextConfig = {
		reactStrictMode: true,
		swcMinify: true,
	};

	return withPlugins(
		[
			[
				withImages({
					webpack(config) {
						config.module.rules.push({
							test: /\.svg$/,
							use: ['@svgr/webpack'],
						});

						return config;
					},
				}),
			],
		],
		nextConfig
	)(_phase, { defaultConfig: {} });
};
