/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
		googleAnalytics: process.env.GOOGLE_ANALYTICS
	},
	images: {
		domains: ['images.ctfassets.net']
	}
}

export default nextConfig
